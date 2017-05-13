<template>
  <div class="hlj-container-wrap">
    <mt-cell title="扁钢"></mt-cell>
    <div class="form-pleft">
      <mt-field label="宽度W(mm)" placeholder="请输入宽度" v-model="width"></mt-field>
      <mt-field label="厚度H(mm)" placeholder="请输入厚度" v-model="thickness"></mt-field>
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
        width: '',
        thickness: '',
        length: ''
      }
    },
    computed: {
      result(){
        if (!this.width || !this.thickness|| !this.length) {
          return ''
        }
        try {
          return this.thickness*(this.width/1000) * this.length
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
