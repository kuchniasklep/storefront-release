var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{s(r.next(t))}catch(e){i(e)}}function u(t){try{s(r["throw"](t))}catch(e){i(e)}}function s(t){t.done?n(t.value):o(t.value).then(a,u)}s((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return s([t,e])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(u){a=[6,u];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-74ff0cef.js";var OrderForm=function(){function t(t){registerInstance(this,t);this.loading=false}t.prototype.render=function(){var t=this;return h("form",{action:this.action,method:this.method,onSubmit:function(e){return t.Submit(e)}},h("slot",null),h("div",{class:"uk-position-relative"},h("button",{type:"submit",formnovalidate:true,class:"uk-button uk-button-danger uk-width-1-1 uk-width-expand@m ks-text-decorated",style:{fontSize:"28px",fontWeight:"700",padding:"20px"}},"ZAMAWIAM I PŁACĘ"),this.loading?h("div",{class:"uk-overlay uk-light uk-padding-remove uk-position-cover uk-animation-fade",style:{animationDuration:"0.3s",backgroundColor:"#e21334"}},h("div",{"uk-spinner":"ratio: 1.5",class:"uk-position-center"})):null),h("ks-order-form-modal",null))};t.prototype.Submit=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,r,o,i,a,u;return __generator(this,(function(s){switch(s.label){case 0:t.preventDefault();e=this.root.querySelector("form");n=e.querySelectorAll("ks-input-dynamic, ks-order-document-select, ks-input-text, ks-input-textarea, ks-input-check, ks-order-inpost, ks-order-pocztapunkt");r=Number.MAX_VALUE;o=true;i=0;s.label=1;case 1:if(!(i<n.length))return[3,5];a=n[i];if(a.closest("ks-input-dynamic *")!=null)return[3,4];return[4,a.Validate()];case 2:s.sent();return[4,a.IsValid()];case 3:if(!s.sent()){u=a.getBoundingClientRect().top-document.body.getBoundingClientRect().top;if(u<r)r=u;o=false}s.label=4;case 4:i++;return[3,1];case 5:if(o){this.loading=true;e.submit()}else{try{window.scroll({top:r-100,behavior:"smooth"})}catch(l){window.scroll(0,r-100)}}return[2]}}))}))};t.prototype.ShowPrompt=function(t){var e=this.root.querySelector("ks-order-form-modal");e.setAttribute("message",t);e.Show()};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();export{OrderForm as ks_order_confirmation_form};