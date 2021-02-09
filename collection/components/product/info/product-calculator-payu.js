import { Component, h, Element, Prop, Listen, State } from '@stencil/core';
export class ProductCalculatorPayU {
  constructor() {
    this.price = "";
    this.posId = "";
    this.apiKey = "";
    this.enabled = false;
  }
  clickHandler() {
    if (this.enabled)
      this.buttonHandler();
    else
      this.enabled = true;
  }
  loadHandler() {
    window.openpayu = window.openpayu || {};
    window.openpayu.options = {
      creditAmount: this.price,
      posId: this.posId,
      key: this.apiKey,
      showLongDescription: true
    };
    OpenPayU.Installments.miniInstallment("#calculator-payu");
    this.buttonHandler();
  }
  buttonHandler() {
    let payuLink = document.querySelector("#calculator-payu a");
    payuLink.click();
  }
  render() {
    return [
      h("slot", null),
      this.enabled ? [
        h("span", { id: "calculator-payu", style: { display: "none" } }),
        h("script", { onLoad: () => this.loadHandler(), src: "https://static.payu.com/res/v2/widget-products-installments.min.js" }),
      ] : null
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
  static get states() { return {
    "enabled": {}
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "click",
      "method": "clickHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
