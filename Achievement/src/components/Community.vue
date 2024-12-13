<template>
  <div class="container my-1 p-4 bg-dark rounded shadow-lg">
    <h1 class="mb-4 text-white">Community</h1>
    <div class="row">
      <div class="col-md-4 col-lg-4 col-sm-6 d-flex" v-for="item in communityItems" :key="item.id">
        <div class="card mb-4 p-3 bg-secondary text-white">
          <div class="d-flex align-items-center">
            <img :src="parseImg(item.image)" class="card-img-top w-25" :alt="item.image" />
            <p class="card-text px-2">{{ item.name }}</p>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.description }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalComponent from './ModalComponent.vue'

export default {
  components: {
    ModalComponent,
  },
  data() {
    return {
      communityItems: [
        {
          id: 1,
          name: 'James',
          description: '同地區解三個任務+結交當地朋友就有隱藏成就?',
          image: '1.png',
        },
        {
          id: 2,
          name: 'David',
          description: '早餐領域我已經北部稱霸了，一定要來跟著吃一次',
          image: '2.png',
        },
        {
          id: 3,
          name: 'Thomas',
          description: '為什麼南投地區都沒什麼任務...',
          image: '4.png',
        },
      ],
    }
  },
  methods: {
    openCharacterModal(item) {
      this.selectedcommunity = item
      this.$refs.characterModal.showModal()
    },
    parseImg(imgURL) {
      return new URL(`../img/${imgURL}`, import.meta.url).href
    },
  },
}
</script>
