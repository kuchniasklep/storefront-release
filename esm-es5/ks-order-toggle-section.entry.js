import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderToggleSection = /** @class */ (function () {
    function OrderToggleSection(hostRef) {
        registerInstance(this, hostRef);
        this.value = "left";
    }
    OrderToggleSection.prototype.ChangeHandler = function () {
        var input = this.root.querySelector("ks-order-toggle input[name='" + this.name + "']:checked");
        this.value = input.value == this.lValue ? "left" : "right";
    };
    OrderToggleSection.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.ChangeHandler();
    };
    OrderToggleSection.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("div", { class: "uk-child-width-1-2 uk-flex" }, h("ks-order-toggle", { active: this.value == "left", text: this.left, name: this.name, value: this.lValue, onClick: function () { return _this.ChangeHandler(); } }), h("ks-order-toggle", { active: this.value == "right", text: this.right, name: this.name, value: this.rValue, onClick: function () { return _this.ChangeHandler(); } })), h("br", null), h("div", { hidden: this.value != "left" }, h("slot", { name: "left" })), h("div", { hidden: this.value != "right" }, h("slot", { name: "right" }))));
    };
    Object.defineProperty(OrderToggleSection.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderToggleSection;
}());
export { OrderToggleSection as ks_order_toggle_section };
