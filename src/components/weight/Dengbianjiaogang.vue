<template>
  <div class="hlj-container-wrap">
    <mt-cell title="等边角钢"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" value="316"></mt-cell>
      <mt-field label="边长A(mm)" placeholder="请输入边长" v-model="sideLength"></mt-field>
      <mt-field label="厚度D(mm)" placeholder="请输入厚度" v-model="thickness"></mt-field>
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
        sideLength: '',
        thickness: '',
        length: ''
      }
    },
    computed: {
      result(){
        if (!this.sideLength || !this.thickness|| !this.length) {
          return ''
        }
        try {
          return this.thickness*(this.sideLength/1000) * this.length
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
