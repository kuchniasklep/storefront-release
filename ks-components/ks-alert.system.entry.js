var __awaiter=this&&this.__awaiter||function(e,t,n,r){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function i(e){try{s(r.next(e))}catch(t){a(t)}}function u(e){try{s(r["throw"](e))}catch(t){a(t)}}function s(e){e.done?n(e.value):o(e.value).then(i,u)}s((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,i;return i={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function u(e){return function(t){return s([e,t])}}function s(i){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(a=i[0]&2?o["return"]:i[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;if(o=0,a)i=[i[0]&2,a.value];switch(i[0]){case 0:case 1:a=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;o=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){n.label=i[1];break}if(i[0]===6&&n.label<a[1]){n.label=a[1];a=i;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(i);break}if(a[2])n.ops.pop();n.trys.pop();continue}i=t.call(e,n)}catch(u){i=[6,u];o=0}finally{r=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./index-e940a1f6.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.r;n=e.h;r=e.g}],execute:function(){var o=e("ks_alert",function(){function e(e){t(this,e);this.message=""}e.prototype.componentWillLoad=function(){this.hashCode=this.GenerateHash(this.message)};e.prototype.GenerateHash=function(e){var t=0,n=e.length;if(e.length===0){return t}for(var r=0;r<n;r++){var o=e.charCodeAt(r);t=(t<<5)-t+o;t=t&t}return t};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=document.querySelector("#ks-alert-"+this.hashCode);UIkit.modal(e).show();return[2]}))}))};e.prototype.Close=function(){var e=this;var t=document.querySelector("#ks-alert-"+this.hashCode);UIkit.modal(t).hide().then((function(){e.root.remove();t.remove()}))};e.prototype.render=function(){var e=this;return n("div",{id:"ks-alert-"+this.hashCode,class:"uk-modal-full","uk-modal":"stack: true"},n("div",{class:"uk-modal-dialog"},n("div",{class:"uk-background-cover uk-flex uk-flex-between uk-flex-column","uk-height-viewport":true},n("div",{class:"uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column",style:{maxWidth:"1300px",margin:"auto"}},n("p",{class:"uk-text-center ks-text-decorated uk-h1",innerHTML:this.message}),n("div",{class:"uk-margin-top"},n("button",{onClick:function(){return e.Close()},class:"uk-button uk-button-secondary",style:{padding:"5px 40px"}},"OK"))))))};Object.defineProperty(e.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return e}())}}}));