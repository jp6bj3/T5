<template>
  <div style="background-color: #3a3a3a;">
    <Navbar  style="min-width: 400px;"/>
    <RouterView style="max-width: 1500px;min-width: 400px;"/>
    
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
