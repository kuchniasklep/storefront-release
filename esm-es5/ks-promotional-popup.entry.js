var __awaiter=this&&this.__awaiter||function(t,e,o,r){function i(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,n){function a(t){try{u(r.next(t))}catch(e){n(e)}}function s(t){try{u(r["throw"](t))}catch(e){n(e)}}function u(t){t.done?o(t.value):i(t.value).then(a,s)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,i,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,i&&(n=a[0]&2?i["return"]:a[0]?i["throw"]||((n=i["return"])&&n.call(i),0):i.next)&&!(n=n.call(i,a[1])).done)return n;if(i=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;i=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(n=o.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(a[0]===6&&o.label<n[1]){o.label=n[1];n=a;break}if(n&&o.label<n[2]){o.label=n[2];o.ops.push(a);break}if(n[2])o.ops.pop();o.trys.pop();continue}a=e.call(t,o)}catch(s){a=[6,s];i=0}finally{r=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-f323e182.js";var promotionalPopupCss="ks-promotional-popup{display:block}ks-promotional-popup .content{width:100%}ks-promotional-popup .info{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;height:100%;width:100%;max-width:720px;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-promotional-popup .info ks-img2{max-height:500px}ks-promotional-popup .texture{position:absolute;top:0;bottom:0;left:0;right:0}";var PromotionalPopup=function(){function t(t){registerInstance(this,t);this.color="#FFFFFF";this.textureOpacity="1.0";this.textureSize="200";this.displayOnLoad=false}t.prototype.componentDidLoad=function(){var t=this;this.dialog=this.root.querySelector("ks-dialog");var e=this.name+"Popup";if(this.displayOnLoad&&document.cookie.search(e+"=tak")==-1){setTimeout((function(){t.Show()}),4e3)}};t.prototype.Show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.dialog.show();return[2]}))}))};t.prototype.SetCookie=function(){var t=this.name+"Popup";var e="";var o=new Date;o.setMonth(o.getMonth()+1);e="expires="+o.toUTCString()+"; ";document.cookie=t+"=tak; "+e+"path=/"};t.prototype.render=function(){var t=this;var e={backgroundColor:this.color};var o={backgroundImage:'url("'+this.texture+'")',backgroundSize:this.textureSize+"px "+this.textureSize+"px",opacity:this.textureOpacity};return[h("ks-dialog",{smallmobile:true,dark:true,nopadding:true,onClosed:function(){return t.SetCookie()}},h("a",{href:this.href,class:"info",style:e},h("div",{class:"texture",style:o}),h("ks-img2",{src:this.image})))]};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();PromotionalPopup.style=promotionalPopupCss;export{PromotionalPopup as ks_promotional_popup};