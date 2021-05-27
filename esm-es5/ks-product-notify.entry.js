var __awaiter=this&&this.__awaiter||function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{u(n.next(e))}catch(t){r(t)}}function s(e){try{u(n["throw"](e))}catch(t){r(t)}}function u(e){e.done?i(e.value):o(e.value).then(a,s)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,o,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return u([e,t])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(r=a[0]&2?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;if(o=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;o=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(a[0]===6&&i.label<r[1]){i.label=r[1];r=a;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(a);break}if(r[2])i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(s){a=[6,s];o=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-4f41a852.js";import{V as ValidateInput}from"./validate-cd7ce36d.js";var productNotifyCss="ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";var ProductNotify=function(){function e(e){registerInstance(this,e);this.product=0;this.agreement="Wyrażam zgodę na przetwarzanie przez sprzedawcę moich danych osobowych zawartych w formularzu w celu poinformowania o dostępności produktu.";this.backorderLabel="Wyślij powiadomienie przy dostępności na zamówienie.";this.successHeading="Powiadomienie zarejestrowane";this.successMessage="Poinformujemy cię jak tylko produkt stanie się dostępny na naszej stronie.";this.updatedHeading="Powiadomienie zaktualizowane";this.updatedMessage="Opcja wysyłki powiadomień przy dostępności na zamówienie została zaktualizowana.";this.existsHeading="Powiadomienie już istnieje";this.existsMessage="Powiadomienie dla tego produktu już zostało utworzone.";this.faliureHeading="Błąd rejestracji powiadomienia";this.faliureMessage="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny."}e.prototype.requestHandler=function(e){return __awaiter(this,void 0,void 0,(function(){var t,i;var n=this;return __generator(this,(function(o){switch(o.label){case 0:e.preventDefault();return[4,ValidateInput(this.root.querySelector("form"))];case 1:if(!o.sent())return[2];this.dialog.showLoading();t=e.target;i=new FormData(t);i.append("product",this.product.toString());return[4,fetch(this.api,{body:i,method:"post"}).then((function(e){return __awaiter(n,void 0,void 0,(function(){var t;return __generator(this,(function(i){switch(i.label){case 0:return[4,e.text()];case 1:t=i.sent();if(t=="added")this.dialog.showSuccess(this.successHeading,this.successMessage);else if(t=="updated")this.dialog.showSuccess(this.updatedHeading,this.updatedMessage);else if(t=="exists")this.dialog.showFailure(this.existsHeading,this.existsMessage);else this.dialog.showFailure(this.faliureHeading,this.faliureMessage);return[2]}}))}))})).catch((function(e){return __awaiter(n,void 0,void 0,(function(){var t;return __generator(this,(function(i){t="";if(!window.navigator.onLine)t="Brak internetu.";if(e.messsage)t=e.messsage;this.dialog.showFailure(this.faliureHeading,t);return[2]}))}))}))];case 2:o.sent();return[2]}}))}))};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.dialog.show();return[2]}))}))};e.prototype.componentDidLoad=function(){this.dialog=this.root.querySelector("ks-dialog")};e.prototype.render=function(){var e=this;return h("ks-dialog",null,h("form",{onSubmit:function(t){return e.requestHandler(t)}},h("fieldset",null,h("div",{class:"info"},h("h3",null,this.heading),h("p",null,this.paragraph)),h("ks-input-text",{email:true,name:"email",required:true,nomessage:true,placeholder:"E-mail",icon:"mail"}),h("ks-input-check",{checked:true,name:"backorders",nomessage:true,label:this.backorderLabel}),h("ks-input-check",{name:"zgoda",required:true,nomessage:true,label:this.agreement}),h("ks-button",{submit:true,name:"POWIADOM MNIE"}))))};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();ProductNotify.style=productNotifyCss;export{ProductNotify as ks_product_notify};