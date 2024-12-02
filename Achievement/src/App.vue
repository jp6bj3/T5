<template>
  <div style="background-color: #3a3a3a;min-width: 400px;">
    <Navbar />
    <RouterView style="max-width: 1500px;"/>
    
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";


export default {
  components: {
    Navbar,
  },
};
</script>
