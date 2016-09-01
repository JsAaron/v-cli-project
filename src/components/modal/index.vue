
<template>
   <div>
      <show-button v-ref:button></show-button>
      <modal v-ref:modal></modal>
    </div>
</template>

<script>
  import button from './button'
  import modal from './modal'
  export default{
      components:{
        'show-button':button,
        'modal':modal
      }
  }

</script>
