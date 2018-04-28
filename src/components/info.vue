<template>
<div>
  <main role="main">
    <mainjumbotron/>
    <introduce/>
  </main>
  <myfooter/>
</div>
</template>

<script>
import mainjumbotron from './mainjumbotron'
import introduce from './introduce'
import myfooter from './myfooter'
export default {
  name: 'info',
  components:{
    introduce,
    myfooter,
    mainjumbotron
  }
}
</script>

<style scoped lang="sass">
main
  margin-top: 56px

</style>