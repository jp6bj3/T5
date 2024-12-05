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
      <transition name="fade" mode="out-in">
        <div v-if="currentPage === 'taskDetails'" key="taskDetails">
          <h3 class="text-light mb-3">任務詳細</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="card bg-card-custom text-light mb-3">
                <div class="card-body">
                  <h4 class="card-title">任務一</h4>
                  <p>{{ taskOneDetails }}</p>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      :style="{ width: `${taskOneProgress}%` }"
                      :aria-valuenow="taskOneProgress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ taskOneProgress }}%
                    </div>
                  </div>
                  <button class="btn btn-primary mt-2" @click="completeTaskOne">完成任務</button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card bg-card-custom text-light">
                <div class="card-body">
                  <h4 class="card-title">任務二</h4>
                  <p>{{ taskTwoDetails }}</p>
                  <div class="progress">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      :style="{ width: `${taskTwoProgress}%` }"
                      :aria-valuenow="taskTwoProgress"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {{ taskTwoProgress }}%
                    </div>
                  </div>
                  <button class="btn btn-primary mt-2" @click="completeTaskTwo">完成任務</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="currentPage === 'discussionGroup'" key="discussionGroup">
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
                  />
                  <button class="btn btn-primary" @click="sendMessage">傳送</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
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
      taskOneDetails: '完成第一個任務的具體描述和要求',
      taskTwoDetails: '完成第二個任務的具體描述和要求',
      taskOneProgress: 30,
      taskTwoProgress: 0,
      discussionMessages: [
        { id: 1, content: '這是第一條討論消息。', timestamp: '10:30' },
        { id: 2, content: '這是第二條討論消息。', timestamp: '11:15' },
        { id: 3, content: '這是第三條討論消息。', timestamp: '12:45' },
      ],
      newMessage: '',
      rewardContent: '100 點數',
      rewardMethod: '完成任務獲得',
    }
  },
  methods: {
    goToTaskDetails() {
      this.currentPage = 'taskDetails'
    },
    goToDiscussionGroup() {
      this.currentPage = 'discussionGroup'
    },
    completeTaskOne() {
      this.taskOneProgress = Math.min(this.taskOneProgress + 20, 100)

      // 如果任务一完成，可以解锁任务二
      if (this.taskOneProgress === 100) {
        // 可以在这里添加解锁任务二的逻辑
        this.$emit('task-one-completed')
      }
    },
    completeTaskTwo() {
      // 只有在任务一完成的情况下才能进行任务二
      if (this.taskOneProgress === 100) {
        this.taskTwoProgress = Math.min(this.taskTwoProgress + 20, 100)
      } else {
        // 提示用户需要先完成任务一
        alert('請先完成任務一')
      }
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        const newMsg = {
          id: this.discussionMessages.length + 1,
          content: this.newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sender: '當前用戶', // 可以添加发送者信息
        }

        // 限制消息數量，避免列表過長
        if (this.discussionMessages.length >= 20) {
          this.discussionMessages.shift() // 移除最早的消息
        }

        this.discussionMessages.push(newMsg)
        this.newMessage = ''

        // 自動滾動到最新消息
        this.$nextTick(() => {
          const messageList = document.querySelector('.list-group')
          messageList.scrollTop = messageList.scrollHeight
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
</style>
