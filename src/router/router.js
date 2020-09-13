export default [
    {
        
        path:'/',
        alias:'/goods-list',
        name:'goods-list',
        meta: {
            keepAlive: true // 需要被缓存
        },
        component:() => import('@/views/goodsList.vue')
    },
    {
        path:'/shopping-cart',
        name:'shopping-cart',
        meta: {
            keepAlive: true // 需要被缓存
        },
        component: () => import('@/views/shoppingCart.vue')
    },
    {
        path:'*',
        meta: {
            keepAlive: false // 需要被缓存
        },
        component: () => import('@/views/error_404.vue')
    }
]