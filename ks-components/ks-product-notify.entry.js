import{r as i,h as t,g as o}from"./index-f6e5b397.js";import{V as s}from"./validate-cd7ce36d.js";const e=class{constructor(t){i(this,t),this.product=0,this.agreement="Wyrażam zgodę na przetwarzanie przez sprzedawcę moich danych osobowych zawartych w formularzu w celu poinformowania o dostępności produktu.",this.backorderLabel="Wyślij powiadomienie przy dostępności na zamówienie.",this.successHeading="Powiadomienie zarejestrowane",this.successMessage="Poinformujemy cię jak tylko produkt stanie się dostępny na naszej stronie.",this.updatedHeading="Powiadomienie zaktualizowane",this.updatedMessage="Opcja wysyłki powiadomień przy dostępności na zamówienie została zaktualizowana.",this.existsHeading="Powiadomienie już istnieje",this.existsMessage="Powiadomienie dla tego produktu już zostało utworzone.",this.faliureHeading="Błąd rejestracji powiadomienia",this.faliureMessage="Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny."}async requestHandler(i){if(i.preventDefault(),!(await s(this.root.querySelector("form"))))return;this.dialog.showLoading();const t=new FormData(i.target);t.append("product",this.product.toString()),await fetch(this.api,{body:t,method:"post"}).then((async i=>{const t=await i.text();"added"==t?this.dialog.showSuccess(this.successHeading,this.successMessage):"updated"==t?this.dialog.showSuccess(this.updatedHeading,this.updatedMessage):"exists"==t?this.dialog.showFailure(this.existsHeading,this.existsMessage):this.dialog.showFailure(this.faliureHeading,this.faliureMessage)})).catch((async i=>{let t="";window.navigator.onLine||(t="Brak internetu."),i.messsage&&(t=i.messsage),this.dialog.showFailure(this.faliureHeading,t)}))}async show(){this.dialog.show()}componentDidLoad(){this.dialog=this.root.querySelector("ks-dialog")}render(){return t("ks-dialog",null,t("form",{onSubmit:i=>this.requestHandler(i)},t("fieldset",null,t("div",{class:"info"},t("h3",null,this.heading),t("p",null,this.paragraph)),t("ks-input-text",{email:!0,name:"email",required:!0,nomessage:!0,placeholder:"E-mail",icon:"mail"}),t("ks-input-check",{checked:!0,name:"backorders",nomessage:!0,label:this.backorderLabel}),t("ks-input-check",{name:"zgoda",required:!0,nomessage:!0,label:this.agreement}),t("ks-button",{submit:!0,name:"POWIADOM MNIE"}))))}get root(){return o(this)}};e.style="ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";export{e as ks_product_notify}