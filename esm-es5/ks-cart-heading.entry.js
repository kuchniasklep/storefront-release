import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var CartHeading = /** @class */ (function () {
    function CartHeading(hostRef) {
        registerInstance(this, hostRef);
        this.center = false;
    }
    CartHeading.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.root.style.marginBottom = "20px";
        if (this.center)
            this.root.style.textAlign = "center";
    };
    CartHeading.prototype.render = function () {
        return [
            h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, h("slot", null))
        ];
    };
    Object.defineProperty(CartHeading.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CartHeading;
}());
export { CartHeading as ks_cart_heading };
