webpackJsonp([17],{120:function(e,t,n){t=e.exports=n(25)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Index.vue",sourceRoot:""}])},144:function(e,t,n){var o=n(120);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(26)("ec5ae2fc",o,!0)},216:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hlj-container-wrap"},e._l(e.category,function(t){return n("mt-cell",{key:t.id,attrs:{title:t.name},nativeOn:{click:function(n){e.onTap(t.id)}}})}))},staticRenderFns:[]}},28:function(e,t,n){n(144);var o=n(11)(n(63),n(216),null,null);e.exports=o.exports},50:function(e,t,n){"use strict";t.a=[{id:0,name:"牌号对照"},{id:1,name:"化学成分"},{id:2,name:"力学性能"},{id:3,name:"冷轧不锈钢相关标准点击进入"},{id:4,name:"热轧不锈钢相关标准点击进入"}]},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(50);t.default={data:function(){return{category:o.a}},methods:{onTap:function(e){return 3===e?void this.$router.push("/zhagang/cold"):4===e?void this.$router.push("/zhagang/hot"):(this.$store.commit("changeCategory",e),void this.$router.back())}}}}});
//# sourceMappingURL=17.f57873e5d742ad80112a.js.map