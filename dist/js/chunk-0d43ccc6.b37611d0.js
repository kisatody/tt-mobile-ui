(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d43ccc6"],{2207:function(t,i,s){},2438:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t._self._c;return i("div",{staticClass:"demo",attrs:{id:"demo"}},[i("div",{staticClass:"top",attrs:{id:"top"}},[i("div",{staticClass:"top-left"},[i("img",{staticClass:"top-back",attrs:{src:"/img/back.svg"},on:{click:t.clickBack}})]),i("div",{staticClass:"top-title"},[t._v(t._s(t.$route.meta.title))]),i("div",{staticClass:"top-right"})]),i("div",{staticClass:"show-box",attrs:{id:"showBox"}},[i("div",{staticClass:"show-title"},[t._v("演示效果")]),i("k-slider",{staticClass:"show-component",staticStyle:{flex:"auto 0 0"},attrs:{selectColor:t.selectColor,lienHeight:t.lienHeight,circleR:t.circleR,circleColor:t.circleColor,region:t.region,value:t.value,disable:t.disable,showValue:t.showValue},on:{change:t.valueChange}}),i("div",{staticStyle:{"margin-top":"20px","border-radius":"8px","background-color":"rgb(230,230,230)","border-style":"dashed","border-width":"0.5px","border-color":"rgb(200,200,200)","font-size":"16px",padding:"8px",color:"rgba(0,0,0,0.5)",flex:"auto 0 0"}},[t._v("滑块值："+t._s(t.valueRecord))])],1),i("div",{staticClass:"params-head",attrs:{id:"head"}},[t._v("参数配置")]),i("div",{staticClass:"params-body",style:{height:t.paramsHeight+"px"}},[i("div",{staticClass:"params-item"},[t._m(0),i("k-subsection",{staticClass:"demo-subsection",attrs:{list:["primary","error","warning","success"],index:t.params[0]},on:{change:t.changeStyle}})],1),i("div",{staticClass:"params-item"},[t._m(1),i("k-subsection",{staticClass:"demo-subsection",attrs:{list:["是","否"],index:t.params[1]},on:{change:t.changeSize}})],1),i("div",{staticClass:"params-item"},[t._m(2),i("k-subsection",{staticClass:"demo-subsection",attrs:{list:["0-100","-50-50","20-80"],index:t.params[2]},on:{change:t.changeMinMax}})],1),i("div",{staticClass:"params-item"},[t._m(3),i("k-subsection",{staticClass:"demo-subsection",attrs:{list:["是","否"],index:t.params[3]},on:{change:t.changeDisable}})],1),i("div",{staticClass:"params-item"},[t._m(4),i("k-subsection",{staticClass:"demo-subsection",attrs:{list:["1","5","10"],index:t.params[4]},on:{change:t.changeStep}})],1),i("div",{staticClass:"params-item"},[t._m(5),i("k-subsection",{staticClass:"demo-subsection",attrs:{list:["白色","海蓝","天青"],index:t.params[5]},on:{change:t.changeIndicator}})],1),i("div",{staticClass:"params-item"},[t._m(6),i("k-subsection",{staticClass:"demo-subsection",attrs:{list:["是","否"],index:t.params[6]},on:{change:t.changeHang}})],1),i("div",{staticClass:"params-item"},[t._m(7),i("k-subsection",{staticClass:"demo-subsection",attrs:{list:["横向","竖向"],index:t.params[7]},on:{change:t.changeType}})],1)])])},a=[function(){var t=this,i=t._self._c;return i("div",{staticClass:"tag-box"},[i("div",{staticClass:"tag-line"}),i("span",{staticClass:"tag-text"},[t._v("自定义颜色")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"tag-box"},[i("div",{staticClass:"tag-line"}),i("span",{staticClass:"tag-text"},[t._v("自定义尺寸")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"tag-box"},[i("div",{staticClass:"tag-line"}),i("span",{staticClass:"tag-text"},[t._v("最大值最小值")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"tag-box"},[i("div",{staticClass:"tag-line"}),i("span",{staticClass:"tag-text"},[t._v("是否禁用")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"tag-box"},[i("div",{staticClass:"tag-line"}),i("span",{staticClass:"tag-text"},[t._v("步进值")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"tag-box"},[i("div",{staticClass:"tag-line"}),i("span",{staticClass:"tag-text"},[t._v("自定义指示器")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"tag-box"},[i("div",{staticClass:"tag-line"}),i("span",{staticClass:"tag-text"},[t._v("使用悬浮提示值")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"tag-box"},[i("div",{staticClass:"tag-line"}),i("span",{staticClass:"tag-text"},[t._v("显示形式")])])}],c=function(){var t=this,i=t._self._c;return i("div",{ref:"slider",staticClass:"k-slider",style:{opacity:t.disable?.5:1}},[i("div",{ref:"light",staticClass:"k-slider-lightArea",style:t.lightAreaStyle,on:{click:t.lineClick}}),i("div",{staticClass:"k-slider-darkArea",style:t.darkAreaStyle,on:{click:t.lineClick}}),i("div",{staticClass:"k-slider-circle",style:[t.circleStyle],on:{touchstart:t.touchStart,touchmove:function(i){return i.preventDefault(),t.touchMove.apply(null,arguments)},touchend:t.touchEnd}})])},h=[],l={name:"k-slider",data(){return{percent:0,startX:-1,lastWidth1:0,left:0,width:0,width1:0,width2:0,time:300}},watch:{value(t){this.setPosition()}},computed:{lightAreaStyle(){const t={};t.transitionDuration=this.time+"ms";const i={primary:"#007aff",success:"#4cd964",warning:"#f0ad4e",error:"#dd524d"};return t.backgroundColor=i[this.selectColor],i[this.selectColor]||(t.backgroundColor=this.selectColor),t.height=this.lienHeight+"px",t.width=this.width1+"px",t},darkAreaStyle(){const t={};return t.transitionDuration=this.time+"ms",t.height=this.lienHeight+"px",t.width=this.width2+"px",t},circleStyle(){const t={};return t.transitionDuration=this.time+"ms",t.width=this.circleR+"px",t.height=this.circleR+"px",t.backgroundColor=this.circleColor,t.left=this.left+"px",t.top=25-this.circleR/2+"px",t}},methods:{lineClick(t){this.width1=t.clientX-t.target.parentElement.offsetLeft,this.width2=this.width-this.width1,this.left=this.width1-this.circleR/2,this.percent!=Math.round(this.width1/this.width*(this.region[1]-this.region[0]))&&(this.percent=Math.round(this.width1/this.width*(this.region[1]-this.region[0])),this.$emit("change",this.percent+this.region[0])),this.lastWidth1=this.width1},touchStart(t){this.time=0,-1==this.startX&&(this.startX=t.touches[0].clientX)},touchMove(t){this.disable||(this.left=this.lastWidth1+t.touches[0].clientX-this.startX-this.circleR/2,this.width1=this.lastWidth1+t.touches[0].clientX-this.startX,this.width2=this.width-this.width1,this.width1<=0&&(this.width1=0,this.width2=this.width,this.left=0-this.circleR/2),this.width2<=0&&(this.width1=this.width,this.width2=0,this.left=this.width-this.circleR/2),this.percent!=Math.round(this.width1/this.width*(this.region[1]-this.region[0]))&&(this.percent=Math.round(this.width1/this.width*(this.region[1]-this.region[0])),this.$emit("change",this.percent+this.region[0])))},touchEnd(){this.time=300,this.startX=-1,this.lastWidth1=this.width1},setPosition(){this.percent=this.value,this.width=this.$refs.slider.clientWidth,this.left=this.percent/(this.region[1]-this.region[0])*this.width-this.circleR/2,this.width1=this.left+this.circleR/2,this.lastWidth1=this.width1,this.width2=this.width-this.width1}},mounted(){this.setPosition()},props:{selectColor:{type:String,default:"primary"},lienHeight:{type:Number,default:3},circleR:{type:Number,default:25},circleColor:{type:String,default:"white"},region:{type:Array,default(){return[0,100]}},value:{type:Number,default:30},disable:{type:Boolean,default:!1},showValue:{type:Boolean,default:!1}}},r=l,n=(s("b91a"),s("2877")),o=Object(n["a"])(r,c,h,!1,null,"396e8a38",null),d=o.exports,u={components:{"k-slider":d},data(){return{selectColor:"primary",lienHeight:2,circleR:25,circleColor:"white",region:[0,100],value:30,disable:!1,showValue:!1,step:1,valueRecord:30,paramsHeight:100,params:[0,1,0,1,0,0,1,0]}},methods:{clickBack(){this.$router.replace("/")},changeStyle(t){const i=["primary","error","warning","success"];this.selectColor=i[t]},changeSize(t){const i=[{circleR:20,height:5},{circleR:25,height:2}];this.circleR=i[t].circleR,this.lienHeight=i[t].height},changeMinMax(t){const i=[[0,100],[-50,50],[20,80]];this.region=i[t]},changeDisable(t){const i=[!0,!1];this.disable=i[t]},changeStep(t){const i=[1,5,10];this.step=i[t]},changeIndicator(t){const i=["white","#0081ff","#1cbbb4"];this.circleColor=i[t]},valueChange(t){this.valueRecord=t},changeHang(t){},changeType(t){}},mounted(){this.paramsHeight=document.getElementById("demo").clientHeight-document.getElementById("top").clientHeight-document.getElementById("showBox").clientHeight-document.getElementById("head").clientHeight-20-12}},g=u,p=Object(n["a"])(g,e,a,!1,null,"752687df",null);i["default"]=p.exports},b91a:function(t,i,s){"use strict";s("2207")}}]);
//# sourceMappingURL=chunk-0d43ccc6.b37611d0.js.map