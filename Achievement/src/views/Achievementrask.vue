<template>
  <Systemoverview style="max-width: 900px" />
  <Founder style="max-width: 900px" />
  <Systemlobby style="max-width: 900px" />
</template>

<script>
import Systemoverview from './Systemoverview.vue'
import Systemlobby from './Systemlobby.vue'
import Community from './Community.vue'
import Founder from './Founder.vue'
export default {
  components: {
    Systemoverview,
    Systemlobby,
    Community,
    Founder,
  },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
