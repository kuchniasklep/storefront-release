var __awaiter=this&&this.__awaiter||function(t,e,r,n){function o(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function a(t){try{s(n.next(t))}catch(e){i(e)}}function u(t){try{s(n["throw"](t))}catch(e){i(e)}}function s(t){t.done?r(t.value):o(t.value).then(a,u)}s((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;o=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(a[0]===6&&r.label<i[1]){r.label=i[1];i=a;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(a);break}if(i[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(u){a=[6,u];o=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-4f41a852.js";import{V as ValidateInput}from"./validate-cd7ce36d.js";var productNotifyCss="ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";var ProductNotify=function(){function t(t){registerInstance(this,t);this.product=0}t.prototype.requestHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;var n=this;return __generator(this,(function(o){switch(o.label){case 0:t.preventDefault();return[4,ValidateInput(this.root.querySelector("form"))];case 1:if(!o.sent())return[2];this.dialog.showLoading();e=t.target;r=new FormData(e);r.append("product",this.product.toString());return[4,fetch(this.api,{body:r,method:"post"}).then((function(t){return __awaiter(n,void 0,void 0,(function(){return __generator(this,(function(e){return[2,t.json()]}))}))})).then((function(t){return __awaiter(n,void 0,void 0,(function(){var e;return __generator(this,(function(r){e="status"in t&&"heading"in t&&"paragraph"in t;if(!e)throw new Error(this.errorParagraph);if(t.status=="success")this.dialog.showSuccess(t.heading,t.paragraph);else this.dialog.showFailure(t.heading,t.paragraph);return[2]}))}))})).catch((function(t){return __awaiter(n,void 0,void 0,(function(){var e;return __generator(this,(function(r){e="";if(!window.navigator.onLine)e="Brak internetu.";else if(t.message!="")e=t.message;console.log(t.message);this.dialog.showFailure(this.errorHeading,e);return[2]}))}))}))];case 2:o.sent();return[2]}}))}))};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.dialog.show();return[2]}))}))};t.prototype.componentDidLoad=function(){this.dialog=this.root.querySelector("ks-dialog")};t.prototype.render=function(){var t=this;return h("ks-dialog",null,h("form",{onSubmit:function(e){return t.requestHandler(e)}},h("fieldset",null,h("div",{class:"info"},h("h3",null,this.heading),h("p",null,this.paragraph)),h("ks-input-text",{email:true,name:"email",required:true,nomessage:true,placeholder:"E-mail",icon:"mail"}),h("ks-input-check",{checked:true,name:"backorders",nomessage:true,label:this.backorders}),h("ks-input-check",{name:"zgoda",required:true,nomessage:true,label:this.agreement}),h("ks-button",{submit:true,name:"POWIADOM MNIE"}))))};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();ProductNotify.style=productNotifyCss;export{ProductNotify as ks_product_notify};