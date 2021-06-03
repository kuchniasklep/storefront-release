import { Component, h, Element, Prop, Method, State } from '@stencil/core';
import ValidateInput from '../input/validate';
export class ProductNotify {
  constructor() {
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
    return h("ks-dialog", null,
      h("form", { onSubmit: e => this.requestHandler(e) },
        h("fieldset", null,
          h("div", { class: "info" },
            h("h3", null, this.heading),
            h("p", null, this.paragraph)),
          h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }),
          h("ks-input-check", { checked: true, name: "backorders", nomessage: true, label: this.backorders }),
          h("ks-input-check", { name: "zgoda", required: true, nomessage: true, label: this.agreement }),
          h("ks-button", { submit: true, name: "POWIADOM MNIE" }))));
  }
  static get is() { return "ks-product-notify"; }
  static get originalStyleUrls() { return {
    "$": ["product-notify.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-notify.css"]
  }; }
  static get properties() { return {
    "api": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "api",
      "reflect": false
    },
    "product": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "product",
      "reflect": false,
      "defaultValue": "0"
    },
    "agreement": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "agreement",
      "reflect": false
    },
    "backorders": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "backorders",
      "reflect": false
    },
    "heading": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "heading",
      "reflect": false
    },
    "paragraph": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "paragraph",
      "reflect": false
    },
    "errorHeading": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "error-heading",
      "reflect": false
    },
    "errorParagraph": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "error-paragraph",
      "reflect": false
    }
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
