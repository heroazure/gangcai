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
          {id: 1, title: '公称尺寸范围', img: require('../../assets/img/hot1.png')},
          {id: 2, title: '厚钢板厚度允许偏差', img: require('../../assets/img/hot2.png')},
          {id: 3, title: '钢带、卷切钢板和卷切钢带的厚度允许偏差', img: require('../../assets/img/hot3.png')},
          {id: 4, title: '窄钢带、卷切钢带高级精度的厚度允许偏差', img: require('../../assets/img/hot4.png')},
          {id: 5, title: '冷轧用宽钢带的同卷厚度差', img: require('../../assets/img/hot5.png')},
          {id: 6, title: '冷轧用窄钢带的同卷厚度差', img: require('../../assets/img/hot6.png')},
          {id: 7, title: '厚钢板的宽度允许偏差', img: require('../../assets/img/hot7.png')},
          {id: 8, title: '宽钢带、卷切钢板、纵剪宽钢带的宽度允许偏差', img: require('../../assets/img/hot8.png')},
          {id: 9, title: '窄钢带及卷切钢带的宽度允许偏差', img: require('../../assets/img/hot9.png')},
          {id: 10, title: '厚钢板、卷切钢板及卷切钢带的长度允许偏差', img: require('../../assets/img/hot10.png')},
          {id: 11, title: '厚钢板、宽钢带及卷切钢板的镰刀弯', img: require('../../assets/img/hot11.png')},
          {id: 12, title: '窄钢带及卷切钢带的镰刀弯', img: require('../../assets/img/hot12.png')},
          {id: 13, title: '厚钢板的不平度', img: require('../../assets/img/hot13.png')},
          {id: 14, title: '卷切钢板的不平度', img: require('../../assets/img/hot14.png')}
        ]
      }
    }
  }
</script>
