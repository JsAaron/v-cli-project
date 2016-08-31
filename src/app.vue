<style>

a{
    color:blue;
}

.test-transition {
    transition: all .5s ease;
}

.test-enter,
.test-leave {
    opacity: 0;
    transform: translate3d(10px, 0, 0);
}

</style>


<template>
    <p v-show="authenticating" style="color:red">Authenticating...</p>
    <a v-link="{ path: '/counter' }">counter</a>
    <a v-link="{ path: '/inbox' }">inbox</a>
	<a v-link="{ path: '/about' }">about</a>
	<a v-link="{ path: '/user/1234/profile/what/name/123' }">user</a>
	<a v-link="{ path: '/forbidden' }">forbidden</a>
	<router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
</template>


<script>
    import store from './vuex/store'
    export default {
        store,
        data() {
            return {
                authenticating: false
            }
        }
    }
</script>