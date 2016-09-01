<style scoped>
  #show-modal{
    margin: 30px;
  }
</style>

<template>
	<div>
		<button id="show-modal" @click="showModal = true">Show Modal</button>
	</div>
</template>


<script>

	export default {
		data:function(){
			return {
				showModal:false
			}
		}
	}

</script>