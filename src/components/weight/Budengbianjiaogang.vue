<template>
  <div class="hlj-container-wrap">
    <mt-cell title="不等边角钢"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" to="/material" :value="material" is-link></mt-cell>
      <mt-field label="厚度D(mm)" placeholder="请输入厚度" v-model="thickness"></mt-field>
      <mt-field label="边1宽A(mm)" placeholder="请输入边1宽A" v-model="sideLength1"></mt-field>
      <mt-field label="边2宽B(mm)" placeholder="请输入边2宽B" v-model="sideLength2"></mt-field>
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
        sideLength1: '',
        thickness: '',
        sideLength2:'',
        length: ''
      }
    },
    computed: {
      material(){
        return this.$store.state.material
      },
      result(){
        if (!this.sideLength1 || !this.thickness||!this.sideLength2|| !this.length||!this.material) {
          return ''
        }
        try {
          return this.thickness*((this.sideLength1+this.sideLength2-this.thickness)/1000) * (this.length/1000)*material[this.material]
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
