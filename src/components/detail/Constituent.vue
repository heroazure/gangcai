<template>
  <div class="hlj-container-wrap">
    <mt-cell :title="`${detail.paihao}的化学成分`"></mt-cell>
    <mt-cell v-for="key in Object.keys(detail)" :title="key" :value="detail[key]" :key="key"></mt-cell>
  </div>
</template>
<style lang="less">

</style>
<script>
  import constituent from 'ajax/constituent'
  export default{
    data(){
      return {
        title: '',
        detail: {}
      }
    },
    activated(){
      let paihao = this.$route.params.id
      let result=constituent.filter(item => {
        return item.paihao === paihao
      })
      this.detail=result[0]||{}
    }
  }
</script>
