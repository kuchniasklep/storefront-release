System.register(["./p-781af923.system.js","./p-28909317.system.js"],(function(t){"use strict";var e,r,u,a;return{setters:[function(t){e=t.r;r=t.h;u=t.g},function(t){a=t.T}],execute:function(){var n=t("ks_cart_summary_container",function(){function t(t){e(this,t)}t.prototype.render=function(){return[r("ks-cart-summary",{text:"Wartość produktów:",price:this.productValue.toFixed(2)}),this.otherValues.map((function(t){return r("ks-cart-summary",{text:t.name,price:t.value.toFixed(2),emphasis:t.value<0})})),r("ks-cart-summary",{large:true,text:"Razem:",price:this.totalValue.toFixed(2)})]};Object.defineProperty(t.prototype,"root",{get:function(){return u(this)},enumerable:false,configurable:true});return t}());a.injectProps(n,["totalValue","productValue","otherValues"])}}}));