<template>
  <div class="hlj-container-wrap">
    <mt-cell title="方钢"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" to="/material" :value="material" is-link></mt-cell>
      <mt-field label="边长A(mm)" placeholder="请输入边长" type="number" v-model="sideLength"></mt-field>
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
        sideLength: '',
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
        if (!this.sideLength || !this.length||!this.material) {
          return ''
        }
        try {
          let sideLength=Number(this.sideLength)
          let length=Number(this.length)
          return ((sideLength*sideLength * (length/1000)* this.materialValue)/1000).toFixed(6)
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
