<template>
    <div class="hlj-container-wrap">
      <mt-cell title="平板过磅计价"></mt-cell>
      <div class="form-pleft">
        <mt-field label="卷价(元/KG)" placeholder="请输入卷价" v-model="price"></mt-field>
        <mt-field label="过磅重量(KG)" placeholder="请输入过磅重量" v-model="weight"></mt-field>
        <mt-field label="服务费(元)" placeholder="请输入服务费" v-model="servicePrice"></mt-field>
      </div>
      <mt-cell title="计算结果"></mt-cell>
      <div class="form-pleft">
        <mt-field label="平板过磅计价(元)" v-model="result"></mt-field>
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
              weight:'',
              servicePrice:''
            }
        },
      computed:{
        result(){
          if(!this.price||!this.weight||!this.servicePrice){
            return ''
          }
          try{
            return this.price*this.weight+Number(this.servicePrice)
          }catch (e){
            return ''
          }
        }
      }
    }
</script>
