<template>
  <div class="container text-white p-1">
    <div class="bg-dark p-4 rounded shadow-lg">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h4 fw-bold">Characters</h1>
        <button class="btn btn-outline-light btn-sm">
          <i class="fas">10</i>
        </button>
      </div>

      <p class="text-secondary small">Meet the team. Each character has their own story to tell.</p>

      <div
        v-for="character in characters"
        :key="character.id"
        class="card bg-secondary text-white mb-3"
      >
        <div class="card-body d-flex align-items-center">
          <img
            :src="character.image"
            alt="Character Image"
            class="rounded-circle me-3"
            style="width: 64px; height: 64px"
          />
          <div class="flex-grow-1">
            <h5 class="card-title mb-1">{{ character.name }}</h5>
            <p class="card-text small text-light">{{ character.description }}</p>
          </div>
          <button class="btn btn-success p-2 no-wrap" @click="openCharacterModal(character)">
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
          image: 1,
          buttonText: 'Discover',
        },
        {
          id: 2,
          name: 'Wise Wizard',
          description: 'Master of magical arts, guiding the team.',
          fullDescription:
            'Studied in ancient magical traditions, possessing centuries of knowledge.',
          image: 1,
          buttonText: 'Discover',
        },
        {
          id: 3,
          name: 'Playful Rogue',
          description: 'Mischievous rogue with a knack for trouble.',
          fullDescription: 'Quick-witted and nimble, using cunning to solve complex problems.',
          image: 1,
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
  },
}
</script>

<style scoped>
.container {
  max-width: 600px;
}
.card {
  border: none;
}
</style>
