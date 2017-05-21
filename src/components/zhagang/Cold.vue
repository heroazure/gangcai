<template>
  <div class="hlj-container-wrap">
    <div class="search-result clearfix" v-if="searchVals.length">
      <div class="search-item" v-for="item in searchVals" :key="item.id">
        {{item.id}}、<a class="origin-a" :href="item.img">{{item.title}}</a>
      </div>
    </div>
    <div class="search-result" v-else>
      没有查询结果
    </div>
  </div>
</template>
<style scoped lang="less">
  .hlj-container-wrap {
    padding: 16px;
  }

  .search-item {
    padding-top: 5px;
  }
</style>
<script>
  export default{
    data(){
      return {
        searchVals: [
          {id: 1, title: '公称尺寸范围', img: require('../../assets/img/cold1.png')},
          {id: 2, title: '宽钢带及卷切钢板、纵剪宽钢带及卷切钢带Ⅰ的厚度允许偏差', img: require('../../assets/img/cold2.png')},
          {id: 3, title: '窄钢带及卷切钢带Ⅱ的厚度允许偏差', img: require('../../assets/img/cold3.png')},
          {id: 4, title: '切边宽钢带及卷切钢板、纵剪宽钢带及卷切钢带Ⅰ宽度允许偏差', img: require('../../assets/img/cold4.png')},
          {id: 5, title: '不切边宽钢带及卷切钢板宽度允许偏差', img: require('../../assets/img/cold5.png')},
          {id: 6, title: '切边窄钢带及卷切钢带宽度允许偏差', img: require('../../assets/img/cold6.png')},
          {id: 7, title: '卷切钢板及卷切钢带Ⅰ的长度允许偏差', img: require('../../assets/img/cold7.png')},
          {id: 8, title: '卷切钢带Ⅱ的长度允许偏差', img: require('../../assets/img/cold8.png')},
          {id: 9, title: '卷切钢板及卷切钢带Ⅰ的不平度', img: require('../../assets/img/cold9.png')},
          {id: 10, title: '卷切钢带Ⅱ的不平度', img: require('../../assets/img/cold10.png')},
          {id: 11, title: '不同冷作硬化状态下卷切钢板的不平度', img: require('../../assets/img/cold11.png')},
          {id: 12, title: '宽钢带及卷切钢板、纵剪宽钢带及卷切钢带Ⅰ的镰刀弯', img: require('../../assets/img/cold12.png')},
          {id: 13, title: '窄钢带及卷切钢带Ⅱ的镰刀弯', img: require('../../assets/img/cold13.png')},
          {id: 14, title: '卷切钢板及卷切钢带Ⅰ的切斜度', img: require('../../assets/img/cold14.png')},
          {id: 15, title: '卷切钢带Ⅱ的切斜度', img: require('../../assets/img/cold15.png')}
        ]
      }
    }
  }
</script>
