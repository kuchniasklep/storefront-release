var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function u(t){try{l(r.next(t))}catch(e){o(e)}}function a(t){try{l(r["throw"](t))}catch(e){o(e)}}function l(t){t.done?n(t.value):i(t.value).then(u,a)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(e){return l([t,e])}}function l(u){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;i=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1];o=u;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(u);break}if(o[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(a){u=[6,a];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-74ff0cef.js";var Form=function(){function t(t){registerInstance(this,t)}t.prototype.render=function(){var t=this;return h("form",{action:this.action,method:this.method,enctype:"multipart/form-data",onSubmit:function(e){return t.Submit(e)}},h("slot",null),h("input",{class:"uk-button uk-button-danger uk-width-1-1 uk-margin-medium-top",style:{padding:"8px 40px"},type:"submit",value:"Wyślij Formularz",formnovalidate:true}))};t.prototype.Submit=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n,r,i,o,u;return __generator(this,(function(a){switch(a.label){case 0:t.preventDefault();e=this.root.querySelector("form");n=e.querySelectorAll("ks-input-text, ks-input-textarea, ks-input-check, ks-input-number, ks-input-date, ks-input-select");r=true;i=0;a.label=1;case 1:if(!(i<n.length))return[3,5];o=n[i];return[4,o.Validate()];case 2:a.sent();return[4,o.IsValid()];case 3:u=a.sent();if(!u){r=false}a.label=4;case 4:i++;return[3,1];case 5:if(r)e.submit();return[2]}}))}))};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();export{Form as ks_form};