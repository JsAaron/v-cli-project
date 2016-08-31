<template>
  <div>
    <h3>user profile</h3>
    <p>{{$route.params.userId}} {{$route.params.something}}</p>
    <p>{{message}}</p>
  </div>
  <router-view></router-view>
</template>

<script type="text/javascript">
  let i = 0
	module.exports = {
       data() {
            return {
                message: 'parent aaron ' + (i++)
            }
        }
	}

</script>