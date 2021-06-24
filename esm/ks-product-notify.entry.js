import { r as registerInstance, h, g as getElement } from './index-f323e182.js';
import { V as ValidateInput } from './validate-cd7ce36d.js';

const productNotifyCss = "ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";

const ProductNotify = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.product = 0;
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
      .then(async (response) => response.json())
      .then(async (data) => {
      const containsData = "status" in data && "heading" in data && "paragraph" in data;
      if (!containsData)
        throw new Error(this.errorParagraph);
      if (data.status == "success")
        this.dialog.showSuccess(data.heading, data.paragraph);
      else
        this.dialog.showFailure(data.heading, data.paragraph);
    })
      .catch(async (error) => {
      let message = "";
      if (!window.navigator.onLine)
        message = "Brak internetu.";
      else if (error.message != "")
        message = error.message;
      console.log(error.message);
      this.dialog.showFailure(this.errorHeading, message);
    });
  }
  async show() {
    this.dialog.show();
  }
  componentDidLoad() {
    this.dialog = this.root.querySelector('ks-dialog');
  }
  render() {
    return h("ks-dialog", null, h("form", { onSubmit: e => this.requestHandler(e) }, h("fieldset", null, h("div", { class: "info" }, h("h3", null, this.heading), h("p", null, this.paragraph)), h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }), h("ks-input-check", { checked: true, name: "backorders", nomessage: true, label: this.backorders }), h("ks-input-check", { name: "zgoda", required: true, nomessage: true, label: this.agreement }), h("ks-button", { submit: true, name: "POWIADOM MNIE" }))));
  }
  get root() { return getElement(this); }
};
ProductNotify.style = productNotifyCss;

export { ProductNotify as ks_product_notify };
