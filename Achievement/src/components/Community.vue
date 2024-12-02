<template>
  <div class="container my-1 p-4 bg-dark rounded shadow-lg">
    <h1 class="mb-4 text-white">Community</h1>
    <div class="row">
      <div class="col-md-4 col-lg-4 col-sm-6" v-for="item in communityItems" :key="item.id">
        <div class="card mb-4">
          <img :src="item.image" class="card-img-top" :alt="item.title">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.description }}</p>
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
      communityItems: [
        {
          id: 1,
          title: 'Bunny Buddy',
          description: 'Adorable and friendly',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          title: 'Wolves',
          description: 'Fierce and loyal',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 3,
          title: 'Koala',
          description: 'Cute and cuddly',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 4,
          title: 'Meerkat',
          description: 'Curious and playful',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 5,
          title: 'Owl',
          description: 'Wise and mysterious',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 6,
          title: 'Sloth',
          description: 'Slow and relaxed',
          image: 'https://via.placeholder.com/150'
        }
      ]
    }
  }
}
</script>
