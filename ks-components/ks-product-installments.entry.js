import{r as t,h as o,g as s}from"./index-aa615a50.js";const n=class{constructor(o){t(this,o),this.name="",this.active=!1}clickOutside(t){const o=t.target;return o.closest("ks-product-installments")||(this.active=!1),o}render(){return[o("ks-product-button",{onClick:()=>this.active=!this.active},this.name),o("div",{class:"arrow"}),o("div",{class:"content"},o("slot",null))]}get root(){return s(this)}};n.style="ks-product-installments{display:block;position:relative}ks-product-installments>.arrow{display:none;position:absolute;bottom:-5px;left:50%;-webkit-transform:translateX(-5px);-ms-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-installments>.content{display:none;position:absolute;top:55px;width:100%;z-index:10;background-color:var(--color-dark);border-radius:20px;overflow:hidden}ks-product-installments[active]>.arrow{display:block}ks-product-installments[active]>.content{display:block}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]{background-color:#222222}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:hover{background-color:#2e2e2e}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:active{background-color:#3a3a3a}";export{n as ks_product_installments}