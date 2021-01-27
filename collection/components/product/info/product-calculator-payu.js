import { Component, h, Element, Prop } from '@stencil/core';
export class ProductCalculatorPayU {
  constructor() {
    this.price = "";
    this.posId = "";
    this.apiKey = "";
  }
  render() {
    return [
      h("slot", null),
      h("span", { id: "calculator-payu", style: { display: "none" } }),
      h("script", null,
        "document.addEventListener(\"payu-widget-loaded\", function()",
        '{',
        "var openpayu = openpayu || ",
        "{}",
        "; openpayu.options = ",
        '{',
        "creditAmount: ",
        this.price,
        ", posId: '",
        this.posId,
        "', key: '",
        this.apiKey,
        "', showLongDescription: true",
        '}',
        "; OpenPayU.Installments.miniInstallment(\"#calculator-payu\"); let payuButton = document.querySelector(\"ks-product-calculator-payu ",
        '>',
        " *:first-child\"); let payuLink = document.querySelector(\"#calculator-payu a\"); payuButton.addEventListener(\"click\", function(event)",
        "{",
        "event.stopPropagation(); payuLink.click();",
        '}',
        ");",
        '}',
        ");")
    ];
  }
  static get is() { return "ks-product-calculator-payu"; }
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
    "posId": {
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
      "attribute": "pos-id",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "apiKey": {
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
      "attribute": "api-key",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get elementRef() { return "root"; }
}
