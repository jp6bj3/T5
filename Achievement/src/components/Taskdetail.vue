<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3 sidebar">
        <ul class="list-group">
          <li class="list-group-item" v-for="task in tasks" :key="task.id">
            <router-link :to="`/item/${task.id}`" class="text-light">
              {{ task.title }}
            </router-link>
          </li>
        </ul>
      </div>

      <div class="col-md-9 main-content">
        <h3 class="text-light">任務詳細</h3>
        <Accordion />
        <!-- <div class="card bg-dark text-light mb-4">
          <div class="card-body">
            <h5 class="task-title">{{ selectedTask.title }}</h5>
            <p class="task-description">{{ selectedTask.description }}</p>
            <p class="price">{{ selectedTask.price }} CC</p>
            <router-link
              :to="`/item/${selectedTask.id}`"
              class="btn btn-primary"
              style="border-radius: 20px; background-color: #007bff; border: none"
            >
              查看詳情
            </router-link>
          </div>
        </div> -->

        <h4 class="text-light">其他任務</h4>
        <ul class="list-group">
          <li class="list-group-item" v-for="item in otherTasks" :key="item.id">
            <router-link :to="`/item/${item.id}`" class="text-light">
              {{ item.title }} - {{ item.price }} CC
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from './Accordion.vue'
export default {
  components: { Accordion },
  data() {
    return {
      tasks: [
        { id: 1, title: '任務一', description: '這是任務一的詳細描述。', price: 200 },
        { id: 2, title: '任務二', description: '這是任務二的詳細描述。', price: 300 },
        { id: 3, title: '任務三', description: '這是任務三的詳細描述。', price: 150 },
      ],
      selectedTask: { id: 1, title: '任務一', description: '這是任務一的詳細描述。', price: 200 },
      otherTasks: [
        { id: 2, title: '任務二', price: 300 },
        { id: 3, title: '任務三', price: 150 },
      ],
    }
  },
}
</script>

<style scoped>
.container-fluid {
  color: #f8f9fa; /* 文字顏色 */
}

.sidebar {
  padding: 20px;
  border-right: 3px solid #444; /* 側邊欄右邊框 */
}

.list-group-item {
  background-color: #343a40; /* 列表項背景色 */
  color: #f8f9fa; /* 列表項文字顏色 */
  border: none; /* 移除邊框 */
}

.list-group-item:hover {
  background-color: #495057; /* 懸停效果 */
}

.main-content {
  padding: 20px;
}

.card {
  background-color: #2c2c3e; /* 深色卡片 */
  border: none; /* 移除邊框 */
}

.task-title {
  font-size: 1.5em;
  font-weight: bold;
}

.task-description {
  margin: 10px 0;
}

.price {
  font-size: 1.5em;
  font-weight: bold;
  color: #ffc107; /* 獎勵價格顏色 */
}
</style>
