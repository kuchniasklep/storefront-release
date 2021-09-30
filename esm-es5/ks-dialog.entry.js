var __awaiter=this&&this.__awaiter||function(t,e,i,n){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,a){function r(t){try{l(n.next(t))}catch(e){a(e)}}function s(t){try{l(n["throw"](t))}catch(e){a(e)}}function l(t){t.done?i(t.value):o(t.value).then(r,s)}l((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,o&&(a=r[0]&2?o["return"]:r[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,r[1])).done)return a;if(o=0,a)r=[r[0]&2,a.value];switch(r[0]){case 0:case 1:a=r;break;case 4:i.label++;return{value:r[1],done:false};case 5:i.label++;o=r[1];r=[0];continue;case 7:r=i.ops.pop();i.trys.pop();continue;default:if(!(a=i.trys,a=a.length>0&&a[a.length-1])&&(r[0]===6||r[0]===2)){i=0;continue}if(r[0]===3&&(!a||r[1]>a[0]&&r[1]<a[3])){i.label=r[1];break}if(r[0]===6&&i.label<a[1]){i.label=a[1];a=r;break}if(a&&i.label<a[2]){i.label=a[2];i.ops.push(r);break}if(a[2])i.ops.pop();i.trys.pop();continue}r=e.call(t,i)}catch(s){r=[6,s];o=0}finally{n=a=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};import{r as registerInstance,e as createEvent,h,g as getElement}from"./index-5edb5049.js";var dialogCss="ks-dialog{display:block}ks-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;padding:30px;line-height:24px}ks-dialog[nopadding] .content{padding:0px !important}@media (max-width: 720px){ks-dialog .content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;padding:20px}ks-dialog[smallmobile] .content{height:auto;width:90%}}@media (max-width: 420px){ks-dialog .content{font-size:13px;line-height:18px;padding:15px}ks-dialog[smallmobile] .content{height:auto;min-width:280px}}ks-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-dialog .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog[dark] .close{color:white}ks-dialog .overlay{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;padding:30px;background-color:rgba(255,255,255, 0.8);-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .opaque{background-color:#ffffff}ks-dialog .overlay>div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:80%;text-align:center}ks-dialog .overlay>div>*{-webkit-animation:vertical-swipe-in-short 0.5s;animation:vertical-swipe-in-short 0.5s}ks-dialog .overlay .header{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";var dialog=function(){function t(t){registerInstance(this,t);this.closed=createEvent(this,"closed",7);this.close=true;this.loading=false;this.success=false;this.failure=false;this.heading="";this.message=""}t.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.overlay.show();return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.overlay.hide();return[2]}))}))};t.prototype.showLoading=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.loading=true;this.close=false;return[2]}))}))};t.prototype.showSuccess=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(n){this.heading=t;this.message=e;setTimeout((function(){i.success=true;i.loading=false;i.close=true}),400);return[2]}))}))};t.prototype.showFailure=function(t,e){return __awaiter(this,void 0,void 0,(function(){var i=this;return __generator(this,(function(n){this.heading=t;this.message=e;setTimeout((function(){i.failure=true;i.loading=false;i.close=true}),400);return[2]}))}))};t.prototype.closeHandler=function(){var t=this;if(this.success||this.failure){setTimeout((function(){t.success=false;t.failure=false}),400)}};t.prototype.render=function(){var t=this;return h("ks-overlay",{dark:this.dark,close:this.close,onClosed:function(){return t.closeHandler()}},h("div",{class:"content"},this.close?h("button",{class:"close",onClick:function(){return t.hide()}},h("ks-icon",{name:"x",size:1.3})):null,h("slot",null),this.loading?h("div",{class:"overlay"},h("ks-loader",{large:true,dark:true})):null,this.success||this.failure?h("div",{class:"overlay opaque"},h("div",null,h("ks-icon",{name:this.success?"check":"alert-triangle",size:4}),h("p",{class:"header"},this.heading),h("p",null,this.message))):null))};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();dialog.style=dialogCss;export{dialog as ks_dialog};