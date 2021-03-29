import { Component, h, Element } from '@stencil/core';
import { store } from './cart-store';
export class CartSummaryContainer {
  render() {
    const productValue = store.get("productValue").toFixed(2);
    const totalValue = store.get("totalValue").toFixed(2);
    return [
      h("ks-cart-summary", { text: "Warto\u015B\u0107 produkt\u00F3w:", price: productValue }),
      store.get("otherValues").map(item => h("ks-cart-summary", { text: item.name, price: item.value.toFixed(2), emphasis: item.value < 0 })),
      h("ks-cart-summary", { large: true, text: "Razem:", price: totalValue })
    ];
  }
  static get is() { return "ks-cart-summary-container"; }
  static get elementRef() { return "root"; }
}
