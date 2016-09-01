<template>
  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount">123
        Unread threads: {{ unreadCount }}
      </span>
    </div>
  </div>
</template>