webpackJsonp([15],{143:function(t,e,l){e=t.exports=l(29)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Biangang.vue",sourceRoot:""}])},167:function(t,e,l){var s=l(143);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);l(30)("54b10515",s,!0)},237:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"hlj-container-wrap"},[l("mt-cell",{attrs:{title:"扁钢"}}),t._v(" "),l("div",{staticClass:"form-pleft"},[l("mt-cell",{attrs:{title:"材质",to:"/material",value:t.material,"is-link":""}}),t._v(" "),l("mt-field",{attrs:{label:"厚度H(mm)",placeholder:"请输入厚度"},model:{value:t.thickness,callback:function(e){t.thickness=e},expression:"thickness"}}),t._v(" "),l("mt-field",{attrs:{label:"宽度W(mm)",placeholder:"请输入宽度"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}}),t._v(" "),l("mt-field",{attrs:{label:"长度L(mm)",placeholder:"请输入长度"},model:{value:t.length,callback:function(e){t.length=e},expression:"length"}})],1),t._v(" "),l("mt-cell",{attrs:{title:"计算结果"}}),t._v(" "),l("div",{staticClass:"form-pleft"},[l("mt-field",{attrs:{label:"理论重量(kg)"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1)],1)},staticRenderFns:[]}},40:function(t,e,l){l(167);var s=l(12)(l(85),l(237),null,null);t.exports=s.exports},53:function(t,e,l){"use strict";e.a={201:7.93,202:7.93,301:7.93,"301L":7.93,"301LN":7.93,302:7.93,"302B":7.93,303:7.98,"303Se":7.93,304:7.93,"304L":7.9,"304H":7.9,"304N":7.93,"304LN":7.93,305:7.93,308:8,309:7.98,"309S":7.98,310:7.98,"310S":7.98,"310MoLN":8.02,316:8,"316L":8,"316Ti":7.9,"316N":8,"316LN":8.04,"901L":8,317:8,"317L":7.98,"317LMN":8,321:8.03,330:8,347:8.03,2304:7.8,255:7.8,405:7.75,409:7.75,429:7.7,430:7.7,"430F":7.78,439:7.7,434:7.7,436:7.7,444:7.75,"XM-27":7.67,403:7.8,"410S":7.75,410:7,416:7.78,420:7.75,"420F":7.78,431:7.71,"440A":7.78,"440B":7.78,"440C":7.78,"440F":7.78,"XM-13":7.76,"XM-16":7.7,"XM-12":7.78,630:7.78,631:7.93,632:7.8,660:7.94}},85:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=l(53);e.default={data:function(){return{width:"",thickness:"",length:""}},computed:{material:function(){return this.$store.state.material},result:function(){if(!(this.width&&this.thickness&&this.length&&this.material))return"";try{return(this.thickness*(this.width/1e3)*(this.length/1e3)*s.a[this.material]).toFixed(6)}catch(t){return""}}}}}});
//# sourceMappingURL=15.367da08c034c7be81c20.js.map