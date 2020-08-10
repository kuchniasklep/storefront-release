import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const CartSummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            return (h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true }, h("div", { class: "uk-width-expand", "uk-leader": leaderOptions }, h("span", { class: "ks-text-decorated", style: largeStyle }, this.text)), h("div", { class: "ks-text-decorated", style: largeStyle }, price)));
        }
        else {
            const normalStyle = {
                fontWeight: this.emphasis ? "700" : "",
                color: this.emphasis ? "#e21334" : ""
            };
            return (h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true }, h("div", { class: "uk-width-expand", "uk-leader": leaderOptions, style: normalStyle }, this.text), h("div", { style: normalStyle }, price)));
        }
    }
    get root() { return getElement(this); }
};

export { CartSummary as ks_cart_summary };
