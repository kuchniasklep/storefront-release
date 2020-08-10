import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderAddressField = /** @class */ (function () {
    function OrderAddressField(hostRef) {
        registerInstance(this, hostRef);
    }
    OrderAddressField.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    OrderAddressField.prototype.render = function () {
        return [
            h("span", { innerHTML: this.name }),
            h("div", { class: "uk-padding-small uk-margin-bottom", style: { backgroundColor: "#f2f2f2" } }, h("slot", null))
        ];
    };
    Object.defineProperty(OrderAddressField.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderAddressField;
}());
export { OrderAddressField as ks_order_address_field };
