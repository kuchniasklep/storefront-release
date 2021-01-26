'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');
const cartData = require('./cartData-abc6c385.js');

const CartShippingMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.shippingMessage = "";
  }
  render() {
    return (index.h("ks-cart-message", { message: this.shippingMessage }));
  }
};
cartData.Tunnel.injectProps(CartShippingMessage, ['shippingMessage']);

exports.ks_cart_shipping_message = CartShippingMessage;
