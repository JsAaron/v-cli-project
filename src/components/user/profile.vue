<template>
  <div>
    <h3>user profile</h3>
    <p>{{$route.params.userId}} {{$route.params.something}}</p>
    <p>{{message}}</p>
  </div>
  <router-view></router-view>
</template>

<script type="text/javascript">

	module.exports = {
       data() {
            return {
                message: 'parent aaron'
            }
        }
	}

</script>