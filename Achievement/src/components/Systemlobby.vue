<template>
  <div class="container-fluid">
    <header class="d-flex justify-content-between align-items-center py-3">
      <h1 class="text-light">任務系統</h1>
      <div>
        <button class="btn btn-primary mx-1" @click="goToTaskDetails">任務詳細</button>
        <button class="btn btn-secondary mx-1" @click="goToDiscussionGroup">討論群</button>
      </div>
    </header>

    <div class="row">
      <div class="col-md-6">
        <h2 class="text-light">活躍人士</h2>
        <ul class="list-group mb-4">
          <li class="list-group-item" v-for="user in activeUsers" :key="user.id">
            {{ user.name }}
          </li>
        </ul>
      </div>

      <div class="col-md-6">
        <h2 class="text-light">任務獎勵</h2>
        <div class="card bg-dark text-light mb-4">
          <div class="card-body">
            <p>獎勵內容：{{ rewardContent }}</p>
            <p>獲得方式：{{ rewardMethod }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="currentPage === 'taskDetails'" class="pt-3">
      <h3 class="text-light">任務詳細</h3>
      <p class="text-light">{{ taskDetails }}</p>
      <Taskdetail />
    </div>

    <div v-if="currentPage === 'discussionGroup'" class="pt-3">
      <h3 class="text-light">討論群</h3>
      <ul class="list-group">
        <li class="list-group-item" v-for="message in discussionMessages" :key="message.id">
          {{ message.content }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Taskdetail from './Taskdetail.vue'
export default {
  components: { Taskdetail },
  data() {
    return {
      currentPage: 'TaskDetails',
      activeUsers: [
        { id: 1, name: '用戶A' },
        { id: 2, name: '用戶B' },
        { id: 3, name: '用戶C' },
      ],
      taskDetails: '這是一個詳細的任務描述，請根據需要進行操作。',
      discussionMessages: [
        { id: 1, content: '這是第一條討論消息。' },
        { id: 2, content: '這是第二條討論消息。' },
        { id: 3, content: '這是第三條討論消息。' },
      ],
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
  },
}
</script>

<style scoped>
body {
  background-color: #1e1e2f; /* 深色背景 */
  color: #f8f9fa; /* 浅色文字 */
}

h1,
h2,
h3 {
  color: #e0e0e0; /* 浅色標題 */
}

.list-group-item {
  background-color: #343a40; /* 深色列表項 */
  color: #f8f9fa; /* 浅色文字 */
}

.card {
  background-color: #2c2c3e; /* 深色卡片 */
  border: none; /* 移除邊框 */
}
</style>
