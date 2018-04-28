import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios/dist/axios.js'

Vue.use(Vuex,axios);


const store = new Vuex.Store({
    state:{
        coffeeList:[],
    },
    mutations:{
        //點擊-
        minus (status,coffee) {
            coffee.amountShow--
            //每次選擇最少1
            coffee.amountShow = (coffee.amountShow < 1) ? 1 : coffee.amountShow
        },
        // 點擊+
        add (status,coffee) {
            //每次選擇上限9
            coffee.amountShow++
            coffee.amountShow = (coffee.amountShow > 9) ? 9 : coffee.amountShow
        },
        // 點擊購買
        addToCart (status,coffee) {
            coffee.amount += coffee.amountShow
        },
        // 在購物車裡移除單一品項 ( 把數量設置成 0 )
        remove (status,coffee) {
            coffee.amount = 0
        },
        // 將AJAX取得資料塞進state
        setjson(state,data){
            state.coffeeList = data
            console.log('這是我用node.js部署在heroku的假資料API')
            console.log('如果你不知道，現在讓你看看')
            console.log(state.coffeeList)
        }
    },
    getters:{
        // 購物車裡的商品
        coffeeInCart (state) {
            return state.coffeeList
            // 篩出購買數量 > 0 
            .filter(function(p){
                return p.amount
            })
            // 計算出該產品小計價錢
            .map(p => {
                p.sum = p.amount * p.price
                return p
            })
        },
        // 購物車內的總計金額
        total (state,getters) {
            return getters.coffeeInCart
            .reduce((sum, p) => (sum + p.sum), 0)
        },
        // 購物車內的合計數量
        howMany(state,getters){
            return getters.coffeeInCart
            .reduce((sum, p) => (sum + p.amount), 0)
        }
    },
    actions:{
        callCoffeeApi({commit}){
            // 为给定 ID 的 user 创建请求
            axios.get('https://fake-coffee-api.herokuapp.com/coffeeAPI')
            .then(res => {
                commit('setjson',res.data)
            })
            .catch(function (error) {
                console.log('哎呀出錯了，可能是heroku免費方案每天啟動server需要一段時間');
                console.log(error);
                //呼喚某個修改畫面的函式
            });
        }
    }
});
export default store;
