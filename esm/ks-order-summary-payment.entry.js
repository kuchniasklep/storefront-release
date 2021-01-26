import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const OrderPayU = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "uk-flex uk-flex-center" }, h("style", { innerHTML: `
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
                ` }), h("button", { type: "submit", class: `uk-button uk-button-pill uk-flex uk-flex-middle uk-flex-center ks-text-decorated ks-order-summary-payment-${this.unique}`, style: { fontSize: "20px", padding: "5px 20px 5px 20px" } }, h("div", null, this.text), h("ks-image", { src: this.image, width: "150", height: "50", class: "uk-visible@s" }))));
  }
  get root() { return getElement(this); }
};

export { OrderPayU as ks_order_summary_payment };
