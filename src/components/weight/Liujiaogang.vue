<template>
  <div class="hlj-container-wrap">
    <mt-cell title="六角钢"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" value="201"></mt-cell>
      <mt-field label="对边距离A(mm)" placeholder="请输入对边距离" v-model="betweenLength"></mt-field>
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
        betweenLength: '',
        length: ''
      }
    },
    computed: {
      result(){
        if (!this.betweenLength || !this.length) {
          return ''
        }
        try {
          return 0.00086598726*this.betweenLength*this.betweenLength * this.length
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
