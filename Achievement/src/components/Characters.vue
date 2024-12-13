<template>
  <div class="container text-white p-1">
    <div class="bg-dark p-4 rounded shadow-lg">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h4 fw-bold">活躍人物</h1>
        <button class="btn btn-outline-light btn-sm">
          <i class="fas">10</i>
        </button>
      </div>

      <p class="text-secondary small">活躍於領域的人士</p>

      <div
        v-for="character in characters"
        :key="character.id"
        class="card bg-secondary text-white mb-3"
      >
        <div class="card-body d-flex row align-items-center justify-content-center">
          <img
            :src="parseImg(character.image)"
            alt="Character Image"
            class="rounded-circle me-3 col-xl-4 col-md-12 w-25"
          />
          <div
            class="flex-grow-1 col-md-12 mb-xl-0 mb-md-2 col-xl-4 d-flex flex-column align-items-center justify-content-center"
          >
            <h5 class="card-title mb-1">{{ character.name }}</h5>
            <p class="card-text small text-light text-center">
              {{ character.description }}
            </p>
          </div>
          <button
            class="btn btn-success p-2 my-1 mx-xl-2 mx-md-0 no-wrap col-md-11 col-xl-2"
            @click="openCharacterModal(character)"
          >
            {{ character.buttonText }}
          </button>
        </div>
      </div>
    </div>

    <modal-component
      ref="characterModal"
      :title="selectedCharacter.name"
      :subtitle="selectedCharacter.description"
      :description="selectedCharacter.fullDescription"
    />
  </div>
</template>

<script>
import ModalComponent from './ModalComponent.vue'

export default {
  name: 'Characters',
  components: { ModalComponent },
  data() {
    return {
      selectedCharacter: {},
      characters: [
        {
          id: 1,
          name: 'Heroic Knight',
          description: 'A brave knight defending the kingdom.',
          fullDescription:
            'Raised in the royal military academy, dedicated to protecting the realm.',
          image: '1.png', // 替換為實際圖片路徑
          buttonText: 'Discover',
        },
        {
          id: 2,
          name: 'Wise Wizard',
          description: 'Master of magical arts, guiding the team.',
          fullDescription:
            'Studied in ancient magical traditions, possessing centuries of knowledge.',
          image: '2.png', // 替換為實際圖片路徑
          buttonText: 'Discover',
        },
        {
          id: 3,
          name: 'Playful Rogue',
          description: 'Mischievous rogue with a knack for trouble.',
          fullDescription: 'Quick-witted and nimble, using cunning to solve complex problems.',
          image: '3.png', // 替換為實際圖片路徑
          buttonText: 'Discover',
        },
      ],
    }
  },
  methods: {
    openCharacterModal(character) {
      this.selectedCharacter = character
      this.$refs.characterModal.showModal()
    },
    parseImg(imgURL) {
      return new URL(`../img/${imgURL}`, import.meta.url).href
    },
  },
}
</script>

<style scoped></style>
