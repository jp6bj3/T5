<template>
  <div class="container mt-4">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" @click="selectTab('trades')">Trades</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click="selectTab('posts')">Posts</a>
      </li>
    </ul>

    <div v-if="currentTab === 'trades'" class="mt-3">
      <Trade />
    </div>

    <div v-if="currentTab === 'posts'" class="mt-3">
      <h3>新增貼文</h3>
      <form @submit.prevent="addPost">
        <div class="mb-3">
          <label for="postContent" class="form-label">貼文內容</label>
          <textarea id="postContent" v-model="newPost" class="form-control" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">新增貼文</button>
      </form>
      <div class="mt-3">
        <h4>貼文列表</h4>
        <ul class="list-group">
          <li v-for="(post, index) in posts" :key="index" class="list-group-item">{{ post }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Trade from './Trade.vue'

export default {
  components: { Trade },
  data() {
    return {
      currentTab: 'trades',
      newPost: '',
      posts: [],
    }
  },
  methods: {
    selectTab(tab) {
      this.currentTab = tab
    },
    addPost() {
      if (this.newPost.trim() !== '') {
        this.posts.push(this.newPost)
        this.newPost = ''
      }
    },
  },
}
</script>

<style>
/* 自定義樣式 */
</style>
