<template>
  <div class="hlj-container-wrap">
    <mt-cell title="工字钢"></mt-cell>
    <div class="form-pleft">
      <mt-field label="高度H(mm)" placeholder="请输入高度" v-model="height"></mt-field>
      <mt-field label="腰厚D(mm)" placeholder="请输入腰厚" v-model="thickness"></mt-field>
      <mt-field label="腿宽B(mm)" placeholder="请输入腿宽" v-model="width"></mt-field>
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
        height:'',
        width:'',
        thickness: '',
        length: ''
      }
    },
    computed: {
      result(){
        if (!this.width || !this.length|| !this.thickness|| !this.height) {
          return ''
        }
        try {
          return this.height*this.width*this.thickness * this.length
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
