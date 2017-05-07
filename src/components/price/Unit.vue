<template>
    <div class="hlj-container-wrap">
      <mt-cell title="平板单价"></mt-cell>
      <div class="form-pleft">
        <mt-field label="实际厚度(mm)" placeholder="请输入实际厚度" v-model="realThickness"></mt-field>
        <mt-field label="理论厚度D(mm)" placeholder="请输入理论厚度" v-model="theoryThickness"></mt-field>
        <mt-field label="卷价(元/KG)" placeholder="请输入卷价" v-model="price"></mt-field>
      </div>
      <mt-cell title="计算结果"></mt-cell>
      <div class="form-pleft">
        <mt-field label="平板单价(元)" v-model="result"></mt-field>
      </div>
    </div>
</template>
<style lang="less">

</style>
<script>
    export default{
        data(){
            return {
                //实际厚度
              realThickness:'',
              //理论厚度
              theoryThickness:'',
              //卷价(元/KG)
              price:''
            }
        },
      computed:{
        result(){
            if(!this.realThickness||!this.theoryThickness||!this.price){
                return ''
            }
            try{
                return this.realThickness/this.theoryThickness*this.price
            }catch (e){
                return ''
            }
        }
      }
    }
</script>
