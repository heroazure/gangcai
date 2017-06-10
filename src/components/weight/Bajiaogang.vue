<template>
  <div class="hlj-container-wrap">
    <mt-cell title="八角钢"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" to="/material" :value="material" is-link></mt-cell>
      <mt-field label="对边距离A(mm)" type="number" placeholder="请输入对边距离" v-model="betweenLength"></mt-field>
      <mt-field label="长度L(mm)" type="number" placeholder="请输入长度" v-model="length"></mt-field>
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
        betweenLength: '',
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
        if (!this.betweenLength || !this.length || !this.material) {
          return ''
        }
        try {
          let betweenLength = Number(this.betweenLength)
          let length = Number(this.length)
          return (0.00828025477 * betweenLength * betweenLength * (length / 1000) * this.materialValue).toFixed(6)
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
