import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
import './index-2db7bf78.js';
import { T as Tunnel } from './cartData-be1433a0.js';
var CartDealContainer = /** @class */ (function () {
    function CartDealContainer(hostRef) {
        registerInstance(this, hostRef);
    }
    CartDealContainer.prototype.render = function () {
        return [
            this.dealGroups.map(function (group) { return h("ks-cart-deal-group", { key: group.name, name: group.name, deals: group.deals }); }),
            this.deals.map(function (product) { return h("ks-cart-deal", { key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price }); })
        ];
    };
    Object.defineProperty(CartDealContainer.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CartDealContainer;
}());
Tunnel.injectProps(CartDealContainer, ['deals', 'dealGroups']);
export { CartDealContainer as ks_cart_deal_container };
