
<style src="./style.css" scoped></style>

<template>
  <li class="thread-list-item">
  	  	<h5 class="thread-name">{{ thread.name }}</h5>
	    <div class="thread-time">
	      {{ thread.lastMessage.timestamp }}
	    </div>
	    <div class="thread-last-message">
	      {{ thread.lastMessage.text }}
	    </div>
  </li>
</template>

<script>

	export default {
		props:['thread']
	}


</script>