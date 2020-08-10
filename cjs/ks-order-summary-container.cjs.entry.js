'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const OrderSummaryContainer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.heading = "";
        this.returnHeading = "";
        this.returnLink = "";
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            index.h("div", { class: "uk-padding-small uk-padding@s uk-margin-bottom" }, index.h("div", { class: "uk-text-center uk-text-bold ks-text-decorated uk-margin-medium-bottom uk-margin-top", style: { fontSize: "26px" } }, this.heading), index.h("div", { style: { maxWidth: "700px", margin: "auto" }, "uk-margin": true }, index.h("slot", null))),
            index.h("a", { href: this.returnLink, class: "uk-button uk-button-secondary uk-width-1-1 uk-width-expand@m ks-text-decorated", style: { fontSize: "24px", fontWeight: "700", padding: "20px" } }, this.returnHeading)
        ];
    }
    get root() { return index.getElement(this); }
};

exports.ks_order_summary_container = OrderSummaryContainer;
