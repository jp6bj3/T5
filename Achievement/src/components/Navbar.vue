<template>
  <nav class="navbar navbar-dark bg-dark px-3">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <!-- 左側 Logo 和導航文字 -->
      <div class="d-flex align-items-center">
       <RouterLink to="/"  class="nav-link text-white">        
            <img src="" alt="Logo" class="logo me-3" />
         </RouterLink>
       <RouterLink to="/Task"  class="nav-link text-white">任務</RouterLink>
       <router-link to="/Shop"  class="nav-link text-white">商店</router-link>
      </div>

      <!-- 右側 WalletConnect 按鈕 -->
      <button class="btn btn-secondary d-flex align-items-center">
        <!-- <img src="wallet-icon.png" alt="Wallet Icon" class="wallet-icon me-2" /> -->
        WalletConnect
      </button>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "Navbar",
};
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
