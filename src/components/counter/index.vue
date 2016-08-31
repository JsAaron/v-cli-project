<style scoped="">
	div{
		margin: 20px;
		padding:20px;
		border: 1px solid red;
	}
</style>

<template>
    <div>
    Clicked: {{ count }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>


<script>

	import * as actions from '../../vuex/actions'

	export default {
	  vuex: {
	    getters: {
	      count: state => state.count
	    },
	    actions: actions
	  }
	}


</script>