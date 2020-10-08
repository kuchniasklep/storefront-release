import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';
import './state-tunnel-04c0b67a.js';
import { T as Tunnel } from './cartData-c83db97f.js';

const CartDealContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      this.dealGroups.map((group) => h("ks-cart-deal-group", { key: group.name, name: group.name, deals: group.deals })),
      this.deals.map((product) => h("ks-cart-deal", { key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price }))
    ];
  }
  get root() { return getElement(this); }
};
Tunnel.injectProps(CartDealContainer, ['deals', 'dealGroups']);

export { CartDealContainer as ks_cart_deal_container };
