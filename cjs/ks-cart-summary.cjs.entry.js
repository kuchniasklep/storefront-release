'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const CartSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.emphasis = false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        const price = this.price.replace(".", ",") + " zł";
        const leaderOptions = "media: 500; fill: .";
        if (this.large) {
            const largeStyle = {
                fontSize: "24px",
                fontWeight: "700",
                color: this.emphasis ? "#e21334" : ""
            };
            return (index.h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true }, index.h("div", { class: "uk-width-expand", "uk-leader": leaderOptions }, index.h("span", { class: "ks-text-decorated", style: largeStyle }, this.text)), index.h("div", { class: "ks-text-decorated", style: largeStyle }, price)));
        }
        else {
            const normalStyle = {
                fontWeight: this.emphasis ? "700" : "",
                color: this.emphasis ? "#e21334" : ""
            };
            return (index.h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true }, index.h("div", { class: "uk-width-expand", "uk-leader": leaderOptions, style: normalStyle }, this.text), index.h("div", { style: normalStyle }, price)));
        }
    }
    get root() { return index.getElement(this); }
};

exports.ks_cart_summary = CartSummary;
