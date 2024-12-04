<template>
  <div class="container">
    <h1 class="text-center mt-5">Dapp Achievement System</h1>
    <h2 class="text-center mb-4">Minimalist Dark</h2>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(item, index) in achievements" :key="index">
        <h2 class="accordion-header" :id="'heading' + index">
          <button
            class="accordion-button"
            type="button"
            @click="toggleAccordion(index)"
            :class="{ collapsed: !isOpen[index] }"
            aria-expanded="isOpen[index]"
            :aria-controls="'collapse' + index"
          >
            {{ item.title }}
          </button>
        </h2>
        <div
          :id="'collapse' + index"
          class="accordion-collapse collapse"
          :class="{ show: isOpen[index] }"
          aria-labelledby="'heading' + index"
        >
          <div class="accordion-body">
            {{ item.content }}
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
      // 用於控制每個手風琴項目的開合狀態
      isOpen: [false, false, false, false, false],
      achievements: [
        { title: 'Opportunity', content: 'Details about Opportunity.' },
        { title: 'Achievements', content: 'Details about Achievements.' },
        { title: 'Goals', content: 'Details about Goals.' },
        { title: 'Challenges', content: 'Details about Challenges.' },
        { title: 'Connections', content: 'Details about Connections.' },
      ],
    }
  },
  methods: {
    toggleAccordion(index) {
      // 切換當前項目的開合狀態
      this.isOpen[index] = !this.isOpen[index]
    },
  },
}
</script>

<style scoped>
body {
  background-color: #ffffff; /* Darker background */
  color: #f8f9fa; /* Light text */
  font-family: 'Arial', sans-serif; /* Clean font */
}

.accordion-button {
  background-color: #343a40; /* Dark button background */
  color: #f8f9fa; /* Light text */
  border: 1px solid #495057; /* Border color */
  transition:
    background-color 0.3s,
    color 0.3s; /* Smooth transition */
}

.accordion-button:not(.collapsed) {
  background-color: #495057; /* Lighter color when expanded */
  color: #ffffff; /* White text when expanded */
}

.accordion-body {
  background-color: #c1c1c1; /* Darker body background */
  border-top: 1px solid #ffffff; /* Top border for body */
}

.accordion-item {
  border: none; /* Remove default border */
  margin-bottom: 10px; /* Space between items */
}

h1,
h2 {
  font-family: 'Helvetica Neue', sans-serif; /* Different font for headings */
  color: #e0e0e0; /* Light color for headings */
}
</style>
