<style>

a{
    color:blue;
}

</style>


<template>
    <p v-show="authenticating" style="color:red">Authenticating...</p>
    <a v-link="{ path: '/inbox' }">inbox</a>
	<a v-link="{ path: '/about' }">about</a>
	<a v-link="{ path: '/user/1234/profile/what/name/123' }">user</a>
	<a v-link="{ path: '/forbidden' }">forbidden</a>
	<router-view class="view" ></router-view>
</template>


<script>
    export default {
        data() {
            return {
                authenticating: false
            }
        }
    }
</script>