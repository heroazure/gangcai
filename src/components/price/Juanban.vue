<template>
    <div class="hlj-container-wrap">
      <mt-cell title="卷板计价"></mt-cell>
      <div class="form-pleft">
        <mt-field label="卷价(元/KG)" placeholder="请输入卷价" v-model="price"></mt-field>
        <mt-field label="过磅重量(KG)" placeholder="请输入过磅重量" v-model="weighWeight"></mt-field>
      </div>
      <mt-cell title="计算结果"></mt-cell>
      <div class="form-pleft">
        <mt-field label="卷板计价(元)" v-model="result"></mt-field>
      </div>
    </div>
</template>
<style lang="less">

</style>
<script>
    export default{
        data(){
            return {
              price:'',
              weighWeight:''
            }
        },
      computed:{
        result(){
          if(!this.price||!this.weighWeight){
            return ''
          }
          try{
            return this.price*this.weighWeight
          }catch (e){
            return ''
          }
        }
      }
    }
</script>
