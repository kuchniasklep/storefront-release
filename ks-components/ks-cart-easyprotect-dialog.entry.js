import{r as t,h as o,g as a}from"./index-aa615a50.js";import{s as e,e as s}from"./cart-store-c27698a9.js";import"./index-6936e5a4.js";const i=class{constructor(o){t(this,o),this.active=[],this.step=0}componentWillLoad(){const t=()=>{this.updateEligible()};t(),e.onChange("easyprotect",t),e.onChange("insured",t)}componentDidLoad(){this.overlay=this.root.querySelector("ks-overlay")}updateEligible(){const t=Object.keys(e.get("insured")),o=Object.keys(e.get("easyprotect"));this.eligible=o.filter((o=>!t.includes(o)&&void 0!==e.get("products")[o])).map((t=>e.get("products")[t]))}updateStep(){1==this.eligible.length&&(this.active=[this.eligible[0].id],this.step=2)}render(){const t=this.eligible.length>1&&this.step<1?"":"hidden",a=1==this.step?"hide":"",e=1==this.eligible.length||this.step>=2?"":"hidden",s=1==this.step?"hide":"";return[o("ks-button",{tall:!0,name:"Dodaj gwarancję",onClick:()=>this.show(),class:this.eligible.length>0?null:"hidden"}),o("ks-overlay",null,o("div",{class:`content ${t} ${a}`},this.products()),o("div",{class:`content ${e} ${s}`},this.warranty()))]}products(){return o("div",{class:"products"},o("slot",{name:"products"}),o("div",{class:"items"},this.eligible.map((t=>o("ks-cart-easyprotect-product",{image:t.img,name:t.name,warranty:t.warranty,onClick:()=>this.toggle(t.id),active:this.active.includes(t.id)})))),o("ks-button",{tall:!0,name:"Przejdź dalej",onClick:()=>this.addProducts(),disabled:this.active.length<=0}),o("div",{class:"close",onClick:()=>this.hide()},o("ks-icon",{name:"x",size:1.2})))}warranty(){const t=Object.keys(e.get("easyprotect")).filter((t=>this.active.includes(t)));return[o("div",{class:"warranty"},o("slot",{name:"warranty"}),o("div",{class:"items"},t.map((t=>o("ks-cart-easyprotect-warranty",{"product-id":t})))),o("ks-button",{tall:!0,name:"Dodaj gwarancję",onClick:()=>this.addWarranty(),disabled:this.active.length<=0}),o("div",{class:"close",onClick:()=>this.hide()},o("ks-icon",{name:"x",size:1.2})),this.eligible.length>1?o("div",{class:"back",onClick:()=>this.back()},o("ks-icon",{name:"chevron-left",size:1.2})):null),3==this.step?o("div",{class:"loading"},o("ks-loader",{large:!0,dark:!0})):null]}toggle(t){const o=this.active.findIndex((o=>o==t));-1!==o?this.active.splice(o,1):this.active.push(t),this.active=[...this.active]}show(){this.updateEligible(),this.updateStep(),this.overlay.show()}hide(){this.overlay.hide(),setTimeout((()=>{this.step=0}),300)}addProducts(){this.step=1,setTimeout((()=>{this.step=2}),200)}back(){this.step=1,setTimeout((()=>{this.step=0}),200)}async addWarranty(){this.step=3,this.overlay.close=!1;let t={};this.root.querySelectorAll(".warranty .items ks-cart-easyprotect-warranty").forEach((o=>{t[o.getAttribute("product-id")]=o.getAttribute("active")}));let o=!1,a=!1;setTimeout((()=>{a=!0,o&&this.end()}),500),s(t).then((()=>{o=!0,a&&this.end()}))}end(){this.overlay.hide(),setTimeout((()=>{this.overlay.close=!0,this.step=0,this.active=[]}),300)}get root(){return a(this)}};i.style="ks-cart-easyprotect-dialog{display:block}ks-cart-easyprotect-dialog .hidden{display:none}ks-cart-easyprotect-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;width:100%}ks-cart-easyprotect-dialog .content h2{font-size:24px;font-weight:700;text-align:center;margin-top:30px}ks-cart-easyprotect-dialog .content p{text-align:center;margin:10px 10px 20px 10px}ks-cart-easyprotect-dialog .content>.products .items{padding:10px 20px;max-height:320px;overflow-y:auto}ks-cart-easyprotect-dialog .content>.warranty .items{padding:0 20px 0 20px;max-height:270px;overflow-y:auto}ks-cart-easyprotect-dialog .content.hidden{display:none}ks-cart-easyprotect-dialog .content.hide{opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-cart-easyprotect-dialog ks-button{z-index:20;position:relative;margin-top:20px;-webkit-box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);box-shadow:0 2px 20px rgba(255, 255, 255, 0.3);border-top:#8057c1 1px solid}ks-cart-easyprotect-dialog ks-button[disabled]{border-top:#bebebe 1px solid}ks-cart-easyprotect-dialog ks-button button{background-color:var(--easyprotect-color);border-color:var(--easyprotect-color)}ks-cart-easyprotect-dialog ks-button button:hover{background-color:var(--easyprotect-color-hover) !important;border-color:var(--easyprotect-color-hover) !important}ks-cart-easyprotect-dialog ks-button button:active{background-color:var(--easyprotect-color-active) !important;border-color:var(--easyprotect-color-active) !important}ks-cart-easyprotect-dialog ks-button[disabled] button{background-color:#e2e2e2 !important;border-color:#e2e2e2 !important;color:#3d3d3d !important;cursor:auto}ks-cart-easyprotect-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-cart-easyprotect-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}@media (max-width: 720px){ks-cart-easyprotect-dialog .content{height:100%}ks-cart-easyprotect-dialog .content>.products,ks-cart-easyprotect-dialog .content>.warranty{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:100%;max-height:100%;padding:0}ks-cart-easyprotect-dialog .content>.products>.items,ks-cart-easyprotect-dialog .content>.warranty>.items{padding:0 10px 0 10px;max-height:none}ks-cart-easyprotect-dialog ks-button{margin-top:auto}ks-cart-easyprotect-dialog .content p{margin:5px 10px 15px 10px}}@media (max-width: 420px){ks-cart-easyprotect-dialog .content h2{font-size:20px;margin:20px 10px 10px 10px}ks-cart-easyprotect-dialog .content p{font-size:15px}}ks-cart-easyprotect-dialog .content .close,ks-cart-easyprotect-dialog .content .back{position:absolute;top:20px;z-index:20;border-radius:50px;padding:10px;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-cart-easyprotect-dialog .content .close:hover,ks-cart-easyprotect-dialog .content .back:hover{background-color:#f2f2f2}ks-cart-easyprotect-dialog .content .close:active,ks-cart-easyprotect-dialog .content .back:active{background-color:#dbdbdb}ks-cart-easyprotect-dialog .content .close{right:20px}ks-cart-easyprotect-dialog .content .back{left:20px}@media (max-width: 420px){ks-cart-easyprotect-dialog .content .close,ks-cart-easyprotect-dialog .content .back{padding:3px;top:17px}ks-cart-easyprotect-dialog .content .close{right:8px}ks-cart-easyprotect-dialog .content .back{left:8px}}ks-cart-easyprotect-dialog .content .loading{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;background-color:white;-webkit-animation:fade-in 0.3s ease;animation:fade-in 0.3s ease}";export{i as ks_cart_easyprotect_dialog}