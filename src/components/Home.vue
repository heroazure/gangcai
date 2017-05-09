<template>
  <div class="hlj-container-wrap">
    <mt-cell title="重量计算"></mt-cell>
    <div class="items">
      <icon-text text="钢板" :iconUrl="icon1"></icon-text>
      <icon-text text="圆钢" :iconUrl="icon2"></icon-text>
      <icon-text text="方钢" :iconUrl="icon3"></icon-text>
      <icon-text text="六角钢" :iconUrl="icon4"></icon-text>
    </div>
    <div class="items">
      <icon-text text="八角钢" :iconUrl="icon5"></icon-text>
      <icon-text text="扁钢" :iconUrl="icon6"></icon-text>
      <icon-text text="等边角钢" :iconUrl="icon7"></icon-text>
      <icon-text text="不等边角钢" :iconUrl="icon8"></icon-text>
    </div>
    <div class="items">
      <icon-text text="无缝管/焊管" :iconUrl="icon9"></icon-text>
      <icon-text text="槽钢" :iconUrl="icon10"></icon-text>
      <icon-text text="工字钢" :iconUrl="icon11"></icon-text>
      <icon-text text="方管/矩形管" :iconUrl="icon12"></icon-text>
    </div>
    <mt-cell title="价格计算"></mt-cell>
    <div class="items">
      <icon-text text="平板单价" :iconUrl="price1" path="/price/unit"></icon-text>
      <icon-text text="平板理算计价" :iconUrl="price2" path="/price/lisuan"></icon-text>
      <icon-text text="平板过磅计价" :iconUrl="price3" path="/price/weigh"></icon-text>
      <icon-text text="卷板计价" :iconUrl="price4" path="/price/juanban"></icon-text>
    </div>
    <mt-cell title="相关查询"></mt-cell>
    <div class="form-pleft">
      <mt-cell title="查询类别" to="/category" :value="category" is-link></mt-cell>
      <mt-field label="牌号" placeholder="请输入牌号" v-model="paihao"></mt-field>
    </div>
    <div class="search-btn-div">
      <mt-button type="primary" size="large" @click="onSearch">查询</mt-button>
    </div>
  </div>
</template>
<style scoped lang="less">
  .items {
    display: flex;
    > .icon-text {
      flex: 1;
    }
  }

  .search-btn-div {
    padding: 20px 30px;
  }
</style>
<script>
  import IconText from 'widget/IconText.vue'
  import category from 'enum/category'
  export default{
    components: {
      [IconText.name]: IconText
    },
    data(){
      return {
        icon1: require('../assets/img/icon1.png'),
        icon2: require('../assets/img/icon2.png'),
        icon3: require('../assets/img/icon3.png'),
        icon4: require('../assets/img/icon4.png'),
        icon5: require('../assets/img/icon5.png'),
        icon6: require('../assets/img/icon6.png'),
        icon7: require('../assets/img/icon7.png'),
        icon8: require('../assets/img/icon8.png'),
        icon9: require('../assets/img/icon9.png'),
        icon10: require('../assets/img/icon10.png'),
        icon11: require('../assets/img/icon11.png'),
        icon12: require('../assets/img/icon12.png'),
        price1: require('../assets/img/price1.png'),
        price2: require('../assets/img/price2.png'),
        price3: require('../assets/img/price3.png'),
        price4: require('../assets/img/price4.png'),

        //牌号
        paihao: ''
      }
    },
    computed: {
      //查询类别
      category(){
        let result = ''
        category.forEach(item => {
          if (item.id === this.$store.state.categoryId) result = item.name
        })
        return result
      }
    },
    methods: {
      onSearch(){

      }
    }
  }
</script>
