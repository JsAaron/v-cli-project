<style>
.message-list, .thread-list {
  border: 1px solid #ccf;
  font-size: 16px;
  height: 400px;
  margin: 0;
  overflow-y: auto;
  padding: 0;
}

.message-section {
  float: right;
  width: 65%;
}


</style>

<template>
  <div class="message-section">
    <h3 class="message-thread-heading">{{ thread.name }}</h3>
    <ul class="message-list" ref="list">
      <li>1</li>
       <li>2</li>
    </ul>
    <textarea class="message-composer" ></textarea>
  </div>
</template>