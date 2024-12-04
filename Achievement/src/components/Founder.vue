<template>
  <div class="container mt-5">
    <h2 class="text-center">選擇資料</h2>
    <div class="row">
      <div
        class="col-sm-6 col-lg-4 text-center"
        v-for="item in items"
        :key="item.id"
        @click="selectItem(item.id)"
      >
        <div class="card" style="background-color: #2c2f33; color: white; margin: 0.5rem">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="角色圖片" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 text-center">
      <h4>選擇的資訊:</h4>
      <p>{{ selectedInfo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Heroic Knight', info: '這是英雄騎士的詳細資訊。' },
        { id: 2, name: 'Wise Wizard', info: '這是智慧巫師的詳細資訊。' },
        { id: 3, name: 'Playful Rogue', info: '這是調皮的流氓的詳細資訊。' },
      ],
      selectedItem: null,
    }
  },
  computed: {
    selectedInfo() {
      const item = this.items.find((i) => i.id === this.selectedItem)
      return item ? item.info : '請選擇一個資料項目。'
    },
  },
  methods: {
    selectItem(id) {
      this.selectedItem = id
    },
  },
}
</script>

<style scoped>
.card {
  border: none; /* 去掉邊框 */
}
.card-img-top {
  border-radius: 10px 10px 0 0; /* 圖片邊角 */
}
</style>
