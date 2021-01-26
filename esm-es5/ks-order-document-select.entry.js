var __awaiter=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function u(e){try{l(r["throw"](e))}catch(t){a(t)}}function l(e){e.done?n(e.value):o(e.value).then(i,u)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,i;return i={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function u(e){return function(t){return l([e,t])}}function l(i){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(a=i[0]&2?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;if(o=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;o=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){n.label=i[1];break}if(i[0]===6&&n.label<a[1]){n.label=a[1];a=i;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(i);break}if(a[2])n.ops.pop();n.trys.pop();continue}i=t.call(e,n)}catch(u){i=[6,u];o=0}finally{r=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-74ff0cef.js";var OrderDocumentSelect=function(){function e(e){registerInstance(this,e)}e.prototype.componentDidLoad=function(){var e=this;this.root.style.display="block";var t=this.root.querySelectorAll("input[name="+this.name+"]");t.forEach((function(t){t.addEventListener("change",(function(t){var n=t.target;var r=new FormData;r.append("value",n.value);var o=new Headers;o.append("pragma","no-cache");o.append("cache-control","no-cache");e.loading=true;fetch(e.api,{method:"POST",headers:o,body:r,credentials:"same-origin"}).then((function(){return e.loading=false}))}))}))};e.prototype.Validate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2]}))}))};e.prototype.IsValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,!this.loading]}))}))};e.prototype.render=function(){return[h("span",null,"Wybierz dokument sprzedaży:"),h("div",{class:"uk-position-relative uk-margin-small-top"},h("div",{class:"uk-child-width-1-2 uk-flex"},h("ks-order-toggle",{active:true,text:"PARAGON",name:this.name,value:"0"}),h("ks-order-toggle",{text:"FAKTURA",name:this.name,value:"1"})),this.loading?h("div",{class:"uk-overlay uk-overlay-default uk-padding-remove uk-position-cover uk-animation-fade",style:{animationDuration:"0.3s",animationDelay:"0.5s"}},h("div",{"uk-spinner":true,class:"uk-position-center"})):null)]};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{OrderDocumentSelect as ks_order_document_select};