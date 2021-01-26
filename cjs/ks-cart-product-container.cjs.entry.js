'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');
const cartData = require('./cartData-abc6c385.js');

const CartProductContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("ks-cart-product-heading", { removable: true }),
      this.products.map((product, index$1) => index.h("ks-cart-product", { removable: true, key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price, amount: product.amount, "max-amount": product.maxAmount, "shipping-time": product.shippingTime, onRemove: () => this.RemoveProduct(index$1), onCount: (e) => this.ProductCount(index$1, e.detail.current, e.detail.last) })),
      index.h("ks-cart-product-price", { amount: this.productAmount, price: this.productValue, loading: this.loadingProducts, "shipping-time": this.totalShippingTime })
    ];
  }
  get root() { return index.getElement(this); }
};
cartData.Tunnel.injectProps(CartProductContainer, ['productValue', 'productAmount', 'products', 'loadingProducts', 'totalShippingTime', 'RemoveProduct', 'ProductCount']);

exports.ks_cart_product_container = CartProductContainer;
