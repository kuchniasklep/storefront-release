import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const ProductCalculatorPayU = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.price = "";
    this.posId = "";
    this.apiKey = "";
  }
  render() {
    return [
      h("slot", null),
      h("span", { id: "calculator-payu", style: { display: "none" } }),
      h("script", null, "document.addEventListener(\"payu-widget-loaded\", function()", '{', "var openpayu = openpayu || ", "{}", "; openpayu.options = ", '{', "creditAmount: ", this.price, ", posId: '", this.posId, "', key: '", this.apiKey, "', showLongDescription: true", '}', "; OpenPayU.Installments.miniInstallment(\"#calculator-payu\"); let payuButton = document.querySelector(\"ks-product-calculator-payu ", '>', " *:first-child\"); let payuLink = document.querySelector(\"#calculator-payu a\"); payuButton.addEventListener(\"click\", function(event)", "{", "event.stopPropagation(); payuLink.click();", '}', ");", '}', ");")
    ];
  }
  get root() { return getElement(this); }
};

export { ProductCalculatorPayU as ks_product_calculator_payu };
