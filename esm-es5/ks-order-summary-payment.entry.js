import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderPayU = /** @class */ (function () {
    function OrderPayU(hostRef) {
        registerInstance(this, hostRef);
        this.unique = "";
        this.text = "";
        this.image = "";
        this.color = "";
        this.hover = "";
        this.active = "";
    }
    OrderPayU.prototype.componentWillLoad = function () {
        this.unique = Math.random().toString(36).replace('0.', '');
    };
    OrderPayU.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
    };
    OrderPayU.prototype.render = function () {
        return (h("div", { class: "uk-flex uk-flex-center" }, h("style", { innerHTML: "\n                    .ks-order-summary-payment-" + this.unique + " {\n                        background-color: " + this.color + ";\n                        color: white;\n                    }\n                    .ks-order-summary-payment-" + this.unique + ":hover {\n                        background-color: " + this.hover + ";\n                    }\n                    .ks-order-summary-payment-" + this.unique + ":active {\n                        background-color: " + this.active + ";\n                    }\n                " }), h("button", { type: "submit", class: "uk-button uk-button-pill uk-flex uk-flex-middle uk-flex-center ks-text-decorated ks-order-summary-payment-" + this.unique, style: { fontSize: "20px", padding: "5px 20px 5px 20px" } }, h("div", null, this.text), h("ks-image", { src: this.image, width: "150", height: "50", class: "uk-visible@s" }))));
    };
    Object.defineProperty(OrderPayU.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderPayU;
}());
export { OrderPayU as ks_order_summary_payment };
