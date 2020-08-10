import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderButton = /** @class */ (function () {
    function OrderButton(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
        this.wide = false;
    }
    OrderButton.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    OrderButton.prototype.render = function () {
        return [
            h("a", { href: this.href, class: "uk-button uk-button-default " +
                    (this.mobile ? "uk-hidden@m " : "") +
                    (this.wide ? "uk-width-1-1 " : ""), style: { padding: "0 20px" } }, h("slot", null))
        ];
    };
    Object.defineProperty(OrderButton.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderButton;
}());
var OrderHeading = /** @class */ (function () {
    function OrderHeading(hostRef) {
        registerInstance(this, hostRef);
    }
    OrderHeading.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    OrderHeading.prototype.render = function () {
        return [
            h("div", { style: { marginBottom: "20px" }, class: "uk-flex uk-flex-middle uk-flex-between" }, h("div", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading), h("a", { href: this.link, class: "uk-link-text" }, h("span", { "uk-icon": "file-edit" })))
        ];
    };
    Object.defineProperty(OrderHeading.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderHeading;
}());
export { OrderButton as ks_order_button, OrderHeading as ks_order_heading };
