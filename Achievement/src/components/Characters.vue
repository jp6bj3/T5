<template>
    <div class="p-1 container text-white">
  <div class="bg-dark p-4 rounded shadow-lg">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="h4 fw-bold">Characters</h1>
      <button class="btn btn-outline-light btn-sm">
        <i class="fas">10</i> <!-- 假設使用 Font Awesome -->
      </button>
    </div>

    <!-- Subtitle -->
    <p class="text-secondary small">Meet the team. Each character has their own story to tell.</p>

    <!-- Character Cards -->
    <div v-for="character in characters" :key="character.id" class="card bg-secondary text-white mb-3">
      <div class="card-body d-flex align-items-center">
        <!-- Character Image -->
        <img :src="character.image" alt="Character Image" class="rounded-circle me-3" style="width: 64px; height: 64px;" />

        <!-- Character Info -->
        <div class="flex-grow-1">
          <h5 class="card-title mb-1">{{ character.name }}</h5>
          <p class="card-text small text-light ">{{ character.description }}</p>
        </div>

        <!-- Button -->
        <button class="btn btn-success p-2 no-wrap">{{ character.buttonText }}</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Characters",
  data() {
    return {
      characters: [
        {
          id: 1,
          name: "Heroic Knight",
          description: "A brave knight who defends the kingdom with unmatched courage.",
          image:1 ,
          buttonText: "Discover",
        },
        {
          id: 2,
          name: "Wise Wizard",
          description: "A master of magical arts, guiding the team with wisdom and spells.",
          image: 1,
          buttonText: "Discover",
        },
        {
          id: 3,
          name: "Playful Rogue",
          description: "A mischievous rogue with a knack for getting into (and out of) trouble.",
          image: 1,
          buttonText: "Discover",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 自定義樣式 */
.container {
  max-width: 600px;
}
.card {
  border: none;
}
</style>
