import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/components/Template'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/index/Index'
import Log from '@/components/index/Log'
import Photo from '@/components/index/Photo'
import Message from '@/components/index/Message'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
            path: '/',
            name: 'Index',
            component: Index
        }, {
            path: '/Index',
            name: 'Index',
            component: Index
        }, {
            path: '/Log',
            name: 'Log',
            component: Log
        }, {
            path: '/Photo',
            name: 'Photo',
            component: Photo
        }, {
            path: '/Message',
            name: 'Message',
            component: Message
        }]
    }, {
        path: '/Template',
        name: 'Template',
        component: Template
    }, {
        path: '/Login',
        name: 'Login',
        component: Login
    }]
})