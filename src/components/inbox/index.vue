<template>
  <div>
    <h2>inbox! {{message}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>

	module.exports = {

		route:{
			canActivate(transition) {
			    console.log('inbox canActivate?')
                if (transition.from.path === '/about') {
                    console.log('cannot navigate from /about to /inbox')
                    transition.abort()
                } else {
                    console.log('yes')
                    transition.next()
                }
            }
		},

        data() {
            return {
                message: 'Aaron'
            }
        }
	}


</script>