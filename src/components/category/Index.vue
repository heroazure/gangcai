<template>
    <div class="hlj-container-wrap">
      <mt-cell title="牌照对照" @click.native="onTap(0)"></mt-cell>
      <mt-cell title="化学成分" @click.native="onTap(1)"></mt-cell>
      <mt-cell title="力学性能" @click.native="onTap(2)"></mt-cell>
      <mt-cell title="冷热轧钢信息" @click.native="onTap(3)"></mt-cell>
    </div>
</template>
<style lang="less">

</style>
<script>
    export default{
        data(){
            return {

            }
        },
      methods:{
        onTap(id){
            this.$router.back()
        }
      }
    }
</script>
