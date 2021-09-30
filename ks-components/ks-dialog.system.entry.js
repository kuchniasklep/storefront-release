var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function a(t){try{l(n.next(t))}catch(e){r(e)}}function s(t){try{l(n["throw"](t))}catch(e){r(e)}}function l(t){t.done?i(t.value):o(t.value).then(a,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,o,r,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(r=a[0]&2?o["return"]:a[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;if(o=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;o=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(a[0]===6&&i.label<r[1]){i.label=r[1];r=a;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(a);break}if(r[2])i.ops.pop();i.trys.pop();continue}a=e.call(t,i)}catch(s){a=[6,s];o=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-ecaa6b0e.system.js"],(function(t){"use strict";var e,i,n,o;return{setters:[function(t){e=t.r;i=t.e;n=t.h;o=t.g}],execute:function(){var r="ks-dialog{display:block}ks-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;padding:30px;line-height:24px}ks-dialog[nopadding] .content{padding:0px !important}@media (max-width: 720px){ks-dialog .content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;padding:20px}ks-dialog[smallmobile] .content{height:auto;width:90%}}@media (max-width: 420px){ks-dialog .content{font-size:13px;line-height:18px;padding:15px}ks-dialog[smallmobile] .content{height:auto;min-width:280px}}ks-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-dialog .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog[dark] .close{color:white}ks-dialog .overlay{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;padding:30px;background-color:rgba(255,255,255, 0.8);-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .opaque{background-color:#ffffff}ks-dialog .overlay>div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:80%;text-align:center}ks-dialog .overlay>div>*{-webkit-animation:vertical-swipe-in-short 0.5s;animation:vertical-swipe-in-short 0.5s}ks-dialog .overlay .header{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";var a=t("ks_dialog",function(){function t(t){e(this,t);this.closed=i(this,"closed",7);this.close=true;this.loading=false;this.success=false;this.failure=false;this.heading="";this.message=""}t.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.overlay.show();return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.overlay.hide();return[2]}))}))};t.prototype.showLoading=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.loading=true;this.close=false;return[2]}))}))};t.prototype.showSuccess=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(n){this.heading=t;this.message=e;setTimeout((function(){i.success=true;i.loading=false;i.close=true}),400);return[2]}))}))};t.prototype.showFailure=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(n){this.heading=t;this.message=e;setTimeout((function(){i.failure=true;i.loading=false;i.close=true}),400);return[2]}))}))};t.prototype.closeHandler=function(){var t=this;if(this.success||this.failure){setTimeout((function(){t.success=false;t.failure=false}),400)}};t.prototype.render=function(){var t=this;return n("ks-overlay",{dark:this.dark,close:this.close,onClosed:function(){return t.closeHandler()}},n("div",{class:"content"},this.close?n("button",{class:"close",onClick:function(){return t.hide()}},n("ks-icon",{name:"x",size:1.3})):null,n("slot",null),this.loading?n("div",{class:"overlay"},n("ks-loader",{large:true,dark:true})):null,this.success||this.failure?n("div",{class:"overlay opaque"},n("div",null,n("ks-icon",{name:this.success?"check":"alert-triangle",size:4}),n("p",{class:"header"},this.heading),n("p",null,this.message))):null))};Object.defineProperty(t.prototype,"root",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());a.style=r}}}));