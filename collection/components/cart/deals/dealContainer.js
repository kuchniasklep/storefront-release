import { Component, h, Element } from '@stencil/core';
import { store } from '../cart-store';
export class CartDealContainer {
  render() {
    return [
      store.get("dealGroups").map((group) => h("ks-cart-deal-group", { key: group.name, name: group.name, deals: group.deals })),
      store.get("deals").map((product) => h("ks-cart-deal", { key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price }))
    ];
  }
  static get is() { return "ks-cart-deal-container"; }
  static get elementRef() { return "root"; }
}
