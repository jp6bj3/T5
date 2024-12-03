<template>
  <div>
    <button type="button" class="btn btn-primary" @click="showModal">打開彈出式視窗</button>

    <div
      class="modal fade"
      id="myModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div id="app">
          <!-- 紫色區域 -->
          <div class="bg-purple text-white p-2 d-flex justify-content-between">
            <div>紫色區域</div>
            <div>
              <button class="btn btn-dark btn-sm me-2"></button>
              <button class="btn btn-dark btn-sm"></button>
            </div>
          </div>

          <!-- 藍色區域 -->
          <div class="bg-blue d-flex" style="height: calc(100vh - 50px)">
            <!-- 橘色區域 -->
            <div class="bg-orange flex-grow-1 p-3 d-flex flex-column">
              <!-- 橘色內部上方 -->
              <div class="d-flex mb-3">
                <div class="flex-grow-1 bg-light p-2 me-2">灰色資料 1</div>
                <div class="flex-grow-1 bg-light p-2">灰色資料 2</div>
              </div>
              <!-- 橘色內部下方 -->
              <div class="d-flex flex-grow-1">
                <div class="bg-green p-2 me-2 flex-shrink-0" style="width: 20%">綠色區域</div>
                <div class="bg-red flex-grow-1 p-2">
                  <div class="bg-light p-2 mb-2">灰色資料 3</div>
                  <div class="bg-light flex-grow-1 p-2">灰色資料 4</div>
                </div>
              </div>
            </div>

            <!-- 黃色區域 -->
            <div class="bg-yellow p-3" style="width: 30%">
              <div class="bg-light p-2 mb-3">灰色資料 5</div>
              <div class="bg-light p-2 mb-3">灰色資料 6</div>
              <div class="bg-light p-2 mb-3">灰色資料 7</div>
              <div class="bg-light p-2">灰色資料 8</div>
            </div>
          </div>
        </div>
        <div class="modal-content">
          <div class="card" style="width: 18rem">
            <img :src="imageSrc" class="card-img-top" alt="角色圖片" />
            <div class="card-body">
              <h5 class="card-title">{{ title }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
              <p class="card-text">{{ description }}</p>
              <a href="#" class="card-link">連結1</a>
              <a href="#" class="card-link">連結2</a>
            </div>
          </div>
          <button type="button" class="btn btn-secondary" @click="hideModal">關閉</button>
          <button type="button" class="btn btn-primary">保存變更</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
  data() {
    return {
      title: '角色名稱',
      subtitle: '描述',
      description: '這是角色的詳細描述，您可以在這裡提供更多信息。',
      imageSrc: '', // 替換為實際圖片路徑
    }
  },
  methods: {
    showModal() {
      const modalElement = document.getElementById('myModal')
      const modal = new Modal(modalElement)
      modal.show()
    },
    hideModal() {
      const modalElement = document.getElementById('myModal')
      const modal = Modal.getInstance(modalElement)
      if (modal) {
        modal.hide()
      }
    },
  },
}
</script>

<style>
/* 可根據需要添加自定義樣式 */
</style>
