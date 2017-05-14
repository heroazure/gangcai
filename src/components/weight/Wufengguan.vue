<template>
  <div class="hlj-container-wrap">
    <mt-cell title="无缝管/焊管"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" value="317"></mt-cell>
      <mt-field label="外径(mm)" placeholder="请输入外径" v-model="externalDiameter "></mt-field>
      <mt-field label="壁厚D(mm)" placeholder="请输入壁厚" v-model="thickness"></mt-field>
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
        externalDiameter:'',
        thickness: '',
        length: ''
      }
    },
    computed: {
      result(){
        if (!this.externalDiameter || !this.length|| !this.thickness) {
          return ''
        }
        try {
          return 0.00314140127*this.thickness*(this.externalDiameter-this.thickness) * this.length
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
