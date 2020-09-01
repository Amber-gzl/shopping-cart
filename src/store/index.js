//状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // state相当于组件中的date，专门用来存放全局的数组
    state:{
        userID:'1901210386',
        userName:'gzl',
        priceArr:[],
        allPrice:0
    },
    // getters相当于组件中的computed，getter是全局的，computed是组件内部使用的
    getters:{
        userID(state){
            return state.userID
        },
        userName(state){
            return state.userName
        },
        allPrice(state){
            return state.allPrice
        }
    },
    // mutations是更改vuex的store中的状态的唯一方法
    // 相当于组件中的methods，但是它不能使用异步方法(定时器、axios)
    mutations:{
        countAllPrice(state,obj){
            console.log(obj);
            var flag = true;
            for(let i in state.priceArr){
                // console.log(state.priceArr[i])
                // console.log(state.priceArr[i].name, obj.name)
                if(state.priceArr[i].name == obj.name) {
                    state.priceArr[i].price = obj.price;
                    flag = false;
                } 
            }
            if(flag){
                state.priceArr.push(obj);
            }
            // console.log(state.priceArr)
            let p = 0;
            for(let i in state.priceArr){
                p = p + (state.priceArr[i].price-0);
                state.allPrice = p.toFixed(2)
            }
        }
    },
    // actions专门用来处理异步,实际修改状态值的依旧是mutations
    actions:{},
    modules:{}
})