<template>
  <div class="container-fluid p-5 text-white">
    <div class="row gap-0">
      <!-- 左側篩選器 -->
      <div class="col-md-3 col-sm-12 px-4 px-md-2 px-sm-0">
        <div class="text-white bg-dark p-5 p-md-5 mb-4 rounded">
          <h2>任務篩選</h2>
          <ul class="list-group">
            <li
              class="p-2 border-0 text-white no-wrap"
              style="list-style: none"
              v-for="(status, index) in statuses"
              :key="status"
            >
              <input
                type="checkbox"
                :id="`status-${index}`"
                :value="status"
                v-model="selectedStatuses"
              />
              <label :for="`status-${index}`" class="ms-2"> {{ status }} </label>
            </li>
          </ul>
        </div>
      </div>

      <!-- 右側內容區 -->
      <div class="col-md-9">
        <!-- 切換按鈕 -->
        <div class="btn-group mb-4" role="group">
          <button
            class="btn"
            :class="{
              'btn-dark': currentView === 'ongoing',
              'btn-outline-light': currentView !== 'ongoing',
            }"
            @click="currentView = 'ongoing'"
          >
            進行中任務
          </button>
          <button
            class="btn"
            :class="{
              'btn-dark': currentView === 'created',
              'btn-outline-light': currentView !== 'created',
            }"
            @click="currentView = 'created'"
          >
            創建的任務
          </button>
          <button
            class="btn"
            :class="{
              'btn-dark': currentView === 'create',
              'btn-outline-light': currentView !== 'create',
            }"
            @click="currentView = 'create'"
          >
            新增任務
          </button>
        </div>

        <!-- 進行中任務列表 -->
        <div v-if="currentView === 'ongoing'">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control bg-dark text-white"
              placeholder="搜尋任務..."
              v-model="searchQuery"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-light" type="button">搜尋</button>
            </div>
          </div>
          <div class="row py-4">
            <List class="col-12" v-for="task in ongoingTasks" :key="task.id" :task="task" />
          </div>
        </div>

        <!-- 創建的任務列表 -->
        <div v-if="currentView === 'created'">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control bg-dark text-white"
              placeholder="搜尋任務..."
              v-model="searchQuery"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-light" type="button">搜尋</button>
            </div>
          </div>
          <div class="row py-4">
            <List class="col-12" v-for="task in createdTasks" :key="task.id" :task="task" />
          </div>
        </div>

        <!-- 新增任務表單 -->
        <div v-if="currentView === 'create'" class="bg-secondary p-4 rounded shadow">
          <h3 class="mb-4 text-white">新增任務</h3>
          <form @submit.prevent="addTask">
            <div class="row mb-3">
              <div class="col-md-6">
                <label class="form-label">任務標題</label>
                <input
                  type="text"
                  class="form-control text-black"
                  v-model="newTask.title"
                  required
                />
              </div>
              <div class="col-md-6">
                <label class="form-label">任務狀態</label>
                <select class="form-select" v-model="newTask.status" required>
                  <option v-for="status in statuses" :key="status" :value="status">
                    {{ status }}
                  </option>
                </select>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label">任務描述</label>
              <textarea
                class="form-control text-black"
                rows="4"
                v-model="newTask.description"
                required
              ></textarea>
            </div>

            <label class="form-label">任務圖片</label>
            <div class="mb-3 d-flex">
              <div v-if="newTask.img === '鑽'">
                <img src="../img/diamond.png" class="w-25" alt="鑽 Image" />
              </div>
              <div v-if="newTask.img === '金'">
                <img src="../img/gold.png" class="w-25" alt="金 Image" />
              </div>
              <div v-if="newTask.img === '銀'">
                <img src="../img/silver.png" class="w-25" alt="銀 Image" />
              </div>
              <select class="form-select" v-model="newTask.img" required>
                <option value="鑽">鑽</option>
                <option value="金">金</option>
                <option value="銀">銀</option>
              </select>
            </div>

            <div class="d-flex justify-content-end gap-2">
              <button type="button" class="btn btn-outline-light" @click="resetForm">重置</button>
              <button type="submit" class="btn btn-dark">儲存任務</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from '../components/List.vue'

export default {
  components: {
    List,
  },
  data() {
    return {
      currentView: 'ongoing', // 當前視圖：'ongoing', 'created', 'create'
      statuses: ['進行中', '未開始'],
      selectedStatuses: [],
      searchQuery: '',
      tasks: [
        {
          id: 1,
          title: '任務1',
          description: '這是任務1的描述',
          status: '進行中',
          img: 'gold.png',
          isCreatedByUser: false, // 新增標記是否為用戶創建
        },
        {
          id: 2,
          title: '任務2',
          description: '這是任務2的描述',
          status: '未開始',
          img: 'diamond.png',
          isCreatedByUser: false,
        },
        // 更多任務...
      ],
      newTask: {
        title: '',
        description: '',
        status: '未開始',
        img: '',
      },
    }
  },
  computed: {
    // 進行中的任務
    ongoingTasks() {
      return this.filteredTasks.filter((task) => !task.isCreatedByUser)
    },
    // 用戶創建的任務
    createdTasks() {
      return this.filteredTasks.filter((task) => task.isCreatedByUser)
    },
    // 過濾後的任務
    filteredTasks() {
      return this.tasks.filter((task) => {
        const matchesStatus =
          this.selectedStatuses.length === 0 || this.selectedStatuses.includes(task.status)
        const matchesSearch = task.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        return matchesStatus && matchesSearch
      })
    },
  },
  methods: {
    addTask() {
      const task = {
        id: this.tasks.length + 1,
        ...this.newTask,
        img: this.getImagePath(this.newTask.img),
        isCreatedByUser: true,
      }
      this.tasks.push(task)
      this.resetForm()
      this.currentView = 'created'
    },
    getImagePath(imgName) {
      switch (imgName) {
        case '鑽':
          return 'diamond.png'
        case '金':
          return 'gold.png'
        case '銀':
          return 'silver.png'
        default:
          return ''
      }
    },
    resetForm() {
      this.newTask = {
        title: '',
        description: '',
        status: '未開始',
        img: '',
      }
    },
  },
}
</script>

<style scoped>
.blue {
  background: #7fa39f;
}
.sidebar {
  width: 250px; /* 設置側邊欄寬度 */
}
.sidebar input[type='checkbox'] {
  cursor: pointer; /* 鼠標懸停時顯示為手型 */
}
.card {
  /* 可自定義卡片樣式 */
  transition: transform 0.2s;
  display: flex;
}

.card:hover {
  transform: scale(1.05); /* 懸停時放大效果 */
}

.btn-group {
  width: 100%;
}

.btn-group .btn {
  flex: 1;
}
</style>
