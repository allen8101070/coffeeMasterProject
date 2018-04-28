<template>
  <div>
    <coffeejumbotron/>
    <main class="my-main" role="main">
      <div class="album py-5">
        <div class="container">
          <h2 class="pb-3 text-center">特選咖啡</h2>

          <div class="row" v-if="coffeeList.length == 0">
            <loading/>
          </div>
          
          <div class="row" v-if="coffeeList.length != 0">
            <div class="col-12 col-sm-6 col-lg-4" v-for="coffee in coffeeList">
              <div class="card mb-4 box-shadow">            
                <div class="my-box">
                  <img class="card-img-top" :src="coffee.img">
                </div>
                
                <div class="card-body">
                  <h2 class="h4">{{coffee.name}}</h2>
                  <h3 class="h5">${{coffee.price}}</h3>
                  <div class="d-flex justify-content-between align-items-center flex-wrap">


                    <div class="input-group pl-0 col-12 col-md-6 amount">
                      <div class="input-group-prepend">
                        <button class="btn amount-btn" type="button" @click="minus(coffee)">-</button>
                      </div>
                      
                      <input type="number" class="form-control" v-model="coffee.amountShow">
                      <div class="input-group-append">
                        <button class="btn amount-btn" type="button"  @click="add(coffee)">+</button>
                      </div>
                    </div>
                    <button class="btn col-12 col-md-6 amount-btn" type="button" @click="addToCart(coffee)">購買</button>


                  </div>
                </div>
              </div>
            </div>
          
            <router-link to="/coffeeOrder" class="btn ml-auto mr-auto next" role="button" aria-pressed="true">下一步<span class="badge badge-light text-right ml-2 my-badge-style">{{ howMany }}</span></router-link>
          </div>
          
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import coffeejumbotron from './coffeejumbotron'
import loading from './loading'

export default {
  name: 'coffeeCart',
  components:{
    coffeejumbotron,
    loading
  },
  methods:{
    ...mapMutations([
      'minus',
      'add',
      'addToCart'
      ]),
    ...mapActions(['callCoffeeApi'])
  },
  computed: {
    ...mapState([
      'coffeeList'
    ]),
    ...mapGetters([
      'howMany'
    ]),
  },
  mounted(){
    this.callCoffeeApi();
  }
}
</script>

<style scoped lang="sass">
/* 按鈕與input群組的顏色 ＊/
$cart-color: #555

/*下一步按鈕 的顏色*/
$next-btn: #ad5000

/*按鈕 按下的顏色*/
$btn-on: #89450b






.box-shadow:hover
  box-shadow: 0px 10px 14px -6px #999
  transition: all 0.4s

/* 商品input數量的樣式 */
.amount input
  color: $cart-color
  border-color: $cart-color

/* 商品購買按鈕 */
.amount-btn
  color: $cart-color
  background-image: none
  border-color: $cart-color
  background-color: #fff
  &:active
    background-color: $next-btn
    color: #fff

/* 下一步按鈕 */
.next
  width: 300px
  font-size: 20px
  color: #fff
  background-color: $next-btn
  &:hover, &:active
    background-color: $btn-on

/* 下一步按鈕裡面的span(顯示目前購買數量的數字) */
.my-badge-style
  color: $next-btn

/* 下一步按鈕變色 讓裡面的字(目前購買數量)也跟著變色 */
.next
  &:hover .my-badge-style, &:active .my-badge-style
    color: $btn-on

@media (max-width: 767px)
  .amount
    margin-bottom: 1em
    padding-right: 0px

@media (max-width: 1281px)
  .box-shadow:hover
    box-shadow: none
</style>