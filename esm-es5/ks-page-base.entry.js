import{r as registerInstance,h,H as Host}from"./index-7a533c43.js";import{c as common}from"./common-d9c1845a.js";import{c as commonDynamic}from"./commonDynamic-9ee92324.js";import"./index-07d7bd8b.js";var PageBase=function(){function e(e){registerInstance(this,e)}e.prototype.componentWillLoad=function(){var e=document.getElementById(this.commonData);var n=JSON.parse(e.innerHTML);Object.keys(n).map((function(e){common.set(e,n[e])}));{var o=document.getElementById(this.commonDynamicData);var t=JSON.parse(o.innerHTML);Object.keys(t).map((function(e){commonDynamic.set(e,t[e])}))}};e.prototype.render=function(){return h(Host,null,h("ks-page-header",null),h("slot",null),h("ks-page-footer",null))};return e}();export{PageBase as ks_page_base};