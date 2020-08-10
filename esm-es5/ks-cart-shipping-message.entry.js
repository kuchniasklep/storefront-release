import { r as registerInstance, h } from './index-20a680bb.js';
import './index-2db7bf78.js';
import { T as Tunnel } from './cartData-be1433a0.js';
var CartShippingMessage = /** @class */ (function () {
    function CartShippingMessage(hostRef) {
        registerInstance(this, hostRef);
        this.shippingMessage = "";
    }
    CartShippingMessage.prototype.render = function () {
        return (h("ks-cart-message", { message: this.shippingMessage }));
    };
    return CartShippingMessage;
}());
Tunnel.injectProps(CartShippingMessage, ['shippingMessage']);
export { CartShippingMessage as ks_cart_shipping_message };
