<template>
  <div class="container-fluid bg-dark-custom min-vh-100">
    <header class="d-flex justify-content-between align-items-center py-3 px-4 bg-header">
      <h1 class="text-light mb-0">任務系統</h1>
    </header>

    <div class="row px-4 mt-4">
      <div class="col-md-6">
        <h2 class="text-light mb-3">活躍人士</h2>
        <ul class="list-group list-group-flush">
          <li
            v-for="user in activeUsers"
            :key="user.id"
            class="list-group-item bg-transparent text-light px-0 border-secondary"
          >
            {{ user.name }}
          </li>
        </ul>
      </div>

      <div class="col-md-6">
        <h2 class="text-light mb-3">任務獎勵</h2>
        <div class="card bg-card-custom text-light">
          <div class="card-body">
            <p class="mb-2">獎勵內容：{{ rewardContent }}</p>
            <p class="mb-0">獲得方式：{{ rewardMethod }}</p>
          </div>
        </div>
      </div>
    </div>

    <nav class="nav nav-tabs mt-4 px-4 border-0">
      <button
        class="nav-item btn me-2 px-4 py-2"
        :class="{
          'btn-primary': currentPage === 'taskDetails',
          'btn-outline-secondary': currentPage !== 'taskDetails',
        }"
        @click="goToTaskDetails"
      >
        任務詳細
      </button>
      <button
        class="nav-item btn px-4 py-2"
        :class="{
          'btn-primary': currentPage === 'discussionGroup',
          'btn-outline-secondary': currentPage !== 'discussionGroup',
        }"
        @click="goToDiscussionGroup"
      >
        討論群
      </button>
    </nav>

    <div class="px-4 mt-3">
      <div v-show="currentPage === 'taskDetails'" class="task-details">
        <div class="row">
          <div class="col-md-6">
            <div class="card bg-card-custom text-light mb-3">
              <div class="card-body">
                <h4 class="card-title">任務一：社交聚會</h4>
                <div class="task-checklist">
                  <div v-for="(task, index) in taskOneItems" :key="index" class="form-check mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="`taskOne${index}`"
                      v-model="task.completed"
                      @change="updateTaskOneProgress"
                    />
                    <label class="form-check-label" :for="`taskOne${index}`">
                      {{ task.label }}
                    </label>
                  </div>
                </div>
                <div class="progress mt-3">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    :style="{ width: `${taskOneProgress}%` }"
                    :aria-valuenow="taskOneProgress"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {{ taskOneProgress.toFixed(0) }}%
                  </div>
                </div>
                <div v-if="taskOneProgress === 100" class="mt-2 text-success">
                  🏆 恭喜完成任務一！您的稱號：
                  <span class="badge bg-primary">{{ taskOneTitle }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card bg-card-custom text-light">
              <div class="card-body">
                <h4 class="card-title">任務二：社交娛樂</h4>
                <div class="task-checklist">
                  <div v-for="(task, index) in taskTwoItems" :key="index" class="form-check mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="`taskTwo${index}`"
                      v-model="task.completed"
                      @change="updateTaskTwoProgress"
                      :disabled="!canDoTaskTwo"
                    />
                    <label class="form-check-label" :for="`taskTwo${index}`">
                      {{ task.label }}
                    </label>
                  </div>
                </div>
                <div class="progress mt-3">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    :style="{ width: `${taskTwoProgress}%` }"
                    :aria-valuenow="taskTwoProgress"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {{ taskTwoProgress.toFixed(0) }}%
                  </div>
                </div>
                <div v-if="taskTwoProgress === 100" class="mt-2 text-success">
                  🎉 恭喜完成任務二！
                </div>
                <!-- 道具獎勵彈窗 -->
                <div v-if="showRewardModal" class="modal-overlay">
                  <div class="modal-custom">
                    <div class="modal-header">
                      <h3>🎊 任務二獎勵 🎊</h3>
                      <button @click="closeRewardModal" class="close-btn">✖</button>
                    </div>
                    <div class="modal-body">
                      <img :src="rewardItem.image" :alt="rewardItem.name" class="reward-image" />
                      <div class="reward-details">
                        <h4>{{ rewardItem.name }}</h4>
                        <p>{{ rewardItem.description }}</p>
                        <div class="reward-stats">
                          <span>稀有度: {{ rewardItem.rarity }}</span>
                          <span>使用次數: {{ rewardItem.usageCount }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        @click="collectReward"
                        class="btn btn-primary"
                        :disabled="hasCollectedReward"
                      >
                        {{ hasCollectedReward ? '已領取' : '領取獎勵' }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 可選：添加查看獎勵的按鈕 -->
        <button @click="viewCollectedRewards" class="btn btn-secondary">查看已收集獎勵</button>
      </div>

      <div v-show="currentPage === 'discussionGroup'" class="discussion-group">
        <h3 class="text-light mb-3">討論群</h3>
        <div class="card bg-card-custom">
          <div class="card-body p-0">
            <ul class="list-group list-group-flush">
              <li
                v-for="message in discussionMessages"
                :key="message.id"
                class="list-group-item bg-transparent text-light d-flex justify-content-between align-items-center"
              >
                <span>{{ message.content }}</span>
                <small class="text-muted">{{ message.timestamp }}</small>
              </li>
            </ul>
            <div class="p-3 border-top">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control bg-dark text-light"
                  v-model="newMessage"
                  placeholder="輸入訊息..."
                  @keyup.enter="sendMessage"
                />
                <button class="btn btn-primary" @click="sendMessage">傳送</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalRewardPoints: 0,
      taskRewards: {
        taskOne: 50,
        taskTwo: 50,
      },
      currentPage: 'taskDetails',
      activeUsers: [
        { id: 1, name: '用戶A' },
        { id: 2, name: '用戶B' },
        { id: 3, name: '用戶C' },
      ],
      taskOneItems: [
        {
          label: '與三人/四人/六人聚餐',
          completed: false,
          peopleCount: 0,
        },
        {
          label: '店面打卡、參與店家活動',
          completed: false,
        },
        {
          label: '正餐配甜點',
          completed: false,
        },
      ],
      taskTwoItems: [
        {
          label: '小酌一杯',
          completed: false,
        },
        {
          label: '點歌',
          completed: false,
        },
        {
          label: '上傳社群',
          completed: false,
        },
        {
          label: '回覆留言區',
          completed: false,
        },
      ],
      taskOneProgress: 0,
      taskTwoProgress: 0,
      discussionMessages: [
        { id: 1, content: '這是第一條討論消息。', timestamp: '10:30' },
        { id: 2, content: '這是第二條討論消息。', timestamp: '11:15' },
        { id: 3, content: '這是第三條討論消息。', timestamp: '12:45' },
      ],
      newMessage: '',
      rewardContent: '100 點數',
      rewardMethod: '完成任務獲得',
      showRewardModal: false,
      rewardItem: {
        name: '社交加速器',
        description: '可以快速增加社交互動點數的特殊道具',
        image: '/img/reward-item.png',
        rarity: '稀有',
        usageCount: 3,
        id: 'social_accelerator', // 唯一標識
      },
      collectedRewards: [],
    }
  },
  computed: {
    canDoTaskTwo() {
      return this.taskOneProgress === 100
    },
    taskOneTitle() {
      const peopleCount = this.taskOneItems[0].peopleCount
      if (peopleCount === 3) return '三人結伴達人'
      if (peopleCount === 4) return '四人同樂專家'
      if (peopleCount === 6) return '六人派對王'
      return '社交新星'
    },
    hasCollectedReward() {
      return this.collectedRewards.some((reward) => reward.id === this.rewardItem.id)
    },
  },
  created() {
    // 從本地存儲載入已收集的獎勵
    this.loadCollectedRewards()
  },
  methods: {
    loadCollectedRewards() {
      const savedRewards = localStorage.getItem('collectedRewards')
      this.collectedRewards = savedRewards ? JSON.parse(savedRewards) : []
    },

    saveRewardsToLocalStorage() {
      localStorage.setItem('collectedRewards', JSON.stringify(this.collectedRewards))
    },
    goToTaskDetails() {
      this.currentPage = 'taskDetails'
    },
    goToDiscussionGroup() {
      this.currentPage = 'discussionGroup'
    },
    updateTaskOneProgress() {
      const completedTasks = this.taskOneItems.filter((task) => task.completed).length
      this.taskOneProgress = Math.min((completedTasks / this.taskOneItems.length) * 100, 100)

      if (this.taskOneItems[0].completed) {
        const peopleCount = parseInt(prompt('請選擇聚餐人數（3/4/6）：'))
        if ([3, 4, 6].includes(peopleCount)) {
          this.taskOneItems[0].peopleCount = peopleCount
        } else {
          alert('請選擇3、4或6人')
          this.taskOneItems[0].completed = false
        }
      }
    },
    updateTaskTwoProgress() {
      if (this.taskOneProgress === 100) {
        const completedTasks = this.taskTwoItems.filter((task) => task.completed).length
        this.taskTwoProgress = Math.min((completedTasks / this.taskTwoItems.length) * 100, 100)

        // 當任務二完成100%且尚未領取獎勵時，顯示獎勵彈窗
        if (
          this.taskTwoProgress === 100 &&
          !this.collectedRewards.some((reward) => reward.id === this.rewardItem.id)
        ) {
          this.showRewardModal = true
        }
      } else {
        alert('請先完成任務一')
        this.taskTwoItems.forEach((task) => (task.completed = false))
      }
    },

    closeRewardModal() {
      this.showRewardModal = false
      // 重置任務二進度，防止重複彈窗
      this.taskTwoProgress = 0
      this.taskTwoItems.forEach((task) => (task.completed = false))
    },

    collectReward() {
      // 檢查是否已經收集過此獎勵
      if (!this.collectedRewards.some((reward) => reward.id === this.rewardItem.id)) {
        // 添加獎勵到收集列表
        const rewardWithTimestamp = {
          ...this.rewardItem,
          collectedAt: new Date().toISOString(),
        }

        this.collectedRewards.push(rewardWithTimestamp)

        // 保存到本地存儲
        this.saveRewardsToLocalStorage()

        // 顯示成功提示
        this.$nextTick(() => {
          alert(`成功獲得 ${this.rewardItem.name}！`)
        })

        // 關閉彈窗
        this.showRewardModal = false

        // 重置任務二進度
        this.taskTwoProgress = 0
        this.taskTwoItems.forEach((task) => (task.completed = false))
      } else {
        alert('此獎勵已經領取')
        this.showRewardModal = false
      }
    },

    // 查看已收集獎勵的方法
    viewCollectedRewards() {
      console.log('已收集的獎勵:', this.collectedRewards)
      // 可以進一步開發獎勵展示頁面
    },
    sendMessage() {
      const trimmedMessage = this.newMessage.trim()

      if (trimmedMessage) {
        const newMsg = {
          id: this.discussionMessages.length + 1,
          content: trimmedMessage,
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          sender: '當前用戶',
        }

        if (this.discussionMessages.length >= 20) {
          this.discussionMessages.shift()
        }

        this.discussionMessages.push(newMsg)
        this.newMessage = ''

        this.$nextTick(() => {
          const messageList = document.querySelector('.list-group')
          if (messageList) {
            messageList.scrollTop = messageList.scrollHeight
          }
        })
      }
    },
  },
}
</script>

<style scoped>
.bg-dark-custom {
  background-color: #1e1e2f;
}

.bg-header {
  background-color: #2c2c3e;
}

.bg-card-custom {
  background-color: #2c2c3e;
  border: none;
}

.list-group-item {
  background-color: transparent;
  color: #f8f9fa;
  border-color: rgba(255, 255, 255, 0.1);
}

.text-light {
  color: #e0e0e0 !important;
}

.btn-primary {
  background-color: #4a4a6a;
  border-color: #4a4a6a;
}

.btn-outline-secondary {
  background-color: transparent;
  color: #6c757d;
  border-color: #6c757d;
}
/* 彈窗樣式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-custom {
  background: #2c2c3e;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  padding: 20px;
  color: #e0e0e0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #4a4a6a;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.close-btn {
  background: none;
  border: none;
  color: #ff6b6b;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  display: flex;
  align-items: center;
  gap: 20px;
}

.reward-image {
  width: 150px;
  height: 150px;
  object-fit: contain;
  border-radius: 10px;
}

.reward-details {
  flex-grow: 1;
}

.reward-stats {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  color: #aaa;
}

.modal-footer {
  margin-top: 15px;
  text-align: center;
}

.btn-primary {
  background-color: #4a4a6a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
