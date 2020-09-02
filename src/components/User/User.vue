<template>
    <div class = "top">
        <div id="user-info">
            <p>ID: {{$store.getters.userID}}</p>
            <p>Name: {{$store.getters.userName}}</p>
            </div>
        <div class="routelink list">
            <router-link to="/goods-list">商品信息</router-link> | 
            <router-link to="/try2">购物车</router-link>
        </div>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style>

.top {
    position: relative;
    height: 90px;
    width: 350px;
}
#user-info {
    position: absolute;
    text-align: left;
    float: left;
}
.routelink {
    position: absolute;
    /* height: 25px;
    width: 60px;
    border-radius:3px;
    box-shadow: 0px 0px 5px #888888 inset ; */
    /* background-color: pink; */
    /* line-height: 25px; */
    right:0px;
    bottom: 15px;

    /* float: right; */
    
}
</style>