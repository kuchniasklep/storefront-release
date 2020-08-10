'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');
require('./index-c953c5aa.js');
const cartData = require('./cartData-1fa306d1.js');

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
