'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');
const validate = require('./validate-6c61d7c0.js');

const productNegotiateCss = "ks-product-negotiate{display:block}ks-product-negotiate fieldset{border:none;margin:0;padding:0}ks-product-negotiate .info{text-align:center}ks-product-negotiate h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";

const ProductNegotiate = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.agreement = "Wyrażam zgodę na przetwarzanie przez Sprzedawcę moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.";
    this.successHeading = "PROPOZYCJA WYSŁANA";
    this.successMessage = "Postaramy się odpowiedzieć jak najszybciej. Jeżeli nie odpowiemy w ciągu 2 dni roboczych prosimy o kontakt telefoniczny.";
    this.faliureHeading = "BŁĄD WYSYŁANIA PROPOZYCJI";
    this.faliureMessage = "Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny.";
  }
  async requestHandler(event) {
    event.preventDefault();
    if (!await validate.ValidateInput(this.root.querySelector('form')))
      return;
    this.dialog.showLoading();
    const target = event.target;
    const data = new FormData(target);
    data.append("productUrl", document.location.href);
    data.append("productPrice", this.price);
    data.append("productOldPrice", this.oldPrice);
    data.append("productName", this.name);
    await fetch(this.api, { body: data, method: "post" })
      .then(async (response) => {
      const result = await response.text();
      if (result == "success")
        this.dialog.showSuccess(this.successHeading, this.successMessage);
      else
        this.dialog.showFailure(this.faliureHeading, this.faliureMessage);
    })
      .catch(async (error) => {
      let message = "";
      if (!window.navigator.onLine)
        message = "Brak internetu.";
      if (error.messsage)
        message = error.messsage;
      this.dialog.showFailure(this.faliureHeading, message);
    });
  }
  componentDidRender() {
    this.dialog = this.root.querySelector("ks-dialog");
    const button = this.root.parentElement.querySelector("ks-product-negotiate > *:first-child");
    button.addEventListener("click", () => {
      this.dialog.show();
    });
  }
  render() {
    return [
      index.h("slot", null),
      index.h("ks-dialog", null, index.h("form", { onSubmit: e => this.requestHandler(e) }, index.h("fieldset", null, index.h("div", { class: "info" }, index.h("h3", null, this.heading), index.h("p", null, this.paragraph)), index.h("ks-input-text", { name: "name", required: true, nomessage: true, placeholder: "Imi\u0119 i nazwisko", icon: "user" }), index.h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }), index.h("ks-input-text", { url: true, name: "url", required: true, nomessage: true, placeholder: "Link do konkurencyjnej oferty", icon: "link" }), index.h("ks-input-textarea", { rows: 4, name: "comment", placeholder: "Komentarz", noresize: true }), index.h("ks-input-check", { name: "zgoda", required: true, nomessage: true, label: this.agreement }), index.h("ks-button", { submit: true, name: "WY\u015ALIJ ZAPYTANIE" }))))
    ];
  }
  get root() { return index.getElement(this); }
};
ProductNegotiate.style = productNegotiateCss;

exports.ks_product_negotiate = ProductNegotiate;
