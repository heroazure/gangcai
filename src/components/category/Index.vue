<template>
  <div class="hlj-container-wrap">
    <mt-cell v-for="item in category" :key="item.id" :title="item.name" @click.native="onTap(item.id)"></mt-cell>
  </div>
</template>
<style lang="less">

</style>
<script>
  import category from 'enum/category'
  export default{
    data(){
      return {
        category: category
      }
    },
    methods: {
      onTap(id){
        if (id === 3) {
          this.$router.push('/zhagang/cold')
          return
        }
        if (id === 4) {
          this.$router.push('/zhagang/hot')
          return
        }
        this.$store.commit('changeCategory', id)
        this.$router.back()
      }
    }
  }
</script>
