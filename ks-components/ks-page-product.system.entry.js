System.register(["./index-144b4d5f.system.js","./common-f984ea97.system.js","./product-2daae6f3.system.js","./commonDynamic-3347654e.system.js","./index-9bfb337d.system.js"],(function(t){"use strict";var n,e,r,a,u,o;return{setters:[function(t){n=t.r;e=t.h;r=t.H},function(t){a=t.c},function(t){u=t.p},function(t){o=t.c},function(){}],execute:function(){var c="ks-page-product>h3{text-align:center;margin-top:15px}ks-page-product>ks-product-container{margin-bottom:15px}";var i=t("ks_page_product",function(){function t(t){n(this,t)}t.prototype.componentWillLoad=function(){var t=document.getElementById(this.commonData);var n=document.getElementById(this.productData);var e=JSON.parse(t.innerHTML);var r=JSON.parse(n.innerHTML);Object.keys(e).map((function(t){a.set(t,e[t])}));Object.keys(r).map((function(t){u.set(t,r[t])}));{var c=document.getElementById(this.commonDynamicData);var i=JSON.parse(c.innerHTML);Object.keys(i).map((function(t){o.set(t,i[t])}))}};t.prototype.render=function(){var t=u.get("infoBanner");var n=u.get("points");var a=u.get("installments");var o=u.get("tags");var c=u.get("variants");var i=u.get("tabs");var s=u.get("youtube");var l=u.get("comments");var p=u.get("similar");var d=u.get("accessories");var m=u.get("model")||u.get("catalog");var g=u.get("ean");return e(r,null,e("ks-page-header",null),t?e("ks-info-banner",{image:t.image,width:t.width,height:t.height,color:t.color,name:t.name}):null,e("ks-container",null,e("ks-product-notify",null),e("ks-product-info",null,e("ks-product-title",{"brand-link":true,slot:"top"}),e("ks-product-images",{slot:"left"}),e("ks-product-price",null),e("ks-product-traits",null),e("ks-product-purchase",null),e("ks-product-shipping",null),u.get("warranty")?e("ks-product-attribute",{style:{marginTop:"15px"},icon:"tool",href:u.get("warrantyLink")},u.get("warranty")):null,n?e("ks-product-tooltip",{message:n.message},e("ks-product-attribute",{icon:"gift"},n.shortMessage)):null,m||g?e("ks-product-attribute",{style:{marginTop:"15px"},icon:"file",faded:true},e("span",{style:{marginRight:"15px"}},m?e("span",{style:{marginRight:"7px"}},"Model: ",m," "):null,g?e("span",null,"EAN: ",g):null)):null,e("div",{class:"buttons"},e("ks-product-negotiate",null,e("ks-product-button",null,u.get("negotiate").heading)),a.payuId&&a.payuKey||a.caParameters?e("ks-product-installments",{name:a.button},a.payuId&&a.payuKey?e("ks-product-calculator-payu",{price:u.get("currentPrice"),"pos-id":a.payuId,"api-key":a.payuKey},e("ks-product-button",{icon:a.payuIcon})):null,a.caParameters?e("ks-product-calculator-ca",{price:u.get("currentPrice"),parameters:a.caParameters},e("ks-product-button",{icon:a.caIcon})):null):null),e("ks-product-brand",{slot:"brand"}))),o||c?e("ks-container",{padding:true},o?e("ks-product-tags",null,o.map((function(t){return e("a",{href:t.link},t.name)}))):null,c?e("ks-product-variants",null,c.map((function(t){return e("ks-product-variant",{link:t.link,image:t.image,active:t.active,unavailable:t.unavailable})}))):null):null,i?e("ks-container",null,e("ks-product-tabs",{names:i.map((function(t){return t.name})).join(", ")},i.map((function(t,n){return e("ks-product-tab",{name:t.name,open:n==0,main:n==0,content:t.content})})))):null,"t",s||l?e("ks-container",null,s.map((function(t){return e("ks-product-youtube",{"video-id":t})})),l?e("ks-product-comments",null):null):null,p?[e("h3",null,u.get("similarHeading")),e("ks-product-container",null,p.map((function(t){return e("ks-product-card",{"product-id":0,name:t.name,img:t.image,"current-price":t.currentPrice,"previous-price":t.previousPrice})})))]:null,d?[e("h3",null,u.get("accessoriesHeading")),e("ks-product-container",null,d.map((function(t){return e("ks-product-card",{"product-id":0,name:t.name,img:t.image,"current-price":t.currentPrice,"previous-price":t.previousPrice})})))]:null,e("ks-page-footer",null))};return t}());i.style=c}}}));