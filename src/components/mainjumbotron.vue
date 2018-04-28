<template>
  <section class="jumbotron jumbotron-fluid mb-0 my-style">
    <div class="container my-text">
      <h1>咖啡巨匠</h1>
      <p class="lead">業界巨匠精選咖啡豆，讓您享受暖心滋味、體驗職人咖啡</p>
      <router-link to="/coffeeCart" class="btn ml-auto mr-auto buy" role="button" aria-pressed="true">購買咖啡</span></router-link>

    </div>
  </section>
</template>

<script>
export default {
  name: 'coffeejumbotron'
}
</script>
<style scoped lang="sass">

.my-style
  height: 100vh
  background-image: url(http://agriculturewire.com/wp-content/uploads/2015/05/coffee.jpg)
  background-size: cover

.my-text
  margin-top: 250px
  color: #fff
  text-shadow: 0px 2px 5px #000
  h1
    font-size: 4em

@media (max-width: 361px)
  .my-text
    margin-top: 100px
    h1
      font-size: 3em

.buy
  width: 160px
  font-size: 20px
  color: #fff
  background-color: #e87717
  box-shadow: 0px 0px 10px #ccc
  &:hover, &:active
    background-color: #f76d3b
    box-shadow: 0px 0px 20px #fff
</style>