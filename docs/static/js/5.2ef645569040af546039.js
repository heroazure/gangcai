webpackJsonp([5],{115:function(e,t,l){t=e.exports=l(29)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Wufengguan.vue",sourceRoot:""}])},137:function(e,t,l){var s=l(115);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);l(30)("33d686a0",s,!0)},176:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"hlj-container-wrap"},[l("mt-cell",{attrs:{title:"无缝管/焊管"}}),e._v(" "),l("div",{staticClass:"form-pleft"},[l("mt-cell",{attrs:{title:"材质",value:"317"}}),e._v(" "),l("mt-field",{attrs:{label:"外径(mm)",placeholder:"请输入外径"},model:{value:e.externalDiameter,callback:function(t){e.externalDiameter=t},expression:"externalDiameter "}}),e._v(" "),l("mt-field",{attrs:{label:"壁厚D(mm)",placeholder:"请输入壁厚"},model:{value:e.thickness,callback:function(t){e.thickness=t},expression:"thickness"}}),e._v(" "),l("mt-field",{attrs:{label:"长度L(m)",placeholder:"请输入长度"},model:{value:e.length,callback:function(t){e.length=t},expression:"length"}})],1),e._v(" "),l("mt-cell",{attrs:{title:"计算结果"}}),e._v(" "),l("div",{staticClass:"form-pleft"},[l("mt-field",{attrs:{label:"理论重量(kg)"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1)],1)},staticRenderFns:[]}},49:function(e,t,l){l(137);var s=l(12)(l(79),l(176),null,null);e.exports=s.exports},79:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{externalDiameter:"",thickness:"",length:""}},computed:{result:function(){if(!this.externalDiameter||!this.length||!this.thickness)return"";try{return.00314140127*this.thickness*(this.externalDiameter-this.thickness)*this.length}catch(e){return""}}}}}});
//# sourceMappingURL=5.2ef645569040af546039.js.map