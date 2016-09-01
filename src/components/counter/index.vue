<style scoped>
	.layer{
		margin: 30px;
    padding: 30px;
		border: 1px solid #42b983;
	}
</style>

<template>
  <div class="layer">
      <div>
      Clicked: {{ count }} times
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">Increment if odd</button>
      <button @click="incrementAsync">Increment async</button>
      <div>
         <div>Recent History: {{recentHistory}}</div>
      </div>
    </div>
  </div>
</template>


<script>

import * as actions from '../../vuex/actions'
import { recentHistory } from '../../vuex/getters'


export default {
  vuex: {
  	actions:{
      increment:actions.increment,
      decrement:actions.decrement,
      incrementIfOdd:actions.incrementIfOdd,
      incrementAsync:actions.incrementAsync
    },
    getters: {
      count: function(state){
          return state.counter.count
      },
      recentHistory
    }
  }
}


</script>