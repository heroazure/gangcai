<template>
  <div id="app" class="hlj-container-stretch app">
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style src="./assets/index.less" lang="less">
</style>
