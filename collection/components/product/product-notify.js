import { Component, h, Element, Prop, Method } from '@stencil/core';
import ValidateInput from '../input/validate';
export class ProductNotify {
  constructor() {
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
    return h("ks-dialog", null,
      h("form", { onSubmit: e => this.requestHandler(e) },
        h("fieldset", null,
          h("div", { class: "info" },
            h("h3", null, this.heading),
            h("p", null, this.paragraph)),
          h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }),
          h("ks-input-check", { checked: true, name: "backorders", nomessage: true, label: this.backorderLabel }),
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
      "reflect": false,
      "defaultValue": "\"Wyra\u017Cam zgod\u0119 na przetwarzanie przez sprzedawc\u0119 moich danych osobowych zawartych w formularzu w celu poinformowania o dost\u0119pno\u015Bci produktu.\""
    },
    "backorderLabel": {
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
      "attribute": "backorder-label",
      "reflect": false,
      "defaultValue": "\"Wy\u015Blij powiadomienie przy dost\u0119pno\u015Bci na zam\u00F3wienie.\""
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
    "successHeading": {
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
      "attribute": "success-heading",
      "reflect": false,
      "defaultValue": "\"Powiadomienie zarejestrowane\""
    },
    "successMessage": {
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
      "attribute": "success-message",
      "reflect": false,
      "defaultValue": "\"Poinformujemy ci\u0119 jak tylko produkt stanie si\u0119 dost\u0119pny na naszej stronie.\""
    },
    "updatedHeading": {
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
      "attribute": "updated-heading",
      "reflect": false,
      "defaultValue": "\"Powiadomienie zaktualizowane\""
    },
    "updatedMessage": {
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
      "attribute": "updated-message",
      "reflect": false,
      "defaultValue": "\"Opcja wysy\u0142ki powiadomie\u0144 przy dost\u0119pno\u015Bci na zam\u00F3wienie zosta\u0142a zaktualizowana.\""
    },
    "existsHeading": {
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
      "attribute": "exists-heading",
      "reflect": false,
      "defaultValue": "\"Powiadomienie ju\u017C istnieje\""
    },
    "existsMessage": {
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
      "attribute": "exists-message",
      "reflect": false,
      "defaultValue": "\"Powiadomienie dla tego produktu ju\u017C zosta\u0142o utworzone.\""
    },
    "faliureHeading": {
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
      "attribute": "faliure-heading",
      "reflect": false,
      "defaultValue": "\"B\u0142\u0105d rejestracji powiadomienia\""
    },
    "faliureMessage": {
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
      "attribute": "faliure-message",
      "reflect": false,
      "defaultValue": "\"Je\u017Celi problem si\u0119 powtarza prosimy o kontakt mailowy lub telefoniczny.\""
    }
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
