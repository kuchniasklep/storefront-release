import { Component, h, Element } from '@stencil/core';
import { store } from '../cart-store';
export class CartProductContainer {
  render() {
    const products = Object.entries(store.get("products"));
    return [
      h("ks-cart-product-heading", { removable: true }),
      products.map(([id, product], index) => h("ks-cart-product", { removable: true, key: id, ikey: id, index: index, name: product.name, link: product.link, img: product.img, price: product.price, amount: product.amount, "max-amount": product.maxAmount, "shipping-time": product.shippingTime })),
      h("ks-cart-product-price", { amount: store.get("productAmount"), price: store.get("productValue"), loading: store.get("loadingProducts"), "shipping-time": store.get("totalShippingTime") })
    ];
  }
  static get is() { return "ks-cart-product-container"; }
  static get elementRef() { return "root"; }
}
