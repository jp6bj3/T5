<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <img src="../img/banner.png" alt="" class="img-fluid" />
      </div>
    </div>
    <div class="jcontainer flex-row d-lg-flex p-4 gap-2">
      <Characters class="col-xl-4 col-lg-4 col-sm-12" />
      <TaskList class="col-xl-4 col-lg-4 col-md-12" />
      <PropsList class="col-xl-4 col-lg-4 col-md-12" />
    </div>
    <div class="row p-4">
      <Tasks />
    </div>
    <div class="d-flex jcontainer row p-4 p-md-2 row gap-1">
      <Community class="col-xl-7 col-md-11 col-sm-11" />
      <Characters class="col-xl-4 col-md-11 px-lg-0 px-md-5 px-sm-2" />
    </div>
  </div>
</template>

<script>
import Characters from '../components/Characters.vue'
import TaskList from '../components/TaskList.vue'
import PropsList from '../components/PropsList.vue'
import Tasks from '../components/Tasks.vue'
import Community from '../components/Community.vue'
import ModalComponent from '../components/ModalComponent.vue'

export default {
  name: 'HomeView',
  components: { Characters, Tasks, Community, ModalComponent, TaskList, PropsList },
}
</script>
