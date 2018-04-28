<template>
  <div id="app">
    <navbar/>
    <Keep-alive>
      <router-view/>
    </Keep-alive>
  </div>
</template>

<script>
import navbar from './components/navbar'
import coffeeCart from './components/coffeeCart'
import coffeeOrder from './components/coffeeOrder'
import info from './components/info'

export default {
  name: 'App',
  components:{
    info,
    navbar,
    coffeeCart,
    coffeeOrder,
  }
}
</script>
