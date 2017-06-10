<template>
  <div class="hlj-container-wrap">
    <mt-cell title="重量计算"></mt-cell>
    <div class="items">
      <icon-text text="钢板" :iconUrl="icon1" path="/weight/1" @click.native="onWeightTap"></icon-text>
      <icon-text text="圆钢" :iconUrl="icon2" path="/weight/2" @click.native="onWeightTap"></icon-text>
      <icon-text text="方钢" :iconUrl="icon3" path="/weight/3" @click.native="onWeightTap"></icon-text>
      <icon-text text="六角钢" :iconUrl="icon4" path="/weight/4" @click.native="onWeightTap"></icon-text>
    </div>
    <div class="items">
      <icon-text text="八角钢" :iconUrl="icon5" path="/weight/5" @click.native="onWeightTap"></icon-text>
      <icon-text text="扁钢" :iconUrl="icon6" path="/weight/6" @click.native="onWeightTap"></icon-text>
      <icon-text text="等边角钢" :iconUrl="icon7" path="/weight/7" @click.native="onWeightTap"></icon-text>
      <icon-text text="不等边角钢" :iconUrl="icon8" path="/weight/8" @click.native="onWeightTap"></icon-text>
    </div>
    <div class="items">
      <icon-text text="无缝管/焊管" :iconUrl="icon9" path="/weight/9" @click.native="onWeightTap"></icon-text>
      <icon-text text="槽钢" :iconUrl="icon10" path="/weight/10" @click.native="onWeightTap"></icon-text>
      <icon-text text="工字钢" :iconUrl="icon11" path="/weight/11" @click.native="onWeightTap"></icon-text>
      <icon-text text="方管/矩形管" :iconUrl="icon12" path="/weight/12" @click.native="onWeightTap"></icon-text>
    </div>
    <mt-cell title="价格计算"></mt-cell>
    <div class="items">
      <icon-text text="平板单价" :iconUrl="price1" path="/price/unit" @click.native="onWeightTap"></icon-text>
      <icon-text text="平板理算计价" :iconUrl="price2" path="/price/lisuan" @click.native="onWeightTap"></icon-text>
      <icon-text text="平板过磅计价" :iconUrl="price3" path="/price/weigh" @click.native="onWeightTap"></icon-text>
      <icon-text text="卷板计价" :iconUrl="price4" path="/price/juanban" @click.native="onWeightTap"></icon-text>
    </div>
    <div class="search-bottom">
      <div class="form-pleft">
        <mt-cell title="查询类别" to="/category" :value="category" is-link></mt-cell>
        <mt-field label="牌号" placeholder="请输入牌号" v-model="paihao"></mt-field>
        <!--<mt-field label="公称尺寸" placeholder="请输入公称尺寸" v-model="chicun" v-else></mt-field>-->
      </div>
      <div class="search-btn-div">
        <mt-button type="primary" size="large" @click="onSearch">查询</mt-button>
      </div>
    </div>
    <mt-cell title="相关查询"></mt-cell>
    <div class="search-result clearfix" v-if="searchVals.length">
      <div class="search-item" v-for="(item,index) in searchVals" :key="index">
        <router-link class="origin-a" :to="{path:`/detail/index/${item.id}/${categoryId}`}">{{item.name}}</router-link>
      </div>
    </div>
    <div class="search-result" v-else>
      没有查询结果
    </div>
  </div>
</template>
<style scoped lang="less">
  @import "../assets/base/fn";

  @bottom-padding: 170px;
  .items {
    display: flex;
    > .icon-text {
      flex: 1;
    }
  }

  .search-btn-div {
    padding: 20px 10px 0;
  }

  .search-result {
    padding: 5px @hlj-gutter-width;
    font-size: 12px;
  }

  .search-item {
    float: left;
    .ellipsis(50%);
    padding-top: 5px;
    &:not(:last-child) {
      padding-right: 5px;
    }
  }

  .hlj-container-wrap {
    padding-bottom: 10px; /*no*/
  }

  .search-bottom {
    /*position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    height: @bottom-padding; !*no*!
    z-index: 100;
    background-color: #fff;
    @media (min-width: @hlj-page-max-width) {
      width: @hlj-page-max-width; !*no*!
    }*/
  }
</style>
<script>
  import IconText from 'widget/IconText.vue'
  import category from 'enum/category'
  import compare from 'ajax/compare'
  import {Toast} from 'mint-ui'
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
        paihao: '',
        //公称尺寸
        //chicun:'',

        //模糊搜索结果
        searchVals: []
      }
    },
    computed: {
      categoryId(){
        return this.$store.state.categoryId
      },
      //查询类别
      category(){
        let result = ''
        category.forEach(item => {
          if (item.id === this.categoryId) result = item.name
        })
        return result
      }
    },
    methods: {
      onWeightTap(){
        this.$store.commit('changeMaterial', '')
      },
      onSearch(){
        let paihao = this.paihao.trim()
        if (!paihao) {
          Toast({message: '请输入牌号'})
          return
        }
        let arry = []
        compare.forEach(item => {
          Object.keys(item).forEach(key => {
            if (key !== 'id' && key !== '密度') {
              if (item[key].toLowerCase().indexOf(paihao.toLowerCase()) !== -1) {
                arry.push({id: item.paihao, name: item[key]})
              }
            }
          })
        })
        this.searchVals = arry
      }
    }
  }
</script>
