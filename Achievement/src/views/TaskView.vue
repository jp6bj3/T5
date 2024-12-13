<template>
  <div class="container-fluid p-5">
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

      <!-- 右側任務列表 -->
      <div class="col-md-9">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="搜尋任務..." v-model="searchQuery" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">搜尋</button>
          </div>
        </div>
        <div class="row py-4">
          <List class="col-12" v-for="task in filteredTasks" :key="task.id" :task="task" />
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
  methods: {
    parseImg(imgURL) {
      return new URL(`../img/${imgURL}`, import.meta.url).href
    },
  },
  data() {
    return {
      statuses: ['休閒', '新手任務', '熱門'], // 任務狀態
      selectedStatuses: [], // 儲存選擇的任務狀態
      searchQuery: '',
      tasks: [
        {
          id: 1,
          title: '任務1',
          description: '這是任務1的描述',
          status: '休閒',
          img: 'diamond.png', // 使用絕對路徑
        },
        {
          id: 2,
          title: '任務2',
          description: '這是任務2的描述',
          status: '新手任務',
          img: 'gold.png',
        },
        {
          id: 3,
          title: '任務3',
          description: '這是任務3的描述',
          status: '熱門',
          img: 'diamond.png',
        },
        {
          id: 4,
          title: '任務4',
          description: '這是任務4的描述',
          status: '休閒',
          img: 'silver.png',
        },
        {
          id: 5,
          title: '任務測試5',
          description: '這是任務5的描述',
          status: '新手任務',
          img: 'gold.png',
        },
        {
          id: 6,
          title: '測試任務6',
          description: '這是任務6的描述',
          status: '熱門',
          img: 'silver.png',
        },
        // 更多任務...
      ],
    }
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((task) => {
        const matchesStatus =
          this.selectedStatuses.length === 0 || this.selectedStatuses.includes(task.status)
        const matchesSearch = task.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        return matchesStatus && matchesSearch
      })
    },
  },
}
</script>

<style scoped>
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
</style>
