import Vue from 'vue'
import Router from 'vue-router'
// import Template from '@/components/Template'
// import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/index/Index'
//import Log from '@/components/index/Log'
// import Photo from '@/components/index/Photo'
// import Message from '@/components/index/Message'

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
                // 页面在进入此组件时才加载此组件
                component: () =>
                    import ('@/components/index/Log')
            }, {
                path: '/blog',
                name: 'blog',
                component: () =>
                    import ('@/components/index/blog')
            }, {
                path: '/Message',
                name: 'Message',
                component: () =>
                    import ('@/components/index/Message')
            },
            {
                path: '/blog/blog_1',
                name: '第一篇博客',
                component: () =>
                    import ('@/components/index/myblog/blog_1')
            }
        ]
    }, {
        path: '/Template',
        name: 'Template',
        component: () =>
            import ('@/components/Template')
    }, {
        path: '/Login',
        name: 'Login',
        component: () =>
            import ('@/components/Login')
    }]
})