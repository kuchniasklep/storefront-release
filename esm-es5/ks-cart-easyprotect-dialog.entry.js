var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var o=Array(t),a=0,e=0;e<r;e++)for(var i=arguments[e],s=0,n=i.length;s<n;s++,a++)o[a]=i[s];return o};import{r as registerInstance,c as createEvent,h,g as getElement}from"./index-2d9093e5.js";import"./index-324bcb5b.js";import{s as store}from"./cart-store-348ec227.js";var cartEasyprotectDialogCss="ks-cart-easyprotect-dialog{display:block}ks-cart-easyprotect-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;width:100%}ks-cart-easyprotect-dialog .content h2{font-size:24px;font-weight:700;text-align:center;margin-top:30px}ks-cart-easyprotect-dialog .content p{text-align:center;margin:10px 10px 20px 10px}ks-cart-easyprotect-dialog .content>.products .items{padding:10px 20px;max-height:320px;overflow-y:auto}ks-cart-easyprotect-dialog .content>.warranty .items{padding:0 20px 0 20px;max-height:270px;overflow-y:auto}ks-cart-easyprotect-dialog .content.hidden{display:none}ks-cart-easyprotect-dialog .content.hide{opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-cart-easyprotect-dialog ks-button{z-index:20;position:relative;margin-top:20px;-webkit-box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);border-top:#8057c1 1px solid}ks-cart-easyprotect-dialog ks-button[disabled]{border-top:#bebebe 1px solid}ks-cart-easyprotect-dialog ks-button button{background-color:var(--easyprotect-color);border-color:var(--easyprotect-color)}ks-cart-easyprotect-dialog ks-button button:hover{background-color:var(--easyprotect-color-hover) !important;border-color:var(--easyprotect-color-hover) !important}ks-cart-easyprotect-dialog ks-button button:active{background-color:var(--easyprotect-color-active) !important;border-color:var(--easyprotect-color-active) !important}ks-cart-easyprotect-dialog ks-button[disabled] button{background-color:#e2e2e2 !important;border-color:#e2e2e2 !important;color:#3d3d3d !important;cursor:auto}ks-cart-easyprotect-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-cart-easyprotect-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}@media (max-width: 720px){ks-cart-easyprotect-dialog .content{height:100%}ks-cart-easyprotect-dialog .content>.products,ks-cart-easyprotect-dialog .content>.warranty{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;max-height:100%;padding:0}ks-cart-easyprotect-dialog .content>.products>.items,ks-cart-easyprotect-dialog .content>.warranty>.items{padding:0 10px 0 10px;max-height:none}ks-cart-easyprotect-dialog ks-button{margin-top:auto}ks-cart-easyprotect-dialog .content p{margin:5px 10px 15px 10px}}@media (max-width: 420px){ks-cart-easyprotect-dialog .content h2{font-size:22px;margin:20px 10px 10px 10px}ks-cart-easyprotect-dialog .content p{font-size:15px}}";var CartEasyprotectDialog=function(){function t(t){registerInstance(this,t);this.easyprotectWarrantyChanged=createEvent(this,"easyprotectWarrantyChanged",7);this.active=[];this.step=0}t.prototype.componentWillLoad=function(){var t=this;this.updateEligible();store.onChange("easyprotect",(function(){return t.updateEligible()}));store.onChange("insured",(function(){return t.updateEligible()}))};t.prototype.updateEligible=function(){var t=Object.keys(store.get("insured"));var e=Object.keys(store.get("easyprotect"));this.eligible=e.filter((function(e){return!t.includes(e)})).map((function(t){return store.get("products")[t]}));if(this.eligible.length==1){this.active=[this.eligible[0].id];this.step=2}};t.prototype.render=function(){var t=this;if(this.eligible.length<=0)return;var e=this.eligible.length>1&&this.step<=1?"":"hidden";var r=this.step==1?"hide":"";var o=this.eligible.length==1||this.step==2?"":"hidden";return[h("ks-button",{tall:true,name:"Dodaj gwarancję",onClick:function(){return t.show()}}),h("ks-overlay",null,h("div",{class:"content "+e+" "+r},this.products()),h("div",{class:"content "+o},this.warranty()))]};t.prototype.products=function(){var t=this;return h("div",{class:"products"},h("slot",{name:"products"}),h("div",{class:"items"},this.eligible.map((function(e){return h("ks-cart-easyprotect-product",{image:e.img,name:e.name,onClick:function(){return t.toggle(e.id)},active:t.active.includes(e.id)})}))),h("ks-button",{tall:true,name:"Przejdź dalej",onClick:function(){return t.addProducts()},disabled:this.active.length<=0}))};t.prototype.warranty=function(){var t=this;var e=Object.keys(store.get("easyprotect")).filter((function(e){return t.active.includes(e)}));return h("div",{class:"warranty"},h("slot",{name:"warranty"}),h("div",{class:"items"},e.map((function(t){return h("ks-cart-easyprotect-warranty",{"product-id":t})}))),h("ks-button",{tall:true,name:"Dodaj gwarancję",onClick:function(){return t.addWarranty()},disabled:this.active.length<=0}))};t.prototype.toggle=function(t){var e=this.active.findIndex((function(e){return e==t}));if(e!==-1)this.active.splice(e,1);else this.active.push(t);this.active=__spreadArrays(this.active)};t.prototype.show=function(){this.updateEligible();var t=this.root.querySelector("ks-overlay");t.show()};t.prototype.addProducts=function(){var t=this;this.step=1;setTimeout((function(){t.step=2}),300)};t.prototype.addWarranty=function(){var t=this;var e=this.root.querySelector("ks-overlay");e.hide();var r={};var o=this.root.querySelectorAll(".warranty .items ks-cart-easyprotect-warranty");o.forEach((function(t){r[t.getAttribute("product-id")]=t.getAttribute("active")}));this.easyprotectWarrantyChanged.emit(r);setTimeout((function(){t.step=0;t.active=[]}),300)};Object.defineProperty(t.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();CartEasyprotectDialog.style=cartEasyprotectDialogCss;export{CartEasyprotectDialog as ks_cart_easyprotect_dialog};