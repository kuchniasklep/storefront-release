'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
const cartData = require('./cartData-7eb782a3.js');

const CartDealContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      this.dealGroups.map((group) => index.h("ks-cart-deal-group", { key: group.name, name: group.name, deals: group.deals })),
      this.deals.map((product) => index.h("ks-cart-deal", { key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price }))
    ];
  }
  get root() { return index.getElement(this); }
};
cartData.Tunnel.injectProps(CartDealContainer, ['deals', 'dealGroups']);

exports.ks_cart_deal_container = CartDealContainer;
