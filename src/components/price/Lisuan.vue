<template>
    <div class="hlj-container-wrap">
      <mt-cell title="平板理算计价"></mt-cell>
      <div class="form-pleft">
        <mt-field label="理算单价(元/KG)" placeholder="请输入理算单价" v-model="price"></mt-field>
        <mt-field label="理论重量(KG)" placeholder="请输入理论重量" v-model="theoryWeight"></mt-field>
      </div>
      <mt-cell title="计算结果"></mt-cell>
      <div class="form-pleft">
        <mt-field label="平板理算计价(元)" v-model="result"></mt-field>
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
              theoryWeight:''
            }
        },
      computed:{
        result(){
          if(!this.price||!this.theoryWeight){
            return ''
          }
          try{
            return this.price*this.theoryWeight
          }catch (e){
            return ''
          }
        }
      }
    }
</script>
