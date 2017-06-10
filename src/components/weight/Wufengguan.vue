<template>
  <div class="hlj-container-wrap">
    <mt-cell title="无缝管/焊管"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" to="/material" :value="material" is-link></mt-cell>
      <mt-field label="壁厚D(mm)" placeholder="请输入壁厚" type="number" v-model="thickness"></mt-field>
      <mt-field label="外径(mm)" placeholder="请输入外径" type="number" v-model="externalDiameter "></mt-field>
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
        externalDiameter:'',
        thickness: '',
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
        if (!this.externalDiameter || !this.length|| !this.thickness||!this.material) {
          return ''
        }
        try {
            let thickness=Number(this.thickness)
            let externalDiameter=Number(this.externalDiameter)
            let length=Number(this.length)
          return (0.00314140127*thickness*(externalDiameter-thickness) * (length/1000)* this.materialValue).toFixed(6)
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
