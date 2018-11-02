(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9719d8e"],{2877:function(t,e,n){"use strict";function a(t,e,n,a,o,i,r,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return a})},"386d":function(t,e,n){n("214f")("search",1,function(t,e,n){return[function(n){"use strict";var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a):new RegExp(n)[e](String(a))},n]})},7511:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"box-container"},[n("ul",{staticClass:"filter"},[n("li",[n("i",[t._v("时间")]),n("DatePicker",{staticClass:"year",attrs:{type:"month",placeholder:"选择年月",transfer:"",clearable:""},model:{value:t.condition.year,callback:function(e){t.$set(t.condition,"year",e)},expression:"condition.year"}})],1),n("li",[n("i",[t._v("类别")]),n("Select",{staticClass:"dateRange",staticStyle:{width:"250px"},attrs:{placeholder:"请选择",transfer:"",clearable:"",filterable:""},model:{value:t.condition.type,callback:function(e){t.$set(t.condition,"type",e)},expression:"condition.type"}},t._l(t.options.type,function(e,a){return n("Option",{key:a,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1),n("li",[n("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"},on:{click:t.search}}),n("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"success",shape:"circle",icon:"md-cloud-download"},on:{click:t.exportData}})],1)]),n("Table",{staticStyle:{width:"100%"},attrs:{stripe:"",border:"",columns:t.table.columns,data:t.table.data}}),n("Page",{staticClass:"page-wrap",attrs:{total:t.table.total,current:t.table.current,"page-size":t.table.size,"show-total":""},on:{"on-change":t.changePage}})],1)},o=[],i=(n("386d"),n("b32b")),r=(n("e069"),{name:"revenue",mixins:[i["a"]],data:function(){return{options:{type:[{label:"按企业类型分",value:"按企业类型分"},{label:"按税收种类分",value:"按税收种类分"},{label:"按产业类型分",value:"按产业类型分"}]},condition:{type:"按企业类型分"},curd:{searchUrl:"",readUrl:"",createUrl:"",deleteUrl:"",updateUrl:""},table:{columns:[{title:"指标",key:"shouru",align:"center"},{title:"今年当月",key:"shouru",align:"center"},{title:"今年1月-当月累计（万元）",key:"shouru",align:"center"},{title:"上年同期累计（万元）",key:"shouru",align:"center"},{title:"同比增长（%）",key:"shouru",align:"center"}],data:[],total:10},formModal:{validate:{},fields:{}}}},methods:{importData:function(){},exportData:function(){}},created:function(){this.search()}}),s=r,l=n("2877"),c=Object(l["a"])(s,a,o,!1,null,null,null);c.options.__file="revenue.vue";e["default"]=c.exports},b32b:function(t,e,n){"use strict";n("96cf");var a=n("3040"),o=(n("28a5"),n("ac6a"),n("7514"),n("386d"),n("a322")),i=(n("f751"),n("7c9b")),r=n("ed08"),s=n("f121");e["a"]={data:function(){return{curd:{searchUrl:null,readUrl:null,createUrl:null,updateUrl:null,deleteUrl:null},condition:{},ownButtons:{},table:{columns:[],data:[],size:15,current:1,total:0,loading:!1},uploadModal:{show:!1,uploading:!1},formModal:{edit:!1,show:!1,title:null,loading:!1}}},methods:{search:function(){var t=this;this.$http({method:"post",url:this.curd.searchUrl,data:this.condition}).then(function(e){var n=e.data;n.success?Object.assign(t.table,{data:n.result,total:n.page.total}):Object.assign(t.table,{data:[],total:0})},function(t){}).finally(function(){t.table.loading=!1})},add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in this.$refs.formModal.resetFields(),t)this.formModal.fields[e]=t[e];Object.assign(this.formModal,{edit:!1,show:!0,title:"新增"})},edit:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",a=arguments.length>2?arguments[2]:void 0;this.$http({method:"post",url:this.curd.readUrl,data:Object(o["a"])({},n,t[n])}).then(function(t){var n=t.data;n.success&&(Object.assign(e.formModal,{edit:!0,show:!0,title:"编辑",fields:n.result}),a&&a())},function(t){})},delete:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",a=arguments.length>2?arguments[2]:void 0;this.$Modal.confirm({title:"系统提示",content:"确定要删除此记录？",onOk:function(){e.$http({method:"post",url:e.curd.deleteUrl,data:Object(o["a"])({},n,t[n])}).then(function(t){var n=t.data;n.success&&(e.$Message.success("成功删除记录！"),a&&a(),e.search())},function(t){})}})},save:function(t){var e=this;this.$refs.formModal.validate(function(n){if(n){e.formModal.loading=!0;var a=e.formModal.edit?"保存成功":"新增成功";e.$http({method:"post",url:e.formModal.edit?e.curd.updateUrl:e.curd.createUrl,data:e.formModal.fields}).then(function(n){var o=n.data;e.formModal.loading=!0,o.success&&(e.$Message.success(a),e.formModal.show=!1,e.search(),t&&t())},function(t){})}})},changePage:function(t){this.condition.pageNo=t,this.search()},resetFilter:function(){Object(i["c"])(this.table.search)},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"formModal";this.$refs[t].resetFields()},exportFile:function(){r["b"].apply(this,[{url:this.curd.exportUrl,data:this.condition,fileName:"Api.csv"}])},findOwnButtons:function(){var t=this;if(s["b"].buttonsAuth){var e=this.$session("authMenus"),n=this.$session("resource"),a=e.find(function(e){return e.url===t.$route.path}),o=n.filter(function(t){return t.parentId===a.id}),i={};o.length>0&&o.forEach(function(t){var e=t.code.split("_").pop();i[e]=!0}),this.$set(this,"ownButtons",i)}},showUpload:function(){this.uploadModal.show=!0},exportData:function(){},checkUploadData:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!0!==this.uploadModal.uploading){t.next=2;break}return t.abrupt("return",!1);case 2:return this.uploadModal.uploading=!0,t.next=5,new Promise(function(t,n){e.uploadModal.uploading=!1,e.$refs.uploadModal.validate(function(a){a?t(!0):(e.$Message.error("请检查是否存在字段未通过验证！"),n(!0))})});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}}}]);