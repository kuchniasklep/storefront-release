var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function s(t){try{u(i.next(t))}catch(e){o(e)}}function a(t){try{u(i["throw"](t))}catch(e){o(e)}}function u(t){t.done?n(t.value):r(t.value).then(s,a)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(a){s=[6,a];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./index-7a244351.system.js","./core-class-cc4c0830.system.js","./pagination-61c2023d.system.js","./thumbs-b390667a.system.js"],(function(t){"use strict";var e,n,i,r,o,s;return{setters:[function(t){e=t.r;n=t.h;i=t.g},function(t){r=t.S},function(t){o=t.P},function(t){s=t.T}],execute:function(){var a="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";r.use([o,s]);var u=t("ks_message_popup",function(){function t(t){e(this,t);this.name="";this.message="";this.link="";this.linkname="";this.visible=""}t.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};t.prototype.show=function(t,e,n,i){if(n===void 0){n=""}if(i===void 0){i=""}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.name=t;this.message=e;this.linkname=n;this.link=i;this.overlay.show();this.visible="visible";return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.visible="hidden";this.overlay.hide();return[2]}))}))};t.prototype.render=function(){return n("ks-dialog",null,n("div",{class:"title"},this.name),n("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?n("ks-button",{secondary:true,round:true,link:this.link,name:this.linkname}):null)};Object.defineProperty(t.prototype,"root",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());u.style=a}}}));