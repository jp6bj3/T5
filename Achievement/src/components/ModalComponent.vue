<template>
  <div>
    <div
      class="modal"
      id="characterModal"
      tabindex="-1"
      aria-labelledby="characterModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="rounded bg text-black" style="height: 25rem">
          <!-- Purple Area -->
          <div class="rounded bg-white text-white p-2 d-flex justify-content-between">
            <div>Character Details</div>
            <div>
              <button class="btn btn-dark btn-sm me-2" @click="hideModal">Close</button>
            </div>
          </div>

          <!-- Blue Area -->
          <div class="d-flex" style="height: calc(100vh - 50px)">
            <!-- Orange Area -->
            <div class="flex-grow-1 p-3 d-flex flex-column">
              <!-- Orange Inner Top -->
              <div class="d-flex mb-3">
                <div class="flex-grow-1 bg-light p-2 me-2">{{ title }}</div>
                <div class="flex-grow-1 bg-light p-2">{{ subtitle }}</div>
              </div>
              <!-- Orange Inner Bottom -->
              <div class="d-flex flex-grow-1">
                <div class="bg-green p-2 me-2 flex-shrink-0" style="width: 20%">Background</div>
                <div class="bg-red flex-grow-1 p-2">
                  <div class="bg-light p-2 mb-2">Character Origin</div>
                  <div class="bg-light flex-grow-1 p-2">{{ description }}</div>
                </div>
              </div>
            </div>

            <!-- Yellow Area -->
            <div class="bg-yellow p-3" style="width: 30%">
              <div class="bg-light p-2 mb-3"></div>
              <div class="bg-light p-2 mb-3"></div>
              <div class="bg-light p-2 mb-3"></div>
              <div class="bg-light p-2">Additional Info</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {
      modalInstance: null,
    }
  },
  methods: {
    showModal() {
      const modalElement = document.getElementById('characterModal')
      this.modalInstance = new Modal(modalElement)
      this.modalInstance.show()
    },
    hideModal() {
      if (this.modalInstance) {
        this.modalInstance.hide()
      }
    },
  },
}
</script>

<style scoped>
.bg {
  background-color: #baa375;
}
</style>
