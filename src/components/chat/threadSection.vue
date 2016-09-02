<style>
 .thread-section {
  float: left;
  width: 32.5%;
}

.thread-list:hover .thread-list-item:hover {
    background-color: #f8f8ff;
}

.thread-list:hover .thread-list-item {
    background-color: #fff;
}

.message-list,
.thread-list {
    border: 1px solid #ccf;
    font-size: 16px;
    height: 400px;
    margin: 0;
    overflow-y: auto;
    padding: 0;
}

.message-thread-heading,
.thread-count {
    height: 40px;
    margin: 0;
}


</style>

<template>
  <div class="thread-section">
    <div class="thread-count">

      <span v-show="unreadCount">
        Unread threads: {{ unreadCount }}
      </span>

      <ul class="thread-list">
        <thread
          v-for="thread in threads"
          :thread="thread">
         </thread>
      </ul>

    </div>
  </div>
</template>

<script>

  import thread from './thread.vue'

	export default {
      components: {
          thread
      },
      vuex: {
          getters: {
              threads:function(state) {
                  return state.chat.threads
              }
          }
      },
      computed: {
          unreadCount:function() {
              const threads = this.threads
              return Object.keys(threads).reduce((count,id) => {
                  return count + 1
              },0)
          }
      }

	}

</script>