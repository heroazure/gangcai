<template>
  <div id="app" class="hlj-container-stretch app">
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
