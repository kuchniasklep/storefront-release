'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aaabf9e8.js');
const validate = require('./validate-6c61d7c0.js');

const productNotifyCss = "ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";

const ProductNotify = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.product = 0;
    this.agreement = "Wyrażam zgodę na przetwarzanie przez sprzedawcę moich danych osobowych zawartych w formularzu w celu poinformowania o dostępności produktu.";
    this.backorderLabel = "Wyślij powiadomienie przy dostępności na zamówienie.";
    this.successHeading = "Powiadomienie zarejestrowane";
    this.successMessage = "Poinformujemy cię jak tylko produkt stanie się dostępny na naszej stronie.";
    this.updatedHeading = "Powiadomienie zaktualizowane";
    this.updatedMessage = "Opcja wysyłki powiadomień przy dostępności na zamówienie została zaktualizowana.";
    this.existsHeading = "Powiadomienie już istnieje";
    this.existsMessage = "Powiadomienie dla tego produktu już zostało utworzone.";
    this.faliureHeading = "Błąd rejestracji powiadomienia";
    this.faliureMessage = "Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny.";
  }
  async requestHandler(event) {
    event.preventDefault();
    if (!await validate.ValidateInput(this.root.querySelector('form')))
      return;
    this.dialog.showLoading();
    const target = event.target;
    const data = new FormData(target);
    data.append("product", this.product.toString());
    await fetch(this.api, { body: data, method: "post" })
      .then(async (response) => {
      const result = await response.text();
      if (result == "added")
        this.dialog.showSuccess(this.successHeading, this.successMessage);
      else if (result == "updated")
        this.dialog.showSuccess(this.updatedHeading, this.updatedMessage);
      else if (result == "exists")
        this.dialog.showFailure(this.existsHeading, this.existsMessage);
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
  async show() {
    this.dialog.show();
  }
  componentDidLoad() {
    this.dialog = this.root.querySelector('ks-dialog');
  }
  render() {
    return index.h("ks-dialog", null, index.h("form", { onSubmit: e => this.requestHandler(e) }, index.h("fieldset", null, index.h("div", { class: "info" }, index.h("h3", null, this.heading), index.h("p", null, this.paragraph)), index.h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }), index.h("ks-input-check", { checked: true, name: "backorders", nomessage: true, label: this.backorderLabel }), index.h("ks-input-check", { name: "zgoda", required: true, nomessage: true, label: this.agreement }), index.h("ks-button", { submit: true, name: "POWIADOM MNIE" }))));
  }
  get root() { return index.getElement(this); }
};
ProductNotify.style = productNotifyCss;

exports.ks_product_notify = ProductNotify;
