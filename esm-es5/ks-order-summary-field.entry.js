import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderSummaryField = /** @class */ (function () {
    function OrderSummaryField(hostRef) {
        registerInstance(this, hostRef);
        this.dark = false;
        this.large = false;
        this.single = false;
    }
    OrderSummaryField.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    OrderSummaryField.prototype.render = function () {
        var bgColor = this.dark ? "#252525" : "#f2f2f2";
        var color = this.dark ? "white" : "inherit";
        var font = this.large ? "20px" : "inherit";
        if (this.single)
            return (h("div", { class: "uk-padding-small " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } }, h("slot", null)));
        return (h("div", { class: "uk-padding-small uk-flex uk-flex-wrap uk-child-width-1-1 uk-child-width-auto@m uk-flex-between " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } }, h("div", { class: "uk-text-center uk-text-left@m", style: { minWidth: "150px" } }, h("slot", { name: "left" })), h("div", { class: "uk-text-center uk-text-right@m" }, h("slot", { name: "right" }))));
    };
    Object.defineProperty(OrderSummaryField.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderSummaryField;
}());
export { OrderSummaryField as ks_order_summary_field };
