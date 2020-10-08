var __awaiter=this&&this.__awaiter||function(e,t,n,i){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function r(e){try{l(i.next(e))}catch(t){o(t)}}function s(e){try{l(i["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):a(e.value).then(r,s)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,a,o,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(e){return function(t){return l([e,t])}}function l(r){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,a&&(o=r[0]&2?a["return"]:r[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;if(a=0,o)r=[r[0]&2,o.value];switch(r[0]){case 0:case 1:o=r;break;case 4:n.label++;return{value:r[1],done:false};case 5:n.label++;a=r[1];r=[0];continue;case 7:r=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(r[0]===6||r[0]===2)){n=0;continue}if(r[0]===3&&(!o||r[1]>o[0]&&r[1]<o[3])){n.label=r[1];break}if(r[0]===6&&n.label<o[1]){n.label=o[1];o=r;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(r);break}if(o[2])n.ops.pop();n.trys.pop();continue}r=t.call(e,n)}catch(s){r=[6,s];a=0}finally{i=o=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};import{r as registerInstance,h,g as getElement}from"./index-22b73bd9.js";var productNegotiateCss="ks-product-negotiate{display:block}ks-product-negotiate .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;max-width:720px;padding:30px}ks-product-negotiate ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-product-negotiate ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-product-negotiate .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}";var ProductNegotiate=function(){function e(e){registerInstance(this,e);this.loading=false;this.success=false;this.failure=false}e.prototype.closeHandler=function(){var e=this;this.overlay.hide();if(this.success||this.failure){setTimeout((function(){e.success=false;e.failure=false}),400)}};e.prototype.requestHandler=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;var i=this;return __generator(this,(function(a){switch(a.label){case 0:e.preventDefault();this.loading=true;t=e.target;n=new FormData(t);n.append("productUrl",document.location.href);n.append("productPrice",this.price);n.append("productOldPrice",this.oldPrice);n.append("productName",this.name);return[4,fetch(this.api,{body:n,method:"post"}).then((function(e){return __awaiter(i,void 0,void 0,(function(){var t;return __generator(this,(function(n){switch(n.label){case 0:return[4,e.text()];case 1:t=n.sent();if(t=="success")this.success=true;else this.failure=true;return[2]}}))}))}))];case 1:a.sent();setTimeout((function(){i.loading=false}),300);return[2]}}))}))};e.prototype.componentDidRender=function(){var e=this;this.overlay=this.root.querySelector("ks-overlay");var t=this.root.parentElement.querySelector("ks-product-negotiate > *:first-child");t.addEventListener("click",(function(){e.overlay.show()}))};e.prototype.render=function(){var e=this;var t=!this.loading;return[h("slot",null),h("ks-overlay",null,h("div",{class:"content"},t?h("button",{class:"close",onClick:function(){return e.closeHandler()}},h("ks-icon",{name:"x",size:1.3})):null,h("form",{onSubmit:function(t){return e.requestHandler(t)}},h("fieldset",{class:"uk-fieldset"},h("div",{style:{textAlign:"center"}},h("legend",{class:"uk-legend uk-text-bold"},this.heading),h("p",null,this.paragraph)),h("div",{class:"uk-margin"},h("div",{class:"uk-inline uk-width-1-1"},h("span",{class:"uk-form-icon","uk-icon":"icon: user"}),h("input",{name:"name",class:"uk-input",type:"text",placeholder:"Imię i nazwisko",required:true}))),h("div",{class:"uk-margin"},h("div",{class:"uk-inline uk-width-1-1"},h("span",{class:"uk-form-icon","uk-icon":"icon: mail"}),h("input",{name:"email",class:"uk-input",type:"email",placeholder:"E-mail",required:true}))),h("div",{class:"uk-margin"},h("div",{class:"uk-inline uk-width-1-1"},h("span",{class:"uk-form-icon","uk-icon":"icon: link"}),h("input",{name:"url",class:"uk-input",type:"url",placeholder:"Link do konkurencyjnej oferty",required:true}))),h("div",{class:"uk-margin"},h("textarea",{name:"comment",class:"uk-textarea",rows:4,placeholder:"Komentarz",style:{resize:"none"}})),h("div",{class:"uk-margin"},h("label",null,h("input",{name:"zgoda",type:"checkbox",class:"uk-checkbox uk-margin-small-right",required:true}),"Wyrażam zgodę na przetwarzanie przez Sprzedawcę moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.")),h("input",{type:"submit",class:"uk-button uk-button-secondary uk-width-1-1",value:"WYŚLIJ ZAPYTANIE"}))),this.loading?h("div",{class:"uk-overlay uk-overlay-default uk-position-cover"},h("div",{class:"uk-position-center"},h("div",{"uk-spinner":"ratio: 3"}))):null,this.success?h("div",{class:"uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast",style:{backgroundColor:"white"}},h("div",{class:"uk-position-center uk-text-center",style:{maxWidth:"800px",width:"80%"}},h("span",{"uk-icon":"icon: check; ratio: 4",class:"uk-animation-slide-top-small"}),h("p",{class:"uk-h1 ks-text-decorated uk-animation-slide-top-small"},"PROPOZYCJA WYSŁANA"),h("p",{class:"ks-text-decorated uk-animation-slide-top-small"},"Postaramy się odpowiedzieć jak najszybciej. Jeżeli nie odpowiemy w ciągu 2 dni roboczych prosimy o kontakt telefoniczny."))):null,this.failure?h("div",{class:"uk-overlay uk-overlay-default uk-position-cover uk-animation-fade uk-animation-fast",style:{backgroundColor:"white"}},h("div",{class:"uk-position-center uk-text-center"},h("span",{"uk-icon":"icon: ban; ratio: 4",class:"uk-animation-slide-top-small"}),h("p",{class:"uk-h1 ks-text-decorated uk-animation-slide-top-small"},"BŁĄD WYSYŁANIA PROPOZYCJI"))):null))]};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();ProductNegotiate.style=productNegotiateCss;export{ProductNegotiate as ks_product_negotiate};