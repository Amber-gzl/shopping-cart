export default [
    {
        path:'/goods-list',
        component:() => import('@/views/goodsList.vue')
    },
    {
        path:'/shopping-cart',
        component: () => import('@/views/shoppingCart.vue')
    }
]