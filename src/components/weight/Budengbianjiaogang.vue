<template>
  <div class="hlj-container-wrap">
    <mt-cell title="不等边角钢"></mt-cell>
    <div class="form-pleft">
      <mt-field label="长边长A(mm)" placeholder="请输入长边长" v-model="sideLength1"></mt-field>
      <mt-field label="厚度D(mm)" placeholder="请输入厚度" v-model="thickness"></mt-field>
      <mt-field label="短边长B(mm)" placeholder="请输入短边长" v-model="sideLength2"></mt-field>
      <mt-field label="长度L(m)" placeholder="请输入长度" v-model="length"></mt-field>
    </div>
    <mt-cell title="计算结果"></mt-cell>
    <div class="form-pleft">
      <mt-field label="理论重量(kg)" v-model="result"></mt-field>
    </div>
  </div>
</template>
<style lang="less">

</style>
<script>
  export default{
    data(){
      return {
        sideLength1: '',
        thickness: '',
        sideLength2:'',
        length: ''
      }
    },
    computed: {
      result(){
        if (!this.sideLength1 || !this.thickness||!this.sideLength2|| !this.length) {
          return ''
        }
        try {
          return this.thickness*((this.sideLength1+this.sideLength2-this.thickness)/1000) * this.length
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
