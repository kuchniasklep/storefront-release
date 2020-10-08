import { Component, h, Prop } from '@stencil/core';
export class ProductCalculatorCA {
  constructor() {
    this.price = "";
    this.parameters = "";
    this.width = 820;
    this.height = 680;
  }
  render() {
    return [
      h("slot", null),
      h("script", null,
        "let CreditAgricoleButton = document.querySelector(\"ks-product-calculator-ca ",
        '>',
        " *:first-child\"); CreditAgricoleButton.addEventListener(\"click\", function(event)",
        "{",
        "var iWidth = ",
        this.width,
        "; var iHeight = ",
        this.height,
        "; var iX = (screen.availWidth - iWidth) / 2; var iY = (screen.availHeight - iHeight) / 2; var wartosc = ",
        this.price,
        "; var parametryLukas = \"",
        this.parameters,
        "\"; var lukas = parametryLukas.split(';'); var adres = 'https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp?PARAM_TYPE=RAT&PARAM_PROFILE=' + lukas[0] + '&PARAM_CREDIT_AMOUNT=' + wartosc; window.open(adres, 'Policz_rate_LUKAS', 'height=' + iHeight + ', width=' + iWidth + ',top=' + iY + ',left=' + iX + ',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');",
        '}',
        ");")
    ];
  }
  static get is() { return "ks-product-calculator-ca"; }
  static get properties() { return {
    "price": {
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
      "attribute": "price",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "parameters": {
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
      "attribute": "parameters",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "width": {
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
      "attribute": "width",
      "reflect": false,
      "defaultValue": "820"
    },
    "height": {
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
      "attribute": "height",
      "reflect": false,
      "defaultValue": "680"
    }
  }; }
}
