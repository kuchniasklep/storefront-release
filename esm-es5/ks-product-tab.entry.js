import{r as registerInstance,h,g as getElement}from"./index-74ff0cef.js";var productTabCss="ks-product-tab{display:block}@media only screen and (min-width: 960px){ks-product-tab .accordion{display:none}}ks-product-tab>button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:transparent;color:#151515;width:100%;border:none;outline:none;padding:10px 0px 20px 0px;margin:0;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-product-tab>button:hover{color:#606060}ks-product-tab:not([open])>button>ks-icon{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:-webkit-transform 0.3s ease;transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-product-tab:not([open])>button:hover>ks-icon{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}ks-product-tab>.tab-content{display:none}@media only screen and (min-width: 960px){ks-product-tab[main]>.tab-content{display:block}}@media only screen and (max-width: 960px){ks-product-tab[open]>.tab-content{display:block}}";var ProductTab=function(){function t(t){registerInstance(this,t)}t.prototype.componentWillLoad=function(){this.ImageReplacer()};t.prototype.render=function(){var t=this;return[h("button",{class:"accordion",onClick:function(){return t.onOpen()}},this.name,h("ks-icon",{name:this.open?"minus":"plus"})),h("div",{class:"tab-content"},h("slot",null))]};t.prototype.onOpen=function(){this.open=!this.open;if(this.open){var t=Array.from(this.root.parentElement.children);var e=t.indexOf(this.root);t.forEach((function(t){return t.removeAttribute("main")}));this.main=true;this.root.closest("ks-product-tabs").active=e}};t.prototype.ImageReplacer=function(){var t=this.root.querySelectorAll("img");for(var e=0;e<t.length;e++){var o=t[e];var n=document.createElement("ks-img");var r=o.style.width.replace("px","");if(r.includes("%")){if(r=="100%")r="1200";else r=null}if(o.style.maxWidth)r=o.style.maxWidth.replace("px","");var a=o.style.margin;n.setAttribute("src",o.getAttribute("data-src"));n.setAttribute("alt",o.getAttribute("alt"));if(r)n.setAttribute("width",r);n.style.display="inline-block";n.style.margin=a;if(a.includes("auto")){n.style.textAlign="center";n.style.display="block"}o.parentNode.replaceChild(n,o)}};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();ProductTab.style=productTabCss;export{ProductTab as ks_product_tab};