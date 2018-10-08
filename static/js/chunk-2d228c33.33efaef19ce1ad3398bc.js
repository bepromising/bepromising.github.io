(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228c33"],{db21:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"box-container"},[a("ul",{staticClass:"filter"},[a("li",[a("i",[e._v("年份")]),a("DatePicker",{staticClass:"year",attrs:{type:"year",placeholder:"选择年份",transfer:"",clearable:""},model:{value:e.condition.year,callback:function(t){e.$set(e.condition,"year",t)},expression:"condition.year"}})],1),a("li",[a("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"},on:{click:e.search}}),a("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"info",shape:"circle",icon:"md-add"},on:{click:function(t){e.add({status:1})}}}),a("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"warning",shape:"circle",icon:"md-cloud-upload"},on:{click:e.importData}}),a("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"success",shape:"circle",icon:"md-cloud-download"},on:{click:e.exportData}})],1)]),a("Table",{attrs:{stripe:"",border:"",columns:e.table.columns,data:e.table.data,loading:e.table.loading}}),a("Page",{staticClass:"page-wrap",attrs:{total:e.table.total,current:e.table.current,"page-size":e.table.size,"show-total":""},on:{"on-change":e.changePage}}),a("Modal",{attrs:{width:"800",title:e.formModal.title,closable:""},model:{value:e.formModal.show,callback:function(t){e.$set(e.formModal,"show",t)},expression:"formModal.show"}},[a("Form",{ref:"formModal",staticStyle:{width:"94%"},attrs:{model:e.formModal.fields,"label-width":120,rules:e.formModal.validate}},[a("FormItem",{attrs:{label:"年份",prop:"year"}},[a("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"year",placeholder:"选择年份",transfer:"",clearable:""},model:{value:e.condition.year,callback:function(t){e.$set(e.condition,"year",t)},expression:"condition.year"}})],1),a("FormItem",{attrs:{label:"出生人数（人）",prop:"hushu"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),a("FormItem",{attrs:{label:"出生率（%）",prop:"chengzhenhu"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),a("FormItem",{attrs:{label:"死亡人数（人）",prop:"xiangcunhu"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),a("FormItem",{attrs:{label:"死亡率（%）",prop:"renkoushu"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),a("FormItem",{attrs:{label:"自然增长人数（人）",prop:"man"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),a("FormItem",{attrs:{label:"自然增长率（%）",prop:"woman"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"success",loading:e.formModal.loading},on:{click:e.save}},[e._v("保存")]),a("Button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},o=[],r=(a("386d"),a("f121"),a("ed08"),a("b32b")),n=a("e069"),s=a("1ab5"),i={name:"changesOfHouseholdPopulationOverYears",mixins:[r["a"]],data:function(){var e=this;this.$createElement;return{condition:{},curd:{searchUrl:"",readUrl:"",createUrl:"",deleteUrl:"",updateUrl:""},table:{columns:[{title:"年份",key:"year",align:"center"},{title:"出生",align:"center",children:[{title:"人数（人）",key:"chushengrenshu",align:"center"},{title:"出生率（%）",key:"chushenglv",align:"center"}]},{title:"死亡",align:"center",children:[{title:"人数（人）",key:"siwangrenshu",align:"center"},{title:"死亡率（%）",align:"center",key:"siwanglv"}]},{title:"自然增长",align:"center",children:[{title:"人数（人）",key:"ziranzengzhangrenshu",align:"center"},{title:"自然增长率（%）",key:"ziranzengzhanglv",align:"center"}]},{type:"action",title:"操作",align:"center",render:function(t,a){var l=a.row;l.project_id,e.currentProId;return t("div",[t(n["Button"],{attrs:{type:"primary",size:"small",shape:"circle",icon:"md-create"},on:{click:function(){e.edit(l,"project_id")}}})])}}],data:s["c"],total:10},formModal:{validate:{},fields:{}}}},methods:{importData:function(){},exportData:function(){}},created:function(){this.search()}},c=i,d=a("2877"),u=Object(d["a"])(c,l,o,!1,null,null,null);u.options.__file="changesOfHouseholdPopulationOverYears.vue";t["default"]=u.exports}}]);