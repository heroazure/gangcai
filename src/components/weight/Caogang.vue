<template>
  <div class="hlj-container-wrap">
    <mt-cell title="槽钢"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="材质" to="/material" :value="material" is-link></mt-cell>
      <mt-field label="厚度D(mm)" placeholder="请输入厚度" type="number" v-model="thickness"></mt-field>
      <mt-field label="槽底(mm)" placeholder="请输入槽底" type="number" v-model="caodi"></mt-field>
      <mt-field label="槽高(mm)" placeholder="请输入槽高" type="number" v-model="height"></mt-field>
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
        height:'',
        caodi:'',
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
        if (!this.caodi || !this.length|| !this.thickness|| !this.height||!this.material) {
          return ''
        }
        try {
          let caodi=Number(this.caodi)
          let thickness=Number(this.thickness)
          let length=Number(this.length)
          let height=Number(this.height)
          return (thickness*((caodi+height*2-thickness*2)/1000) * (length/1000)* this.materialValue).toFixed(6)
        } catch (e) {
          return ''
        }
      }
    }
  }
</script>
