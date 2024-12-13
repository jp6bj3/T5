<template>
  <nav class="navbar navbar-dark bg-dark px-3">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- 左側 Logo 和導航文字 -->
      <div class="d-flex align-items-center">
        <RouterLink to="/" class="nav-link text-white">
          <img src="" alt="Logo" class="logo me-3" />
        </RouterLink>
        <RouterLink to="/Task" class="nav-link text-white">任務</RouterLink>
        <router-link to="/Shop" class="nav-link text-white">商店</router-link>
      </div>

      <!-- 右側 WalletConnect 按鈕 -->
      <div class="d-flex align-items-center">
        <div v-if="!isConnected">
          <!-- 當 WalletConnect 按鈕未被按下時顯示此按鈕 -->
          <button class="btn btn-secondary me-3" @click="toggleWalletConnect">WalletConnect</button>
        </div>
        <div v-else class="d-flex align-items-center">
          <!-- 當 WalletConnect 按鈕被按下後顯示這三個 RouterLink -->
          <RouterLink to="/Profile" class="nav-link text-white">任務</RouterLink>
          <button class="text-white btn btn-secondary me-3" @click="openCharacterModal(character)">
            個人資料
          </button>
          <button class="text-white btn btn-secondary me-3" @click="toggleWalletConnect">
            登出
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isConnected: false, // 用來控制 WalletConnect 按鈕的狀態
    }
  },
  methods: {
    toggleWalletConnect() {
      this.isConnected = !this.isConnected // 切換連接狀態
    },
  },
}
</script>

<style scoped>
.logo {
  height: 24px; /* 調整 Logo 高度 */
}
.wallet-icon {
  height: 16px; /* 調整 Wallet Icon 高度 */
}
.nav-link {
  cursor: pointer;
  margin-right: 15px;
}
</style>
