<template>
  <div class="hlj-container-wrap">
    <mt-cell title="不等边角钢"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" to="/material" :value="material" is-link></mt-cell>
      <mt-field label="厚度D(mm)" placeholder="请输入厚度" type="number" v-model="thickness"></mt-field>
      <mt-field label="边1宽A(mm)" placeholder="请输入边1宽A" type="number" v-model="sideLength1"></mt-field>
      <mt-field label="边2宽B(mm)" placeholder="请输入边2宽B" type="number" v-model="sideLength2"></mt-field>
      <mt-field label="长度L(mm)" placeholder="请输入长度" type="number" v-model="length"></mt-field>
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
      materialValue(){
        let result = 0
        material.forEach(item => {
          if (item.id === this.material) {
            result = item.name
          }
        })
        return result
      },
      result(){
        if (!this.sideLength1 || !this.thickness||!this.sideLength2|| !this.length||!this.material) {
          return ''
        }
        try {
          let thickness=Number(this.thickness)
          let sideLength1=Number(this.sideLength1)
          let sideLength2=Number(this.sideLength2)
          let length=Number(this.length)
          return (thickness*((sideLength1+sideLength2-thickness)/1000) * (length/1000)* this.materialValue).toFixed(6)
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
