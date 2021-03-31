export default [
    {
        path: '/',
        meta: {
            title: '登录'
        },
        component: () => import('@/views/login'),
    },
    {
        path: '/login',
        meta: {
            title: '登录'
        },
        component: () => import('@/views/login'),
    },
    {
        path: '/home',
        meta: {
            title: '主页'
        },
        component: () => import("@/views/home")
    }
]