import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderSeparator = /** @class */ (function () {
    function OrderSeparator(hostRef) {
        registerInstance(this, hostRef);
        this.dark = false;
    }
    OrderSeparator.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    OrderSeparator.prototype.render = function () {
        var bgColor = this.dark ? "#404040" : "#dadada";
        return (h("hr", { class: "uk-margin-remove", style: { borderColor: bgColor } }));
    };
    Object.defineProperty(OrderSeparator.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderSeparator;
}());
export { OrderSeparator as ks_order_separator };
