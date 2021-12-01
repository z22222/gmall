<template>
  <div>
    <Header></Header>
     <router-view></router-view>
     <!-- 在home，search时才显示 -->
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
export default {
  name: 'App',
  components:{Header,Footer},
}
</script>

<style>

</style>
