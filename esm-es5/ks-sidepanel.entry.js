var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function s(t){try{l(r.next(t))}catch(e){a(e)}}function o(t){try{l(r["throw"](t))}catch(e){a(e)}}function l(t){t.done?n(t.value):i(t.value).then(s,o)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return l([t,e])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=s[0]&2?i["return"]:s[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;if(i=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1];a=s;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(s);break}if(a[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(o){s=[6,o];i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-2d9093e5.js";import{S as Swiper}from"./core-class-f05bf7c2.js";import{P as Pagination}from"./pagination-ca8adc5c.js";import{T as Thumbs}from"./thumbs-06204fe0.js";var sidepanelCss="ks-sidepanel{display:block}ks-sidepanel .content{position:absolute;z-index:100000;width:100%;height:100%;top:0px;left:0px;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);transition:transform 0.2s ease, -ms-transform 0.2 ease}ks-sidepanel .content.visible{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%)}ks-sidepanel .content.hidden{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}";Swiper.use([Pagination,Thumbs]);var SidePanel=function(){function t(t){registerInstance(this,t);this.name="";this.message="";this.stack="";this.visible=""}t.prototype.componentDidRender=function(){this.overlay=this.root.querySelector("ks-overlay")};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.overlay.show();this.visible="visible";return[2]}))}))};t.prototype.hide=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.visible="hidden";this.overlay.hide();return[2]}))}))};t.prototype.render=function(){return h("ks-overlay",null,h("div",{class:"content "+this.visible},h("slot",null)))};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();SidePanel.style=sidepanelCss;export{SidePanel as ks_sidepanel};