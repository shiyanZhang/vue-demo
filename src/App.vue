<template>
  <div id="app">
    <app-head></app-head>
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
  import AppHead from "./components/public/head.vue"
  export default {
    name:"app",
    components: {
      'app-head' : AppHead,
    }
  }
</script>

<style lang="scss">
  @import "./style/style";
</style>
