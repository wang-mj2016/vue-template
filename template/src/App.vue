<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path: '/goods'}">商品</a>
      </div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import header from './components/header/header.vue'
export default {
  components: {
    'v-header': header
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
