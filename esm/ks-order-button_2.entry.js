import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
        this.wide = false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            h("a", { href: this.href, class: "uk-button uk-button-default " +
                    (this.mobile ? "uk-hidden@m " : "") +
                    (this.wide ? "uk-width-1-1 " : ""), style: { padding: "0 20px" } }, h("slot", null))
        ];
    }
    get root() { return getElement(this); }
};

const OrderHeading = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            h("div", { style: { marginBottom: "20px" }, class: "uk-flex uk-flex-middle uk-flex-between" }, h("div", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading), h("a", { href: this.link, class: "uk-link-text" }, h("span", { "uk-icon": "file-edit" })))
        ];
    }
    get root() { return getElement(this); }
};

export { OrderButton as ks_order_button, OrderHeading as ks_order_heading };
