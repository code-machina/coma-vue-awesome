(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-251a6420"],{"7f7f":function(e,t,n){var a=n("86cc").f,r=Function.prototype,l=/^\s*function ([^ (]*)/,i="name";i in r||n("9e1e")&&a(r,i,{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},e8c5:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("h2",[e._v(e._s(e.$t("message")))]),n("main",{staticClass:"main"},[n("Breadcrumb",{attrs:{list:e.items}}),n("locale-changer"),n("div",{staticClass:"container-fluid"},[n("router-view")],1)],1)])},r=[],l=(n("7f7f"),{items:[]}),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",{staticClass:"breadcrumb"},e._l(e.routeRecords,function(t,a){return n("li",{key:a,staticClass:"breadcrumb-item"},[e.isLast(a)?n("span",{staticClass:"active"},[e._v(e._s(e.getName(t)))]):n("router-link",{attrs:{to:t}},[e._v(e._s(e.getName(t)))])],1)}),0)},u=[],c={props:{list:{type:Array,required:!0,default:function(){return[]}}},computed:{routeRecords:function(){return this.list.filter(function(e){return e.name||e.meta.label})}},methods:{getName:function(e){return e.meta&&e.meta.label?e.meta.label:e.name||null},isLast:function(e){return e===this.list.length-1}}},s=c,o=n("2877"),m=Object(o["a"])(s,i,u,!1,null,null,null),f=m.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locale-changer"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.$i18n,"locale",t.target.multiple?n:n[0])}}},e._l(e.langs,function(t,a){return n("option",{key:"Lang"+a,domProps:{value:t}},[e._v(e._s(t))])}),0)])},d=[],v={name:"locale-changer",data:function(){return{langs:["en","ko"]}}},h=v,_=Object(o["a"])(h,p,d,!1,null,null,null),g=_.exports,b={name:"DefaultContainer",components:{Breadcrumb:f,LocaleChanger:g},data:function(){return{nav:l.items}},computed:{name:function(){return this.$route.name},items:function(){return this.$route.matched.filter(function(e){return e.name||e.meta.label})}}},$=b,C=Object(o["a"])($,a,r,!1,null,null,null);t["default"]=C.exports}}]);
//# sourceMappingURL=chunk-251a6420.c04db2fa.js.map