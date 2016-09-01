<style scoped>

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

.v-link-active{
    color:red;
}

.chat-active-class{
    color:#9400D3;
}

</style>


<template>
    <div>
        <p v-show="authenticating" style="color:red">Authenticating...</p>
        <a v-for="data in linkData"
           v-link="{ path: data['path'] ,activeClass: data['activeClass'] ? data['activeClass'] : ''}">
           {{data.name}}
        </a>
        <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view> 
    </div>
</template>


<script>
    import store from './vuex/store'

    export default {
        store,
        data() {
            return {
                authenticating: false,
                linkData: [
                  { path: '/counter',name:'counter'},
                  { path: '/grid', name:'grid'},
                  { path: '/chat' ,name:'chat',activeClass: 'chat-active-class'},
                  { path: '/inbox' ,name:'inbox'},
                  { path: '/about' ,name:'about'},
                  { path: '//user/1234/profile/what/name/123',name:'user'},
                  { path: '/forbidden' ,name:'forbidden'}
                ]
            }
        }
    }
</script>