import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';
import './state-tunnel-04c0b67a.js';
import { T as Tunnel } from './cartData-c83db97f.js';

const CartSummaryContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("ks-cart-summary", { text: "Warto\u015B\u0107 produkt\u00F3w:", price: this.productValue.toFixed(2) }),
      this.otherValues.map(item => h("ks-cart-summary", { text: item.name, price: item.value.toFixed(2), emphasis: item.value < 0 })),
      h("ks-cart-summary", { large: true, text: "Razem:", price: this.totalValue.toFixed(2) })
    ];
  }
  get root() { return getElement(this); }
};
Tunnel.injectProps(CartSummaryContainer, ['totalValue', 'productValue', 'otherValues']);

export { CartSummaryContainer as ks_cart_summary_container };
