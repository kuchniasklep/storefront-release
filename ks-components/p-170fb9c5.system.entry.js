var __awaiter=this&&this.__awaiter||function(t,e,o,i){function r(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,n){function a(t){try{l(i.next(t))}catch(e){n(e)}}function s(t){try{l(i["throw"](t))}catch(e){n(e)}}function l(t){t.done?o(t.value):r(t.value).then(a,s)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,r,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(o)try{if(i=1,r&&(n=a[0]&2?r["return"]:a[0]?r["throw"]||((n=r["return"])&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;if(r=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(n=o.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(a[0]===6&&o.label<n[1]){o.label=n[1];n=a;break}if(n&&o.label<n[2]){o.label=n[2];o.ops.push(a);break}if(n[2])o.ops.pop();o.trys.pop();continue}a=e.call(t,o)}catch(s){a=[6,s];r=0}finally{i=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-781af923.system.js"],(function(t){"use strict";var e,o,i;return{setters:[function(t){e=t.r;o=t.h;i=t.g}],execute:function(){var r="ks-overlay{display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;z-index:100000;position:fixed;height:100%;width:100%;top:0;left:0;-webkit-backdrop-filter:var(--overlay-filter);backdrop-filter:var(--overlay-filter);background-color:var(--overlay-background);color:var(--overlay-text)}ks-overlay.active{opacity:1.0;-webkit-animation:showanimation 0.3s ease;animation:showanimation 0.3s ease}ks-overlay:not(.active){opacity:0.0;-webkit-animation:hideanimation 0.3s ease;animation:hideanimation 0.3s ease}ks-overlay[dark]{-webkit-backdrop-filter:var(--overlay-dark-filter);backdrop-filter:var(--overlay-dark-filter);background-color:var(--overlay-dark-background);color:var(--overlay-dark-text)}@-webkit-keyframes showanimation{from{opacity:0}to{opacity:1}}@keyframes showanimation{from{opacity:0}to{opacity:1}}@-webkit-keyframes hideanimation{from{opacity:1}to{opacity:0}}@keyframes hideanimation{from{opacity:1}to{opacity:0}}";var n=t("ks_overlay",function(){function t(t){e(this,t);this.dark=false;this.timeoutLength=300;this.body=document.body}t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){clearTimeout(this.timeout);this.scrollToggle();this.root.classList.add("active");this.root.style.display="flex";return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){clearTimeout(this.timeout);this.scrollToggle();this.root.classList.remove("active");this.timeout=setTimeout((function(){t.root.style.display="none"}),this.timeoutLength);return[2]}))}))};t.prototype.scrollToggle=function(){if(this.body.style.position=="fixed"){this.body.style.position="static";this.body.style.overflowY="auto";this.body.style.width="unset";window.scrollTo(0,this.scroll);return}this.scroll=window.scrollY;this.body.style.position="fixed";this.body.style.top=-this.scroll+"px";this.body.style.overflowY="scroll";this.body.style.width="100%"};t.prototype.render=function(){return o("slot",null)};Object.defineProperty(t.prototype,"root",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());n.style=r}}}));