import{r as t,h as a,g as o}from"./p-f748ea6f.js";const e=class{constructor(a){t(this,a),this.price="",this.posId="",this.apiKey=""}render(){return[a("slot",null),a("span",{id:"calculator-payu",style:{display:"none"}}),a("script",null,"var openpayu = openpayu || ","{}","; openpayu.options = ","{","creditAmount: ",this.price,", posId: '",this.posId,"', key: '",this.apiKey,"', showLongDescription: true","}",'; OpenPayU.Installments.miniInstallment("#calculator-payu"); let payuButton = document.querySelector("ks-product-calculator-payu ',">",' *:first-child"); let payuLink = document.querySelector("#calculator-payu a"); payuButton.addEventListener("click", function(event)',"{","event.stopPropagation(); payuLink.click();","}",");")]}get root(){return o(this)}};export{e as ks_product_calculator_payu}