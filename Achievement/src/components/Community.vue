<template>
  <div class="container my-1 p-4 bg-dark rounded shadow-lg">
    <h1 class="mb-4 text-white">Community</h1>
    <div class="row">
      <div class="col-md-4 col-lg-4 col-sm-6" v-for="item in communityItems" :key="item.id">
        <div class="card mb-4">
          <img :src="item.image" class="card-img-top" :alt="item.image" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.name }}</p>
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
          name: 'Heroic Knight',
          description: 'A brave knight who defends the kingdom with unmatched courage.',
          fullDescription:
            'Raised in the royal military academy, this knight has dedicated their life to protecting the realm. With years of training and an unwavering sense of honor, they stand as the first line of defense against any threat.',
          image: 'https://via.placeholder.com/150',
          buttonText: 'Discover',
        },
        {
          id: 2,
          name: 'Wise Wizard',
          description: 'A master of magical arts, guiding the team with wisdom and spells.',
          fullDescription:
            'Studied in ancient magical traditions, this wizard possesses knowledge spanning centuries. Their magical prowess and strategic insight make them an invaluable member of the team.',
          image: 'https://via.placeholder.com/150',
          buttonText: 'Discover',
        },
        {
          id: 3,
          name: 'Playful Rogue',
          description: 'A mischievous rogue with a knack for getting into (and out of) trouble.',
          fullDescription:
            'Quick-witted and nimble, this rogue uses cunning and charm to navigate complex situations. Their skills in stealth and negotiation often provide unexpected solutions to challenging problems.',
          image: 'https://via.placeholder.com/150',
          buttonText: 'Discover',
        },
      ],
    }
  },
  methods: {
    openCharacterModal(item) {
      this.selectedcommunity = item
      this.$refs.characterModal.showModal()
    },
  },
}
</script>
