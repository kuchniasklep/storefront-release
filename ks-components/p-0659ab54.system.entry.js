System.register(["./p-7597974d.system.js"],(function(e){"use strict";var t,i,s;return{setters:[function(e){t=e.r;i=e.h;s=e.g}],execute:function(){var r="ks-cart-select-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;cursor:pointer;z-index:10;position:relative;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-select-item .logo{background-color:#252525;height:100%;width:150px;padding:5px;border-top:1px solid rgba(0, 0, 0, 0.1);-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (max-width: 720px){ks-cart-select-item .logo{display:none}}ks-cart-select-item .name{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 20px;font-size:16px}ks-cart-select-item .price{padding:0 20px;font-size:16px}@media only screen and (max-width: 420px){ks-cart-select-item .name{padding:0 5px 0 20px;font-size:14px}ks-cart-select-item .price{padding:0 10px 0 5px;font-size:14px}}";var o=e("ks_cart_select_item",function(){function e(e){t(this,e);this.logo="";this.name="";this.price="";this.color=""}e.prototype.render=function(){return[this.logo?i("div",{class:"logo",style:{backgroundColor:this.color}},i("ks-img",{vertical:true,center:true,src:this.logo,target:"ks-cart-select-shipping, ks-cart-select-payment"})):null,i("div",{class:"name"},this.name),this.price!=""&&this.price!="0"?i("div",{class:"price"},this.price.replace(".",",")+" ZŁ"):null]};Object.defineProperty(e.prototype,"root",{get:function(){return s(this)},enumerable:false,configurable:true});return e}());o.style=r}}}));