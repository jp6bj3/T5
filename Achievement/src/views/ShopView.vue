<template>
  <div class="container-fluid p-5">
    <div class="row gap-0">
      <!-- 左側篩選器 -->
      <div class="col-md-3 col-sm-12 px-4 px-md-2 px-sm-0">
        <div class="text-white bg-dark p-5 p-md-5 mb-4 rounded">
          <h2>Shop</h2>
          <ul class="list-group">
            <li
              class="p-2 border-0 text-white no-wrap"
              style="list-style: none"
              v-for="(category, index) in categories"
              :key="category"
            >
              <input
                type="checkbox"
                :id="`category-${index}`"
                :value="category"
                v-model="selectedCategories"
              />
              <label :for="`category-${index}`" class="ms-2"> {{ category }} </label>
            </li>
          </ul>
        </div>
      </div>

      <!-- 右側商品列表 -->
      <div class="col-md-9">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="搜尋商品..." v-model="searchQuery" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">搜尋</button>
          </div>
        </div>
        <div class="row py-4">
          <div
            class="col-12 col-sm-6 col-md-6 col-xl-4"
            v-for="item in filteredItems"
            :key="item.id"
          >
            <div
              class="card mb-4 flex-row px-3 text-white blue shadow-lg"
              style="border: solid grey 1px"
            >
              <img
                :src="item.image"
                class="card-img-top align-self-center rounded shadow-sm"
                alt="商品圖片"
                style="height: 100px; width: 100px; border: solid grey 2px"
              />
              <div class="card-body">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title pt-2">{{ item.name }}</h5>
                  <p
                    class="p-2 bg-white text-black position-absolute top-0 end-0"
                    style="border-radius: 0 15% 0 15%"
                  >
                    {{ item.categories }}
                  </p>
                </div>
                <p class="card-text">{{ item.description }}</p>
                <div class="d-flex justify-content-end">
                  <router-link
                    :to="`/item/${item.id}`"
                    class="btn btn-primary bg-dark"
                    style="border: none"
                    >{{ item.price }} CC</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['類別1', '類別2', '類別3'],
      selectedCategories: [], // 儲存選擇的類別
      searchQuery: '',
      items: [
        {
          id: 1,
          name: '商品1',
          description: '這是商品1的描述',
          image: 'https://via.placeholder.com/150',
          price: '0.3',
          categories: '類別1',
        },
        {
          id: 2,
          name: '商品2',
          description: '這是商品2的描述',
          image: 'https://via.placeholder.com/150',
          price: '0.9',
          categories: '類別2',
        },
        {
          id: 3,
          name: '商品3',
          description: '這是商品3的描述',
          image: 'https://via.placeholder.com/150',
          price: '0.5',
          categories: '類別1',
        },
        {
          id: 4,
          name: '商品4',
          description: '這是商品4的描述',
          image: 'https://via.placeholder.com/150',
          price: '0.3',
          categories: '類別3',
        },
        {
          id: 5,
          name: '商品測試5',
          description: '這是商品5的描述',
          image: 'https://via.placeholder.com/150',
          price: '0.9',
          categories: '類別1',
        },
        {
          id: 6,
          name: '測試商品6',
          description: '這是商品6的描述',
          image: 'https://via.placeholder.com/150',
          price: '0.5',
          categories: '類別1',
        },
        // 更多商品...
      ],
    }
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        const matchesCategory =
          this.selectedCategories.length === 0 || this.selectedCategories.includes(item.categories)
        const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
      })
    },
  },
}
</script>

<style scoped>
.blue {
  background: #7fa39f;
}
.sidebar {
  width: 250px; /* 設置側邊欄寬度 */
}
.sidebar input[type='checkbox'] {
  cursor: pointer; /* 鼠標懸停時顯示為手型 */
}
.card {
  /* 可自定義卡片樣式 */
  transition: transform 0.2s;
  display: flex;
}

.card:hover {
  transform: scale(1.05); /* 懸停時放大效果 */
}
.card-img-top {
  max-width: 100%; /* 確保圖片不超出卡片 */
  height: auto; /* 自動調整高度 */
}
</style>
