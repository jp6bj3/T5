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
          <div class="col-12" v-for="task in filteredTasks" :key="task.id">
            <div
              class="card mb-4 flex-row px-3 text-white blue shadow-lg"
              style="border: solid grey 1px"
            >
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title pt-2">{{ task.title }}</h5>
                  <p
                    class="p-2 bg-white text-black position-absolute top-0 end-0"
                    style="border-radius: 0 15% 0 15%"
                  >
                    {{ task.status }}
                  </p>
                </div>
                <p class="card-text">{{ task.description }}</p>
                <div class="d-flex justify-content-end">
                  <router-link
                    :to="`/task/${task.id}`"
                    class="btn btn-primary bg-dark"
                    style="border: none"
                    >查看詳情</router-link
                  >
                </div>
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
      statuses: ['待辦', '進行中', '已完成'], // 任務狀態
      selectedStatuses: [], // 儲存選擇的任務狀態
      searchQuery: '',
      tasks: [
        {
          id: 1,
          title: '任務1',
          description: '這是任務1的描述',
          status: '待辦',
        },
        {
          id: 2,
          title: '任務2',
          description: '這是任務2的描述',
          status: '進行中',
        },
        {
          id: 3,
          title: '任務3',
          description: '這是任務3的描述',
          status: '已完成',
        },
        {
          id: 4,
          title: '任務4',
          description: '這是任務4的描述',
          status: '待辦',
        },
        {
          id: 5,
          title: '任務測試5',
          description: '這是任務5的描述',
          status: '進行中',
        },
        {
          id: 6,
          title: '測試任務6',
          description: '這是任務6的描述',
          status: '已完成',
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
</style>
