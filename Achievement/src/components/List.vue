<template>
  <div
    class="card mb-4 flex-row px-3 text-white bg-secondary shadow-lg"
    style="border: solid grey 1px"
  >
    <img :src="parseImg(task.img)" alt="" class="w-25" />

    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title pt-2">{{ task.title }}</h5>
        <p
          class="p-2 bg-white text-black position-absolute top-0 end-0"
          style="border-radius: 0 15% 0 15%"
        >
          {{ task.status }}
        </p>
      </div>

      <p class="card-text">{{ task.description }}</p>
      <div class="d-flex justify-content-end">
        <router-link :to="`/task/${task.id}`" class="btn btn-primary bg-dark" style="border: none">
          查看詳情
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    parseImg(imgURL) {
      return new URL(`../img/${imgURL}`, import.meta.url).href
    },
  },
}
</script>

<style scoped>
.blue {
  background: #7fa39f;
}
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
</style>
