<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Button } from "vant"
export default {
  name: 'App',
  components: {
    [Button.name]: Button
  }
}
</script>

<style lang="scss" scoped>
  
</style>
