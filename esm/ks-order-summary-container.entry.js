import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderSummaryContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.heading = "";
        this.returnHeading = "";
        this.returnLink = "";
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            h("div", { class: "uk-padding-small uk-padding@s uk-margin-bottom" }, h("div", { class: "uk-text-center uk-text-bold ks-text-decorated uk-margin-medium-bottom uk-margin-top", style: { fontSize: "26px" } }, this.heading), h("div", { style: { maxWidth: "700px", margin: "auto" }, "uk-margin": true }, h("slot", null))),
            h("a", { href: this.returnLink, class: "uk-button uk-button-secondary uk-width-1-1 uk-width-expand@m ks-text-decorated", style: { fontSize: "24px", fontWeight: "700", padding: "20px" } }, this.returnHeading)
        ];
    }
    get root() { return getElement(this); }
};

export { OrderSummaryContainer as ks_order_summary_container };
