(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f0be23c"],{2877:function(t,e,n){"use strict";function i(t,e,n,i,a,s,r,o){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):a&&(c=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return i})},4917:function(t,e,n){n("214f")("match",1,function(t,e,n){return[function(n){"use strict";var i=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i):new RegExp(n)[e](String(i))},n]})},"57ab":function(t,e,n){t.exports=n.p+"/static/img/header_logo.73d7fc6b.png"},"69fe":function(t,e,n){"use strict";var i=n("98ae"),a=n.n(i);a.a},"88e9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{ref:"mainWrap",staticClass:"wrap",class:{hide:!t.menu.status||!t.needMenu}},[i("header",{staticClass:"header"},[i("div",{staticClass:"logo"},[t._m(0),i("ul",t._l(t.menu.header,function(e,n){return i("li",{key:n,class:{act:e.id===t.menu.moduleID},on:{click:function(n){t.switchModule(e.id)}}},[i("Icon",{attrs:{type:e.icon}}),t._v(t._s(e.name)+"\n                ")],1)}))]),i("div",{staticClass:"loginInfo"},[i("Dropdown",{attrs:{trigger:"click"},on:{"on-click":t.dropDownHandler}},[i("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n                    欢迎您，"+t._s(t.user.name)+"\n                    "),i("Icon",{attrs:{type:"md-arrow-dropdown",size:"18"}})],1),i("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[i("DropdownItem",{attrs:{name:"logout"}},[i("Icon",{attrs:{type:"md-log-out"}}),t._v(" 安全退出")],1),i("DropdownItem",{attrs:{name:"changePassword"}},[i("Icon",{attrs:{type:"md-unlock"}}),t._v(" 修改密码")],1)],1)],1)],1)]),i("section",{directives:[{name:"show",rawName:"v-show",value:t.needMenu,expression:"needMenu"}],ref:"leftMenu",staticClass:"leftMenu",class:{hide:!t.menu.status}},[t.menu.tree.length>0?i("Menu",{ref:"menuComponent",attrs:{theme:"light",width:"auto",id:"leftMenu","open-names":t.menu.openNames,"active-name":t.menu.activeName},on:{"on-select":t.refreshTabs}},[t._l(t.menu.currentMenus,function(e){return[e.children?i("Submenu",{key:e.id,attrs:{name:e.id}},[i("template",{slot:"title"},[i("Icon",{attrs:{type:e.icon,size:"16"}}),t._v(t._s(e.name))],1),t._l(e.children,function(e){return[e.children?i("Submenu",{key:e.id,attrs:{name:e.id}},[i("template",{slot:"title"},[i("Icon",{attrs:{type:e.icon,size:"16"}}),t._v(t._s(e.name))],1),t._l(e.children,function(e){return i("MenuItem",{key:e.id,staticClass:"menuLink",attrs:{name:e.id,to:e.url||""}},[i("Icon",{attrs:{type:e.icon}}),t._v(" "+t._s(e.name)+"\n                            ")],1)})],2):i("MenuItem",{key:e.id,staticClass:"menuLink",attrs:{name:e.id,to:e.url||""}},[i("Icon",{attrs:{type:e.icon}}),t._v(" "+t._s(e.name)+"\n                        ")],1)]})],2):i("MenuItem",{key:e.id,staticClass:"menuLink",attrs:{name:e.id,to:e.url||""}},[i("Icon",{attrs:{type:e.icon,size:"16"}}),t._v(" "+t._s(e.name)+"\n                ")],1)]})],2):t._e()],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.needMenu,expression:"needMenu"}],staticClass:"menuMin",class:{hide:!t.menu.status},on:{click:t.toggleMenu}},[i("Icon",{attrs:{type:!0===t.menu.status?"ios-arrow-back":"ios-arrow-forward"}})],1),i("section",{staticClass:"mainContent",class:{scrollDisable:t.loading,tabEnabled:t.tabs.enabled}},[i("transition",{attrs:{name:"fade"}},[t.loading?i("div",{staticClass:"loading"},[i("img",{attrs:{src:n("cf1c")}})]):t._e()]),i("transition",{attrs:{name:"fade"}},[t.tabs.popMenu.show?i("div",{staticClass:"tabsRightMenu",style:t.tabs.popMenu.style},t._l(t.tabs.popMenu.data,function(e,n){return i("i",{key:n,on:{click:function(n){t.closeTabs(e.action)}}},[t._v(t._s(e.name))])})):t._e()]),t.tabs.popMenu.show?i("div",{staticClass:"mask",on:{click:t.clickMask}}):t._e(),i("section",{staticClass:"viewWrap",class:{tabEnabled:t.tabs.enabled}},[i("keep-alive",[t.tabs.enabled&&t.$route.meta.keepAlive?i("router-view"):t._e()],1),t.tabs.enabled&&t.$route.meta.keepAlive?t._e():i("router-view")],1)],1)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header_logo"},[i("img",{attrs:{src:n("57ab"),alt:"头部logo"}})])}],s=n("6bde"),r=(n("20d6"),n("a481"),n("7f7f"),n("ac6a"),n("f751"),n("7514"),n("c93e")),o=n("a106"),c=n("bedf"),u=n("2f62"),l=n("f121"),d={data:function(){return{mainWidth:0,needMenu:!0,menu:{status:!0,width:0,data:[],tree:[],openNames:[],activeName:null,header:[],moduleID:null,currentMenus:[]},user:{name:"admin"},tabs:{data:[],width:"100%",enabled:l["a"].tabs.enabled,showScrollNext:!1,showScrollPrev:!1,scrollLeft:0,popMenu:{show:!1,style:{},data:[{name:"关闭当前",action:"current"},{name:"关闭其他",action:"others"},{name:"关闭全部",action:"all"}]}}}},computed:Object(r["a"])({},Object(u["b"])({loading:function(t){return t.system.loading},menuState:function(t){return t.system.menuState}})),mixins:[o["b"]],methods:{switchModule:function(t){var e=this.menu.tree.find(function(e){return e.id===t});e&&e.children?(this.menu.currentMenus=e.children,this.needMenu=!0,this.$store.commit(l["c"].mutation.switchMenu,!1)):(this.needMenu=!1,this.$store.commit(l["c"].mutation.switchMenu,!0),e.url&&this.$router.push(e.url)),this.refreshTabs(t),this.menu.moduleID=t},toggleMenu:function(){this.$store.commit(l["c"].mutation.switchMenu,!this.menuState),this.menu.status=!this.menu.status},showPopMenu:function(t){Object.assign(this.tabs.popMenu,{show:!0,style:{left:t.clientX+"px",top:t.clientY+"px"}})},clickMask:function(){this.tabs.popMenu.show=!1},activeTab:function(t){var e=this.menu.data.find(function(e){return e.id===t});if(e.url){var n=this.tabs.data.find(function(e){return e.id===t});this.tabs.data.forEach(function(t){t.act=!1}),this.currentMenu=t,n?n.act=!0:(this.tabs.data.push({title:e.name,id:e.id,act:!0,url:e.url,index:this.tabs.data.length,name:e.url?e.url.replace("-",","):e.name}),this.$nextTick(function(){this.setKeepAlive(t,!0)})),this.$router.push(e.url)}},refreshTabs:function(t){var e=this;if(!l["a"].tabs.enabled)return!1;var n=this.tabs.data.find(function(e){return e.id===t});if(this.tabs.data.length>=l["a"].tabs.max&&!n)switch(l["a"].tabs.handlerType){case 1:this.$Message.warning("您当前打开窗口过多，会影响系统性能！"),this.activeTab(t);break;case 2:this.$Modal.confirm({width:500,title:"系统提示",content:"您当前打开窗口过多，会影响系统性能！",okText:"覆盖",cancelText:"新开",closable:!0,onOk:function(){e.tabs.data.splice(0,1),e.activeTab(t)},onCancel:function(){e.activeTab(t)}});break;case 3:this.tabs.data.splice(0,1),this.activeTab(t);break}else this.activeTab(t);var i=20,a=this.tabs.data.findIndex(function(e){return e.id===t}),s=0;this.tabs.data.forEach(function(t,e){i+=14*t.title.length+56,e===a&&(s=i)}),this.mainWidth>0&&i>this.mainWidth&&(this.tabs.showScrollNext=!0),s>this.mainWidth&&(this.tabs.scrollLeft=-(s-58-this.mainWidth),this.tabs.showScrollPrev=!0),this.tabs.width=i},setKeepAlive:function(t,e){var n=this.$router.options.routes.find(function(t){return"Layout"===t.name}),i=this.tabs.data.find(function(e){return e.id===t});if(n&&i){var a=n.children.find(function(t){return t.name===i.name});a&&(a.meta.keepAlive=e)}},closeTabs:function(t){var e=this;switch(t){case"current":this.closeTab(this.currentMenu);break;case"all":this.tabs.data=[],Object.assign(this.tabs,{width:"100%",showScrollNext:!1,showScrollPrev:!1,scrollLeft:0});break;case"others":this.tabs.data=this.tabs.data.filter(function(t){return t.id===e.currentMenu}),Object.assign(this.tabs,{width:"100%",scroll:0,showScrollNext:!1,showScrollPrev:!1,scrollLeft:0}),this.currentMenu=this.tabs.data[this.tabs.data.length-1].id;break}this.tabs.popMenu.show=!1},closeTab:function(t){if(this.setKeepAlive(t,!1),this.tabs.data=this.tabs.data.filter(function(e){return e.id!==t}),this.tabs.data.length>0){var e=this.tabs.data[this.tabs.data.length-1];this.$router.push(e.url),e.act=!0,this.currentMenu=e.id}},tabNext:function(){var t=this.tabs.width+this.tabs.scrollLeft-this.mainWidth;t>0&&(t>this.mainWidth?this.tabs.scrollLeft=-this.mainWidth+this.tabs.scrollLeft:(this.tabs.scrollLeft=-(this.tabs.width-this.mainWidth+10),this.tabs.showScrollNext=!1)),this.tabs.showScrollPrev=!0},tabPrev:function(){this.tabs.scrollLeft+this.mainWidth<0?(this.tabs.scrollLeft+=this.mainWidth,this.tabs.showScrollNext=!0):(this.tabs.scrollLeft=0,this.tabs.showScrollNext=!0,this.tabs.showScrollPrev=!1)},initLayout:function(t){this.menu.data=Object(c["a"])(t),this.menu.header=t.filter(function(t){return"0"===t.parentId}),this.menu.tree=Object(c["d"])(t,"0")},findCurrentRoute:function(){var t=this,e=this.menu.data.find(function(e){return e.url===t.$router.currentRoute.path});if(e){var n=function(){var n=e.parentId,i=null,a=e.id;while("0"!==n)i=t.menu.data.find(function(t){return n===t.id}),n=i.parentId,a=i.id;if(["1"].indexOf(a)>-1?t.tabs.enabled=!1:t.tabs.enabled=!0,t.menu.moduleID===a)return{v:!1};var s=t.menu.tree.find(function(t){return t.id===a}),r=s.children?s.children:[];0===r.length&&(t.needMenu=!1),Object.assign(t.menu,{activeName:e.id,openNames:[a],moduleID:a,currentMenus:r}),t.refreshTabs(e.id)}();if("object"===Object(s["a"])(n))return n.v}}},watch:{$route:function(){this.findCurrentRoute()},"tabs.data":function(t){0===t.length&&(this.$router.push("/"),Object.assign(this.menu,{openNames:[],activeName:null}))}},mounted:function(){this.mainWidth=this.$refs.mainWrap.clientWidth,this.menu.width=this.$refs.leftMenu.clientWidth}},h=d,f=(n("f808"),n("69fe"),n("2877")),m=Object(f["a"])(h,i,a,!1,null,"3bcac9c7",null);m.options.__file="Layout.vue";e["default"]=m.exports},"98ae":function(t,e,n){},bedf:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return a});n("a481"),n("4917"),n("f751");var i=function(t){var e=JSON.stringify(t);return JSON.parse(e)},a=function t(e){for(var n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"parentId",s=[],r=0,o=e.length;r<o;r++)if(e[r][a]==i){var c=e[r];n=t(e,e[r].id,a),n.length>0&&(c.children=n),s.push(c)}return s},s=function t(e,n,i){for(var a,s=[],r=Object.assign({parentKey:"parentId",idKey:"id",childrenKey:"children"},n),o=0,c=e.length;o<c;o++)if(e[o][r.parentKey]==i){var u={};for(var l in r.map)u[r.map[l]]=e[o][l];a=t(e,n,e[o][r.idKey]),a.length>0&&(u[r.childrenKey]=a),s.push(u)}return s},r=function(t,e){var n=/\$\{\w+\}/,i=t.match(n);while(i){var a=i[0],s=e[a.replace(/\$\{(\w+)\}/,"$1")];t=t.replace(a,s),i=t.match(n)}return t}},c727:function(t,e,n){},cf1c:function(t,e,n){t.exports=n.p+"/static/img/loading.1ead16c1.gif"},f808:function(t,e,n){"use strict";var i=n("c727"),a=n.n(i);a.a}}]);