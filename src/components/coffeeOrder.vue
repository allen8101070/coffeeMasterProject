<template>
  <div>
    <coffeejumbotron/>
    <main class="my-main" role="main">
      <div class="album py-5">
        <div class="container text-center">
          <h2 class="pb-3">目前訂單</h2>
          <div class="row">

            <table class="table table-bordered">
              <thead>
                <tr>
                  <th colspan="5">已放入購物車</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-title">
                  <td>品項</td>
                  <td>數量</td>
                  <td>單價</td>
                  <td>小計</td>
                  <td></td>
                </tr>
                <tr v-for="coffee in coffeeInCart">
                  <td>{{ coffee.name }}</td>
                  <td>{{ coffee.amount }}</td>
                  <td>{{ coffee.price }}</td>
                  <td>{{ coffee.sum }}</td>
                  <td class="remove-cart">
                    <button @click="remove(coffee)">×</button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5"><span class="float-left">總計</span><h3 class="total-price float-right">${{ total }}</h3></td>
                </tr>
              </tfoot>
            </table>

          </div>

          <router-link to="/coffeeCart"  class="btn ml-1 mr-1 mt-3 check-out" @click="noCheck()">上一步</router-link>
          <button class="btn ml-1 mr-1 mt-3 check-out" @click="noCheck()">確認結帳</button>
          
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import coffeejumbotron from './coffeejumbotron'
export default {
  name: 'coffeeOrder',
  components:{
    coffeejumbotron,
  },
  methods:{
    ...mapMutations([
      'remove'
    ]),
    noCheck(){
      alert('此網頁無結帳與金流功能')
    }
  },
  computed: {
    ...mapGetters([
      'coffeeInCart',
      'total'
    ]),
  },
  mounted(){

  }
}
</script>
<style scoped lang="sass">

/* 與下一步按鈕 相同的顏色*/
$next-btn: #ad5000


.remove-cart
  padding: 0px
  line-height: 3em
  button
    color: red
    width: 100%
    height: auto
    outline: 0
    border: 0
    font-size: 18px
    background: transparent
    cursor: pointer
    padding: 0px

.check-out
  width: 300px
  font-size: 20px
  background-color: $next-btn
  color: #fff

.total-price
  color: $next-btn

@media (max-width: 768px)
  .amount
    margin-bottom: 1em
    padding-right: 0px

@media (max-width: 1281px)
  .box-shadow:hover
    box-shadow: none
</style>