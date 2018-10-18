(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0daa6a"],{"6d06":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"box-container"},[i("ul",{staticClass:"filter"},[i("li",[i("i",[e._v("时间")]),i("DatePicker",{staticClass:"year",attrs:{type:"month",placeholder:"选择年份",transfer:"",clearable:""},model:{value:e.condition.year,callback:function(t){e.$set(e.condition,"year",t)},expression:"condition.year"}})],1),i("li",[i("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search"},on:{click:e.search}}),i("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"warning",shape:"circle",icon:"md-cloud-upload"},on:{click:e.importData}}),i("Button",{staticStyle:{"margin-left":"5px"},attrs:{type:"success",shape:"circle",icon:"md-cloud-download"},on:{click:e.exportData}})],1)]),i("Table",{staticStyle:{width:"100%"},attrs:{stripe:"",border:"",columns:e.table.columns,data:e.table.data,loading:e.table.loading}}),i("Page",{staticClass:"page-wrap",attrs:{total:e.table.total,current:e.table.current,"page-size":e.table.size,"show-total":""},on:{"on-change":e.changePage}}),i("Modal",{attrs:{width:"800",title:e.formModal.title,closable:""},model:{value:e.formModal.show,callback:function(t){e.$set(e.formModal,"show",t)},expression:"formModal.show"}},[i("Form",{ref:"formModal",staticStyle:{width:"94%"},attrs:{model:e.formModal.fields,"label-width":120,rules:e.formModal.validate}},[i("FormItem",{attrs:{label:"年份",prop:"year"}},[i("DatePicker",{staticStyle:{width:"100%"},attrs:{type:"year",placeholder:"选择年份",transfer:"",clearable:""},model:{value:e.condition.year,callback:function(t){e.$set(e.condition,"year",t)},expression:"condition.year"}})],1),i("FormItem",{attrs:{label:"出生人数（人）",prop:"hushu"}},[i("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),i("FormItem",{attrs:{label:"出生率（%）",prop:"chengzhenhu"}},[i("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),i("FormItem",{attrs:{label:"死亡人数（人）",prop:"xiangcunhu"}},[i("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),i("FormItem",{attrs:{label:"死亡率（%）",prop:"renkoushu"}},[i("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),i("FormItem",{attrs:{label:"自然增长人数（人）",prop:"man"}},[i("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1),i("FormItem",{attrs:{label:"自然增长率（%）",prop:"woman"}},[i("Input",{attrs:{placeholder:"请输入"},model:{value:e.formModal.fields.hushu,callback:function(t){e.$set(e.formModal.fields,"hushu",t)},expression:"formModal.fields.hushu"}})],1)],1),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"success",loading:e.formModal.loading},on:{click:e.save}},[e._v("保存")]),i("Button",{on:{click:e.reset}},[e._v("重置")])],1)],1)],1)},a=[],n=(i("386d"),i("f121"),i("ed08"),i("b32b")),o=(i("e069"),i("1ab5")),r={name:"mainIndicatorsOfFixedAssetsInvestment",mixins:[n["a"]],data:function(){return{condition:{},curd:{searchUrl:"",readUrl:"",createUrl:"",deleteUrl:"",updateUrl:""},table:{columns:[{title:"市",key:"city",align:"center",width:90,fixed:"left"},{title:"时间",key:"date",align:"center",width:100},{title:"固定资产投资",align:"center",children:[{title:"总量（万元）",key:"gudingzichantouzizongliang",align:"center",width:150},{title:"增速（%）",key:"gudingzichantouzizengsu",align:"center",width:80}]},{title:"民间投资",align:"center",children:[{title:"总量（万元）",key:"minjiantouzizongliang",align:"center",width:150},{title:"增速（%）",align:"center",key:"minjianzichantouzizengsu",width:80},{title:"占固定资产投资比重（%）",align:"center",key:"minjianzichantouzibizhong",width:80}]},{title:"房地产开发投资",align:"center",children:[{title:"总量（万元）",key:"fangdichanzongliang",align:"center",width:150},{title:"增速（%）",key:"fangdichanzengsu",align:"center",width:80},{title:"占固定资产投资比重（%）",key:"fangdichanbizhong",align:"center",width:80}]},{title:"工业投资",align:"center",children:[{title:"总量（万元）",key:"gongyezongliang",align:"center",width:150},{title:"增速（%）",key:"gongyezengsu",align:"center",width:80},{title:"占固定资产投资比重（%）",key:"gongyebizhong",align:"center",width:80}]},{title:"工业技改投资",align:"center",children:[{title:"总量（万元）",key:"gongyejigaizongliang",align:"center",width:150},{title:"增速（%）",key:"gongyejigaizengsu",align:"center",width:80},{title:"占固定资产投资比重（%）",key:"gongyejigaibizhong",align:"center",width:80}]},{title:"基础设施",align:"center",children:[{title:"总量（万元）",key:"jichuzongliang",align:"center",width:150},{title:"增速（%）",key:"jichuzengsu",align:"center",width:80},{title:"占固定资产投资比重（%）",key:"jichubizhong",align:"center",width:80}]},{title:"高技术产业（制造业）",align:"center",children:[{title:"总量（万元）",key:"gaojishuzongliang",align:"center",width:150},{title:"增速（%）",key:"gaojishuzengsu",align:"center",width:180},{title:"占固定资产投资比重（%）",key:"gaojishubizhong",align:"center",width:80}]},{title:"制造业",align:"center",children:[{title:"总量（万元）",key:"zhizaoyezongliang",align:"center",width:150},{title:"增速（%）",key:"zhizaoyezengsu",align:"center",width:80},{title:"占固定资产投资比重（%）",key:"zhizaoyebizhong",align:"center",width:80}]}],data:o["e"],total:3},formModal:{validate:{},fields:{}}}},methods:{importData:function(){},exportData:function(){}},created:function(){this.search()}},s=r,c=i("2877"),d=Object(c["a"])(s,l,a,!1,null,null,null);d.options.__file="mainIndicatorsOfFixedAssetsInvestment.vue";t["default"]=d.exports}}]);