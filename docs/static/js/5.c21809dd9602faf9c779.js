webpackJsonp([5],{136:function(e,a,n){a=e.exports=n(25)(!0),a.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Wufengguan.vue",sourceRoot:""}])},160:function(e,a,n){var i=n(136);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(26)("33d686a0",i,!0)},230:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"hlj-container-wrap"},[n("mt-cell",{attrs:{title:"无缝管/焊管"}}),e._v(" "),n("div",{staticClass:"form-pleft"},[n("mt-cell",{attrs:{title:"材质",to:"/material",value:e.material,"is-link":""}}),e._v(" "),n("mt-field",{attrs:{label:"壁厚D(mm)",placeholder:"请输入壁厚",type:"number"},model:{value:e.thickness,callback:function(a){e.thickness=a},expression:"thickness"}}),e._v(" "),n("mt-field",{attrs:{label:"外径(mm)",placeholder:"请输入外径",type:"number"},model:{value:e.externalDiameter,callback:function(a){e.externalDiameter=a},expression:"externalDiameter "}}),e._v(" "),n("mt-field",{attrs:{label:"长度L(mm)",placeholder:"请输入长度",type:"number"},model:{value:e.length,callback:function(a){e.length=a},expression:"length"}})],1),e._v(" "),n("mt-cell",{attrs:{title:"计算结果"}}),e._v(" "),n("div",{staticClass:"form-pleft"},[n("mt-field",{attrs:{label:"理论重量(kg)"},model:{value:e.result,callback:function(a){e.result=a},expression:"result"}})],1)],1)},staticRenderFns:[]}},45:function(e,a,n){n(160);var i=n(11)(n(80),n(230),null,null);e.exports=i.exports},49:function(e,a,n){"use strict";a.a=[{id:"201",name:7.93},{id:"202",name:7.93},{id:"301",name:7.93},{id:"301L",name:7.93},{id:"301LN",name:7.93},{id:"302",name:7.93},{id:"302B",name:7.93},{id:"303",name:7.98},{id:"303Se",name:7.93},{id:"304",name:7.93},{id:"304L",name:7.9},{id:"304H",name:7.9},{id:"304N",name:7.93},{id:"304LN",name:7.93},{id:"305",name:7.93},{id:"308",name:8},{id:"309",name:7.98},{id:"309S",name:7.98},{id:"310",name:7.98},{id:"310S",name:7.98},{id:"310MoLN",name:8.02},{id:"316",name:8},{id:"316L",name:8},{id:"316Ti",name:7.9},{id:"316N",name:8},{id:"316LN",name:8.04},{id:"901L",name:8},{id:"317",name:8},{id:"317L",name:7.98},{id:"317LMN",name:8},{id:"321",name:8.03},{id:"330",name:8},{id:"347",name:8.03},{id:"2304",name:7.8},{id:"255",name:7.8},{id:"405",name:7.75},{id:"409",name:7.75},{id:"429",name:7.7},{id:"430",name:7.7},{id:"430F",name:7.78},{id:"439",name:7.7},{id:"434",name:7.7},{id:"436",name:7.7},{id:"444",name:7.75},{id:"XM-27",name:7.67},{id:"403",name:7.8},{id:"410S",name:7.75},{id:"410",name:7},{id:"416",name:7.78},{id:"420",name:7.75},{id:"420F",name:7.78},{id:"431",name:7.71},{id:"440A",name:7.78},{id:"440B",name:7.78},{id:"440C",name:7.78},{id:"440F",name:7.78},{id:"XM-13",name:7.76},{id:"XM-16",name:7.7},{id:"XM-12",name:7.78},{id:"630",name:7.78},{id:"631",name:7.93},{id:"632",name:7.8},{id:"660",name:7.94}]},80:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=n(49);a.default={data:function(){return{externalDiameter:"",thickness:"",length:""}},computed:{material:function(){return this.$store.state.material},materialValue:function(){var e=this,a=0;return i.a.forEach(function(n){n.id===e.material&&(a=n.name)}),a},result:function(){if(!(this.externalDiameter&&this.length&&this.thickness&&this.material))return"";try{var e=Number(this.thickness);return(.00314140127*e*(Number(this.externalDiameter)-e)*(Number(this.length)/1e3)*this.materialValue).toFixed(6)}catch(e){return""}}}}}});
//# sourceMappingURL=5.c21809dd9602faf9c779.js.map