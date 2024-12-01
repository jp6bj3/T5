<template>
  <div class="container my-5">
    <h1 class="mb-4 text-white">Dapp 新手任務</h1>

    <div class="row">
      <div class="col-md-6">
        <div class="card mb-4 bg-dark px-2">
          <div class="card-header text-white">
            <h5 class="card-title pt-3">Tasks</h5>
          </div>
          <div class="card-body text-white-50">
            <div v-for="task in tasks" :key="task.id" class="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h6 class="card-subtitle text-white mb-2">{{ task.title }}</h6>
                <p class="card-text">{{ task.description }}</p>
              </div>
              <button class="btn btn-primary btn-sm">{{ task.reward }}</button>
            </div>
          </div>
        </div>
      </div>

     <div class="col-md-6">
        <div class="card mb-4 bg-dark px-2">
          <div class="card-header text-white">
            <h5 class="card-title pt-3">reward</h5>
          </div>
          <div class="card-body text-white-50">
            <div v-for="reward in rewards" :key="reward.id" class="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h6 class="card-subtitle text-white mb-2">{{ reward.title }}</h6>
                <p class="card-text">{{ reward.description }}</p>
              </div>
              <button class="btn btn-primary btn-sm">{{ reward.amount }}</button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: 'Complete daily tasks',
          description: 'Complete the daily tasks to earn rewards',
          reward: 'Reward: 0.05'
        },
        {
          id: 2,
          title: 'Refer a friend',
          description: 'Invite your friends to join the Dapp',
          reward: 'Reward: 0.10'
        }
      ],
      rewards: [
        {
          id: 1,
          title: 'Bonus for daily tasks',
          description: 'Receive a bonus for completing daily tasks',
          amount: 'Bonus: 0.30'
        },
        {
          id: 2,
          title: 'Referral reward',
          description: 'Earn a reward for referring a friend',
          amount: 'Reward: $10'
        }
      ]
    }
  }
}
</script>
