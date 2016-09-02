
<style src="./style.css" scoped></style>

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