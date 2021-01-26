var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{u(r.next(t))}catch(e){i(e)}}function l(t){try{u(r["throw"](t))}catch(e){i(e)}}function u(t){t.done?n(t.value):o(t.value).then(a,l)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(t){return function(e){return u([t,e])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(l){a=[6,l];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-7597974d.system.js","./p-2e37f323.system.js"],(function(t){"use strict";var e,n,r,o;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(t){o=t.T}],execute:function(){var i="ks-cart-buttons{display:block}ks-cart-buttons>.confirm{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;font-size:28px;font-weight:700;padding:20px}";var a=t("ks_cart_buttons",function(){function t(t){e(this,t);this.href="";this.loading=0;this.loadingDelayed=false}t.prototype.LoadingWatcher=function(){var t=this;if(this.loading){this.loadingTimeout=setTimeout((function(){t.loadingDelayed=true}),500)}else{clearTimeout(this.loadingTimeout);this.loadingDelayed=false}};t.prototype.componentDidLoad=function(){this.LoadingWatcher()};t.prototype.clickHandler=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,r,o;return __generator(this,(function(i){switch(i.label){case 0:if(!!this.loading)return[3,3];t=document.querySelector("ks-cart-select-shipping");e=document.querySelector("ks-cart-select-payment");return[4,t.Validate()];case 1:n=i.sent();return[4,e.Validate()];case 2:r=i.sent();if(n&&r)window.location.href=this.href;else{o=t.getBoundingClientRect().top-document.body.getBoundingClientRect().top;if("scrollBehavior"in document.documentElement.style)window.scroll({top:o-100,behavior:"smooth"});else window.scroll(0,o-100)}i.label=3;case 3:return[2]}}))}))};t.prototype.render=function(){var t=this;return n("button",{class:"confirm uk-button uk-button-danger ks-text-decorated",onClick:function(){return t.clickHandler()}},this.loadingDelayed&&this.loading?n("div",{class:"uk-animation-fade","uk-spinner":true}):n("span",null,"DO KASY"))};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{loading:["LoadingWatcher"]}},enumerable:false,configurable:true});return t}());o.injectProps(a,["loading"]);a.style=i}}}));