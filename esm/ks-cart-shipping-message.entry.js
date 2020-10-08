import { r as registerInstance, h } from './index-22b73bd9.js';
import './state-tunnel-04c0b67a.js';
import { T as Tunnel } from './cartData-c83db97f.js';

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
