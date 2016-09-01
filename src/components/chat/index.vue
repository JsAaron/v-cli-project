<style src="./style.css" scoped></style>

<template>
  <div class="chatapp">
    <thread-section></thread-section>
  </div>
</template>


<script>

	import threadSection from './threadSection.vue'

	export default {
	 	components: {
	    	threadSection
	  	}
	}
</script>
