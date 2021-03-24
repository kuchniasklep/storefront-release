System.register(["./index-7a244351.system.js","./index-688a8f79.system.js","./cart-store-79b9e3e9.system.js"],(function(t){"use strict";var e,r,o,i,a,n;return{setters:[function(t){e=t.r;r=t.h;o=t.g},function(){},function(t){i=t.s;a=t.e;n=t.a}],execute:function(){var s='ks-cart-easyprotect-warranty{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:#f2f2f2;margin-bottom:10px}ks-cart-easyprotect-warranty .name{position:relative;margin:8px 15px;max-height:50px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;font-family:var(--font-emphasis)}ks-cart-easyprotect-warranty .name:after{content:"";position:absolute;top:30px;right:0;width:30%;height:20px;background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(90%, rgb(242, 242, 242)));background:linear-gradient(to right, rgba(255, 255, 255, 0), rgb(242, 242, 242) 90%)}ks-cart-easyprotect-warranty .control{display:-webkit-box;display:-ms-flexbox;display:flex}ks-cart-easyprotect-warranty .info{min-width:135px;font-family:var(--font-emphasis);font-weight:700;background-color:var(--easyprotect-color)}ks-cart-easyprotect-warranty .price{height:40px;min-width:80px;line-height:40px;text-align:center;background-color:#64419c !important;color:#ffffff}ks-cart-easyprotect-warranty .select{position:relative}ks-cart-easyprotect-warranty .select ks-icon{position:absolute;top:8px;right:5px;color:white;pointer-events:none}ks-cart-easyprotect-warranty ks-input-select div{margin-bottom:0 !important;margin-right:3px}ks-cart-easyprotect-warranty ks-input-select select{background-image:none !important;border:none !important;padding-right:30px !important;margin:0 !important;background-color:transparent !important;color:white !important}ks-cart-easyprotect-warranty:not([product-id]) .select{color:white !important;padding:7px 20px}ks-cart-easyprotect-warranty .close{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:40px;border-style:none;outline-style:none;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;background-color:var(--easyprotect-color);color:#ffffff;border-left:#64419c 1px solid}ks-cart-easyprotect-warranty .close ks-icon{line-height:unset !important}ks-cart-easyprotect-warranty .close:hover{background-color:var(--easyprotect-color-hover)}ks-cart-easyprotect-warranty .close:active{background-color:var(--easyprotect-color-active)}@media (min-width: 860px){ks-cart-easyprotect-warranty[insured] .info,ks-cart-easyprotect-warranty:not([product-id]) .info{display:-webkit-box;display:-ms-flexbox;display:flex;min-width:200px}}@media (max-width: 420px){ks-cart-easyprotect-warranty{display:inline-block}ks-cart-easyprotect-warranty .info{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}ks-cart-easyprotect-warranty .select{width:100%}ks-cart-easyprotect-warranty .name{margin:12px 15px}ks-cart-easyprotect-warranty .price{width:50%}}';var c=t("ks_cart_easyprotect_warranty",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){var t=this;if(this.productId){if(!this.active)this.active=Object.keys(i.get("easyprotect")[this.productId])[0];this.update();i.onChange("easyprotect",(function(){return t.update()}))}};t.prototype.componentWillUpdate=function(){if(this.productId){this.root.querySelector("select").value=this.active;this.update()}};t.prototype.update=function(){this.name=i.get("products")[this.productId].name;this.options=i.get("easyprotect")[this.productId];this.entries=Object.entries(this.options);this.price=this.options[this.active]};t.prototype.render=function(){var t=this;return[r("div",{class:"name"},this.name),r("div",{class:"control"},r("div",{class:"info"},r("div",{class:"select"},this.productId?[r("ks-input-select",{onChange:function(){return t.change()}},this.entries.map((function(e){var o=e[0],i=e[1];return r("option",{value:o,selected:t.active==o},t.months(parseInt(o)))}))),r("ks-icon",{name:"chevron-down"})]:this.months(this.time)),r("div",{class:"price"},this.price," zł")),this.productId&&this.insured?r("button",{class:"close",onClick:function(){return t.remove()}},r("ks-icon",{name:"x"})):null)]};t.prototype.change=function(){var t;this.active=this.root.querySelector("select").value;if(this.insured)a((t={},t[this.productId]=this.active,t))};t.prototype.remove=function(){n(this.productId)};t.prototype.months=function(t){var e=parseInt((""+t)[(""+t).length-1]);var r="miesięcy";if(t==0)r="miesiąc";else if(t>=5&&t<=21)r="miesięcy";else if(t>21&&e>=2&&e<=4)r="miesiące";return t+" "+r};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());c.style=s}}}));