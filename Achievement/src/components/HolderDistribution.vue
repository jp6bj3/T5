<template>
  <div class="container p-3">
    <h2>持股人分佈</h2>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>帳戶</th>
          <th>持股比例</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(holder, index) in holders" :key="holder.account">
          <td>{{ index + 1 }}</td>
          <td>{{ holder.account }}</td>
          <td>{{ holder.percentage }}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      holders: [],
    }
  },
  mounted() {
    this.fetchHolders()
  },
  methods: {
    async fetchHolders() {
      // 這裡替換為你的區塊鏈 API
      const response = await fetch('https://api.yourblockchain.com/holders')
      const data = await response.json()
      this.holders = data // 假設 API 返回的數據格式符合要求
    },
  },
}
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>
