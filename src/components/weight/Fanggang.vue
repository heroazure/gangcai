<template>
  <div class="hlj-container-wrap">
    <mt-cell title="方钢"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" value="321"></mt-cell>
      <mt-field label="边长A(mm)" placeholder="请输入边长" v-model="sideLength"></mt-field>
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
        length: ''
      }
    },
    computed: {
      result(){
        if (!this.sideLength || !this.length) {
          return ''
        }
        try {
          return this.sideLength*this.sideLength * this.length
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
