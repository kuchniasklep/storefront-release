System.register(["./p-7597974d.system.js"],(function(t){"use strict";var e,r,o;return{setters:[function(t){e=t.r;r=t.h;o=t.g}],execute:function(){var n="ks-product-tab{display:block}@media only screen and (min-width: 960px){ks-product-tab .accordion{display:none}}ks-product-tab>button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:transparent;color:#151515;width:100%;border:none;outline:none;padding:10px 0px 20px 0px;margin:0;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-product-tab>button:hover{color:#606060}ks-product-tab:not([open])>button>ks-icon{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform 0.3s ease;transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-product-tab:not([open])>button:hover>ks-icon{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}ks-product-tab>.tab-content{display:none}@media only screen and (min-width: 960px){ks-product-tab[main]>.tab-content{display:block}}@media only screen and (max-width: 960px){ks-product-tab[open]>.tab-content{display:block}}";var i=t("ks_product_tab",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){this.ImageReplacer()};t.prototype.render=function(){var t=this;return[r("button",{class:"accordion",onClick:function(){return t.onOpen()}},this.name,r("ks-icon",{name:this.open?"minus":"plus"})),r("div",{class:"tab-content"},r("slot",null))]};t.prototype.onOpen=function(){this.open=!this.open;if(this.open){var t=Array.from(this.root.parentElement.children);var e=t.indexOf(this.root);t.forEach((function(t){return t.removeAttribute("main")}));this.main=true;this.root.closest("ks-product-tabs").active=e}};t.prototype.ImageReplacer=function(){var t=this.root.querySelectorAll("img");for(var e=0;e<t.length;e++){var r=t[e];var o=document.createElement("ks-img");o.setAttribute("src",r.getAttribute("data-src"));o.setAttribute("alt",r.getAttribute("alt"));o.setAttribute("limit","limit");var n=r.style.height.replace("px","");var i=r.style.width.replace("px","");if(n)o.setAttribute("height",n);if(i)o.setAttribute("width",i);if(r.style.maxWidth)o.style.maxWidth=r.style.maxWidth;var a=r.style.margin;if(a){o.style.padding=a;o.style.boxSizing="border-box"}r.parentNode.replaceChild(o,r)}};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());i.style=n}}}));