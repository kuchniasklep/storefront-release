var __spreadArray=this&&this.__spreadArray||function(t,n){for(var r=0,e=n.length,o=t.length;r<e;r++,o++)t[o]=n[r];return t};System.register(["./index-f51f045b.system.js","./store-7ea0a644.system.js","./index-60cc8e57.system.js"],(function(t){"use strict";var n,r,e;return{setters:[function(t){n=t.r},function(t){r=t.t;e=t.r},function(){}],execute:function(){var o=function(){function t(){this.ttq=new Promise((function(t){var n=setInterval((function(){if(ttq!==undefined){t(ttq);clearInterval(n)}}),100)}))}t.prototype.pageview=function(){this.ttq.then((function(t){t.track("Browse")}))};t.prototype.product=function(t,n,r,e){this.ttq.then((function(o){o.track("ViewContent",{content_type:"product",content_id:t,content_name:n,currency:e,price:r,quantity:1,value:r})}))};t.prototype.addToCart=function(t,n,r,e,o){this.ttq.then((function(c){c.track("AddToCart",{content_type:"product",content_id:t,content_name:n,currency:o,price:r,quantity:e,value:r*e})}))};t.prototype.order_checkout=function(t,n,r){var e=this;this.ttq.then((function(o){o.track("StartCheckout",{contents:e.transformProducts(t),currency:r,value:n})}))};t.prototype.order_form=function(t,n,r){var e=this;this.ttq.then((function(o){o.track("AddBilling",{contents:e.transformProducts(t),value:n,currency:r})}))};t.prototype.order_placed=function(t,n,r){var e=this;this.ttq.then((function(o){o.track("Checkout",{contents:e.transformProducts(t),value:n,currency:r})}))};t.prototype.search=function(t){this.ttq.then((function(n){n.track("Search",{query:t})}))};t.prototype.transformProducts=function(t){return t.map((function(t){return{content_id:t.id,content_type:"product",content_name:t.name,quantity:1,price:t.price}}))};return t}();var c=t("ks_tracker",function(){function t(t){n(this,t)}t.prototype.componentWillLoad=function(){var t=this;r.get("loaded").then((function(){if(t.tiktok)t.appendTracker(new o);e()}))};t.prototype.appendTracker=function(t){r.set("trackers",__spreadArray(__spreadArray([],r.get("trackers")),[t]))};return t}())}}}));