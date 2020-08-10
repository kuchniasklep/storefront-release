import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderButtonPair = /** @class */ (function () {
    function OrderButtonPair(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
        this.linkLeft = "";
        this.linkRight = "";
        this.split = 50;
    }
    OrderButtonPair.prototype.resizeHandler = function () {
        this.mobile = window.innerWidth < 640;
    };
    OrderButtonPair.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.resizeHandler();
    };
    OrderButtonPair.prototype.render = function () {
        var split = this.mobile ? "100%" : this.split - 1 + "%";
        return (h("div", { class: "ks-text-decorated uk-text-bold uk-flex uk-flex-wrap uk-margin-top" }, h("a", { href: this.linkLeft, class: "uk-display-block uk-button uk-button-default " + (this.mobile ? "uk-margin-small-bottom" : "uk-margin-right"), style: { fontSize: "18px", width: split } }, h("slot", { name: "left" })), h("a", { href: this.linkRight, class: "uk-display-block uk-button uk-button-default uk-width-expand", style: { fontSize: "18px" } }, h("slot", { name: "right" }))));
    };
    Object.defineProperty(OrderButtonPair.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderButtonPair;
}());
export { OrderButtonPair as ks_order_button_pair };
