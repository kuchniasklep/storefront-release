import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var OrderAddressSection = /** @class */ (function () {
    function OrderAddressSection(hostRef) {
        registerInstance(this, hostRef);
        this.hideOnMobile = false;
        this.mobile = false;
    }
    OrderAddressSection.prototype.resizeHandler = function () {
        this.mobile = window.innerWidth < 959 ? true : false;
    };
    OrderAddressSection.prototype.componentDidLoad = function () {
        this.root.style.display = "block";
        this.resizeHandler();
    };
    OrderAddressSection.prototype.render = function () {
        var heading = h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading);
        if (this.mobile && this.hideOnMobile)
            return (h("ul", { "uk-accordion": true }, h("li", null, h("a", { class: "uk-accordion-title", href: "#" }, heading), h("div", { class: "uk-accordion-content" }, h("slot", null), h("ks-order-button", { mobile: true, wide: true, href: this.link }, h("span", null, "Edytuj dane"))))));
        return [
            h("ks-order-heading", { heading: this.heading, link: this.link }),
            h("slot", null)
        ];
    };
    Object.defineProperty(OrderAddressSection.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return OrderAddressSection;
}());
export { OrderAddressSection as ks_order_address_section };
