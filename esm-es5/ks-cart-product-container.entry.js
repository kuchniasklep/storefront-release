import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
import './index-2db7bf78.js';
import { T as Tunnel } from './cartData-be1433a0.js';
var CartProductContainer = /** @class */ (function () {
    function CartProductContainer(hostRef) {
        registerInstance(this, hostRef);
    }
    CartProductContainer.prototype.render = function () {
        var _this = this;
        return [
            h("ks-cart-product-heading", { removable: true }),
            this.products.map(function (product, index) { return h("ks-cart-product", { removable: true, key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price, amount: product.amount, "max-amount": product.maxAmount, "shipping-time": product.shippingTime, onRemove: function () { return _this.RemoveProduct(index); }, onCount: function (e) { return _this.ProductCount(index, e.detail.current, e.detail.last); } }); }),
            h("ks-cart-product-price", { amount: this.productAmount, price: this.productValue, loading: this.loadingProducts, "shipping-time": this.totalShippingTime })
        ];
    };
    Object.defineProperty(CartProductContainer.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CartProductContainer;
}());
Tunnel.injectProps(CartProductContainer, ['productValue', 'productAmount', 'products', 'loadingProducts', 'totalShippingTime', 'RemoveProduct', 'ProductCount']);
export { CartProductContainer as ks_cart_product_container };
