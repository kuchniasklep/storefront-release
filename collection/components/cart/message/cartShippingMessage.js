import { Component, h } from '@stencil/core';
import { store } from '../cart-store';
export class CartShippingMessage {
  render() {
    return h("ks-cart-message", { message: store.get("shippingMessage") });
  }
  static get is() { return "ks-cart-shipping-message"; }
}
