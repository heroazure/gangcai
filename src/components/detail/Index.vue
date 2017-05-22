<template>
  <div class="hlj-container-wrap">
    <mt-cell :title="`${detail.paihao}的${categoryName}`"></mt-cell>
    <mt-cell v-for="key in Object.keys(detail)" :title="key==='id'?'统一数字代号':key==='paihao'?'牌号':key" :value="detail[key]" :key="key"></mt-cell>
  </div>
</template>
<style lang="less">

</style>
<script>
  import constituent from 'ajax/constituent'
  import capability from 'ajax/capability'
  import compare from 'ajax/compare'
  import category from 'enum/category'
  export default{
    data(){
      return {
        title: '',
        detail: {}
      }
    },
    computed:{
        categoryName(){
            let name=''
          category.forEach(item=>{
              if(item.id+''===this.$route.params.type){
                  name=item.name
              }
          })
          return name
        }
    },
    activated(){
      let paihao = this.$route.params.id
      let ary=[]
      switch(this.$route.params.type+''){
        case '0':
          ary=compare
              break
        case '1':
          ary=constituent
          break
        case '2':
          ary=capability
          break
        case '3':
          ary=capability
          break
        default:
            break
      }
      let result=ary.filter(item => {
        return item.paihao === paihao
      })
      this.detail=result[0]||{}
    }
  }
</script>
