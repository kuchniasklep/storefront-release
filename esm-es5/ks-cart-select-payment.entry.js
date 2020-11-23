var __awaiter=this&&this.__awaiter||function(e,t,r,n){function i(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,o){function a(e){try{s(n.next(e))}catch(t){o(t)}}function c(e){try{s(n["throw"](e))}catch(t){o(t)}}function s(e){e.done?r(e.value):i(e.value).then(a,c)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(e){return function(t){return s([e,t])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=t.call(e,r)}catch(c){a=[6,c];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-22b73bd9.js";import{T as Tunnel}from"./cartData-871fd2cb.js";var cartSelectCss=".ks-cart-select{display:block;position:relative;height:50px}.ks-cart-select .animation{-webkit-animation:start 1.0s ease;animation:start 1.0s ease}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}.ks-cart-select>.center{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px}.ks-cart-select .select{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#f8f8f8;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;outline:1px solid #d2d2d2;outline-offset:-1px}.ks-cart-select .select:hover{background-color:#f2f2f2}.ks-cart-select[error] .select{background-color:#ffc5c5;color:#ff0000;outline-color:#ff0000}.ks-cart-select[error] .select:hover{background-color:#ff8a8a}.ks-cart-select .selectSlot{-webkit-box-flex:1;-ms-flex:1;flex:1}.ks-cart-select .selectIcon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:10;width:50px;height:50px;background-color:#252525;color:white;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.ks-cart-select .select:hover .selectIcon{background-color:#353535}.ks-cart-select .items{position:absolute;top:50px;left:0;width:100%;z-index:20;background-color:#f8f8f8;-webkit-box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349);box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349)}.ks-cart-select .items .ks-cart-select-item:hover{background-color:#f0f0f0}@media only screen and (max-width: 420px){.ks-cart-select .select .ks-cart-select-item .price{display:none}}";var CartSelectPayment=function(){function e(e){registerInstance(this,e);this.name="";this.valid=false;this.error=false;this.active=-1;this.toggled=false;this.loading=false}e.prototype.StartLoading=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.loading=true;return[2]}))}))};e.prototype.ResetLoading=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.loading=false;return[2]}))}))};e.prototype.Validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(!this.valid){this.error=true;return[2,false]}this.error=false;return[2,true]}))}))};e.prototype.OutsideClickHandler=function(e){var t=e.target;if(this.toggled&&!t.closest('.ks-cart-select[name="'+this.name+'"]'))this.toggled=false};e.prototype.componentDidLoad=function(){this.root.classList.add("ks-cart-select")};e.prototype.ActivateItem=function(e){this.PaymentChange(e);this.toggled=false;this.active=e;this.valid=true;this.error=false};e.prototype.ActiveItemWatcher=function(){if(this.valid)this.active=this.activePayment};e.prototype.render=function(){var e=this;if(this.loading)return h("div",{class:"center"},h("nav",{"uk-spinner":true}));var t=this.payment.find((function(t){return t.id==e.active}));return[h("div",{class:"select animation",onClick:function(){if(!e.loading)e.toggled=!e.toggled}},h("div",{class:"selectSlot"},this.active==-1?h("ks-cart-select-item",{name:"Wybierz metodę płatności"}):h("ks-cart-select-item",{logo:t.logo,name:t.name,price:t.price})),h("div",{class:"selectIcon"},h("span",{"uk-icon":"icon: triangle-down; ratio: 1.3"}))),h("div",{class:"items",hidden:!this.toggled},this.payment.map((function(t){return h("ks-cart-select-item",{key:t.id,logo:t.logo,name:t.name,price:t.price,color:t.color,onClick:function(){return e.ActivateItem(t.id)}})})))]};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{activePayment:["ActiveItemWatcher"]}},enumerable:false,configurable:true});return e}();Tunnel.injectProps(CartSelectPayment,["payment","PaymentChange","activePayment"]);CartSelectPayment.style=cartSelectCss;export{CartSelectPayment as ks_cart_select_payment};