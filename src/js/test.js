import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ilavistaAdminPanel from "./index";
Vue.use(ilavistaAdminPanel)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./test/views/Dashboard.vue').default,
            meta: {
                title: "Dashboard"
            }
        },
        {
            path: '/users',
            component: require('./test/views/Users.vue').default,
            meta: {
                title: "Users"
            }
        },
        {
            path: '/orders',
            component: require('./test/views/Orders.vue').default,
            meta: {
                title: "Orders"
            }
        },
        {
            path: '/articles',
            component: require('./test/views/Articles.vue').default,
            meta: {
                title: "Articles"
            }
        },
    ]
});

new Vue({
    el: '#app',

    router,

    data: {

        left_menu_links: [
            {title: 'Dashboard', href: '/'},
            {title: 'Users', href: '/users'},
            {title: 'Orders', href: '/orders'},
            {title: 'Articles', href: '/articles'},
        ]

    }
})