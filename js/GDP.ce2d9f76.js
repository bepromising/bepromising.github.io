(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["GDP"],{"0018":function(t,a,e){"use strict";var r=function(t,a){var e=a._c;return e("div",{staticClass:"nav-tag",style:{backgroundColor:a.props.color}},[e("img",{staticClass:"nav-tag__icon",attrs:{src:a.props.icon}}),e("div",{staticClass:"nav-tag__text"},[a._v(a._s(a.props.text))]),e("div",{staticClass:"nav-tag__value"},[a._v(a._s(a.props.value))])])},n=[],i=(e("cdef"),e("2877")),o={},c=Object(i["a"])(o,r,n,!0,null,"379869cd",null);a["a"]=c.exports},"23a0":function(t,a,e){},"2e58":function(t,a,e){},"7f29":function(t,a,e){"use strict";e.d(a,"b",function(){return n}),e.d(a,"a",function(){return i});e("28a5");var r=e("768b");e("6b54"),e("a481");function n(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t=+t;var e=Math.pow(10,a);return t<1/e?+t.toPrecision(1):Math.round(t*e)/e}function i(t,a){var e=(t+"").split("."),n=Object(r["a"])(e,2),i=n[1],o=void 0===i?"":i,c=(a+"").split("."),s=Object(r["a"])(c,2),l=s[1],u=void 0===l?"":l,d=Math.pow(10,Math.max(o.length,u.length));return(t*d+a*d)/d}},a55d:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"subpage"},[e("Row",{staticClass:"card-box-row"},[t._l(t.indicators1,function(a){return e("Col",{key:a.text,attrs:{span:24/t.indicators1.length}},[e("Indicator",t._b({},"Indicator",a,!1))],1)}),e("Col",{attrs:{lg:10}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("GDP产业占比分析")]),e("Echart",{staticClass:"chart",attrs:{option:t.chart1}})],1)],1),e("Col",{attrs:{lg:14}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("GDP总量全镇分布")]),e("Echart",{staticClass:"chart",attrs:{option:t.chart2}})],1)],1),e("Col",{attrs:{lg:10}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("当年季度GDP趋势分析")]),e("Echart",{staticClass:"chart",attrs:{option:t.chart3}})],1)],1),e("Col",{attrs:{lg:14}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("产业GDP趋势分析")]),e("Echart",{staticClass:"chart",attrs:{option:t.chart4}})],1)],1),t._l(t.indicators2,function(a){return e("Col",{key:a.text,attrs:{span:24/t.indicators2.length}},[e("Indicator",t._b({},"Indicator",a,!1))],1)}),e("Col",{attrs:{lg:10}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("规模以上工业企业资产总量占比分析")]),e("Echart",{staticClass:"chart",attrs:{option:t.chart5}})],1)],1),e("Col",{attrs:{lg:14}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("规模以上工业企业总量趋势分析")]),e("Echart",{staticClass:"chart",attrs:{option:t.chart6}})],1)],1),e("Col",{attrs:{lg:10}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("进出口总值占比分析")]),e("Echart",{staticClass:"chart",attrs:{option:t.chart7}})],1)],1),e("Col",{attrs:{lg:14}},[e("Card",[e("p",{attrs:{slot:"title"},slot:"title"},[t._v("进出口总值趋势分析")]),e("Echart",{staticClass:"chart",attrs:{option:t.chart8}})],1)],1)],2)],1)},n=[],i=e("09d9"),o=e("0018"),c=e("cf45"),s=e("c3cc"),l=e("7f29"),u={components:{Echart:i["a"],Indicator:o["a"]},data:function(){return{indicators1:[{color:"#2d8cf0",icon:"./icon/year.png",text:"当年GDP",value:"106.21亿元"},{color:"#ed3f14",icon:"./icon/quarter.png",text:"当季GDP",value:"26.18亿元"},{color:"#19be6b",icon:"./icon/tongbi.png",text:"季度同比",value:"6%"},{color:"#9839ca",icon:"./icon/huanbi.png",text:"季度环比",value:"8%"}],chart1:{tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{type:"pie",radius:[0,"75%"],label:{formatter:"{b}",position:"inner",emphasis:{textStyle:{fontSize:20}}},data:[{value:28171,name:"第一产业（农业）"},{value:18592,name:"第二产业（工业）"},{value:25893,name:"第三产业（服务业）"}]}]},chart2:function(){var t=[Object(c["a"])(15,function(t){return Object(l["b"])(2*(.2*Math.random()+1),2)}),Object(c["a"])(15,function(t){return Object(l["b"])(3*(.2*Math.random()+1),2)}),Object(c["a"])(15,function(t){return Object(l["b"])(3*(.2*Math.random()+1),2)})],a=t.reduce(function(t,a){return t+a.reduce(function(t,a){return t+a},0)},0);return{legend:{x:"center",y:"top"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:20,right:70,bottom:"3%",containLabel:!0},yAxis:[{name:"亿元",type:"value"},{name:"百分比",type:"value"}],xAxis:{type:"category",data:["石碣社区","唐洪村","水南村","石碣村","刘屋村","横滘村","鹤田厦村","四甲村","沙腰村","梁家村村","桔洲村","单屋村","涌口村","西南村","黄泗围村"]},series:[{name:"农业",type:"bar",stack:"总量",label:{show:!0,formatter:"{a}"},data:t[0]},{name:"工业",type:"bar",stack:"总量",label:{show:!0,formatter:"{a}"},data:t[1]},{name:"服务业",type:"bar",stack:"总量",label:{show:!0,formatter:"{a}"},data:t[2]},{name:"GDP总量占比",type:"line",yAxisIndex:1,data:Object(c["a"])(15,function(e){return Object(l["b"])(t.reduce(function(t,a){return a[e]+t},0)/a*100,2)})}]}},chart3:function(){var t=Object(s["a"])(5,25,.2,.05).map(function(t){return t.toFixed(2)});return{legend:{x:"center",y:"top"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:20,right:70,bottom:"3%",containLabel:!0},yAxis:[{name:"亿元",type:"value"},{name:"百分比",type:"value"}],xAxis:{type:"category",data:["第一季度","第二季度","第三季度","第四季度"]},series:[{name:"GDP",type:"bar",data:t.slice(1)},{name:"环比",type:"line",yAxisIndex:1,data:Object(s["b"])(t)},{name:"同比",type:"line",yAxisIndex:1,data:Object(s["a"])(4,5,3,.01).map(function(t){return t.toFixed(2)})}]}},chart4:function(){var t={"GDP农业":Object(s["a"])(5,25,.1,.05).map(function(t){return+t.toFixed(2)}),"GDP工业":Object(s["a"])(5,35,.1,.05).map(function(t){return+t.toFixed(2)}),"GDP服务业":Object(s["a"])(5,40,.1,.05).map(function(t){return+t.toFixed(2)})};return{legend:{x:"center",y:"top"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:20,right:70,bottom:"3%",containLabel:!0},yAxis:[{name:"亿元",type:"value"},{name:"增长率",type:"value"}],xAxis:{type:"category",data:["2015","2016","2017","2018"]},series:[{name:"农业",type:"bar",barGap:0,label:{show:!0,formatter:"{a}"},data:t["GDP农业"].slice(1)},{name:"工业",type:"bar",label:{show:!0,formatter:"{a}"},data:t["GDP工业"].slice(1)},{name:"服务业",type:"bar",label:{show:!0,formatter:"{a}"},data:t["GDP服务业"].slice(1)},{name:"农业增长率",type:"line",yAxisIndex:1,data:Object(s["b"])(t["GDP农业"])},{name:"工业增长率",type:"line",yAxisIndex:1,data:Object(s["b"])(t["GDP工业"])},{name:"服务业增长率",type:"line",yAxisIndex:1,data:Object(s["b"])(t["GDP服务业"])}]}},indicators2:[{color:"#7275ed",icon:"./icon/assets.png",text:"规模以上工业企业资产总量",value:"46.98亿元"},{color:"#ea9a27",icon:"./icon/assets+.png",text:"规模以上工业企业资产增长率",value:"6%"},{color:"#9dc71b",icon:"./icon/io.png",text:"进出口总值",value:"49.16亿美元"},{color:"#2dc9f0",icon:"./icon/io+.png",text:"进出口增长率",value:"18%"}],chart5:{tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},series:[{name:"类型",type:"pie",radius:["25%","85%"],roseType:"area",label:{formatter:"{b}: {c}亿元 ({d}%)"},data:[{value:16.68,name:"工业"},{value:13.85,name:"商业"},{value:17.63,name:"其他"}]}]},chart6:function(){var t={"GDP农业":Object(s["a"])(6,25,.1,.05).map(function(t){return+t.toFixed(2)}),"GDP工业":Object(s["a"])(6,35,.1,.05).map(function(t){return+t.toFixed(2)}),"GDP服务业":Object(s["a"])(6,40,.1,.05).map(function(t){return+t.toFixed(2)}),"规模以上农业":Object(s["a"])(6,10,.1,.05).map(function(t){return+t.toFixed(2)}),"规模以上工业":Object(s["a"])(6,20,.1,.05).map(function(t){return+t.toFixed(2)}),"规模以上服务业":Object(s["a"])(6,25,.1,.05).map(function(t){return+t.toFixed(2)})};return{legend:{x:"center",y:"top"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:20,right:70,bottom:"3%",containLabel:!0},yAxis:[{name:"数量",type:"value"},{name:"增长率",type:"value"}],xAxis:{type:"category",data:["2014","2015","2016","2017","2018"]},series:[{name:"农业",type:"bar",stack:"总量",label:{show:!0,formatter:"{a}"},data:t["规模以上农业"].slice(1)},{name:"工业",type:"bar",stack:"总量",label:{show:!0,formatter:"{a}"},data:t["规模以上工业"].slice(1)},{name:"服务业",type:"bar",stack:"总量",label:{show:!0,formatter:"{a}"},data:t["规模以上服务业"].slice(1)},{name:"农业增长率",type:"line",yAxisIndex:1,data:Object(s["b"])(t["规模以上农业"])},{name:"工业增长率",type:"line",yAxisIndex:1,data:Object(s["b"])(t["规模以上工业"])},{name:"服务业增长率",type:"line",yAxisIndex:1,data:Object(s["b"])(t["规模以上服务业"])}]}},chart7:{tooltip:{trigger:"item",formatter:"{b}: {c}亿美元 ({d}%)"},series:[{type:"pie",radius:[0,"40%"],label:{formatter:"{b}",position:"inner",emphasis:{textStyle:{fontSize:20}}},data:[{value:14.25,name:"进口"},{value:32.66,name:"出口"}]},{type:"pie",radius:["50%","60%"],label:{formatter:"{b}: {c}亿美元 ({d}%)"},data:[{value:3.47,name:"农业"},{value:37.64,name:"工业"},{value:6.01,name:"服务业"}]}]},chart8:function(){var t={"进口":Object(s["a"])(5,14,.1,.05).map(function(t){return+t.toFixed(2)}),"出口":Object(s["a"])(5,34,.1,.05).map(function(t){return+t.toFixed(2)})};return{legend:{x:"center",y:"top"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:20,right:70,bottom:"3%",containLabel:!0},yAxis:[{name:"亿美元",type:"value"},{name:"增长率",type:"value"}],xAxis:{type:"category",data:["2015","2016","2017","2018"]},series:[{name:"进口",type:"bar",barGap:0,data:t["进口"].slice(1)},{name:"出口",type:"bar",data:t["出口"].slice(1)},{name:"进口增长率",type:"line",yAxisIndex:1,data:Object(s["b"])(t["进口"])},{name:"出口增长率",type:"line",yAxisIndex:1,data:Object(s["b"])(t["出口"])}]}}}}},d=u,p=(e("c8a0"),e("2877")),b=Object(p["a"])(d,r,n,!1,null,"7a6baedc",null);a["default"]=b.exports},c3cc:function(t,a,e){"use strict";e.d(a,"b",function(){return n}),e.d(a,"a",function(){return i});e("55dd");var r=e("cf45");function n(t){var a=[];return t.reduce(function(t,e){return a.push((e/t*100-100).toFixed(2)),e}),a}function i(t,a){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.2,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return Object(r["a"])(t,function(t){return a*(Math.random()*(2*e)+1-e)*(1+t*n)})}},c8a0:function(t,a,e){"use strict";var r=e("2e58"),n=e.n(r);n.a},cdef:function(t,a,e){"use strict";var r=e("23a0"),n=e.n(r);n.a}}]);
//# sourceMappingURL=GDP.ce2d9f76.js.map