import{r as i,h as t,g as e}from"./p-f66c687e.js";const a=class{constructor(t){i(this,t),this.loading=!1,this.success=!1,this.failure=!1}closeHandler(){this.overlay.hide(),(this.success||this.failure)&&setTimeout(()=>{this.success=!1,this.failure=!1},400)}async requestHandler(i){i.preventDefault(),this.loading=!0;const t=new FormData(i.target);t.append("productUrl",document.location.href),t.append("productPrice",this.price),t.append("productOldPrice",this.oldPrice),t.append("productName",this.name),await fetch(this.api,{body:t,method:"post"}).then(async i=>{"success"==await i.text()?this.success=!0:this.failure=!0}),setTimeout(()=>{this.loading=!1},300)}componentDidRender(){this.overlay=this.root.querySelector("ks-overlay"),this.root.parentElement.querySelector("ks-product-negotiate > *:first-child").addEventListener("click",()=>{this.overlay.show()})}render(){const i=!this.loading;return[t("slot",null),t("ks-overlay",null,t("div",{class:"content"},i?t("button",{class:"close",onClick:()=>this.closeHandler()},t("ks-icon",{name:"x",size:1.3})):null,t("form",{onSubmit:i=>this.requestHandler(i)},t("fieldset",{class:"uk-fieldset"},t("div",{style:{textAlign:"center"}},t("legend",{class:"uk-legend uk-text-bold"},this.heading),t("p",null,this.paragraph)),t("div",{class:"uk-margin"},t("div",{class:"uk-inline uk-width-1-1"},t("span",{class:"uk-form-icon","uk-icon":"icon: user"}),t("input",{name:"name",class:"uk-input",type:"text",placeholder:"Imię i nazwisko",required:!0}))),t("div",{class:"uk-margin"},t("div",{class:"uk-inline uk-width-1-1"},t("span",{class:"uk-form-icon","uk-icon":"icon: mail"}),t("input",{name:"email",class:"uk-input",type:"email",placeholder:"E-mail",required:!0}))),t("div",{class:"uk-margin"},t("div",{class:"uk-inline uk-width-1-1"},t("span",{class:"uk-form-icon","uk-icon":"icon: link"}),t("input",{name:"url",class:"uk-input",type:"url",placeholder:"Link do konkurencyjnej oferty",required:!0}))),t("div",{class:"uk-margin"},t("textarea",{name:"comment",class:"uk-textarea",rows:4,placeholder:"Komentarz",style:{resize:"none"}})),t("div",{class:"uk-margin"},t("label",null,t("input",{name:"zgoda",type:"checkbox",class:"uk-checkbox uk-margin-small-right",required:!0}),"Wyrażam zgodę na przetwarzanie przez Sprzedawcę moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.")),t("input",{type:"submit",class:"uk-button uk-button-secondary uk-width-1-1",value:"WYŚLIJ ZAPYTANIE"}))),this.loading?t("div",{class:"uk-overlay uk-overlay-default uk-position-cover"},t("div",{class:"uk-position-center"},t("div",{"uk-spinner":"ratio: 3"}))):null,this.success?t("div",{class:"uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast",style:{backgroundColor:"white"}},t("div",{class:"uk-position-center uk-text-center",style:{maxWidth:"800px",width:"80%"}},t("span",{"uk-icon":"icon: check; ratio: 4",class:"uk-animation-slide-top-small"}),t("p",{class:"uk-h1 ks-text-decorated uk-animation-slide-top-small"},"PROPOZYCJA WYSŁANA"),t("p",{class:"ks-text-decorated uk-animation-slide-top-small"},"Postaramy się odpowiedzieć jak najszybciej. Jeżeli nie odpowiemy w ciągu 2 dni roboczych prosimy o kontakt telefoniczny."))):null,this.failure?t("div",{class:"uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast",style:{backgroundColor:"white"}},t("div",{class:"uk-position-center uk-text-center"},t("span",{"uk-icon":"icon: ban; ratio: 4",class:"uk-animation-slide-top-small"}),t("p",{class:"uk-h1 ks-text-decorated uk-animation-slide-top-small"},"BŁĄD WYSYŁANIA PROPOZYCJI"))):null))]}get root(){return e(this)}};a.style="ks-product-negotiate{display:block}ks-product-negotiate .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;max-width:720px;padding:30px}ks-product-negotiate ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-product-negotiate ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-product-negotiate .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}";export{a as ks_product_negotiate}