<template>
  <div class="hlj-container-wrap">
    <mt-cell title="平板"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" to="/material" :value="material" is-link></mt-cell>
      <mt-field label="厚度H(mm)" placeholder="请输入厚度" type="number" v-model="thickness"></mt-field>
      <mt-field label="宽度W(mm)" placeholder="请输入宽度" type="number" v-model="width"></mt-field>
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
        width: '',
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
        if (!this.width || !this.thickness|| !this.length||!this.material) {
          return ''
        }
        try {
          let width=Number(this.width)
          let thickness=Number(this.thickness)
          let length=Number(this.length)
          return (thickness*(width/1000) * (length/1000)* this.materialValue).toFixed(6)
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
