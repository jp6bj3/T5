<!-- src/components/ItemDetailComponent.vue -->
<template>
  <div class="container">
    <div class="row">
      <!-- 左側區塊顯示幣值 -->
      <div class="col-md-8 bg-dark">
        <h3>{{ currencyName }}</h3>
        <canvas id="chart" width="400" height="400"></canvas>
      </div>

      <!-- 右側區塊顯示買賣按鈕及商品資訊 -->
      <div class="col-md-4 pb-5">
        <div class="card bg-dark text-white">
          <div class="card-header">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link" :class="{ active: isBuying }" @click="isBuying = true">買入</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" :class="{ active: !isBuying }" @click="isBuying = false"
                  >賣出</a
                >
              </li>
            </ul>
          </div>
          <div class="card-body">
            <p>當前餘額: {{ balance }} {{ currencyName }}</p>
            <form @submit.prevent="isBuying ? buyCurrency() : sellCurrency()">
              <div class="mb-3">
                <label for="amount" class="form-label pt-0">輸入金額 (SOL)</label>
                <input
                  type="number"
                  v-model="amount"
                  class="form-control"
                  id="amount"
                  required
                  min="0.01"
                />
                <div v-if="amountError" class="text-danger">{{ amountError }}</div>
              </div>
              <div class="d-flex justify-content-between">
                <div>
                  <p>當前價格: {{ currentPrice }} SOL</p>
                  <p>成交量: {{ volume }}</p>
                </div>
                <button type="submit" class="btn btn-primary p-4">
                  {{ isBuying ? '購買' : '賣出' }}
                </button>
              </div>
            </form>

            <div
              v-if="transactionMessage"
              class="mt-3 alert"
              :class="{ 'alert-success': transactionSuccess, 'alert-danger': !transactionSuccess }"
            >
              {{ transactionMessage }}
            </div>
          </div>
          <div class="card-footer">
            <div class="container">
              <h1>商品詳情</h1>
              <div class="d-flex">
                <img :src="item?.image" class="img-fluid" alt="商品圖片" v-if="item" />
                <div class="p-3">
                  <p>商品 ID: {{ id }}</p>
                  <p>商品名稱: {{ item?.name }}</p>
                </div>
              </div>
              <p class="pt-3">商品描述: {{ item?.description }}</p>
            </div>
            <div class="d-flex justify-content-end p-0 py-3">
              <router-link to="/shop" class="btn btn-secondary p-3">返回商店</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-white">社群趨勢</div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: 'TradingInterface',
  data() {
    return {
      item: null,
      currencyName: 'CPNUT',
      amount: 0,
      currentPrice: 0.0000006, // 示例價格
      volume: 18.92, // 示例成交量
      isBuying: true, // 默認為買入模式
      balance: 100, // 用戶餘額
      amountError: '', // 錯誤訊息
      transactionMessage: '', // 交易反饋訊息
      transactionSuccess: false, // 交易是否成功
      item: {
        id: 1,
        name: '商品1',
        description: '這是商品1的描述',
        image: 'https://via.placeholder.com/150',
      }, // 示例商品
      items: [
        {
          id: 1,
          name: '商品1',
          description: '這是商品1的描述',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          name: '商品2',
          description: '這是商品2的描述',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          name: '商品3',
          description: '這是商品3的描述',
          image: 'https://via.placeholder.com/150',
        },
      ],
    }
  },
  mounted() {
    this.item = this.items.find((item) => item.id == this.id)
  },
  validateAmount() {
    if (this.amount <= 0) {
      this.amountError = '金額必須大於零'
      return false
    }
    if (!this.isBuying && this.amount > this.balance) {
      this.amountError = '賣出金額超過餘額'
      return false
    }
    this.amountError = ''
    return true
  },
  buyCurrency() {
    if (!this.validateAmount()) return

    // 假設購買成功
    this.balance -= this.amount // 減少餘額
    this.transactionMessage = `成功購買 ${this.amount} ${this.currencyName}`
    this.transactionSuccess = true
    this.amount = 0 // 清空輸入框
  },
  sellCurrency() {
    if (!this.validateAmount()) return

    // 假設賣出成功
    this.balance += this.amount // 增加餘額
    this.transactionMessage = `成功賣出 ${this.amount} ${this.currencyName}`
    this.transactionSuccess = true
    this.amount = 0 // 清空輸入框
  },
}
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.container {
  margin-top: 20px;
}

.card {
  margin-top: 20px;
}
.nav-tabs .nav-link.active {
  background-color: #007bff;
  color: white;
}

.alert {
  margin-top: 10px;
}
</style>
