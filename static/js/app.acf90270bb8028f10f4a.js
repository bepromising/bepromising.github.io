(function(e){function t(t){for(var r,o,c=t[0],i=t[1],s=t[2],d=0,l=[];d<c.length;d++)o=c[d],a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"static/js/"+({"antv-g6":"antv-g6",dongguan0:"dongguan0",dongguan1:"dongguan1",dongguan2:"dongguan2"}[e]||e)+".acf90270bb8028f10f4a.js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-2b8ecb26":1,"chunk-339094ac":1,"chunk-66a26f52":1,"chunk-0ebeb35a":1,"chunk-10201698":1,"chunk-2156cbd0":1,"chunk-25eb41da":1,"chunk-33f743bf":1,"chunk-36c7b42d":1,"chunk-49d3db8e":1,"chunk-540cd487":1,"chunk-7275b4b8":1,"chunk-98c20e28":1,"chunk-9caa4690":1,"chunk-b1853e1a":1,"chunk-b918758e":1,"chunk-c35d955e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="static/css/"+({"antv-g6":"antv-g6",dongguan0:"dongguan0",dongguan1:"dongguan1",dongguan2:"dongguan2"}[e]||e)+".acf90270bb8028f10f4a.css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],s=c.getAttribute("data-href");if(s===r||s===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},l.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(l)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var s,d=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e),s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,d.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var r={"./Empty.vue":["2c1e","chunk-0d5c3a48"],"./Home.vue":["bb51","chunk-2b8ecb26"],"./Layout.vue":["88e9","chunk-b1853e1a"],"./Login.vue":["a55b","chunk-9caa4690"],"./NotFound.vue":["9703","chunk-0d5ec364"],"./analysis/analysisMining.vue":["c174","chunk-66a26f52"],"./analysis/processMonitor.vue":["bf27","chunk-3b87ed9e"],"./cockpit/GDP.vue":["6b80","chunk-868dc8ee","chunk-49d3db8e"],"./cockpit/GDPbyArea.vue":["db43","chunk-868dc8ee","chunk-7275b4b8"],"./cockpit/RegulationOfServiceIndustryRevenue.vue":["4e55","chunk-331e9d86"],"./cockpit/accountingAnalysis.vue":["aaf2","chunk-868dc8ee","chunk-36c7b42d"],"./cockpit/accountingAnalysisForecast.vue":["20ff","chunk-868dc8ee","chunk-33f743bf"],"./cockpit/energy.vue":["fcaf","chunk-868dc8ee","chunk-10201698"],"./cockpit/forecastGDP.vue":["9c03","chunk-868dc8ee","chunk-0ebeb35a"],"./cockpit/guiXiaFuWuYeMenLei.vue":["c1ee","chunk-3b87a163"],"./cockpit/industry.vue":["4165","chunk-868dc8ee","chunk-540cd487"],"./cockpit/informationCockpit.vue":["4431","chunk-868dc8ee","chunk-2156cbd0"],"./cockpit/investmentInTheFixedAssets.vue":["2e75","chunk-868dc8ee","chunk-25eb41da"],"./cockpit/largerBusinessIncome.vue":["d3f6","chunk-3b881d34"],"./cockpit/municipalEnterprises.vue":["3f2e","chunk-8c1d711e"],"./cockpit/regulatioOofServiceIndustry.vue":["d507","chunk-3b881e2d"],"./dataResources/censusCenter/numberOfCorporateUnitsAndIndustrialEstablishments.vue":["71b3","chunk-1f3d866c"],"./dataResources/citySurveyTeam/GDPIndexOverTheYears.vue":["65de","chunk-2cc6df12"],"./dataResources/citySurveyTeam/GDPIndustriesAddedValue.vue":["1825","chunk-923f6fda"],"./dataResources/citySurveyTeam/tableOfServicesAboveDesignatedSize.vue":["0a54","chunk-74fed96d"],"./dataResources/colligate/banking.vue":["7043","chunk-35fdb3df"],"./dataResources/colligate/cityMonthly.vue":["3bab","chunk-68da29f2"],"./dataResources/colligate/expressDelivery.vue":["e163","chunk-b918758e"],"./dataResources/colligate/finance.vue":["072a","chunk-2c93b2f2"],"./dataResources/colligate/mainEconomicIndicators.vue":["a160","chunk-55c7038d"],"./dataResources/colligate/powerSupply.vue":["230b","chunk-99fcf92c"],"./dataResources/colligate/prices.vue":["e2b6","chunk-3b888d56"],"./dataResources/colligate/privatelyOperated.vue":["ff72","chunk-3b89bfb0"],"./dataResources/colligate/provincialMonthlyReport.vue":["296d","chunk-23f6eeb4"],"./dataResources/colligate/revenue.vue":["7511","chunk-c9719d8e"],"./dataResources/colligate/socialSecurity.vue":["da50","chunk-3b88c3ed"],"./dataResources/colligate/statisticalExpress.vue":["b5bd","chunk-3b873baa"],"./dataResources/colligate/town.vue":["72b1","chunk-f895fbe6"],"./dataResources/colligate/traffic.vue":["1c18","chunk-0f6cfee4"],"./dataResources/colligate/water.vue":["a34b","chunk-110f35d7"],"./dataResources/economy/advancedManufacturingIndustryAddedValue.vue":["6bd2","chunk-4c887dcd"],"./dataResources/economy/summaryOfOutputOfMajorProducts.vue":["a722","chunk-164255fe"],"./dataResources/energyInvestment/classificationOfElectricityConsumptionByIndustry.vue":["df36","chunk-3b88d67a"],"./dataResources/energyInvestment/informationOnInvestmentProjects.vue":["db79","chunk-339094ac"],"./dataResources/energyInvestment/mainIndicatorsOfFixedAssetsInvestment.vue":["6d06","chunk-645a30d3"],"./dataResources/energyInvestment/rsidentialSales.vue":["2517","chunk-98c20e28"],"./dataResources/population/basicStatisiticOnFamilyPlanningByTown.vue":["cf9b","chunk-3b886301"],"./dataResources/population/changesOfHouseholdPopulationOverYears.vue":["db21","chunk-9a320dbc"],"./dataResources/population/landAreaAndPopulationDensityByTown.vue":["cb50","chunk-3b88534f"],"./dataResources/population/migrantPopulationByTown.vue":["9d4a","chunk-727ac882"],"./dataResources/population/movementOfPopulation.vue":["5a51","chunk-210af68f"],"./dataResources/population/permanentPopulationByTown.vue":["a4e1","chunk-456443b8"],"./dataResources/population/populationAndWorkForce.vue":["6918","chunk-9b0d3be6"],"./dataResources/population/populationAndWorkOutside.vue":["5639","chunk-5212bb90"],"./dataResources/population/populationOfHouseholdbyTown.vue":["f4b4","chunk-9a3189f6"],"./dataResources/population/totalPopulationAndPopulationDensityOverTheYears.vue":["3368","chunk-bcfd1bda"],"./system/resource.vue":["4786","chunk-c35d955e","chunk-2d0c19b7"],"./system/role.vue":["f982","chunk-c35d955e","chunk-00764466"],"./system/user.vue":["b979","chunk-c35d955e","chunk-e7022e2c"]};function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="1a5d",e.exports=o},"41cb":function(e,t,n){"use strict";n.d(t,"b",function(){return i});n("7f7f"),n("cadf"),n("551c"),n("097d");var r=n("a026"),o=n("8c4f"),a=n("f121"),u=n("ed08");r["default"].use(o["a"]);var c=new o["a"]({routes:[{path:"/login",name:"login",component:function(){return n.e("chunk-9caa4690").then(n.bind(null,"a55b"))}},{path:"/*",name:"Layout",component:function(){return n.e("chunk-b1853e1a").then(n.bind(null,"88e9"))},children:[]}]});"token"===a["b"].mode&&c.beforeEach(function(e,t,n){"Layout"===e.matched[0].name?Object(u["c"])("user")?n():n("/login"):n()}),c.afterEach(function(e){e.meta&&(e.meta.title?document.title=e.meta.title:e.meta.subTitle?document.title=a["b"].title+e.meta.subTitle:document.title=a["b"].title)});var i=function(e){c.matcher=new o["a"]({routes:e})};t["a"]=c},4779:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r,o=n("a026"),a=n("41cb"),u=n("2f62"),c=(n("7f7f"),n("7514"),n("a481"),n("ac6a"),n("a322")),i=(n("96cf"),n("3040")),s=n("f121"),d=n("ed08"),l=n("a106"),f={state:{tokenTimer:null,needAdjust:!1,loading:!1,menuState:!0,authMenus:[]},actions:Object(c["a"])({},s["e"].action.getAuthMenus,function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,a,u=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=u.length>1&&void 0!==u[1]?u[1]:{},o=null,o){e.next=8;break}return e.next=6,Object(l["a"])(r);case 6:a=e.sent,a.data.length>0?(o=a.data,Object(d["c"])("authMenus",o)):o=[];case 8:o.length>0&&n(s["e"].mutation.initRouter,o),r.callback&&r.callback(o);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()),mutations:(r={},Object(c["a"])(r,s["e"].mutation.switchLoading,function(e,t){e.loading=t.loading}),Object(c["a"])(r,s["e"].mutation.switchMenu,function(e,t){e.menuState=t}),Object(c["a"])(r,s["e"].mutation.initRouter,function(e,t){if(0===t.length||e.authMenus.length>0)return!1;var r=[];t.forEach(function(e){e.url&&r.push({path:e.url,name:e.url.replace(/^\//,"").replace("/","-"),component:function(){return n("1a5d")("./".concat(e.url.replace(/^\//,""),".vue"))},meta:{keepAlive:!0}})});var o=r.find(function(e){return/[home|index]/i.test(e.path)});o?r.push({path:"/",name:"Empty",redirect:o.path}):r.push({path:"/",name:"Empty",component:function(){return n.e("chunk-0d5c3a48").then(n.bind(null,"2c1e"))}}),r.push({path:"/*",name:"NotFound",component:function(){return n.e("chunk-0d5ec364").then(n.bind(null,"9703"))}}),e.authMenus=r.map(function(e){return e});var u=a["a"].options.routes.find(function(e){return"Layout"===e.name});u.path="/",u.children=r,Object(a["b"])(a["a"].options.routes)}),r)};o["default"].use(u["a"]);var p=new u["a"].Store({modules:{system:f}}),_=n("e069"),h=n.n(_),b=(n("20d6"),n("6c7b"),n("6bde"));n("6762"),n("2fdb");Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),r=n.length>>>0;if(0===r)return!1;var o=0|t,a=Math.max(o>=0?o:r-Math.abs(o),0);while(a<r){if(n[a]===e)return!0;a++}return!1}}),Array.prototype.difference||(Array.prototype.difference=function(e,t,n){var r,o=this,a={add:[],remove:[]};switch(this.forEach(function(n,r){e.find(function(e){return e[t]===n[t]})||a.remove.push(r)}),e.forEach(function(e){o.find(function(n){return n[t]===e[t]})||a.add.push(e)}),n){case"all":r=a;break;case"remove":r=a["remove"];break;default:r=a["add"];break}return r}),Array.prototype.sum||(Array.prototype.sum=function(){var e,t=0;return this.forEach(function(n){switch(Object(b["a"])(n)){case"number":t+=n;break;default:e=parseFloat(n),e&&(t+=e);break}}),t}),Array.prototype.fill||Object.defineProperty(Array.prototype,"fill",{value:function(e){if(null==this)throw new TypeError("this is null or not defined");var t=Object(this),n=t.length>>>0,r=arguments[1],o=r>>0,a=o<0?Math.max(n+o,0):Math.min(o,n),u=arguments[2],c=void 0===u?n:u>>0,i=c<0?Math.max(n+c,0):Math.min(c,n);while(a<i)t[a]=e,a++;return t}}),Array.prototype.update||(Array.prototype.update=function(e,t){var n=this,r={key:"id",updatePK:null,action:null};if(t)for(var o in t)r[o]=t[o];if(r.updatePK){var a=this.findIndex(function(e){return e[r.key]===r.updatePK}),u=e.find(function(e){return e[r.key]===r.updatePK});a&&u&&this.splice(a,1,u)}else if(Array.isArray(e))this.forEach(function(t,o){e.find(function(e){return e[r.key]===t[r.key]})||n.splice(o,1)}),e.forEach(function(e){n.find(function(t){return t[r.key]===e[r.key]})||n.push(e)});else{var c=this.findIndex(function(t){return t[r.key]===e[r.key]});c>-1?"remove"===r.action?this.splice(c,1):this.splice(c,1,e):this.push(e)}}),Array.prototype.toUrlParmas||(Array.prototype.toUrlParmas=function(e){var t={};return this.forEach(function(n,r){for(var o in n)t["".concat(e,"[").concat(r,"].").concat(o)]=n[o]}),t});var g=n("bc3a"),v=n.n(g),m=n("7c9b"),y=n("cadb"),k=n("4328"),O=n.n(k);n("652f"),n("63bf"),n("4779");o["default"].use(h.a),o["default"].config.productionTip=!1;var E={$session:d["c"],resetObject:m["c"],fillObject:m["d"],dateTimeFomat:y["a"]};for(var R in E)o["default"].prototype[R]||(o["default"].prototype[R]=E[R]);o["default"].prototype.$http||(v.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",v.a.defaults.baseURL=s["b"].baseUrl,v.a.defaults.transformRequest=[function(e,t){var n,r=t["Content-Type"]||t.post["Content-Type"];switch(r){case"application/json":n=JSON.stringify(e);break;case"application/x-www-form-urlencoded":var o={};for(var a in e)null!==e[a]&&""!==e[a]&&void 0!==e[a]&&(o[a]=e[a]);n=O.a.stringify(o,{encodeValuesOnly:!0,skipNulls:!0});break;default:n=e;break}return n}],o["default"].prototype.$http=v.a),new o["default"]({el:"#app",router:a["a"],store:p,mixins:[l["c"]]})},"63bf":function(e,t,n){},"652f":function(e,t,n){},"7c9b":function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return c});n("6b54");var r=n("6bde"),o=function(e,t,n){if(t=t||null,n=n||[],null==e)throw new TypeError("Cannot convert undefined or null to object");for(var r in e)-1===n.indexOf(r)&&(e[r]=Array.isArray(e[r])?[]:t);return e},a=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n in e)e[n]=t[n];return e},u=function e(t,n){for(var o in n=n||{},t)t.hasOwnProperty(o)&&("object"===Object(r["a"])(t[o])?(n[o]="[object Array]"===Object.prototype.toString.call(t[o])?[]:{},e(t[o],n[o])):n[o]=t[o]);return n},c=function e(t,n){for(var r in n)"[object Object]"==Object.prototype.toString.call(n[r])?e(t[r],n[r]):t[r]=n[r];return t}},a106:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"b",function(){return d});n("7f7f"),n("a481"),n("cadf"),n("551c"),n("097d");var r=n("f121"),o=n("bc3a"),a=n.n(o),u=n("41cb"),c=n("ed08"),i=function(){return a()({method:"get",url:"".concat("http://19.104.164.20:8080/tjj/static","/data/authMenu.json"),transformResponse:[function(e){return JSON.parse(e)}]})},s={beforeCreate:function(){var e=this;this.$http.interceptors.response.use(function(e){return e},function(t){return e.$Message.error("请求失败，请稍候重试！"),Promise.reject(t)})},created:function(){this.$http.defaults.withCredentials=!0}},d={methods:{dropDownHandler:function(e){switch(e){case"logout":this.$Modal.confirm({title:"系统提示",content:"您是否要退出系统？",onOk:function(){sessionStorage.clear(),location.reload()}});break}}},created:function(){var e=this;this.$store.dispatch(r["e"].action.getAuthMenus,{callback:function(t){e.$router.push(location.hash.replace("#","")),e.initLayout(t)}})}};u["a"].beforeEach(function(e,t,n){"NotFound"===e.name?n():"Layout"===e.matched[0].name?Object(c["c"])("user")?n():n("/login"):n()})},cadb:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return format}),__webpack_require__.d(__webpack_exports__,"a",function(){return dateTimeFomat}),__webpack_require__.d(__webpack_exports__,"c",function(){return getPrevQuater});var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("3b2b"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("6b54"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__),_num__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d9bc"),secondToHour=function(e){return e>0?Math.round(e/60):0},format=function format(_format,time){var timeStyle={yyyy:function(e){return e.getFullYear()},yy:function(e){return e.getFullYear().toString().substr(2,2)},MM:function(e){return Object(_num__WEBPACK_IMPORTED_MODULE_3__["a"])(e.getMonth()+1,2)},M:function(e){return e.getMonth()+1},dd:function(e){return Object(_num__WEBPACK_IMPORTED_MODULE_3__["a"])(e.getDate(),2)},d:function(e){return Object(_num__WEBPACK_IMPORTED_MODULE_3__["a"])(e.getDate(),2)},hh:function(e){return Object(_num__WEBPACK_IMPORTED_MODULE_3__["a"])(e.getHours(),2)},mm:function(e){return Object(_num__WEBPACK_IMPORTED_MODULE_3__["a"])(e.getMinutes(),2)},ss:function(e){return Object(_num__WEBPACK_IMPORTED_MODULE_3__["a"])(e.getSeconds(),2)}};for(var k in time=time?new Date(time):new Date,timeStyle)eval("/("+k+")/g").test(_format)&&(_format=_format.replace(RegExp.$1,timeStyle[k](time)));return _format},dateFormat=function(e){return format("yyyy-MM-dd",e)},dateTimeFomat=function(e){return format("yyyy-MM-dd hh:mm:ss",e)},getCurrentQuater=function(e){var t=e?new Date(e):new Date,n=t.getMonth(),r=["第一季","第二季","第三季度","第四季度"];return r[Math.floor(n/3)]},getPrevQuater=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t?new Date(t):new Date,r=n.getMonth(),o=["第一季","第二季","第三季度","第四季度"],a=Math.floor(r/3),u={};return a>0?(u.year=n.getFullYear().toString(),u.quater=o[a-1]):(u.year=(n.getFullYear()-1).toString(),u.quater=o[3]),e?u:u.year},getPrevMonth=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"string",t=arguments.length>1?arguments[1]:void 0,n=t?new Date(t):new Date,r=n.getMonth(),o=n.getFullYear();return 0===r&&(o-=1,r=12),"string"===e?[o,Object(_num__WEBPACK_IMPORTED_MODULE_3__["a"])(r,2)].join("-"):{year:o.toString(),month:r.toString()}}},d9bc:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n("6b54");var r=function(e){return e<10?"0"+e.toString():e}},ed08:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return c});n("ac6a"),n("a481"),n("28a5"),n("f751");var r=n("c93e"),o=(n("96cf"),n("3040")),a=(n("f121"),function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t,n,o){var a,u,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:o=Object(r["a"])({each:4,delay:0,dataOnly:!0},o),a=[],u=o.common||{method:"post"};case 2:if(!(t.length>0)){e.next=14;break}return c=t.splice(0,o.each).map(function(e){return n(Object(r["a"])({},u,e))}),e.t0=a,e.next=7,n.all(c);case 7:if(e.t1=e.sent,a=e.t0.concat.call(e.t0,e.t1),!(o.delay>0)){e.next=12;break}return e.next=12,new Promise(function(e,t){window.setTimeout(function(){e()},o.delay)});case 12:e.next=2;break;case 14:return e.abrupt("return",!0===o.dataOnly?a.map(function(e){return e.data}):a);case 15:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}()),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r="shSoft-"+e;if(!e||!t){var o=window.sessionStorage.getItem(r);return n?JSON.parse(o):o}n?window.sessionStorage.setItem(r,JSON.stringify(t)):window.sessionStorage.setItem(r,t)},c=function(e){var t=this;n.e("chunk-ab2c94ba").then(n.t.bind(null,"2440",7)).then(function(n){var r=e.url,o=e.data;e.fileName||(e.fileName=Date.now()),window.Blob?t.$http({method:"post",url:r,responseType:"blob",headers:{post:{"Content-Type":"application/json"}},data:{args:o}}).then(function(t){var r=new Blob([t.data],{type:"application/vnd.ms-excel;charset=utf-8"});n.saveAs(r,"".concat(e.fileName,".xls"))},function(e){t.$Message.error("请求失败，请稍候重试！")}):t.$Modal.error({title:"系统提示",content:"当前浏览器不支持此模块的导出！"})})}},f121:function(e,t,n){"use strict";n("cadf"),n("551c"),n("097d"),n("f751");var r={refreshToken:"refreshToken",switchLoading:"switchLoading",initRouter:"initRouter",switchMenu:"switchMenu"},o={getAuthMenus:"GET_AUTH_MENU",refreshToken:"REFRESH_TOKEN"},a={groupChaneState:"group/changeState.do",groupDelete:"group/delete.do",groupGet:"group/get.do",groupList:"group/list.do",groupField:"group/listGroupField.do",groupResources:"group/listGroupResource.do",groupUsers:"group/listGroupUser.do",userListGroup:"group/listUserGroup.do",groupOrgTree:"group/orgTree.do",groupSave:"group/save.do",groupSaveField:"group/saveGroupField.do",groupSaveResource:"group/saveGroupResource.do",userSaveGroup:"group/saveUserGroup.do",groupUpdate:"group/update.do",resourceDelete:"resource/delete.do",resourceFieldTree:"resource/fieldTree.do",resourceGet:"resource/get.do",resourceSave:"resource/save.do",resourceTree:"resource/tree.do",resourceUpdate:"resource/update.do",userDelete:"user/delete.do",userDeleteRelation:"user/deleteRelation.do",userGet:"user/get.do",userList:"user/list.do",useGroupAuth:"user/listGroupAuth.do",userResourceAuth:"user/listResourceAuth.do",userLogin:"user/login.do",userSave:"user/save.do",userUpdate:"user/update.do"},u={required:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign({required:!0,message:"不能为空",trigger:"blur"},e)}},c={groupType:{0:"角色",1:"部门",2:"镇街"},yOrN:{1:"是",0:"否"},state:{0:"停用",1:"启用"}},i={mutation:r,action:o,API:a,dict:c,validate:u},s={listJob:"dampeJob/listJob.do",uploadFile:"dampeFile/uploadFile.do",listFile:"dampeFile/listFile.do",detail:"dampeFile/viewContent.do",deleteFile:"dampeFile/deleteFile.do",saveFile:"dampeFile/saveContent.do",executeJob:"dampeJob/execJob.do",startJob:"dampeJob/startJob.do",stopJob:"dampeJob/stopJob.do",deleteJob:"dampeJob/deleteJob.do"},d={API:s},l={resourceStat:"V_RESOURCES_STATISTICS"};for(var f in l)-1===l[f].indexOf("bddiadata/")&&(l[f]="bddiadata/getBddiaData.do?name="+l[f]);var p={API:l},_=n("7c9b"),h={GDP_PREVIOUS_YEAR_ACCOUNTING_TENDENCY:"GDP_PREVIOUS_YEAR_ACCOUNTING_TENDENCY",GDP_PREVIOUS_YEAR_ACCOUNTING_Y:"GDP_PREVIOUS_YEAR_ACCOUNTING_Y",GDP_PREVIOUS_YEAR_ACCOUNTING_Y_REPORT:"GDP_PREVIOUS_YEAR_ACCOUNTING_Y_REPORT",GDP_AREA_MAP:"GDP_AREA_MAP",GDP_AREA_REPORT:"GDP_AREA_REPORT",GDP_TOWN_LESS_DEVELOPER:"GDP_TOWN_LESS_DEVELOPER"};for(var b in h)-1===h[b].indexOf("bddiadata/")&&(h[b]="bddiadata/getBddiaData.do?name="+h[b]);var g={API:h};n.d(t,"b",function(){return v}),n.d(t,"e",function(){return i}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"a",function(){return g});var v={mode:"demo",ajaxTimeout:60,baseUrl:"/tjj",title:"东莞市统计局大数据分析应用平台",token:{mode:1,refreshLimit:60,invailCode:["10000"],url:"/tjj/shsoft-identify-server/"},buttonsAuth:!1,tabs:{enabled:!0,max:10,type:1},pageSize:15};window.globalAppConfig&&Object(_["b"])(v,window.globalAppConfig)}});