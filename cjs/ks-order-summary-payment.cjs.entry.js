'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const OrderPayU = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.unique = "";
    this.text = "";
    this.image = "";
    this.color = "";
    this.hover = "";
    this.active = "";
  }
  componentWillLoad() {
    this.unique = Math.random().toString(36).replace('0.', '');
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return (index.h("div", { class: "uk-flex uk-flex-center" }, index.h("style", { innerHTML: `
                    .ks-order-summary-payment-${this.unique} {
                        background-color: ${this.color};
                        color: white;
                    }
                    .ks-order-summary-payment-${this.unique}:hover {
                        background-color: ${this.hover};
                    }
                    .ks-order-summary-payment-${this.unique}:active {
                        background-color: ${this.active};
                    }
                ` }), index.h("button", { type: "submit", class: `uk-button uk-button-pill uk-flex uk-flex-middle uk-flex-center ks-text-decorated ks-order-summary-payment-${this.unique}`, style: { fontSize: "20px", padding: "5px 20px 5px 20px" } }, index.h("div", null, this.text), index.h("ks-image", { src: this.image, width: "150", height: "50", class: "uk-visible@s" }))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_summary_payment = OrderPayU;
