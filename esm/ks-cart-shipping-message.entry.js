import { r as registerInstance, h } from './index-74ff0cef.js';
import { T as Tunnel } from './cartData-7990ed49.js';

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
