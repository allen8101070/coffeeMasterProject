<template>
<nav class="navbar navbar-expand-lg navbar-dark fixed-top coffee">

  <router-link class="navbar-brand" to="/">
    <i class="fa fa-diamond" aria-hidden="true"></i>
    咖啡巨匠
  </router-link>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <router-link to="/coffeeCart" class="nav-item nav-link simon-nav">特選咖啡</router-link>
      <router-link to="/coffeeOrder" class="nav-item nav-link simon-nav">商品結帳</router-link>
    </div>
  </div>
  
</nav>
</template>

<script>
export default {
  name: 'navbar',
  mounted() {
    // 漢堡選單連結被點選後 自動收合
    if($(window).width()<992){ 
        $('.navbar a').on('click', function(){
            $('.navbar-toggler').click();
        });
    }
  }
}
</script>

<style scoped lang="sass">
 /* 小專案好像也用不太到變數... */
$bgc: #843c1a


.coffee
  background-color: $bgc
  .navbar-collapse .simon-nav
    color: #fff
</style>