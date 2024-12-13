<template>
  <Systemoverview style="max-width: 900px" />
  <Founder style="max-width: 900px" />
  <Systemlobby style="max-width: 900px" />
</template>

<script>
import Systemoverview from '../components/Systemoverview.vue'
import Systemlobby from '../components/Systemlobby.vue'
import Founder from '../components/Founder.vue'
export default {
  components: {
    Systemoverview,
    Systemlobby,
    Founder,
  },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
