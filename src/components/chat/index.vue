
<style scoped>
	.chatapp{
		padding: 20px;
		font-family: 'Muli', 'Helvetica Neue', helvetica, arial;
		max-width: 760px;
		margin: 20px auto;
	}

</style>

<template>
  <div class="chatapp">
    <thread-section></thread-section>
    <!-- <message-section></message-section> -->
  </div>
</template>


<script>

	import threadSection from './threadsection.vue'
	// import messageSection from './messagesection.vue'
	export default {
	 	components: {
	    	threadSection
	    	// messageSection
	  	}
	}
</script>
