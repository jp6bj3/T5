<template>
  <div class="container mt-5">
    <h2>區塊鏈買賣資訊</h2>
    <table class="table">
      <thead>
        <tr>
          <th>帳戶</th>
          <th>類型</th>
          <th>SOL</th>
          <th>Rari</th>
          <th>日期</th>
          <th>交易</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trade in trades" :key="trade.transaction">
          <td>{{ trade.account }}</td>
          <td>{{ trade.type }}</td>
          <td>{{ trade.sol }}</td>
          <td>{{ trade.rari }}</td>
          <td>{{ trade.date }}</td>
          <td>{{ trade.transaction }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trades: [],
    }
  },
  mounted() {
    this.fetchTrades()
  },
  methods: {
    async fetchTrades() {
      // 這裡替換為你的區塊鏈 API
      const response = await fetch('https://api.yourblockchain.com/trades')
      const data = await response.json()
      this.trades = data // 假設 API 返回的數據格式符合要求
    },
  },
}
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>
