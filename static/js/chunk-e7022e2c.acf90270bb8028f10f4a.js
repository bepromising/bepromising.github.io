(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e7022e2c"],{"2f21":function(t,e,n){"use strict";var a=n("79e5");t.exports=function(t,e){return!!t&&a(function(){e?t.call(null,function(){},1):t.call(null)})}},"386d":function(t,e,n){n("214f")("search",1,function(t,e,n){return[function(n){"use strict";var a=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,a):new RegExp(n)[e](String(a))},n]})},4917:function(t,e,n){n("214f")("match",1,function(t,e,n){return[function(n){"use strict";var a=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,a):new RegExp(n)[e](String(a))},n]})},"55dd":function(t,e,n){"use strict";var a=n("5ca1"),r=n("d8e8"),s=n("4bf8"),i=n("79e5"),o=[].sort,l=[1,2,3];a(a.P+a.F*(i(function(){l.sort(void 0)})||!i(function(){l.sort(null)})||!n("2f21")(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),r(t))}})},b979:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ul",{staticClass:"filter",on:{keypress:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null}}},[n("li",{staticClass:"item"},[n("i",[t._v("姓名：")]),n("Input",{staticClass:"fill",attrs:{placeholder:"请输入姓名"},model:{value:t.condition.name,callback:function(e){t.$set(t.condition,"name",e)},expression:"condition.name"}})],1),n("li",{staticClass:"item"},[n("i",[t._v("用户名：")]),n("Input",{staticClass:"fill",attrs:{placeholder:"请输入姓名"},model:{value:t.condition.userAcct,callback:function(e){t.$set(t.condition,"userAcct",e)},expression:"condition.userAcct"}})],1),n("li",{staticClass:"item"},[n("Button",{attrs:{type:"info",shape:"circle",icon:"ios-search"},on:{click:t.search}},[t._v("查询")])],1)]),n("Table",{attrs:{stripe:"",columns:t.table.columns,data:t.table.data,loading:t.table.loading}}),n("Page",{staticClass:"page-wrap",attrs:{total:t.table.total,current:t.table.current,"page-size":t.table.size,"show-total":""},on:{"on-change":t.changePage}}),n("Modal",{attrs:{title:t.formModal.title,closable:""},model:{value:t.formModal.show,callback:function(e){t.$set(t.formModal,"show",e)},expression:"formModal.show"}},[n("Tree",{ref:"roleTree",staticStyle:{margin:"50px"},attrs:{data:t.formModal.data,multiple:"","show-checkbox":""},on:{"on-check-change":t.selectChange}}),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"success",disabled:!t.formModal.isChecked},on:{click:t.save}},[t._v("保存")]),n("Button",{on:{click:t.back}},[t._v("取消")])],1)],1)],1)},r=[],s=(n("386d"),n("7f7f"),n("c93e")),i=(n("f751"),n("0db3")),o=n("f121"),l=n("e069"),c=(n("bedf"),n("cadb")),u={name:"User",data:function(){var t=this;this.$createElement;return{condition:{name:null,userAcct:null},table:{columns:[{type:"index",width:60,align:"center",title:"序号"},{title:"用户名",key:"userAcct",align:"center"},{title:"姓名",key:"name",align:"center"},{title:"用户所属",key:"typeValue",align:"center"},{title:"创建时间",key:"createDt",align:"center",render:function(t,e){var n=e.row;return t("div",[Object(c["a"])(n.createDt)])}},{title:"更新时间",key:"updateDt",align:"center",render:function(t,e){var n=e.row;return t("div",[Object(c["a"])(n.updateDt)])}},{title:"使用状态",key:"stateValue",align:"center"},{title:"操作",key:"view",align:"center",width:280,render:function(e,n){var a=n.row;return e("div",[e(l["Button"],{attrs:{type:"info",size:"small"},style:"margin-right:5px",on:{click:function(){t.showModal(a,"0")}}},["设置角色"]),e(l["Button"],{attrs:{type:"primary",size:"small"},style:"margin-right:5px",on:{click:function(){t.showModal(a,"1")}}},["设置部门"]),e(l["Button"],{attrs:{type:"success",size:"small"},style:"margin-right:5px",on:{click:function(){t.showModal(a,"2")}}},["设置镇街"])])}}],data:[],size:o["b"].pageSize,current:1,total:0,loading:!1},formModal:{show:!1,title:null,fields:{userId:null,groupType:null},data:[],selectNodes:[],isChecked:!1}}},components:{Tree:i["a"]},methods:{back:function(){this.formModal.show=!1},selectChange:function(t){this.formModal.isChecked=!0,this.formModal.selectNodes=t},save:function(){var t=this,e={userId:this.formModal.fields.userId,groupType:this.formModal.fields.groupType};e.groupIds=this.formModal.selectNodes.map(function(t){return t.id}),this.$http({method:"post",url:o["e"].API.userSaveGroup,data:e}).then(function(e){var n=e.data;n.success?(Object.assign(t.formModal,{show:!1,title:null,selectNodes:[],data:[],isChecked:!1}),t.$Message.success("保存成功！")):t.$Message.error("系统错误!"+n.error.errorMessage)})},search:function(){var t=this;this.table.loading=!0,this.$http({method:"post",url:o["e"].API.userList,data:Object(s["a"])({},this.condition,{pageNum:this.table.current,pageSize:this.table.size})}).then(function(e){var n=e.data;t.table.loading=!1,n.success?Object.assign(t.table,{data:n.result.list,total:n.result.total}):t.$Message.error(n.error.errorMessage)}).catch(function(e){t.table.loading=!1,t.$Message.error("系统繁忙，请刷新重试！")})},showModal:function(t,e){var n=this,a=o["e"].dict.groupType[e];this.$http({method:"post",url:o["e"].API.userListGroup,data:{userId:t.id,type:e}}).then(function(r){var s=r.data;s.success&&s.result.length>0&&(n.formModal.fields.userId=t.id,n.formModal.fields.groupType=e,Object.assign(n.formModal,{show:!0,title:"设置".concat(t.name).concat(a),data:s.result,selectNodes:[],isChecked:!1}))}).catch(function(t){n.$Message.error("系统繁忙，请刷新重试！")})},changePage:function(t){this.table.current=t,this.search()}},created:function(){this.search()}},d=u,f=n("2877"),h=Object(f["a"])(d,a,r,!1,null,null,null);h.options.__file="user.vue";e["default"]=h.exports},bedf:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return s}),n.d(e,"b",function(){return o});n("55dd");var a=n("c93e"),r=(n("a481"),n("4917"),n("f751"),function(t){var e=JSON.stringify(t);return JSON.parse(e)}),s=function t(e){for(var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"parentId",s=[],i=0,o=e.length;i<o;i++)if(e[i][r]==a){var l=e[i];n=t(e,e[i].id,r),n.length>0&&(l.children=n),s.push(l)}return s},i=function t(e,n,a){for(var r,s=[],i=Object.assign({parentKey:"parentId",idKey:"id",childrenKey:"children"},n),o=0,l=e.length;o<l;o++)if(e[o][i.parentKey]==a){var c={};for(var u in i.map)e[o][u]&&(c[i.map[u]]=e[o][u]);r=t(e,n,e[o][i.idKey]),r.length>0&&(c[i.childrenKey]=r),s.push(c)}return s},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={columns:[],data:[],total:0},r=e.common||{};if(!0===t.success){var s=t.result.fields,i=t.result.page.list;s.length>0&&(n.columns=s.map(function(t){var n=Object(a["a"])({key:t.fieldName,title:t.fieldCnName},r);return e.map&&e.map[t.fieldName]&&Object.assign(n,e.map[t.fieldName]),n})),i.length>0&&(i.sort(function(t,e){return parseInt(t.sorting)-parseInt(e.sorting)}),n.data=i,n.total=t.result.page.total)}return n}}}]);