System.register(["./index-144b4d5f.system.js"],(function(t){"use strict";var e,r,i;return{setters:[function(t){e=t.r;r=t.h;i=t.g}],execute:function(){var n=t("ks_product_simple",function(){function t(t){e(this,t)}t.prototype.componentDidLoad=function(){this.root.style.display="block"};t.prototype.render=function(){var t;if(this.currentPrice)t=this.currentPrice.replace(".",",")+" zł";var e;if(this.previousPrice)e=this.previousPrice.replace(".",",")+" zł";return r("div",null,r("div",{class:"uk-text-xsmall uk-text-center uk-link-reset uk-position-relative uk-margin-small-bottom"},r("a",{href:this.link},r("div",{class:"uk-margin-small-bottom"},r("ks-image",{src:this.img,width:"280",height:"280",contain:true,alt:"zdjęcie produktu"})),this.name)),r("div",{class:"uk-text-xsmall uk-text-center uk-position-relative",style:{pointerEvents:"none"}},this.previousPrice?[r("span",{class:"uk-text-muted"},r("s",null,e)),r("br",null)]:null,r("span",{class:"uk-text-bold uk-text-normal uk-text-danger"},t)))};Object.defineProperty(t.prototype,"root",{get:function(){return i(this)},enumerable:false,configurable:true});return t}())}}}));