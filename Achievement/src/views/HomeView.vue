<template>
  <div class="container">
    <div class="d-flex" style="background-color: blanchedalmond; height: 225px">
      <h1>主視覺</h1>
    </div>
    <ModalComponent />
    <div class="d-flex jcontainer row p-3 gap-0">
      <Characters class="col-xl-4 col-lg-4 col-sm-12" />
      <Characters class="col-xl-4 col-lg-4 col-md-6" />
      <Characters class="col-xl-4 col-lg-4 col-md-6" />
      <Tasks />
    </div>
    <div class="d-flex jcontainer row p-4 p-md-2">
      <Community class="col-xl-6 col-lg-7 col-md-11 col-sm-11" />
      <Characters class="col-xl-6 col-lg-4 col-md-12 col-sm-12" />
    </div>
  </div>
</template>

<script>
import Characters from '../components/Characters.vue'
import Tasks from '../components/Tasks.vue'
import Community from '../components/Community.vue'
import ModalComponent from '../components/ModalComponent.vue'

export default {
  name: 'HomeView',
  components: { Characters, Tasks, Community, ModalComponent },
}
</script>
