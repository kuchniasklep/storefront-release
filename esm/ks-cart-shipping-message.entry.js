import { r as registerInstance, h } from './index-22b73bd9.js';
import { T as Tunnel } from './cartData-871fd2cb.js';

const CartShippingMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.shippingMessage = "";
  }
  render() {
    return (h("ks-cart-message", { message: this.shippingMessage }));
  }
};
Tunnel.injectProps(CartShippingMessage, ['shippingMessage']);

export { CartShippingMessage as ks_cart_shipping_message };
