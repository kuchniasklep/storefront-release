'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const ProductCalculatorPayU = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.price = "";
    this.posId = "";
    this.apiKey = "";
  }
  render() {
    return [
      index.h("slot", null),
      index.h("span", { id: "calculator-payu", style: { display: "none" } }),
      index.h("script", null, "var openpayu = openpayu || ", "{}", "; openpayu.options = ", '{', "creditAmount: ", this.price, ", posId: '", this.posId, "', key: '", this.apiKey, "', showLongDescription: true", '}', "; OpenPayU.Installments.miniInstallment(\"#calculator-payu\"); let payuButton = document.querySelector(\"ks-product-calculator-payu ", '>', " *:first-child\"); let payuLink = document.querySelector(\"#calculator-payu a\"); payuButton.addEventListener(\"click\", function(event)", "{", "event.stopPropagation(); payuLink.click();", '}', ");")
    ];
  }
  get root() { return index.getElement(this); }
};

exports.ks_product_calculator_payu = ProductCalculatorPayU;
