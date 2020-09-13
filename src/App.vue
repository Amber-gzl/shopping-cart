<template>
  <div id="app">
    <h3>SHOPPING-CART</h3>
    <userInfo></userInfo>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    
    <!-- <statistics></statistics> -->
  </div>
</template>

<script>
import userInfo from './components/User/User.vue'
// import statistics from './components/Statistics/Statistics.vue'
export default {
  name: 'App',
  components: {
    userInfo,
  }
}
</script>

<style scoped>
#app {
  width:350px;
  margin: 0 auto;
  text-align: center;
}
ul,ol,li {
  padding:0;
  margin:0;
  list-style:none
}
</style>