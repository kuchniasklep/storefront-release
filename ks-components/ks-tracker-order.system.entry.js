System.register(["./index-f51f045b.system.js","./store-7ea0a644.system.js","./index-60cc8e57.system.js"],(function(e){"use strict";var t,r;return{setters:[function(e){t=e.r},function(e){r=e.e},function(){}],execute:function(){var s=e("ks_tracker_order",function(){function e(e){t(this,e);this.checkout=false;this.form=false;this.placed=false;this.currency="PLN"}e.prototype.componentWillLoad=function(){var e=this;var t=typeof this.products=="string"?JSON.parse(this.products):this.products;r((function(r){if(e.checkout)r===null||r===void 0?void 0:r.order_checkout(t,e.value,e.currency);else if(e.form)r===null||r===void 0?void 0:r.order_form(t,e.value,e.currency);else if(e.placed)r===null||r===void 0?void 0:r.order_placed(t,e.value,e.currency)}))};return e}())}}}));