System.register(["./p-7597974d.system.js"],(function(t){"use strict";var e,o,r;return{setters:[function(t){e=t.r;o=t.h;r=t.g}],execute:function(){var n="ks-product-tab{display:block}@media only screen and (min-width: 960px){ks-product-tab .accordion{display:none}}ks-product-tab>button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:transparent;color:#151515;width:100%;border:none;outline:none;padding:10px 0px 20px 0px;margin:0;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-product-tab>button:hover{color:#606060}ks-product-tab:not([open])>button>ks-icon{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform 0.3s ease;transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-product-tab:not([open])>button:hover>ks-icon{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}ks-product-tab>.tab-content{display:none}@media only screen and (min-width: 960px){ks-product-tab[main]>.tab-content{display:block}}@media only screen and (max-width: 960px){ks-product-tab[open]>.tab-content{display:block}}";var i=t("ks_product_tab",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){this.ImageReplacer()};t.prototype.render=function(){var t=this;return[o("button",{class:"accordion",onClick:function(){return t.onOpen()}},this.name,o("ks-icon",{name:this.open?"minus":"plus"})),o("div",{class:"tab-content"},o("slot",null))]};t.prototype.onOpen=function(){this.open=!this.open;if(this.open){var t=Array.from(this.root.parentElement.children);var e=t.indexOf(this.root);t.forEach((function(t){return t.removeAttribute("main")}));this.main=true;this.root.closest("ks-product-tabs").active=e}};t.prototype.ImageReplacer=function(){var t=this.root.querySelectorAll("img");for(var e=0;e<t.length;e++){var o=t[e];var r=document.createElement("ks-img");r.setAttribute("src",o.getAttribute("data-src"));r.setAttribute("alt",o.getAttribute("alt"));r.setAttribute("limit","limit");var n=o.style.height.replace("px","");var i=o.style.width.replace("px","");if(i)r.style.maxWidth=o.style.width;if(o.style.maxWidth){r.style.maxWidth=o.style.maxWidth;i=o.style.maxWidth}r.style.display="inline-block";if(n)r.setAttribute("height",n);if(i)r.setAttribute("width",i);var s=o.style.margin;if(s.includes("auto"))r.style.margin="auto";else if(s){r.style.padding=s;r.style.boxSizing="border-box"}o.parentNode.replaceChild(r,o)}};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());i.style=n}}}));