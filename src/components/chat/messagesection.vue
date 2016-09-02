<style>
.message-section {
    float: right;
    width: 65%;
}

.message-composer {
    box-sizing: border-box;
    font-family: inherit;
    font-size: 14px;
    height: 5em;
    width: 100%;
    margin: 20px 0 0;
    padding: 10px;
}

</style>

<template>
  <div class="message-section">
    <h3 class="message-thread-heading">{{ thread.name }}</h3>
    <ul class="message-list" ref="list">
        1231231
    </ul>
    <textarea class="message-composer" @keyup.enter="trySendMessage"></textarea>
  </div>
</template>

<script>
import { currentThread, currentMessages } from '../vuex/getters'
export default {
    vuex:{
        getters:{
          thread: currentThread,
          messages: currentMessages
        }
    }
}
</script>
