<template>
  <div class="hlj-container-wrap">
    <mt-cell v-for="item in material" :key="item.id" :title="item.id" @click.native="onTap(item.id)"></mt-cell>
  </div>
</template>
<style lang="less">

</style>
<script>
  import material from 'enum/material'
  export default{
    data(){
      return {
        material:material
      }
    },
    methods: {
      onTap(id){
        this.$store.commit('changeMaterial',id)
        this.$router.back()
      }
    }
  }
</script>
