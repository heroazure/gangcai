webpackJsonp([13],{110:function(t,e,l){e=t.exports=l(29)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Biangang.vue",sourceRoot:""}])},131:function(t,e,l){var s=l(110);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);l(30)("54b10515",s,!0)},169:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"hlj-container-wrap"},[l("mt-cell",{attrs:{title:"扁钢"}}),t._v(" "),l("div",{staticClass:"form-pleft"},[l("mt-cell",{attrs:{title:"材质",value:"301"}}),t._v(" "),l("mt-field",{attrs:{label:"宽度W(mm)",placeholder:"请输入宽度"},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}}),t._v(" "),l("mt-field",{attrs:{label:"厚度H(mm)",placeholder:"请输入厚度"},model:{value:t.thickness,callback:function(e){t.thickness=e},expression:"thickness"}}),t._v(" "),l("mt-field",{attrs:{label:"长度L(m)",placeholder:"请输入长度"},model:{value:t.length,callback:function(e){t.length=e},expression:"length"}})],1),t._v(" "),l("mt-cell",{attrs:{title:"计算结果"}}),t._v(" "),l("div",{staticClass:"form-pleft"},[l("mt-field",{attrs:{label:"理论重量(kg)"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1)],1)},staticRenderFns:[]}},39:function(t,e,l){l(131);var s=l(12)(l(66),l(169),null,null);t.exports=s.exports},66:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{width:"",thickness:"",length:""}},computed:{result:function(){if(!this.width||!this.thickness||!this.length)return"";try{return this.thickness*(this.width/1e3)*this.length}catch(t){return""}}}}}});
//# sourceMappingURL=13.be604bde0e27c4ad6873.js.map