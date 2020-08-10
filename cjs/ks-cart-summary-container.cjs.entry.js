'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');
require('./index-c953c5aa.js');
const cartData = require('./cartData-1fa306d1.js');

const CartSummaryContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return [
            index.h("ks-cart-summary", { text: "Warto\u015B\u0107 produkt\u00F3w:", price: this.productValue.toFixed(2) }),
            this.otherValues.map(item => index.h("ks-cart-summary", { text: item.name, price: item.value.toFixed(2), emphasis: item.value < 0 })),
            index.h("ks-cart-summary", { large: true, text: "Razem:", price: this.totalValue.toFixed(2) })
        ];
    }
    get root() { return index.getElement(this); }
};
cartData.Tunnel.injectProps(CartSummaryContainer, ['totalValue', 'productValue', 'otherValues']);

exports.ks_cart_summary_container = CartSummaryContainer;
