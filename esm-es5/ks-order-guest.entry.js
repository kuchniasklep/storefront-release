import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderGuest = /** @class */ (function () {
    function OrderGuest(hostRef) {
        registerInstance(this, hostRef);
    }
    OrderGuest.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    OrderGuest.prototype.render = function () {
        return [
            h("div", { class: "uk-padding" }, h("div", { class: "uk-text-center", style: { maxWidth: "500px", margin: "auto" } }, h("p", { class: "ks-text-decorated uk-text-bold", style: { fontSize: "28px" } }, "ZAM\u00D3W BEZ LOGOWANIA"), h("slot", null)))
        ];
    };
    Object.defineProperty(OrderGuest.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderGuest;
}());
export { OrderGuest as ks_order_guest };
