<template>
  <div class="accordion pb-5" id="accordionExample">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <h2 class="accordion-header" :id="'heading' + index">
        <button
          class="accordion-button bg-dark text-white d-flex justify-content-between w-100"
          type="button"
          @click="toggleAccordion(index)"
          aria-expanded="item.isOpen"
          :aria-controls="'collapse' + index"
        >
          <span>{{ item.title }}</span>
          <button class="btn btn-outline-light ms-2" @click.stop="toggleCompletion(index)">
            {{ item.completed ? '已完成' : '標記為完成' }}
          </button>
        </button>
      </h2>
      <div
        :id="'collapse' + index"
        class="accordion-collapse collapse"
        :class="{ show: item.isOpen }"
        aria-labelledby="'heading' + index"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: '項目 1', content: '這是項目 1 的內容', isOpen: false, completed: false },
        { title: '項目 2', content: '這是項目 2 的內容', isOpen: false, completed: false },
        { title: '項目 3', content: '這是項目 3 的內容', isOpen: false, completed: false },
      ],
    }
  },
  methods: {
    toggleAccordion(index) {
      this.items[index].isOpen = !this.items[index].isOpen
    },
    toggleCompletion(index) {
      this.items[index].completed = !this.items[index].completed
    },
  },
}
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  background-color: #c1c1c1;
}
</style>
