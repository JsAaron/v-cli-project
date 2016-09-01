<style src="./style.css" scoped></style>

<template>
  <div class="chatapp">
    <thread-section></thread-section>
  </div>
</template>


<script>
	import ThreadSection from './ThreadSection.vue'

	export default {
	 	components: {
	    	ThreadSection
	  	}
	}
</script>
