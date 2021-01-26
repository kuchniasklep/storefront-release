import{r as t,c as e,h as o,g as r}from"./p-f748ea6f.js";import"./p-c3c1de5d.js";import{s}from"./p-6dbd4b4e.js";const a=class{constructor(o){t(this,o),this.traitChange=e(this,"traitChange",7)}traitChangeHandler(){const t=this.root.querySelectorAll(".trait select"),e=s.get("traits").map(((e,o)=>[e,e.items[t[o].selectedIndex]]));this.traitChange.emit(e)}componentDidRender(){s.get("traits").length>0&&this.traitChangeHandler()}render(){return s.get("traits").map((t=>o("div",{class:"trait"},o("div",{class:"select"},o("select",{onChange:()=>this.traitChangeHandler()},t.items.map((t=>o("option",{value:t.id},t.name)))),o("ks-icon",{name:"chevron-down"})),o("label",null,t.name))))}get root(){return r(this)}};a.style="ks-product-traits{display:block;font-family:var(--font-regular);font-size:16px;line-height:16px;margin-left:-2px}ks-product-traits:not(:empty){margin-top:20px;margin-bottom:10px}ks-product-traits .trait{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;border-radius:15px}ks-product-traits .select{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-product-traits label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 20px 15px 18px;background-color:var(--color-secondary);color:var(--text-color-dark)}ks-product-traits select{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0px 20px;border-radius:15px 0px 0px 15px;outline-style:none;background-color:#f3f3f3;border:solid 1px #cacaca;font-family:var(--font-regular);font-size:16px;line-height:16px;-moz-appearance:none;-webkit-appearance:none;appearance:none;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-traits select::-ms-expand{display:none}ks-product-traits ks-icon{position:absolute;top:12px;right:10px}ks-product-traits .select:hover{background-color:#e2e2e2}ks-product-traits .select:active{background-color:#d3d3d3}ks-product-traits select option{background-color:white !important}@media only screen and (max-width: 1200px){ks-product-traits,ks-product-traits select{font-size:14px;line-height:14px}}";export{a as ks_product_traits}