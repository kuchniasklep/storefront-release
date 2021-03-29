var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,s){function o(e){try{u(i.next(e))}catch(t){s(t)}}function a(e){try{u(i["throw"](e))}catch(t){s(t)}}function u(e){e.done?n(e.value):r(e.value).then(o,a)}u((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return u([e,t])}}function u(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(s=o[0]&2?r["return"]:o[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;if(r=0,s)o=[o[0]&2,s.value];switch(o[0]){case 0:case 1:s=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(s=n.trys,s=s.length>0&&s[s.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!s||o[1]>s[0]&&o[1]<s[3])){n.label=o[1];break}if(o[0]===6&&n.label<s[1]){n.label=s[1];s=o;break}if(s&&n.label<s[2]){n.label=s[2];n.ops.push(o);break}if(s[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(a){o=[6,a];r=0}finally{i=s=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-2d9093e5.js";import{S as Swiper}from"./core-class-f05bf7c2.js";import{P as Pagination}from"./pagination-ca8adc5c.js";import{T as Thumbs}from"./thumbs-06204fe0.js";var messagePopupCss="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";Swiper.use([Pagination,Thumbs]);var MessagePopup=function(){function e(e){registerInstance(this,e);this.name="";this.message="";this.link="";this.linkname="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e,t,n,i){if(n===void 0){n=""}if(i===void 0){i=""}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.name=e;this.message=t;this.linkname=n;this.link=i;this.overlay.show();this.visible="visible";return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.render=function(){return h("ks-dialog",null,h("div",{class:"title"},this.name),h("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?h("ks-button",{secondary:true,round:true,link:this.link,name:this.linkname}):null)};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();MessagePopup.style=messagePopupCss;export{MessagePopup as ks_message_popup};