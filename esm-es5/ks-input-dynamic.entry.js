var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{u(r.next(t))}catch(e){a(e)}}function s(t){try{u(r["throw"](t))}catch(e){a(e)}}function u(t){t.done?n(t.value):i(t.value).then(o,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(s){o=[6,s];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-74ff0cef.js";var InputDynamic=function(){function t(t){registerInstance(this,t);this.api="";this.message="";this.loading=false}t.prototype.componentDidLoad=function(){var t=this;var e=this.root.querySelector("input");var n=this.root.querySelector("ks-input-text");n.setAttribute("novalidate","novalidate");e.onchange=function(){return t.Validate()}};t.prototype.Validate=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n;var r=this;return __generator(this,(function(i){t=this.root.querySelector("input");e=this.root.querySelector("ks-input-text");n=new Headers;n.append("pragma","no-cache");n.append("cache-control","no-cache");this.ready=new Promise((function(i){return __awaiter(r,void 0,void 0,(function(){var r=this;return __generator(this,(function(a){switch(a.label){case 0:return[4,e.Validate()];case 1:a.sent();return[4,e.IsValid()];case 2:if(!a.sent())return[3,4];this.loading=true;return[4,fetch(this.api+t.value,{method:"GET",headers:n,credentials:"same-origin"}).then((function(t){if(!t.ok)throw t.status;return t.text()})).then((function(t){if(t=="false")throw r.message;else if(t!="true")throw t;else i(true)})).catch((function(t){var n=t;if(Number.isInteger(t))n="Błąd połączenia - "+t;else if(!navigator.onLine)n="Brak połączenia z internetem";e.setAttribute("message",n);i(false)}))];case 3:a.sent();return[3,5];case 4:i(false);a.label=5;case 5:this.loading=false;return[2]}}))}))}));return[2]}))}))};t.prototype.IsValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.ready];case 1:return[2,t.sent()]}}))}))};t.prototype.render=function(){return h("div",{class:"uk-position-relative"},h("slot",null),this.loading?h("div",{class:"uk-position-absolute uk-animation-fade",style:{top:"7px",right:"7px",animationDuration:"0.3s",animationDelay:"0.5s"},"uk-spinner":"ratio: 0.9"}):null)};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();export{InputDynamic as ks_input_dynamic};