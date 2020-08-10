import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var CartSummary = /** @class */ (function () {
    function CartSummary(hostRef) {
        registerInstance(this, hostRef);
        this.emphasis = false;
    }
    CartSummary.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    CartSummary.prototype.render = function () {
        var price = this.price.replace(".", ",") + " zł";
        var leaderOptions = "media: 500; fill: .";
        if (this.large) {
            var largeStyle = {
                fontSize: "24px",
                fontWeight: "700",
                color: this.emphasis ? "#e21334" : ""
            };
            return (h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true }, h("div", { class: "uk-width-expand", "uk-leader": leaderOptions }, h("span", { class: "ks-text-decorated", style: largeStyle }, this.text)), h("div", { class: "ks-text-decorated", style: largeStyle }, price)));
        }
        else {
            var normalStyle = {
                fontWeight: this.emphasis ? "700" : "",
                color: this.emphasis ? "#e21334" : ""
            };
            return (h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true }, h("div", { class: "uk-width-expand", "uk-leader": leaderOptions, style: normalStyle }, this.text), h("div", { style: normalStyle }, price)));
        }
    };
    Object.defineProperty(CartSummary.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return CartSummary;
}());
export { CartSummary as ks_cart_summary };
