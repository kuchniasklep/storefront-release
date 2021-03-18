var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function i(t){try{c(r.next(t))}catch(e){a(e)}}function s(t){try{c(r["throw"](t))}catch(e){a(e)}}function c(t){t.done?n(t.value):o(t.value).then(i,s)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(t){return function(e){return c([t,e])}}function c(i){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(a=i[0]&2?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;if(o=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;o=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){n.label=i[1];break}if(i[0]===6&&n.label<a[1]){n.label=a[1];a=i;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(i);break}if(a[2])n.ops.pop();n.trys.pop();continue}i=e.call(t,n)}catch(s){i=[6,s];o=0}finally{r=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-2d9093e5.js";import"./index-324bcb5b.js";import{s as store}from"./cart-store-348ec227.js";function formfetch(t,e){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(r){n=null;if(e){n=new FormData;Object.entries(e).forEach((function(t){var e=t[0],r=t[1];n.append(e,r)}))}return[2,internalfetch(t,n)]}))}))}function jsonfetch(t,e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,internalfetch(t,JSON.stringify(e))]}))}))}function internalfetch(t,e){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(r){n=new Headers;n.append("pragma","no-cache");n.append("cache-control","no-cache");return[2,fetch(t,{method:"POST",body:e,headers:n,credentials:"same-origin"}).then((function(t){if(!t.ok)throw{name:t.status,message:t.statusText};return t}))]}))}))}var cartEasyprotectCss="ks-cart-easyprotect{display:block;padding:30px}ks-cart-easyprotect .top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:100%;position:relative}ks-cart-easyprotect .top .content{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}ks-cart-easyprotect .top .content h2{font-size:22px;text-transform:uppercase;font-family:var(--font-emphasis);font-weight:700}ks-cart-easyprotect .top ks-img2{max-width:120px;width:100%;margin-left:10px}ks-cart-easyprotect .insured{margin-top:10px}ks-cart-easyprotect .insured .item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;font-family:var(--font-emphasis);background-color:#f2f2f2;padding:5px 10px}ks-cart-easyprotect .insured .item .name{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:5px;background-color:#f2f2f2;font-size:16px}ks-cart-easyprotect .insured .item .option{margin:0 10px;font-size:17px;font-weight:700}ks-cart-easyprotect .addproducts .content{padding:20px 20px 0 20px}@media (max-width: 960px){ks-cart-easyprotect{padding:15px}}@media (max-width: 640px){ks-cart-easyprotect .top ks-img2{position:absolute;top:-5px;right:0;max-width:40px;max-height:40px}ks-cart-easyprotect .top .content{font-size:15px}}";var CartEasyprotect=function(){function t(t){registerInstance(this,t)}t.prototype.warrantyAdded=function(t){store.set("loading",store.get("loading")+1);jsonfetch(this.changeApi,t.detail).then((function(t){return t.json()})).then((function(t){store.set("loading",store.get("loading")-1);store.set("insured",t.insured);console.log(store.get("insured"))})).catch((function(t){return store.set("loading",store.get("loading")-1)}))};t.prototype.warrantyRemoved=function(t){store.set("loading",store.get("loading")+1);formfetch(this.removeApi,{id:t.detail}).then((function(t){return t.json()})).then((function(t){store.set("loading",store.get("loading")-1);store.set("insured",t.insured);console.log(store.get("insured"))})).catch((function(t){return store.set("loading",store.get("loading")-1)}))};t.prototype.render=function(){var t=Object.entries(store.get("insured"));return[h("div",{class:"top"},h("div",{class:"content"},h("slot",null)),h("ks-img2",{src:this.image,width:this.width,height:this.height})),h("div",{class:"insured"},t.map((function(t){var e=t[0],n=t[1];return h("ks-cart-easyprotect-warranty",{insured:true,"product-id":e,active:n})}))),h("slot",{name:"bottom"})]};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();CartEasyprotect.style=cartEasyprotectCss;export{CartEasyprotect as ks_cart_easyprotect};