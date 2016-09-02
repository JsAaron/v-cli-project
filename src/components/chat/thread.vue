
<style>

.message-author-name,
.thread-name {
    color: #66c;
    float: left;
    font-size: 13px;
    margin: 0;
}

.message-list-item,
.thread-list-item {
    list-style: none;
    padding: 12px 14px 14px;
}

.message-time,
.thread-time {
    color: #aad;
    float: right;
    font-size: 12px;
}

.message-text,
.thread-last-message {
    clear: both;
    font-size: 14px;
    padding-top: 10px;
}


.thread-list-item {
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}


.thread-list-item.active,
.thread-list:hover .thread-list-item.active,
.thread-list:hover .thread-list-item.active:hover {
    background-color: #efefff;
    cursor: default;
}



</style>

<template>
  <li class="thread-list-item"
  	  :class="{ active: thread.id === currentThreadID }">
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
		props:['thread'],
		vuex:{
			getters:{
				currentThreadID:state => state.chat.currentThreadID
			}
		}
	}


</script>