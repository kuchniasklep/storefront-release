System.register(["./index-7a244351.system.js","./index-688a8f79.system.js","./cart-store-79b9e3e9.system.js"],(function(t){"use strict";var e,s,i,a,n;return{setters:[function(t){e=t.r;s=t.h;i=t.H;a=t.g},function(){},function(t){n=t.s}],execute:function(){var r="ks-cart-easyprotect{display:block;padding:30px}ks-cart-easyprotect.hidden{display:none}ks-cart-easyprotect .top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%;position:relative}ks-cart-easyprotect .top .content{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}ks-cart-easyprotect .top .content h2{font-size:22px;text-transform:uppercase;font-family:var(--font-emphasis);font-weight:700}ks-cart-easyprotect .top ks-img2{max-width:120px;width:100%;margin-left:10px}ks-cart-easyprotect .insured{margin-top:10px}ks-cart-easyprotect .insured .item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;font-family:var(--font-emphasis);background-color:#f2f2f2;padding:5px 10px}ks-cart-easyprotect .insured .item .name{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:5px;background-color:#f2f2f2;font-size:16px}ks-cart-easyprotect .insured .item .option{margin:0 10px;font-size:17px;font-weight:700}ks-cart-easyprotect .addproducts .content{padding:20px 20px 0 20px}@media (max-width: 960px){ks-cart-easyprotect{padding:15px}}@media (max-width: 640px){ks-cart-easyprotect .top ks-img2{position:absolute;top:-5px;right:0;max-width:40px;max-height:40px}ks-cart-easyprotect .top .content{font-size:15px}}";var o=t("ks_cart_easyprotect",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){var t=this;var e=function(){t.insured=Object.entries(n.get("insured"));t.enabled=Object.keys(n.get("easyprotect")).length>0};n.onChange("insured",e);e()};t.prototype.render=function(){return s(i,{class:!this.enabled?"hidden":""},s("div",{class:"top"},s("div",{class:"content"},s("slot",null)),s("ks-img2",{src:this.image,width:this.width,height:this.height})),s("div",{class:"insured"},this.insured.map((function(t){var e=t[0],i=t[1];return s("ks-cart-easyprotect-warranty",{insured:true,"product-id":e,active:i})}))),s("slot",{name:"bottom"}))};Object.defineProperty(t.prototype,"root",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());o.style=r}}}));