import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderEnableection = /** @class */ (function () {
    function OrderEnableection(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
    }
    OrderEnableection.prototype.ChangeHandler = function () {
        var input = this.root.querySelector("div > label > input");
        this.active = input.checked;
    };
    OrderEnableection.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.ChangeHandler();
    };
    OrderEnableection.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("label", { class: "uk-display-block uk-margin" }, h("input", { type: "checkbox", class: "uk-checkbox", name: this.name, value: this.value, onChange: function () { return _this.ChangeHandler(); } }), h("span", null, " ", this.heading)), h("div", { class: "inputs", hidden: !this.active }, h("slot", null))));
    };
    Object.defineProperty(OrderEnableection.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderEnableection;
}());
export { OrderEnableection as ks_order_enable_section };
