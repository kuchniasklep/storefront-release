import { Component, h, Element, Method, State } from '@stencil/core';
import { product } from "../../global/data/product";
import ValidateInput from '../input/validate';
export class ProductNotify {
  async requestHandler(event) {
    const notifyStrings = product.get("notifyStrings");
    const productId = product.get("id");
    const api = product.get("api").notify;
    event.preventDefault();
    if (!await ValidateInput(this.root.querySelector('form')))
      return;
    this.dialog.showLoading();
    const target = event.target;
    const data = new FormData(target);
    data.append("product", productId);
    await fetch(api, { body: data, method: "post" })
      .then(async (response) => response.json())
      .then(async (data) => {
      const containsData = "status" in data && "heading" in data && "paragraph" in data;
      if (!containsData)
        throw new Error(notifyStrings.errorParagraph);
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
      this.dialog.showFailure(notifyStrings.errorHeading, message);
    });
  }
  async show() {
    this.dialog.show();
  }
  componentDidLoad() {
    this.dialog = this.root.querySelector('ks-dialog');
  }
  render() {
    const notifyStrings = product.get("notifyStrings");
    return h("ks-dialog", null,
      h("form", { onSubmit: e => this.requestHandler(e) },
        h("fieldset", null,
          h("div", { class: "info" },
            h("h3", null, notifyStrings.heading),
            h("p", null, notifyStrings.paragraph)),
          h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }),
          h("ks-input-check", { checked: true, name: "backorders", nomessage: true, label: notifyStrings.backorders }),
          h("ks-input-check", { name: "zgoda", required: true, nomessage: true, label: notifyStrings.agreement }),
          h("ks-button", { submit: true, name: "POWIADOM MNIE" }))));
  }
  static get is() { return "ks-product-notify"; }
  static get originalStyleUrls() { return {
    "$": ["product-notify.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-notify.css"]
  }; }
  static get states() { return {
    "resultHeading": {},
    "resultParagraph": {}
  }; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "root"; }
}
