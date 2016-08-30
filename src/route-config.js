export default function configRouter(router) {
    router.map({
        '*': {
            component: require('./components/not-found.vue')
        },
        '/about': {
            component: require('./components/about.vue')
        },
        '/inbox': {
            component: require('./components/inbox/index.vue')
        },

        '/user/:userId': {
            component: require('./components/user/index.vue'),
            subRoutes: {
                'profile/:something': {
                    component: require('./components/user/profile.vue'),
                    subRoutes: {
                        'name/:userId': {
                            component: require('./components/user/profile-sub.vue'),
                        }
                    }
                }
            }
        }
    }) 

    router.beforeEach((transition) => {
        if (transition.to.path === '/forbidden') {
            router.app.authenticating = true
            setTimeout(() => {
                router.app.authenticating = false
                console.log('this route is forbidden by a global before hook')
                transition.abort()
            }, 3000)
        } else {
            transition.next()
        }
    })
}
