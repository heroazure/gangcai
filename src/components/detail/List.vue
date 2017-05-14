<template>
  <div class="hlj-container-wrap">
    <div class="search-result clearfix" v-if="searchVals.length">
      <div class="search-item" v-for="item in searchVals" :key="item.id">
        <router-link class="origin-a" :to="{path:'/'}">{{item.title}}</router-link>
      </div>
    </div>
    <div class="search-result" v-else>
      没有查询结果
    </div>
  </div>
</template>
<style scoped lang="less">
  .hlj-container-wrap{
    padding: 16px;
  }
  .search-item{
    padding-top: 5px;
  }
</style>
<script>
  import chicun from 'ajax/chicun'
  export default{
    data(){
      return {
        searchVals: []
      }
    },
    activated(){
      let arry = []
      chicun.forEach(item => {
        if (item.title.toLowerCase().indexOf(this.$route.params.chicun.toLowerCase()) !== -1) {
          arry.push(item)
        }
      })
      this.searchVals = arry
    }
  }
</script>
