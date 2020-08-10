import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderCheckSection = /** @class */ (function () {
    function OrderCheckSection(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
        this.mobile = false;
    }
    OrderCheckSection.prototype.ChangeHandler = function () {
        var input = this.root.querySelector("div > label > input");
        this.active = input.checked;
        var inputs = this.root.querySelectorAll("ks-input-text");
        inputs.forEach(function (input) {
            input.message = "";
        });
    };
    OrderCheckSection.prototype.resizeHandler = function () {
        this.mobile = window.innerWidth < 959 ? true : false;
    };
    OrderCheckSection.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.resizeHandler();
        this.ChangeHandler();
    };
    OrderCheckSection.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("label", { class: "uk-display-block uk-margin" }, h("input", { type: "checkbox", class: "uk-checkbox", style: { transform: "scale(1.4) translateX(2px)", marginBottom: "3px" }, onChange: function () { return _this.ChangeHandler(); } }), h("span", { class: "uk-margin-left ks-text-decorated uk-text-bold", style: { fontSize: "22px" } }, this.label)), h("br", null), this.active ? null :
            h("input", { type: "hidden", name: this.name, value: "1" }), h("div", { class: "uk-inline uk-width-1-1", hidden: !this.active && this.mobile }, h("slot", null), this.active ? null :
            h("div", { class: "uk-overlay uk-overlay-default uk-position-cover", style: { opacity: "0.8" } }))));
    };
    Object.defineProperty(OrderCheckSection.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderCheckSection;
}());
export { OrderCheckSection as ks_order_check_section };
