<template>
  <router-link :to="{path:path}" tag="div" class="icon-text">
    <img :src="iconUrl" :class="type" :alt="text">
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
      width: 25px;
      height: 25px;
      &.auto{
        height:auto;
      }
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
      },
      type:{
        type: String,
        default: ''
      }
    },
    data(){
      return {}
    }
  }
</script>
