var __awaiter=this&&this.__awaiter||function(t,e,o,r){function a(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,i){function n(t){try{c(r.next(t))}catch(e){i(e)}}function s(t){try{c(r["throw"](t))}catch(e){i(e)}}function c(t){t.done?o(t.value):a(t.value).then(n,s)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,n;return n={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function s(t){return function(e){return c([t,e])}}function c(n){if(r)throw new TypeError("Generator is already executing.");while(o)try{if(r=1,a&&(i=n[0]&2?a["return"]:n[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,n[1])).done)return i;if(a=0,i)n=[n[0]&2,i.value];switch(n[0]){case 0:case 1:i=n;break;case 4:o.label++;return{value:n[1],done:false};case 5:o.label++;a=n[1];n=[0];continue;case 7:n=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(n[0]===6||n[0]===2)){o=0;continue}if(n[0]===3&&(!i||n[1]>i[0]&&n[1]<i[3])){o.label=n[1];break}if(n[0]===6&&o.label<i[1]){o.label=i[1];i=n;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(n);break}if(i[2])o.ops.pop();o.trys.pop();continue}n=e.call(t,o)}catch(s){n=[6,s];a=0}finally{r=i=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;for(var r=Array(t),a=0,e=0;e<o;e++)for(var i=arguments[e],n=0,s=i.length;n<s;n++,a++)r[a]=i[n];return r};import{r as registerInstance,h,g as getElement}from"./index-2d9093e5.js";import"./index-324bcb5b.js";import{s as store,e as easyprotectChange}from"./cart-store-2721ab73.js";var cartEasyprotectDialogCss="ks-cart-easyprotect-dialog{display:block}ks-cart-easyprotect-dialog .hidden{display:none}ks-cart-easyprotect-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;width:100%}ks-cart-easyprotect-dialog .content h2{font-size:24px;font-weight:700;text-align:center;margin-top:30px}ks-cart-easyprotect-dialog .content p{text-align:center;margin:10px 10px 20px 10px}ks-cart-easyprotect-dialog .content>.products .items{padding:10px 20px;max-height:320px;overflow-y:auto}ks-cart-easyprotect-dialog .content>.warranty .items{padding:0 20px 0 20px;max-height:270px;overflow-y:auto}ks-cart-easyprotect-dialog .content.hidden{display:none}ks-cart-easyprotect-dialog .content.hide{opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-cart-easyprotect-dialog ks-button{z-index:20;position:relative;margin-top:20px;-webkit-box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);border-top:#8057c1 1px solid}ks-cart-easyprotect-dialog ks-button[disabled]{border-top:#bebebe 1px solid}ks-cart-easyprotect-dialog ks-button button{background-color:var(--easyprotect-color);border-color:var(--easyprotect-color)}ks-cart-easyprotect-dialog ks-button button:hover{background-color:var(--easyprotect-color-hover) !important;border-color:var(--easyprotect-color-hover) !important}ks-cart-easyprotect-dialog ks-button button:active{background-color:var(--easyprotect-color-active) !important;border-color:var(--easyprotect-color-active) !important}ks-cart-easyprotect-dialog ks-button[disabled] button{background-color:#e2e2e2 !important;border-color:#e2e2e2 !important;color:#3d3d3d !important;cursor:auto}ks-cart-easyprotect-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-cart-easyprotect-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}@media (max-width: 720px){ks-cart-easyprotect-dialog .content{height:100%}ks-cart-easyprotect-dialog .content>.products,ks-cart-easyprotect-dialog .content>.warranty{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;max-height:100%;padding:0}ks-cart-easyprotect-dialog .content>.products>.items,ks-cart-easyprotect-dialog .content>.warranty>.items{padding:0 10px 0 10px;max-height:none}ks-cart-easyprotect-dialog ks-button{margin-top:auto}ks-cart-easyprotect-dialog .content p{margin:5px 10px 15px 10px}}@media (max-width: 420px){ks-cart-easyprotect-dialog .content h2{font-size:20px;margin:20px 10px 10px 10px}ks-cart-easyprotect-dialog .content p{font-size:15px}}ks-cart-easyprotect-dialog .content .close,ks-cart-easyprotect-dialog .content .back{position:absolute;top:20px;z-index:20;border-radius:50px;padding:10px;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-cart-easyprotect-dialog .content .close:hover,ks-cart-easyprotect-dialog .content .back:hover{background-color:#f2f2f2}ks-cart-easyprotect-dialog .content .close:active,ks-cart-easyprotect-dialog .content .back:active{background-color:#dbdbdb}ks-cart-easyprotect-dialog .content .close{right:20px}ks-cart-easyprotect-dialog .content .back{left:20px}@media (max-width: 420px){ks-cart-easyprotect-dialog .content .close,ks-cart-easyprotect-dialog .content .back{padding:3px;top:17px}ks-cart-easyprotect-dialog .content .close{right:8px}ks-cart-easyprotect-dialog .content .back{left:8px}}ks-cart-easyprotect-dialog .content .loading{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:white;-webkit-animation:fade-in 0.3s ease;animation:fade-in 0.3s ease}";var CartEasyprotectDialog=function(){function t(t){registerInstance(this,t);this.active=[];this.step=0}t.prototype.componentWillLoad=function(){var t=this;this.updateEligible();store.onChange("easyprotect",(function(){return t.updateEligible()}));store.onChange("insured",(function(){return t.updateEligible()}))};t.prototype.componentDidLoad=function(){this.overlay=this.root.querySelector("ks-overlay")};t.prototype.updateEligible=function(){var t=Object.keys(store.get("insured"));var e=Object.keys(store.get("easyprotect"));this.eligible=e.filter((function(e){return!t.includes(e)})).map((function(t){return store.get("products")[t]}));if(this.eligible.length==1){this.active=[this.eligible[0].id];this.step=2}};t.prototype.render=function(){var t=this;var e=this.eligible.length>0;var o=this.eligible.length>1&&this.step<1?"":"hidden";var r=this.step==1?"hide":"";var a=this.eligible.length==1||this.step>=2?"":"hidden";var i=this.step==1?"hide":"";return[h("ks-button",{tall:true,name:"Dodaj gwarancję",onClick:function(){return t.show()},class:e?null:"hidden"}),h("ks-overlay",null,h("div",{class:"content "+o+" "+r},this.products()),h("div",{class:"content "+a+" "+i},this.warranty()))]};t.prototype.products=function(){var t=this;return h("div",{class:"products"},h("slot",{name:"products"}),h("div",{class:"items"},this.eligible.map((function(e){return h("ks-cart-easyprotect-product",{image:e.img,name:e.name,warranty:e.warranty,onClick:function(){return t.toggle(e.id)},active:t.active.includes(e.id)})}))),h("ks-button",{tall:true,name:"Przejdź dalej",onClick:function(){return t.addProducts()},disabled:this.active.length<=0}),h("div",{class:"close",onClick:function(){return t.hide()}},h("ks-icon",{name:"x",size:1.2})))};t.prototype.warranty=function(){var t=this;var e=Object.keys(store.get("easyprotect")).filter((function(e){return t.active.includes(e)}));return[h("div",{class:"warranty"},h("slot",{name:"warranty"}),h("div",{class:"items"},e.map((function(t){return h("ks-cart-easyprotect-warranty",{"product-id":t})}))),h("ks-button",{tall:true,name:"Dodaj gwarancję",onClick:function(){return t.addWarranty()},disabled:this.active.length<=0}),h("div",{class:"close",onClick:function(){return t.hide()}},h("ks-icon",{name:"x",size:1.2})),this.eligible.length>1?h("div",{class:"back",onClick:function(){return t.back()}},h("ks-icon",{name:"chevron-left",size:1.2})):null),this.step==3?h("div",{class:"loading"},h("ks-loader",{large:true,dark:true})):null]};t.prototype.toggle=function(t){var e=this.active.findIndex((function(e){return e==t}));if(e!==-1)this.active.splice(e,1);else this.active.push(t);this.active=__spreadArrays(this.active)};t.prototype.show=function(){this.updateEligible();this.overlay.show()};t.prototype.hide=function(){this.overlay.hide()};t.prototype.addProducts=function(){var t=this;this.step=1;setTimeout((function(){t.step=2}),200)};t.prototype.back=function(){var t=this;this.step=1;setTimeout((function(){t.step=0}),200)};t.prototype.addWarranty=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,o,r;var a=this;return __generator(this,(function(i){this.step=3;this.overlay.close=false;t={};e=this.root.querySelectorAll(".warranty .items ks-cart-easyprotect-warranty");e.forEach((function(e){t[e.getAttribute("product-id")]=e.getAttribute("active")}));o=false;r=false;setTimeout((function(){r=true;if(o)a.end()}),500);easyprotectChange(t).then((function(){o=true;if(r)a.end()}));return[2]}))}))};t.prototype.end=function(){var t=this;this.overlay.hide();setTimeout((function(){t.overlay.close=true;t.step=0;t.active=[]}),300)};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();CartEasyprotectDialog.style=cartEasyprotectDialogCss;export{CartEasyprotectDialog as ks_cart_easyprotect_dialog};