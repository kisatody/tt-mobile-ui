(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e24f2"],{"7dc2":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"demo",attrs:{id:"demo"}},[s("div",{staticClass:"top",attrs:{id:"top"}},[s("div",{staticClass:"top-left"},[s("img",{staticClass:"top-back",attrs:{src:"/img/back.svg"},on:{click:t.clickBack}})]),s("div",{staticClass:"top-title"},[t._v(t._s(t.$route.meta.title))]),s("div",{staticClass:"top-right"})]),s("div",{staticClass:"show-box",attrs:{id:"showBox"}},[s("div",{staticClass:"show-title"},[t._v("演示效果")]),s("k-subsection",{staticClass:"show-component",staticStyle:{height:"40px",flex:"auto 0 0"},attrs:{list:["待付款","待收货","待评价"],index:t.index,mainStyle:t.mainStyle,bold:t.bold,type:t.type}})],1),s("div",{staticClass:"params-head",attrs:{id:"head"}},[t._v("参数配置")]),s("div",{staticClass:"params-body",style:{height:t.paramsHeight+"px"}},[s("div",{staticClass:"params-item"},[t._m(0),s("k-subsection",{staticClass:"demo-subsection",attrs:{list:["default","primary","error","warning","success"],index:t.params[0]},on:{change:t.changeStyle}})],1),s("div",{staticClass:"params-item"},[t._m(1),s("k-subsection",{staticClass:"demo-subsection",attrs:{list:["常规","精致"],index:t.params[1]},on:{change:t.changeType}})],1),s("div",{staticClass:"params-item"},[t._m(2),s("k-subsection",{staticClass:"demo-subsection",attrs:{list:["0","1","2"],index:t.params[2]},on:{change:t.changeCurrent}})],1),s("div",{staticClass:"params-item"},[t._m(3),s("k-subsection",{staticClass:"demo-subsection",attrs:{list:["是","否"],index:t.params[3]},on:{change:t.changeBold}})],1)])])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"tag-box"},[s("div",{staticClass:"tag-line"}),s("span",{staticClass:"tag-text"},[t._v("主题样式")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"tag-box"},[s("div",{staticClass:"tag-line"}),s("span",{staticClass:"tag-text"},[t._v("类型选择")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"tag-box"},[s("div",{staticClass:"tag-line"}),s("span",{staticClass:"tag-text"},[t._v("Current值")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"tag-box"},[s("div",{staticClass:"tag-line"}),s("span",{staticClass:"tag-text"},[t._v("字体加粗")])])}],n={data(){return{index:0,mainStyle:"default",type:"normal",bold:!0,paramsHeight:100,params:[0,0,0,0]}},methods:{clickBack(){this.$router.replace("/")},changeStyle(t){const s=["default","primary","error","warning","success"];this.mainStyle=s[t]},changeType(t){const s=["normal","fine"];this.type=s[t]},changeCurrent(t){const s=[0,1,2];this.index=s[t]},changeBold(t){const s=[!0,!1];this.bold=s[t]}},mounted(){this.paramsHeight=document.getElementById("demo").clientHeight-document.getElementById("top").clientHeight-document.getElementById("showBox").clientHeight-document.getElementById("head").clientHeight-20-12}},c=n,l=a("2877"),o=Object(l["a"])(c,i,e,!1,null,"2e630438",null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e24f2.39732400.js.map