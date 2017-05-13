<template>
  <div class="hlj-container-wrap">
    <mt-cell title="圆钢"></mt-cell>
    <div class="form-pleft">
      <mt-field label="直径A(mm)" placeholder="请输入直径" v-model="diameter"></mt-field>
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
        diameter: '',
        length: ''
      }
    },
    computed: {
      result(){
        if (!this.diameter || !this.length) {
          return ''
        }
        try {
          return 0.00078535031*this.diameter*this.diameter * this.length
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
