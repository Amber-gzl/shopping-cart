<template>
    <div class=commodity>
        <div class = commodityInfo>
            <span class="commodityName"><b>{{commodityName}}</b></span>
            <span class="commodityPrice">单价：{{commodityPrice}}</span>
        </div>
               
        <div class="changeNum">
            <p> ￥ {{totalPrice}}</p> 
            <button @click="handleDec">-</button>
            <input type="text" :value="value" @input="handleInput" class="inputNum">
            <button @click="handleAdd">+</button>
        </div>
        
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            totalPrice:0
            }
    },
    props:{
        value:Number,
        max:Number,
        stride:Number,
        commodityName:String,
        commodityPrice:Number
    },
    methods:{
        handleAdd(){
            if(this.value >= this.max){
                console.log("不能再多啦！")
            }else{
                let num = this.value + this.stride
                this.$emit('input',num)
                let price = num*this.commodityPrice
                this.countPrice(price)
            }
        },
        handleDec(){
            if(this.value <= 0){
                console.log("不能再少啦！")
            }else{
                let num = this.value - this.stride
                this.$emit('input',num)
                let price = num*this.commodityPrice
                this.countPrice(price)
            }
        },
        handleInput(e){
            if(e.target.value > this.max || e.target.value < 0){
                console.log("最多为：", this.max)
                // this.$emit('input', 0)
                e.target.value = 0;
                this.$emit('input', e.target.value-0)
                let price = e.target.value*this.commodityPrice
                this.countPrice(price)
            }else {
                this.$emit('input', e.target.value-0)
                let price = e.target.value*this.commodityPrice
                this.countPrice(price);
            }
        },
        countPrice(price){
            price = price.toFixed(2);
            this.totalPrice = price;
            this.$emit('countPrice',price,this.commodityName);
        }
    }
}
</script>
<style scoped>
p {
    margin: 0;
    margin-bottom: 10px;
}
.commodity {
    width:300px;
    padding: 10px;
    background-color: beige;
    margin: 0 auto;
    margin-bottom:5px;
    /* text-align: left; */
}
.commodityInfo {
    position:relative;
    width: 300px;
    height: 30px;
}
.commodityName{
    position:absolute;
    left: 10px;
}
.commodityPrice{
    position:absolute;
    right: 10px;
}
.changeNum{
    text-align: right;
    margin: 0;
    margin-right: 10px;
}
.inputNum {
    width: 50px;
    text-align: center;
}
</style>