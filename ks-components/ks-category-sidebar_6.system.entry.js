var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(i.next(e))}catch(t){o(t)}}function a(e){try{l(i["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):r(e.value).then(s,a)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return l([e,t])}}function l(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(a){s=[6,a];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./index-ecaa6b0e.system.js","./core-class-355ca91c.system.js","./pagination-2ea19199.system.js","./thumbs-9151697a.system.js","./common-1f3d1005.system.js","./index-4cd19453.system.js"],(function(e){"use strict";var t,n,i,r,o,s,a,l;return{setters:[function(e){t=e.r;n=e.h;i=e.H;r=e.g},function(e){o=e.S},function(e){s=e.P},function(e){a=e.T},function(e){l=e.c},function(){}],execute:function(){var p="ks-category-sidebar>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar>.children>a{padding:4px 0px}ks-category-sidebar:not([open])>.children{max-height:0px !important;opacity:0}ks-category-sidebar[open]>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";var c=e("ks_category_sidebar",function(){function e(e){t(this,e);this.open=false;this.keepSiblingsOpen=false;this.hideWithChildren=false}e.prototype.click=function(){var e=this;if("children"in this.category){this.open=!this.open;if(!this.keepSiblingsOpen){Array.from(this.root.parentElement.children).forEach((function(t){if(t!=e.root&&"hide"in t)t.hide()}))}if(this.open&&this.hideWithChildren){Array.from(this.root.parentElement.children).forEach((function(t){if(t!=e.root&&"hide"in t)t.hide()}))}}};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.open=false;return[2]}))}))};e.prototype.render=function(){var e=this;return n(i,null,n("div",{class:"name",onClick:function(){return e.click()}},n("span",null,this.category.name),"children"in this.category?n("ks-icon",{name:this.open?"minus":"plus"}):null),"children"in this.category?n("div",{class:"children"},this.category.children.map((function(e){return"children"in e?n("ks-category-sidebar",{category:e}):n("a",{href:e.url},e.name)})),n("a",{href:this.category.url,class:"seeall"},"Zobacz wszystko")):null)};Object.defineProperty(e.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());c.style=p;var u="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}";o.use([s,a]);var d=e("ks_error_popup",function(){function e(e){t(this,e);this.name="";this.message="";this.stack="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.name=e.name;this.message=e.message;this.stack=e.stack===undefined?"":e.stack;this.overlay.show();this.visible="visible";return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.render=function(){var e=this;var t=this.name+": "+this.message;var i="";var r=this.stack;var o=parseInt(this.name);if(!isNaN(o)){if(o>=400&&o<500)i="Wystąpił błąd aplikacji. ";if(o>=500)i="Wystąpił błąd serwera. ";r+=t}else i="Wystąpił błąd aplikacji. ";i+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";var s="User-agent: "+navigator.userAgent;return n("ks-overlay",{dark:true},n("div",{class:"content "+this.visible},n("div",{class:"bar"},n("div",{class:"title"},t),n("div",{class:"close",onClick:function(){return e.hide()}},n("ks-icon",{name:"x",size:1.2}))),n("div",{class:"message"},i),n("div",{class:"data"},s,n("span",{class:"stack"},r))))};Object.defineProperty(e.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());d.style=u;var h="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";o.use([s,a]);var f=e("ks_message_popup",function(){function e(e){t(this,e);this.name="";this.message="";this.link="";this.linkname="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e,t,n,i){if(n===void 0){n=""}if(i===void 0){i=""}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){this.name=e;this.message=t;this.linkname=n;this.link=i;this.overlay.show();this.visible="visible";return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.render=function(){return n("ks-dialog",null,n("div",{class:"title"},this.name),n("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?n("ks-button",{secondary:true,round:true,link:this.link,name:this.linkname}):null)};Object.defineProperty(e.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());f.style=h;var k=e("ks_page_footer",function(){function e(e){t(this,e)}e.prototype.render=function(){return n("ks-footer",{"software-link":l.get("softwareLink"),phone:l.get("phone"),email:l.get("email"),time:l.get("workingHours"),company:l.get("company"),address:l.get("address")},l.get("social").map((function(e){return n("ks-footer-button",{slot:"social",width:64,height:64,href:e.link,image:e.image})})),l.get("reviewers").map((function(e){return n("ks-footer-button",{slot:"social",width:64,height:64,href:e.link,image:e.image})})),l.get("footerLinks").map((function(e){return n("ks-footer-links",null,n("span",{slot:"heading"},e.name),e.items.map((function(e){return n("li",null,n("a",{href:e.link},e.name))})))})))};return e}());var m=e("ks_page_header",function(){function e(e){t(this,e)}e.prototype.render=function(){return n(i,null,n("ks-navbar",null),n("ks-newsletter-popup",{api:l.get("newsletterApi"),"login-link":l.get("loginLink"),"register-link":l.get("registerLink")}),n("ks-product-suggestions",{api:l.get("suggestionApi")}),n("ks-error-popup",null),n("ks-message-popup",null),n("ks-cookie-popup",{message:l.get("cookieMessage"),button:l.get("cookieButton"),delay:l.get("cookieDelay")}))};return e}());var g="ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;-ms-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}";o.use([s,a]);var b=e("ks_sidepanel",function(){function e(e){t(this,e);this.name="";this.message="";this.stack="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.overlay.show();setTimeout((function(){e.visible="visible"}),10);return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.onClosed=function(){this.visible="hidden"};e.prototype.render=function(){var e=this;return n("ks-overlay",{dark:true},n("nav",{class:"content "+this.visible},n("button",{class:"close",onClick:function(){return e.hide()}},n("ks-icon",{name:"x"})),n("slot",null)))};Object.defineProperty(e.prototype,"root",{get:function(){return r(this)},enumerable:false,configurable:true});return e}());b.style=g}}}));