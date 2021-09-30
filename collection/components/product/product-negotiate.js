import { Component, h, Element, Prop } from '@stencil/core';
import { product } from "../../global/data/product";
import ValidateInput from '../input/validate';
export class ProductNegotiate {
  constructor() {
    this.agreement = "Wyrażam zgodę na przetwarzanie przez Sprzedawcę moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.";
    this.successHeading = "PROPOZYCJA WYSŁANA";
    this.successMessage = "Postaramy się odpowiedzieć jak najszybciej. Jeżeli nie odpowiemy w ciągu 2 dni roboczych prosimy o kontakt telefoniczny.";
    this.faliureHeading = "BŁĄD WYSYŁANIA PROPOZYCJI";
    this.faliureMessage = "Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny.";
  }
  async requestHandler(event) {
    event.preventDefault();
    if (!await ValidateInput(this.root.querySelector('form')))
      return;
    this.dialog.showLoading();
    const target = event.target;
    const data = new FormData(target);
    data.append("productUrl", document.location.href);
    data.append("productPrice", product.get('currentPrice'));
    data.append("productOldPrice", product.get('previousPrice'));
    data.append("productName", product.get('name'));
    await fetch(product.get('api').negotiate, { body: data, method: "post" })
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
      if (error.message)
        message = error.message;
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
      h("slot", null),
      h("ks-dialog", null,
        h("form", { onSubmit: e => this.requestHandler(e) },
          h("fieldset", null,
            h("div", { class: "info" },
              h("h3", null, this.heading),
              h("p", null, this.paragraph)),
            h("ks-input-text", { name: "name", required: true, nomessage: true, placeholder: "Imi\u0119 i nazwisko", icon: "user" }),
            h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }),
            h("ks-input-text", { url: true, name: "url", required: true, nomessage: true, placeholder: "Link do konkurencyjnej oferty", icon: "link" }),
            h("ks-input-textarea", { rows: 4, name: "comment", placeholder: "Komentarz", noresize: true }),
            h("ks-input-check", { name: "zgoda", required: true, nomessage: true, label: this.agreement }),
            h("ks-button", { submit: true, name: "WY\u015ALIJ ZAPYTANIE" }))))
    ];
  }
  static get is() { return "ks-product-negotiate"; }
  static get originalStyleUrls() { return {
    "$": ["product-negotiate.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-negotiate.css"]
  }; }
  static get properties() { return {
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
      "defaultValue": "\"Wyra\u017Cam zgod\u0119 na przetwarzanie przez Sprzedawc\u0119 moich danych osobowych zawartych w formularzu w celu udzielenia odpowiedzi na zadane poprzez formularz pytania.\""
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
      "defaultValue": "\"PROPOZYCJA WYS\u0141ANA\""
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
      "defaultValue": "\"Postaramy si\u0119 odpowiedzie\u0107 jak najszybciej. Je\u017Celi nie odpowiemy w ci\u0105gu 2 dni roboczych prosimy o kontakt telefoniczny.\""
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
      "defaultValue": "\"B\u0141\u0104D WYSY\u0141ANIA PROPOZYCJI\""
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
  static get elementRef() { return "root"; }
}
