var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function a(t){try{c(n.next(t))}catch(e){o(e)}}function s(t){try{c(n["throw"](t))}catch(e){o(e)}}function c(t){t.done?r(t.value):i(t.value).then(a,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(s){a=[6,s];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-23f28cac.system.js","./functions-de0b3324.system.js"],(function(t){"use strict";var e,r,n,i,o,a;return{setters:[function(t){e=t.r;r=t.h;n=t.g},function(t){i=t.A;o=t.R;a=t.a}],execute:function(){var s="ks-button-cart{display:block;height:100%}ks-button-cart[expand]{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-button-cart[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-cart[padding] button{padding:10px;min-height:60px}}ks-button-cart button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-cart button:hover{background-color:var(--product-card-primary-hover)}ks-button-cart button:active{background-color:var(--product-card-primary-active)}";var c=t("ks_button_cart",function(){function t(t){e(this,t);this.count="1";this.traits="";this.expand=false;this.padding=false;this.icon=false;this.disabled=false;this.product=false;this.loading=false}t.prototype.ClickHandler=function(t){var e=this;var r=t||this.count;if(!this.disabled&&!this.loading){this.loading=true;i(this.productId,r,this.traits,this.product?"0":"1",this.name,(function(t){return e.ResultHandler(t)}))}};t.prototype.ResultHandler=function(t){var e=this;this.loading=true;if(t){var r=document.querySelector("ks-navbar");r.IncrementCart(this.count);setTimeout((function(){return e.loading=false}),1e3)}else this.loading=false};t.prototype.AddToCart=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.ClickHandler(t);return[2]}))}))};t.prototype.SetCount=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.count=t;return[2]}))}))};t.prototype.render=function(){var t=this;return r("button",{"aria-label":"Do koszyka",disabled:this.disabled,onClick:function(){return t.ClickHandler()}},this.loading?r("ks-loader",{large:true}):this.icon?r("ks-icon",{name:"shopping-bag",size:.9}):r("span",null,"DO KOSZYKA"))};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());c.style=s;var l="ks-button-fav{display:block;height:100%}ks-button-fav[expand]{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-button-fav[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-fav[padding] button{min-height:60px;padding:10px}}ks-button-fav button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-fav button:hover{background-color:var(--product-card-secondary-hover)}ks-button-fav button:active{background-color:var(--product-card-secondary-active)}ks-button-fav .success{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";var d=t("ks_button_fav",function(){function t(t){e(this,t);this.subtract=false;this.expand=false;this.padding=false;this.loading=false;this.success=false}t.prototype.ClickHandler=function(){var t=this;if(!this.loading&&!this.success){this.loading=true;setTimeout((function(){t.ResultHandler()}),1e3);if(this.subtract)o(this.productId,(function(){return t.ResultHandler()}));else a(this.productId,(function(){return t.ResultHandler()}))}};t.prototype.ResultHandler=function(){this.loading=true;this.success=true;var t=document.querySelector("ks-navbar");if(this.subtract)t.DecrementHeart();else t.IncrementHeart()};t.prototype.render=function(){var t=this;return r("button",{"aria-label":"Do koszyka",onClick:function(){return t.ClickHandler()}},this.loading?r("ks-loader",null):r("ks-icon",{name:this.subtract?"x":"star"}),this.success?r("div",{class:"success"},r("ks-icon",{name:"check"})):null)};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());d.style=l;var u="ks-product-card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;text-align:center;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media (min-width: 360px){ks-product-card{width:calc(50% - 15px)}}@media (min-width: 640px){ks-product-card{width:230px}}ks-product-card .top{display:block;padding:15px;min-height:200px;color:inherit !important;text-decoration:none !important;font-size:14px}ks-product-card ks-img{height:auto;margin-bottom:10px}ks-product-card .price>*{display:block}ks-product-card .price .previous{color:#707070;font-size:14px}ks-product-card .price .current{color:var(--color-secondary);font-weight:bold;font-size:16px}ks-product-card .bottom{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px}ks-product-card .bottom .unavailable,ks-product-card .bottom .link{display:block;width:100%;padding:10px 10px;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;color:white;background-color:var(--color-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .bottom .link:hover{background-color:var(--color-secondary-hover)}ks-product-card .bottom .link:active{background-color:var(--color-secondary-active)}ks-product-card[unavailable] .top,ks-product-card[unavailable] .price{opacity:0.6}@media (max-width: 420px){ks-product-card .top{font-size:13px;padding:8px}ks-product-card .price{line-height:18px}}";var p=t("ks_product_card",function(){function t(t){e(this,t);this.unavailable=false;this.linkOnly=false}t.prototype.render=function(){var t=this.currentPrice?this.currentPrice.replace(".",",")+" zł":"";var e=this.previousPrice?this.previousPrice.replace(".",",")+" zł":"";return[r("a",{href:this.link,"aria-label":this.name,class:"top"},r("ks-img",{fill:true,src:this.img,width:280,height:280,alt:"zdjęcie produktu"}),this.name),r("div",{class:"price"},this.previousPrice?r("s",{class:"previous"},e):null,r("span",{class:"current"},t)),r("div",{class:"bottom"},this.unavailable?r("a",{href:this.link,class:"unavailable"},"NIEDOSTĘPNY"):this.linkOnly?r("a",{href:this.link,class:"link"},"ZOBACZ WIĘCEJ"):[r("ks-button-fav",{"product-id":this.productId}),r("ks-button-cart",{expand:true,"product-id":this.productId,name:this.name})])]};return t}());p.style=u;var h="ks-product-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px}ks-product-container>*{margin-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>*{width:50%}}@media (min-width: 640px){ks-product-container>*{width:230px}}";var b=t("ks_product_container",function(){function t(t){e(this,t)}t.prototype.render=function(){return r("slot",null)};return t}());b.style=h}}}));