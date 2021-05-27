import { r as registerInstance, h, g as getElement } from './index-4f41a852.js';
import { V as ValidateInput } from './validate-cd7ce36d.js';

const productNotifyCss = "ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";

const ProductNotify = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    if (!await ValidateInput(this.root.querySelector('form')))
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
    return h("ks-dialog", null, h("form", { onSubmit: e => this.requestHandler(e) }, h("fieldset", null, h("div", { class: "info" }, h("h3", null, this.heading), h("p", null, this.paragraph)), h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }), h("ks-input-check", { checked: true, name: "backorders", nomessage: true, label: this.backorderLabel }), h("ks-input-check", { name: "zgoda", required: true, nomessage: true, label: this.agreement }), h("ks-button", { submit: true, name: "POWIADOM MNIE" }))));
  }
  get root() { return getElement(this); }
};
ProductNotify.style = productNotifyCss;

export { ProductNotify as ks_product_notify };
