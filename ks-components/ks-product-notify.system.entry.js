var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function u(t){try{s(r["throw"](t))}catch(e){o(e)}}function s(t){t.done?n(t.value):i(t.value).then(a,u)}s((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-4a410963.system.js","./validate-347c285d.system.js"],(function(t){"use strict";var e,n,r,i;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(t){i=t.V}],execute:function(){var o="ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";var a=t("ks_product_notify",function(){function t(t){e(this,t);this.product=0}t.prototype.requestHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;var r=this;return __generator(this,(function(o){switch(o.label){case 0:t.preventDefault();return[4,i(this.root.querySelector("form"))];case 1:if(!o.sent())return[2];this.dialog.showLoading();e=t.target;n=new FormData(e);n.append("product",this.product.toString());return[4,fetch(this.api,{body:n,method:"post"}).then((function(t){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(e){return[2,t.json()]}))}))})).then((function(t){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(n){e="status"in t&&"heading"in t&&"paragraph"in t;if(!e)throw new Error(this.errorParagraph);if(t.status=="success")this.dialog.showSuccess(t.heading,t.paragraph);else this.dialog.showFailure(t.heading,t.paragraph);return[2]}))}))})).catch((function(t){return __awaiter(r,void 0,void 0,(function(){var e;return __generator(this,(function(n){e="";if(!window.navigator.onLine)e="Brak internetu.";else if(t.message!="")e=t.message;console.log(t.message);this.dialog.showFailure(this.errorHeading,e);return[2]}))}))}))];case 2:o.sent();return[2]}}))}))};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.dialog.show();return[2]}))}))};t.prototype.componentDidLoad=function(){this.dialog=this.root.querySelector("ks-dialog")};t.prototype.render=function(){var t=this;return n("ks-dialog",null,n("form",{onSubmit:function(e){return t.requestHandler(e)}},n("fieldset",null,n("div",{class:"info"},n("h3",null,this.heading),n("p",null,this.paragraph)),n("ks-input-text",{email:true,name:"email",required:true,nomessage:true,placeholder:"E-mail",icon:"mail"}),n("ks-input-check",{checked:true,name:"backorders",nomessage:true,label:this.backorders}),n("ks-input-check",{name:"zgoda",required:true,nomessage:true,label:this.agreement}),n("ks-button",{submit:true,name:"POWIADOM MNIE"}))))};Object.defineProperty(t.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());a.style=o}}}));