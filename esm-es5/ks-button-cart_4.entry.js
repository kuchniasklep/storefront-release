var __awaiter=this&&this.__awaiter||function(t,r,e,n){function o(t){return t instanceof e?t:new e((function(r){r(t)}))}return new(e||(e=Promise))((function(e,i){function a(t){try{c(n.next(t))}catch(r){i(r)}}function s(t){try{c(n["throw"](t))}catch(r){i(r)}}function c(t){t.done?e(t.value):o(t.value).then(a,s)}c((n=n.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(r){return c([t,r])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(e)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:e.label++;return{value:a[1],done:false};case 5:e.label++;o=a[1];a=[0];continue;case 7:a=e.ops.pop();e.trys.pop();continue;default:if(!(i=e.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){e=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){e.label=a[1];break}if(a[0]===6&&e.label<i[1]){e.label=i[1];i=a;break}if(i&&e.label<i[2]){e.label=i[2];e.ops.push(a);break}if(i[2])e.ops.pop();e.trys.pop();continue}a=r.call(t,e)}catch(s){a=[6,s];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-46fe532f.js";import{A as AddToCart,R as RemoveFromFavourites,a as AddToFavourites}from"./functions-39aec4c5.js";var buttonCartCss="ks-button-cart{display:block;height:100%}ks-button-cart[expand]{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-button-cart[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-cart[padding] button{padding:10px;min-height:60px}}ks-button-cart button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-cart button:hover{background-color:var(--product-card-primary-hover)}ks-button-cart button:active{background-color:var(--product-card-primary-active)}";var ButtonCart=function(){function t(t){registerInstance(this,t);this.count="1";this.traits="";this.expand=false;this.padding=false;this.icon=false;this.disabled=false;this.product=false;this.loading=false}t.prototype.ClickHandler=function(t){var r=this;var e=t||this.count;if(!this.disabled&&!this.loading){this.loading=true;AddToCart(this.productId,e,this.traits,this.product?"0":"1",this.name,(function(t){return r.ResultHandler(t)}))}};t.prototype.ResultHandler=function(t){var r=this;this.loading=true;if(t){var e=document.querySelector("ks-navbar");e.IncrementCart(this.count);setTimeout((function(){return r.loading=false}),1e3)}else this.loading=false};t.prototype.AddToCart=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.ClickHandler(t);return[2]}))}))};t.prototype.SetCount=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.count=t;return[2]}))}))};t.prototype.render=function(){var t=this;return h("button",{"aria-label":"Do koszyka",disabled:this.disabled,onClick:function(){return t.ClickHandler()}},this.loading?h("ks-loader",{large:true}):this.icon?h("ks-icon",{name:"shopping-bag",size:.9}):h("span",null,"DO KOSZYKA"))};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();ButtonCart.style=buttonCartCss;var buttonFavCss="ks-button-fav{display:block;height:100%}ks-button-fav[expand]{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-button-fav[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-fav[padding] button{min-height:60px;padding:10px}}ks-button-fav button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-fav button:hover{background-color:var(--product-card-secondary-hover)}ks-button-fav button:active{background-color:var(--product-card-secondary-active)}ks-button-fav .success{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";var ButtonFav=function(){function t(t){registerInstance(this,t);this.subtract=false;this.expand=false;this.padding=false;this.loading=false;this.success=false}t.prototype.ClickHandler=function(){var t=this;if(!this.loading&&!this.success){this.loading=true;setTimeout((function(){t.ResultHandler()}),1e3);if(this.subtract)RemoveFromFavourites(this.productId,(function(){return t.ResultHandler()}));else AddToFavourites(this.productId,(function(){return t.ResultHandler()}))}};t.prototype.ResultHandler=function(){this.loading=true;this.success=true;var t=document.querySelector("ks-navbar");if(this.subtract)t.DecrementHeart();else t.IncrementHeart()};t.prototype.render=function(){var t=this;return h("button",{"aria-label":"Do koszyka",onClick:function(){return t.ClickHandler()}},this.loading?h("ks-loader",null):h("ks-icon",{name:this.subtract?"x":"star"}),this.success?h("div",{class:"success"},h("ks-icon",{name:"check"})):null)};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();ButtonFav.style=buttonFavCss;var productCardCss="ks-product-card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;text-align:center;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media (min-width: 360px){ks-product-card{width:calc(50% - 15px)}}@media (min-width: 640px){ks-product-card{width:228px}}ks-product-card .top{display:block;padding:15px;min-height:200px;color:inherit !important;text-decoration:none !important;font-size:14px}ks-product-card ks-img{height:auto;margin-bottom:10px}ks-product-card .price>*{display:block}ks-product-card .price .previous{color:#707070;font-size:14px}ks-product-card .price .current{color:var(--color-secondary);font-weight:bold;font-size:16px}ks-product-card .bottom{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px}ks-product-card .bottom .unavailable,ks-product-card .bottom .link{display:block;width:100%;padding:10px 10px;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;color:white;background-color:var(--color-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .bottom .link:hover{background-color:var(--color-secondary-hover)}ks-product-card .bottom .link:active{background-color:var(--color-secondary-active)}ks-product-card[unavailable] .top,ks-product-card[unavailable] .price{opacity:0.6}@media (max-width: 420px){ks-product-card .top{font-size:13px;padding:8px}ks-product-card .price{line-height:18px}}";var ProductCard=function(){function t(t){registerInstance(this,t);this.unavailable=false;this.linkOnly=false}t.prototype.render=function(){var t=this.currentPrice?this.currentPrice.replace(".",",")+" zł":"";var r=this.previousPrice?this.previousPrice.replace(".",",")+" zł":"";return[h("a",{href:this.link,"aria-label":this.name,class:"top"},h("ks-img",{fill:true,src:this.img,width:280,height:280,alt:"zdjęcie produktu"}),this.name),h("div",{class:"price"},this.previousPrice?h("s",{class:"previous"},r):null,h("span",{class:"current"},t)),h("div",{class:"bottom"},this.unavailable?h("a",{href:this.link,class:"unavailable"},"NIEDOSTĘPNY"):this.linkOnly?h("a",{href:this.link,class:"link"},"ZOBACZ WIĘCEJ"):[h("ks-button-fav",{"product-id":this.productId}),h("ks-button-cart",{expand:true,"product-id":this.productId,name:this.name})])]};return t}();ProductCard.style=productCardCss;var productContainerCss="ks-product-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px}ks-product-container>*{margin-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>*{width:50%}}@media (min-width: 640px){ks-product-container>*{width:228px}}";var Container=function(){function t(t){registerInstance(this,t)}t.prototype.render=function(){return h("slot",null)};return t}();Container.style=productContainerCss;export{ButtonCart as ks_button_cart,ButtonFav as ks_button_fav,ProductCard as ks_product_card,Container as ks_product_container};