System.register(["./index-1cdca543.system.js"],(function(t){"use strict";var e,i,r;return{setters:[function(t){e=t.r;i=t.h;r=t.g}],execute:function(){var s=t("ks_product_wide",function(){function t(t){e(this,t);this.unavailable=false;this.cartLoading=false;this.mobile=false}t.prototype.componentDidLoad=function(){this.root.style.display="block"};t.prototype.CartHandler=function(t){if(!t)this.cartLoading=false};t.prototype.resizeHandler=function(){if(window.innerWidth<=700)this.mobile=true;else this.mobile=false};t.prototype.componentWillLoad=function(){this.resizeHandler()};t.prototype.render=function(){var t;if(this.currentPrice)t=this.currentPrice.replace(".",",")+" zł";var e;if(this.previousPrice)e=this.previousPrice.replace(".",",")+" zł";return i("ks-flex",{between:true,middle:true,column:this.mobile?true:false,style:this.mobile?{display:"block",marginBottom:"20px"}:{display:"block"}},i("a",{href:this.link},i("ks-image",{src:this.img,width:"200",height:"200",contain:true,alt:"zdjęcie produktu"})),i("a",{href:this.link,class:"uk-flex-1 uk-padding-small uk-link-reset "+(this.mobile?"uk-text-center":"")},i("span",{class:"uk-h3 uk-margin-small-bottom"},this.name),i("br",null),i("div",{class:"uk-margin-small-top"},i("span",{class:"uk-h4 uk-text-bold uk-text-normal uk-text-danger"},t),this.previousPrice?i("span",{class:"uk-h4 uk-text-muted uk-margin-left"},i("s",null,e)):null),i("p",{class:"uk-text-small uk-visible@m"},i("slot",null))),i("div",{class:"uk-flex "+(this.mobile?"uk-width-1-1":"uk-flex-column")},i("ks-button-fav",{subtract:true,padding:true,expand:true,"product-id":this.productId}),this.unavailable?i("ks-button-cart",{icon:true,padding:true,expand:true,disabled:true}):i("ks-button-cart",{icon:true,padding:true,expand:true,"product-id":this.productId,name:this.name})))};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}())}}}));