<template>
    <div>
        <list>
            <h4 slot="header">休闲零食</h4>
            <ol slot="content">
                <li v-for="(good, index) in goods" :key="index">
                    <commodity v-model="good.num" :max="good.max" :stride="good.stride" :commodityName="good.commodityName" :commodityPrice="good.commodityPrice" 
                    @countPrice="countPrice"></commodity>
          </li>
          </ol>
          <!-- <commodity slot="content" v-model="num" :max="max" :stride="stride" :commodityName="commodityName" :commodityPrice="commodityPrice" ></commodity> -->
          </list>
    </div>
</template>
<script>
import list from '../components/List/List.vue'
import commodity from '../components/Commodity/Commodity.vue'
export default {
    name: 'goodsList',
  data(){
    return {
      goods: [
        {
          num:0,
          max:10,
          stride:1,
          commodityName:"奥利奥",
          commodityPrice:7.8
        },
        {
          num:0,
          max:5,
          stride:1,
          commodityName:"利奥利",
          commodityPrice:8.7
        },
        {
          num:0,
          max:3,
          stride:1,
          commodityName:"利利奥",
          commodityPrice:8.8
        }
        ]
    }
  },
  methods: {
    countPrice(commodityName,commodityPrice,price){
      // console.log(price)
      // console.log(commodityName)
      // 调用store中的mutations里的方法
      // 传参，使用payload
      let obj = {
        "name":commodityName,
        "commodityPrice":commodityPrice,
        "price":price
      }
      this.$store.commit('countAllPrice',obj);
    }
  },
  components: {
    list,
    commodity
  }
    
}
</script>
<style scoped>
ul,ol,li {
  padding:0;
  margin:0;
  list-style:none
}
</style>