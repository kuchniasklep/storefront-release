import{r as t,h as e,g as r}from"./index-1e6d4cbd.js";import"./index-ca02180c.js";import{s as a,e as o,a as s}from"./cart-store-6b088993.js";const i=class{constructor(e){t(this,e)}componentWillLoad(){this.active||(this.active=Object.keys(a.get("easyprotect")[this.productId])[0])}componentWillUpdate(){this.root.querySelector("select").value=this.active}render(){const t=a.get("products")[this.productId].name,r=a.get("easyprotect")[this.productId],o=Object.entries(r);return[e("div",{class:"name"},t),e("div",{class:"control"},e("div",{class:"info"},e("div",{class:"select"},e("ks-input-select",{onChange:()=>this.change()},o.map((([t,r])=>e("option",{value:t,selected:this.active==t},this.months(parseInt(t)))))),e("ks-icon",{name:"chevron-down"})),e("div",{class:"price"},r[this.active]," zł")),this.insured?e("button",{class:"close",onClick:()=>this.remove()},e("ks-icon",{name:"x"})):null)]}change(){this.active=this.root.querySelector("select").value,this.insured&&o({[this.productId]:this.active})}remove(){s(this.productId)}months(t){const e=parseInt((""+t)[(""+t).length-1]);let r="miesięcy";return 0==t?r="miesiąc":t>=5&&t<=21?r="miesięcy":t>21&&e>=2&&e<=4&&(r="miesiące"),`${t} ${r}`}get root(){return r(this)}};i.style='ks-cart-easyprotect-warranty{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:#f2f2f2;margin-bottom:10px}ks-cart-easyprotect-warranty .name{position:relative;margin:8px 15px;max-height:50px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;font-family:var(--font-emphasis)}ks-cart-easyprotect-warranty .name:after{content:"";position:absolute;top:30px;right:0;width:30%;height:20px;background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(90%, rgb(242, 242, 242)));background:linear-gradient(to right, rgba(255, 255, 255, 0), rgb(242, 242, 242) 90%)}ks-cart-easyprotect-warranty .control{display:-webkit-box;display:-ms-flexbox;display:flex}ks-cart-easyprotect-warranty .info{min-width:135px;font-family:var(--font-emphasis);font-weight:700;background-color:var(--easyprotect-color)}ks-cart-easyprotect-warranty .price{height:40px;min-width:80px;line-height:40px;text-align:center;background-color:#64419c !important;color:#ffffff}ks-cart-easyprotect-warranty .select{position:relative}ks-cart-easyprotect-warranty .select ks-icon{position:absolute;top:8px;right:5px;color:white}ks-cart-easyprotect-warranty ks-input-select div{margin-bottom:0 !important;margin-right:3px}ks-cart-easyprotect-warranty ks-input-select select{background-image:none !important;border:none !important;padding-right:30px !important;margin:0 !important;background-color:transparent !important;color:white !important}ks-cart-easyprotect-warranty .close{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch;min-width:40px;border-style:none;outline-style:none;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;background-color:var(--easyprotect-color);color:#ffffff;border-left:#64419c 1px solid}ks-cart-easyprotect-warranty .close ks-icon{line-height:unset !important}ks-cart-easyprotect-warranty .close:hover{background-color:var(--easyprotect-color-hover)}ks-cart-easyprotect-warranty .close:active{background-color:var(--easyprotect-color-active)}@media (min-width: 860px){ks-cart-easyprotect-warranty[insured] .info{display:-webkit-box;display:-ms-flexbox;display:flex;min-width:200px}}@media (max-width: 420px){ks-cart-easyprotect-warranty{display:inline-block}ks-cart-easyprotect-warranty .info{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}ks-cart-easyprotect-warranty .select{width:100%}ks-cart-easyprotect-warranty .name{margin:12px 15px}ks-cart-easyprotect-warranty .price{width:50%}}';export{i as ks_cart_easyprotect_warranty}