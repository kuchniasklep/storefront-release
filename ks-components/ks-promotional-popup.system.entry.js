var __awaiter=this&&this.__awaiter||function(t,e,o,n){function r(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(e){i(e)}}function s(t){try{u(n["throw"](t))}catch(e){i(e)}}function u(t){t.done?o(t.value):r(t.value).then(a,s)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,r,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,r&&(i=a[0]&2?r["return"]:a[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;if(r=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;r=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(a[0]===6&&o.label<i[1]){o.label=i[1];i=a;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(a);break}if(i[2])o.ops.pop();o.trys.pop();continue}a=e.call(t,o)}catch(s){a=[6,s];r=0}finally{n=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./index-ecaa6b0e.system.js"],(function(t){"use strict";var e,o,n;return{setters:[function(t){e=t.r;o=t.h;n=t.g}],execute:function(){var r="ks-promotional-popup{display:block}ks-promotional-popup .content{width:100%}ks-promotional-popup .info{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;position:relative;height:100%;width:100%;max-width:720px;padding:20px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-promotional-popup .info ks-img2{max-height:500px}ks-promotional-popup .texture{position:absolute;top:0;bottom:0;left:0;right:0}";var i=t("ks_promotional_popup",function(){function t(t){e(this,t);this.color="#FFFFFF";this.textureOpacity="1.0";this.textureSize="200";this.displayOnLoad=false}t.prototype.componentDidLoad=function(){var t=this;this.dialog=this.root.querySelector("ks-dialog");var e=this.name+"Popup";if(this.displayOnLoad&&document.cookie.search(e+"=tak")==-1){setTimeout((function(){t.Show()}),4e3)}};t.prototype.Show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.dialog.show();return[2]}))}))};t.prototype.SetCookie=function(){var t=this.name+"Popup";var e="";var o=new Date;o.setMonth(o.getMonth()+1);e="expires="+o.toUTCString()+"; ";document.cookie=t+"=tak; "+e+"path=/"};t.prototype.render=function(){var t=this;var e={backgroundColor:this.color};var n={backgroundImage:'url("'+this.texture+'")',backgroundSize:this.textureSize+"px "+this.textureSize+"px",opacity:this.textureOpacity};return[o("ks-dialog",{smallmobile:true,dark:true,nopadding:true,onClosed:function(){return t.SetCookie()}},o("a",{href:this.href,class:"info",style:e},o("div",{class:"texture",style:n}),o("ks-img2",{src:this.image})))]};Object.defineProperty(t.prototype,"root",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());i.style=r}}}));