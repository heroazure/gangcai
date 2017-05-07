<template>
  <router-link :to="{path:path}" tag="div" class="icon-text">
    <img :src="iconUrl" :alt="text">
    <br>
    {{text}}
  </router-link>
</template>
<style lang="less">
  .icon-text {
    padding: 10px;
    font-size: 12px;
    text-align: center;
    img {
      width: 34px;
      height: auto;
      min-height: 34px;
    }
  }
</style>
<script>
  export default{
    name: 'icon-text',
    props: {
      iconUrl: {
        type: String
      },
      text: {
        type: String,
        default: ''
      },
      path:{
        type: String,
        default: '/'
      }
    },
    data(){
      return {}
    }
  }
</script>
