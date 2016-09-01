
<template>
   <div>
      <show-button v-ref:profile></show-button>
      <modal></modal>
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
