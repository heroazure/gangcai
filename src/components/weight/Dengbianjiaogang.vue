<template>
  <div class="hlj-container-wrap">
    <mt-cell title="等边角钢"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" to="/material" :value="material" is-link></mt-cell>
      <mt-field label="厚度D(mm)" placeholder="请输入厚度" v-model="thickness"></mt-field>
      <mt-field label="宽度W(mm)" placeholder="请输入宽度" v-model="sideLength"></mt-field>
      <mt-field label="长度L(mm)" placeholder="请输入长度" v-model="length"></mt-field>
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
  import material from 'enum/material'
  export default{
    data(){
      return {
        sideLength: '',
        thickness: '',
        length: ''
      }
    },
    computed: {
      material(){
        return this.$store.state.material
      },
      result(){
        if (!this.sideLength || !this.thickness|| !this.length||!this.material) {
          return ''
        }
        try {
          return this.thickness*(this.sideLength*2-this.thickness)/1000 * (this.length/1000)*material[this.material]
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
