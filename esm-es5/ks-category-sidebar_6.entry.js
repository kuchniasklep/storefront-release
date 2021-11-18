var __awaiter=this&&this.__awaiter||function(e,t,n,i){function o(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,r){function s(e){try{p(i.next(e))}catch(t){r(t)}}function a(e){try{p(i["throw"](e))}catch(t){r(t)}}function p(e){e.done?n(e.value):o(e.value).then(s,a)}p((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return p([e,t])}}function p(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,o&&(r=s[0]&2?o["return"]:s[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;if(o=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;o=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){n.label=s[1];break}if(s[0]===6&&n.label<r[1]){n.label=r[1];r=s;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(s);break}if(r[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(a){s=[6,a];o=0}finally{i=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};import{r as registerInstance,h,H as Host,g as getElement}from"./index-7a533c43.js";import{S as Swiper}from"./core-class-5b6160e1.js";import{P as Pagination}from"./pagination-c9190fdf.js";import{T as Thumbs}from"./thumbs-e8e6436d.js";import{c as common}from"./common-d9c1845a.js";import"./index-07d7bd8b.js";var categorySidebarCss="ks-category-sidebar>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar>.children>a{padding:4px 0px}ks-category-sidebar:not([open])>.children{max-height:0px !important;opacity:0}ks-category-sidebar[open]>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";var NavbarCategorySidebar=function(){function e(e){registerInstance(this,e);this.open=false;this.keepSiblingsOpen=false;this.hideWithChildren=false}e.prototype.click=function(){var e=this;if("children"in this.category){this.open=!this.open;if(!this.keepSiblingsOpen){Array.from(this.root.parentElement.children).forEach((function(t){if(t!=e.root&&"hide"in t)t.hide()}))}if(this.open&&this.hideWithChildren){Array.from(this.root.parentElement.children).forEach((function(t){if(t!=e.root&&"hide"in t)t.hide()}))}}};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.open=false;return[2]}))}))};e.prototype.render=function(){var e=this;return h(Host,null,h("div",{class:"name",onClick:function(){return e.click()}},h("span",null,this.category.name),"children"in this.category?h("ks-icon",{name:this.open?"minus":"plus"}):null),"children"in this.category?h("div",{class:"children"},this.category.children.map((function(e){return"children"in e?h("ks-category-sidebar",{category:e}):h("a",{href:e.url},e.name)})),h("a",{href:this.category.url,class:"seeall"},"Zobacz wszystko")):null)};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();NavbarCategorySidebar.style=categorySidebarCss;var errorPopupCss="ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}";Swiper.use([Pagination,Thumbs]);var ErrorPopup=function(){function e(e){registerInstance(this,e);this.name="";this.message="";this.stack="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.name=e.name;this.message=e.message;this.stack=e.stack===undefined?"":e.stack;this.overlay.show();this.visible="visible";return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.render=function(){var e=this;var t=this.name+": "+this.message;var n="";var i=this.stack;var o=parseInt(this.name);if(!isNaN(o)){if(o>=400&&o<500)n="Wystąpił błąd aplikacji. ";if(o>=500)n="Wystąpił błąd serwera. ";i+=t}else n="Wystąpił błąd aplikacji. ";n+="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";var r="User-agent: "+navigator.userAgent;return h("ks-overlay",{dark:true},h("div",{class:"content "+this.visible},h("div",{class:"bar"},h("div",{class:"title"},t),h("div",{class:"close",onClick:function(){return e.hide()}},h("ks-icon",{name:"x",size:1.2}))),h("div",{class:"message"},n),h("div",{class:"data"},r,h("span",{class:"stack"},i))))};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();ErrorPopup.style=errorPopupCss;var messagePopupCss="ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";Swiper.use([Pagination,Thumbs]);var MessagePopup=function(){function e(e){registerInstance(this,e);this.name="";this.message="";this.link="";this.linkname="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(e,t,n,i){if(n===void 0){n=""}if(i===void 0){i=""}return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(o){this.name=e;this.message=t;this.linkname=n;this.link=i;this.overlay.show();this.visible="visible";return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.render=function(){return h("ks-dialog",null,h("div",{class:"title"},this.name),h("div",{class:"message",innerHTML:this.message}),this.linkname&&this.link?h("ks-button",{secondary:true,round:true,link:this.link,name:this.linkname}):null)};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();MessagePopup.style=messagePopupCss;var PageFooter=function(){function e(e){registerInstance(this,e)}e.prototype.render=function(){return h("ks-footer",{"software-link":common.get("softwareLink"),phone:common.get("phone"),email:common.get("email"),time:common.get("workingHours"),company:common.get("company"),address:common.get("address")},common.get("social").map((function(e){return h("ks-footer-button",{slot:"social",width:64,height:64,href:e.link,image:e.image})})),common.get("reviewers").map((function(e){return h("ks-footer-button",{slot:"social",width:64,height:64,href:e.link,image:e.image})})),common.get("footerLinks").map((function(e){return h("ks-footer-links",null,h("span",{slot:"heading"},e.name),e.items.map((function(e){return h("li",null,h("a",{href:e.link},e.name))})))})))};return e}();var PageHeader=function(){function e(e){registerInstance(this,e)}e.prototype.render=function(){return h(Host,null,h("ks-navbar",null),h("ks-newsletter-popup",{api:common.get("newsletterApi"),"login-link":common.get("loginLink"),"register-link":common.get("registerLink")}),h("ks-product-suggestions",{api:common.get("suggestionApi")}),h("ks-error-popup",null),h("ks-message-popup",null),h("ks-cookie-popup",{message:common.get("cookieMessage"),button:common.get("cookieButton"),delay:common.get("cookieDelay")}))};return e}();var sidepanelCss="ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);transform:translateX(-100%)}";Swiper.use([Pagination,Thumbs]);var SidePanel=function(){function e(e){registerInstance(this,e);this.name="";this.message="";this.stack="";this.visible=""}e.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.overlay.show();setTimeout((function(){e.visible="visible"}),10);return[2]}))}))};e.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.visible="hidden";this.overlay.hide();return[2]}))}))};e.prototype.onClosed=function(){this.visible="hidden"};e.prototype.render=function(){var e=this;return h("ks-overlay",{dark:true},h("nav",{class:"content "+this.visible},h("button",{class:"close",onClick:function(){return e.hide()}},h("ks-icon",{name:"x"})),h("slot",null)))};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();SidePanel.style=sidepanelCss;export{NavbarCategorySidebar as ks_category_sidebar,ErrorPopup as ks_error_popup,MessagePopup as ks_message_popup,PageFooter as ks_page_footer,PageHeader as ks_page_header,SidePanel as ks_sidepanel};