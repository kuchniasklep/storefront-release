var __awaiter=this&&this.__awaiter||function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function s(t){try{c(n["throw"](t))}catch(e){i(e)}}function c(t){t.done?r(t.value):o(t.value).then(a,s)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(s){a=[6,s];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,c as createEvent,h,g as getElement}from"./index-74ff0cef.js";import{O as OpenSuggestions}from"./functions-33a63d52.js";import"./index-b4f14e2e.js";import{s as store}from"./product-store-44debc87.js";var productInfoCss="ks-product-info{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:100%;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);padding:40px 30px;min-height:420px}ks-product-info>*{margin:0px auto;width:100%;max-width:700px}ks-product-info .left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media only screen and (min-width: 960px){ks-product-info{display:-ms-grid;display:grid;-ms-grid-columns:48% 52%;grid-template-columns:48% 52%;-ms-grid-rows:auto 1fr;grid-template-rows:auto 1fr}ks-product-info>*:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}ks-product-info>*:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}ks-product-info>*:nth-child(3){-ms-grid-row:2;-ms-grid-column:1}ks-product-info>*:nth-child(4){-ms-grid-row:2;-ms-grid-column:2}ks-product-info>.top{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1}ks-product-info>.left{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1 / 3}ks-product-info>.bottom{-ms-grid-column:2;grid-column:2;-ms-grid-row:2;grid-row:2}}@media only screen and (min-width: 1200px){ks-product-info{padding:40px 30px}}@media only screen and (max-width: 460px){ks-product-info{padding:20px 10px}}ks-product-info ks-product-button[large]{max-width:700px;margin:auto}ks-product-info .installments{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-bottom:10px;margin-left:auto;margin-right:auto;max-width:700px}ks-product-info .installments>*:not(:last-child){margin-right:5px}ks-product-info .installments>*:first-child{width:45%}ks-product-info .installments>*:last-child{width:55%}@media only screen and (max-width: 640px){ks-product-info .installments{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap}ks-product-info .installments>*{width:100% !important;margin-right:0}}ks-product-info .attributes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width: 640px){ks-product-info .attributes{margin-top:20px}}";var ProductInfo=function(){function t(t){registerInstance(this,t);this.productRendered=createEvent(this,"productRendered",7);this.dataId="";this.shippingApi="";this.traitApi="";this.cartApi="";this.cartCountApi="";this.favouritesApi="";this.suggestionApi=""}t.prototype.connectedCallback=function(){var t=document.getElementById(this.dataId);var e=JSON.parse(t.innerHTML);Object.keys(e).map((function(t){store.set(t,e[t])}));if(store.get("negotiate")&&store.get("shippingMessage")){store.set("externalPoints",true)}};t.prototype.componentDidLoad=function(){this.navbar=document.querySelector("ks-navbar");this.errorPopup=document.querySelector("ks-error-popup")};t.prototype.CountChange=function(t){return __awaiter(this,void 0,void 0,(function(){var e;var r=this;return __generator(this,(function(n){switch(n.label){case 0:store.set("count",t.detail);e=new FormData;e.append("id",store.get("id"));e.append("count",t.detail.toString());store.set("cartLoading",true);return[4,this.fetch(this.shippingApi,e).then((function(t){return t.json()})).then((function(t){store.set("shippingTime",t.shippingTime);store.set("shippingMessage",t.shippingMessage);if(store.get("negotiate")&&store.get("shippingMessage"))store.set("externalPoints",true)})).catch((function(t){return r.errorPopup.show(t)}))];case 1:n.sent();store.set("cartLoading",false);return[2]}}))}))};t.prototype.TraitChange=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;var n=this;return __generator(this,(function(o){switch(o.label){case 0:store.set("cartLoading",true);e=t.detail.reduce((function(t,e){return t+"x"+e[0].id+"-"+e[1].id}),"");r=new FormData;r.append("id",store.get("id"));r.append("traits",e);return[4,this.fetch(this.traitApi,r).then((function(t){return t.json()})).then((function(t){if(t.currentPrice!=undefined)store.set("currentPrice",t.currentPrice);if(t.previousPrice!=undefined)store.set("previousPrice",t.previousPrice);if(t.ean!=undefined)store.set("ean",t.ean);if(t.catalog!=undefined)store.set("catalog",t.catalog);store.set("traitIDs",e);if(t.image!=undefined){var r=store.get("images");r[0].full=t.image.full;r[0].preview=t.image.preview;r[0].thumb=t.image.thumb;store.set("images",r)}})).catch((function(t){return n.errorPopup.show(t)}))];case 1:o.sent();store.set("cartLoading",false);return[2]}}))}))};t.prototype.AddToCart=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,n,o;var i=this;return __generator(this,(function(a){switch(a.label){case 0:store.set("cartLoading",true);t=store.get("id");e=store.get("count").toString();r=store.get("traitIDs");n=store.get("name");o=new FormData;o.append("id",t);o.append("ilosc",e);o.append("cechy",r);o.append("akcja","dodaj");return[4,this.fetch(this.cartCountApi,o).then((function(){return __awaiter(i,void 0,void 0,(function(){var o;var i=this;return __generator(this,(function(a){switch(a.label){case 0:o=new FormData;o.append("id",t);o.append("ilosc",e);o.append("cechy",r);o.append("komentarz","");o.append("komentarz","");o.append("txt","");o.append("wroc","");o.append("miejsce","0");return[4,this.fetch(this.cartApi,o).then((function(){i.navbar.IncrementCart(e);OpenSuggestions(t,n)})).catch((function(t){return i.errorPopup.show(t)}))];case 1:a.sent();return[2]}}))}))})).catch((function(t){return i.errorPopup.show(t)}))];case 1:a.sent();store.set("cartLoading",false);return[2]}}))}))};t.prototype.AddToFavourites=function(){return __awaiter(this,void 0,void 0,(function(){var t;var e=this;return __generator(this,(function(r){switch(r.label){case 0:store.set("favouritesLoading",true);t=new FormData;t.append("id",store.get("id"));return[4,this.fetch(this.favouritesApi,t).then((function(){return e.navbar.IncrementHeart()})).catch((function(t){return e.errorPopup.show(t)}))];case 1:r.sent();store.set("favouritesCompleted",true);store.set("favouritesLoading",false);return[2]}}))}))};t.prototype.fetch=function(t,e){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(n){r=new Headers;r.append("pragma","no-cache");r.append("cache-control","no-cache");return[2,fetch(t,{method:"POST",body:e,headers:r,credentials:"same-origin"}).then((function(t){if(!t.ok)throw{name:t.status,message:t.statusText};return t}))]}))}))};t.prototype.componentDidRender=function(){this.productRendered.emit()};t.prototype.render=function(){return[h("div",{class:"top"},h("slot",{name:"top"})),h("div",{class:"left"},h("slot",{name:"left"})),h("div",{class:"bottom"},h("slot",null),h("div",{class:"installments"},h("slot",{name:"inst"})),h("div",{class:"attributes"},h("slot",{name:"attr"})))]};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();ProductInfo.style=productInfoCss;export{ProductInfo as ks_product_info};