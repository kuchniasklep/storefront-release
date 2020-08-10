import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderButtonPair = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mobile = false;
        this.linkLeft = "";
        this.linkRight = "";
        this.split = 50;
    }
    resizeHandler() {
        this.mobile = window.innerWidth < 640;
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.resizeHandler();
    }
    render() {
        const split = this.mobile ? "100%" : this.split - 1 + "%";
        return (h("div", { class: "ks-text-decorated uk-text-bold uk-flex uk-flex-wrap uk-margin-top" }, h("a", { href: this.linkLeft, class: `uk-display-block uk-button uk-button-default ${this.mobile ? "uk-margin-small-bottom" : "uk-margin-right"}`, style: { fontSize: "18px", width: split } }, h("slot", { name: "left" })), h("a", { href: this.linkRight, class: "uk-display-block uk-button uk-button-default uk-width-expand", style: { fontSize: "18px" } }, h("slot", { name: "right" }))));
    }
    get root() { return getElement(this); }
};

export { OrderButtonPair as ks_order_button_pair };
