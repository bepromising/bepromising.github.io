(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f895fbe6"],{2877:function(t,e,n){"use strict";function i(t,e,n,i,a,r,l,o){var s,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),l?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},c._ssrRegister=s):a&&(s=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),s)if(c.functional){c._injectStyles=s;var u=c.render;c.render=function(t,e){return s.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},"386d":function(t,e,n){n("214f")("search",1,function(t,e,n){return[function(n){"use strict";var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i):new RegExp(n)[e](String(i))},n]})},"72b1":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box-container"},[n("ul",{staticClass:"filter"},[n("li",[n("i",[t._v("时间")]),n("DatePicker",{staticClass:"year",attrs:{type:"month",placeholder:"选择年月",transfer:"",clearable:""},model:{value:t.condition.year,callback:function(e){t.$set(t.condition,"year",e)},expression:"condition.year"}})],1),n("li",[n("i",[t._v("类别")]),n("Select",{staticClass:"dateRange",staticStyle:{width:"250px"},attrs:{placeholder:"请选择",transfer:"",clearable:"",filterable:""},model:{value:t.condition.type,callback:function(e){t.$set(t.condition,"type",e)},expression:"condition.type"}},t._l(t.options.type,function(e,i){return n("Option",{key:i,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),n("li",[n("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"},on:{click:t.search}}),n("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"success",shape:"circle",icon:"md-cloud-download"},on:{click:t.exportData}})],1)]),n("Table",{staticStyle:{width:"100%"},attrs:{stripe:"",border:"",columns:t.table.columns,data:t.table.data}}),n("Page",{staticClass:"page-wrap",attrs:{total:t.table.total,current:t.table.current,"page-size":t.table.size,"show-total":""},on:{"on-change":t.changePage}})],1)},a=[],r=(n("386d"),n("b32b")),l=(n("e069"),{name:"water",mixins:[r["a"]],data:function(){return{options:{type:[{label:"工商税收完成情况(镇街税收)",value:"工商税收完成情况(镇街税收)"},{label:"各镇街人民币存款情况表",value:"各镇街人民币存款情况表"},{label:"各镇街人民币贷款情况表",value:"各镇街人民币贷款情况表"},{label:"各镇区供售电情况",value:"各镇区供售电情况"}],aa:[{title:"镇街",key:"town",align:"center"},{title:"一、总收入",align:"center",children:[{title:"三级累计收入",align:"center",cjildren:[{title:"金额",key:"town",align:"center"},{title:"上年收入",key:"town",align:"center"},{title:"同比增减",key:"town",align:"center"},{title:"同比增减（%）",key:"town",align:"center"}]},{title:"其中：中央",key:"yang",align:"center"},{title:"省",key:"yang",align:"center"},{title:"其中：市级收入",align:"center",children:[{title:"市",key:"shi",align:"center"},{title:"上年市级收入",key:"shi",align:"center"},{title:"同比增减",key:"shi",align:"center"},{title:"同比增减%",key:"shi",align:"center"}]}]},{title:"二、各部门征收税完成情况",align:"center",children:[{title:"税务部门征收部分",align:"center",children:[{title:"征收收入",key:"shouru",align:"center"},{title:"中央",key:"shouru",align:"center"},{title:"省",key:"shouru",align:"center"},{title:"市",key:"shouru",align:"center"},{title:"上年同期",key:"shouru",align:"center"},{title:"增减额",key:"shouru",align:"center"},{title:"同比增减%",key:"shouru",align:"center"},{title:"其中：市级收入",key:"shouru",align:"center"},{title:"上年同期",key:"shouru",align:"center"},{title:"同比增减%",key:"shouru",align:"center"}]}]}],bb:[{title:"项目",key:"shouru",align:"center"},{title:"比去年同期增减（%）",key:"shouru",align:"center"}],cc:[{title:"项目",key:"shouru",align:"center"},{title:"贷款余额",key:"shouru",align:"center"},{title:"去年同期增减（%）",key:"shouru",align:"center"}],dd:[{title:"",key:"shouru",align:"center"},{title:"年本月供电量",key:"shouru",align:"center"},{title:"去年同期供电量",key:"shouru",align:"center"},{title:"供电同比增长",key:"shouru",align:"center"},{title:"本年累计供电量",key:"shouru",align:"center"},{title:"去年同期累计供电量",key:"shouru",align:"center"},{title:"本年累计增长",key:"shouru",align:"center"},{title:"本月售电量",key:"shouru",align:"center"},{title:"去年同期售电量",key:"shouru",align:"center"},{title:"售电同比增长",key:"shouru",align:"center"},{title:"本年累计售电量",key:"shouru",align:"center"},{title:"去年同期累计售电量",key:"shouru",align:"center"},{title:"本年累计增长",key:"shouru",align:"center"}]},condition:{type:"工商税收完成情况(镇街税收)"},curd:{searchUrl:"",readUrl:"",createUrl:"",deleteUrl:"",updateUrl:""},table:{columns:[],data:[],total:10},formModal:{validate:{},fields:{}}}},methods:{importData:function(){},exportData:function(){}},created:function(){this.search(),this.table.columns=this.options.aa}}),o=l,s=n("2877"),c=Object(s["a"])(o,i,a,!1,null,null,null);c.options.__file="town.vue";e["default"]=c.exports},b32b:function(t,e,n){"use strict";n("96cf");var i=n("3040"),a=(n("28a5"),n("ac6a"),n("7514"),n("386d"),n("a322")),r=(n("f751"),n("7c9b")),l=n("ed08"),o=n("f121");e["a"]={data:function(){return{curd:{searchUrl:null,readUrl:null,createUrl:null,updateUrl:null,deleteUrl:null},condition:{},ownButtons:{},table:{columns:[],data:[],size:15,current:1,total:0,loading:!1},uploadModal:{show:!1,uploading:!1},formModal:{edit:!1,show:!1,title:null,loading:!1}}},methods:{search:function(){var t=this;this.$http({method:"post",url:this.curd.searchUrl,data:this.condition}).then(function(e){var n=e.data;n.success?Object.assign(t.table,{data:n.result,total:n.page.total}):Object.assign(t.table,{data:[],total:0})},function(t){}).finally(function(){t.table.loading=!1})},add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in this.$refs.formModal.resetFields(),t)this.formModal.fields[e]=t[e];Object.assign(this.formModal,{edit:!1,show:!0,title:"新增"})},edit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",i=arguments.length>2?arguments[2]:void 0;this.$http({method:"post",url:this.curd.readUrl,data:Object(a["a"])({},n,t[n])}).then(function(t){var n=t.data;n.success&&(Object.assign(e.formModal,{edit:!0,show:!0,title:"编辑",fields:n.result}),i&&i())},function(t){})},delete:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",i=arguments.length>2?arguments[2]:void 0;this.$Modal.confirm({title:"系统提示",content:"确定要删除此记录？",onOk:function(){e.$http({method:"post",url:e.curd.deleteUrl,data:Object(a["a"])({},n,t[n])}).then(function(t){var n=t.data;n.success&&(e.$Message.success("成功删除记录！"),i&&i(),e.search())},function(t){})}})},save:function(t){var e=this;this.$refs.formModal.validate(function(n){if(n){e.formModal.loading=!0;var i=e.formModal.edit?"保存成功":"新增成功";e.$http({method:"post",url:e.formModal.edit?e.curd.updateUrl:e.curd.createUrl,data:e.formModal.fields}).then(function(n){var a=n.data;e.formModal.loading=!0,a.success&&(e.$Message.success(i),e.formModal.show=!1,e.search(),t&&t())},function(t){})}})},changePage:function(t){this.condition.pageNo=t,this.search()},resetFilter:function(){Object(r["c"])(this.table.search)},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"formModal";this.$refs[t].resetFields()},exportFile:function(){l["b"].apply(this,[{url:this.curd.exportUrl,data:this.condition,fileName:"Api.csv"}])},findOwnButtons:function(){var t=this;if(o["b"].buttonsAuth){var e=this.$session("authMenus"),n=this.$session("resource"),i=e.find(function(e){return e.url===t.$route.path}),a=n.filter(function(t){return t.parentId===i.id}),r={};a.length>0&&a.forEach(function(t){var e=t.code.split("_").pop();r[e]=!0}),this.$set(this,"ownButtons",r)}},showUpload:function(){this.uploadModal.show=!0},exportData:function(){},checkUploadData:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!0!==this.uploadModal.uploading){t.next=2;break}return t.abrupt("return",!1);case 2:return this.uploadModal.uploading=!0,t.next=5,new Promise(function(t,n){e.uploadModal.uploading=!1,e.$refs.uploadModal.validate(function(i){i?t(!0):(e.$Message.error("请检查是否存在字段未通过验证！"),n(!0))})});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}}}]);