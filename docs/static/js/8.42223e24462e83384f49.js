webpackJsonp([8],{106:function(e,t,s){t=e.exports=s(29)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Fangguan.vue",sourceRoot:""}])},127:function(e,t,s){var l=s(106);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);s(30)("29a24a1e",l,!0)},165:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hlj-container-wrap"},[s("mt-cell",{attrs:{title:"方管/矩形管"}}),e._v(" "),s("div",{staticClass:"form-pleft"},[s("mt-cell",{attrs:{title:"材质",value:"410"}}),e._v(" "),s("mt-field",{attrs:{label:"长边长A(mm)",placeholder:"请输入长边长"},model:{value:e.sideLength1,callback:function(t){e.sideLength1=t},expression:"sideLength1"}}),e._v(" "),s("mt-field",{attrs:{label:"厚度D(mm)",placeholder:"请输入厚度"},model:{value:e.thickness,callback:function(t){e.thickness=t},expression:"thickness"}}),e._v(" "),s("mt-field",{attrs:{label:"短边长B(mm)",placeholder:"请输入短边长"},model:{value:e.sideLength2,callback:function(t){e.sideLength2=t},expression:"sideLength2"}}),e._v(" "),s("mt-field",{attrs:{label:"长度L(m)",placeholder:"请输入长度"},model:{value:e.length,callback:function(t){e.length=t},expression:"length"}})],1),e._v(" "),s("mt-cell",{attrs:{title:"计算结果"}}),e._v(" "),s("div",{staticClass:"form-pleft"},[s("mt-field",{attrs:{label:"理论重量(kg)"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1)],1)},staticRenderFns:[]}},44:function(e,t,s){s(127);var l=s(12)(s(71),s(165),null,null);e.exports=l.exports},71:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{sideLength1:"",thickness:"",sideLength2:"",length:""}},computed:{result:function(){if(!(this.sideLength1&&this.thickness&&this.sideLength2&&this.length))return"";try{return this.thickness*(2*(this.sideLength1+this.sideLength2)-4*this.thickness)*this.length}catch(e){return""}}}}}});
//# sourceMappingURL=8.42223e24462e83384f49.js.map