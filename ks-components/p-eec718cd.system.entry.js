System.register(["./p-526368ae.system.js"],(function(t){"use strict";var e,i,r;return{setters:[function(t){e=t.r;i=t.h;r=t.g}],execute:function(){var n=t("ks_product_tab",function(){function t(t){e(this,t);this.mobile=false}t.prototype.ResizeHandler=function(){if(window.innerWidth<960)this.mobile=true;else this.mobile=false};t.prototype.componentWillLoad=function(){this.ResizeHandler();this.ImageReplacer()};t.prototype.render=function(){var t=this.open?" uk-open":null;if(this.mobile)return i("div",{class:"uk-margin-small-top "+t},i("a",{class:"uk-accordion-title uk-h3",href:"#"},this.name),i("div",{class:"uk-accordion-content uk-margin-bottom"},i("slot",null)));else return i("slot",null)};t.prototype.ImageReplacer=function(){var t=this.root.querySelectorAll("img");for(var e=0;e<t.length;e++){var i=t[e];var r=document.createElement("ks-image");var n=i.style.width.replace("px","");if(n.includes("%")){if(n=="100%")n="1200";else n=null}if(i.style.maxWidth)n=i.style.maxWidth.replace("px","");var l=i.style.margin;r.setAttribute("src",i.getAttribute("data-src"));r.setAttribute("alt",i.getAttribute("alt"));if(n)r.setAttribute("width",n);r.style.display="inline-block";r.style.margin=l;if(l.includes("auto")){r.style.textAlign="center";r.style.display="block"}i.parentNode.replaceChild(r,i)}};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:true,configurable:true});return t}())}}}));