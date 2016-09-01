<style src="./style.css" scoped></style>

<template>
    <div class="modal-mask" v-show="show" transition="modal">{{show}}
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button"
              @click="show = false">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

  export default {
    data:function(){
      return {
        show:this.$parent.$refs.profile.showModal
      }
    }
  }

</script>