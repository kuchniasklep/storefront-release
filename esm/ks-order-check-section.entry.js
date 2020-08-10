import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderCheckSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
        this.mobile = false;
    }
    ChangeHandler() {
        const input = this.root.querySelector(`div > label > input`);
        this.active = input.checked;
        const inputs = this.root.querySelectorAll("ks-input-text");
        inputs.forEach(input => {
            input.message = "";
        });
    }
    resizeHandler() {
        this.mobile = window.innerWidth < 959 ? true : false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.resizeHandler();
        this.ChangeHandler();
    }
    render() {
        return (h("div", null, h("label", { class: "uk-display-block uk-margin" }, h("input", { type: "checkbox", class: "uk-checkbox", style: { transform: "scale(1.4) translateX(2px)", marginBottom: "3px" }, onChange: () => this.ChangeHandler() }), h("span", { class: "uk-margin-left ks-text-decorated uk-text-bold", style: { fontSize: "22px" } }, this.label)), h("br", null), this.active ? null :
            h("input", { type: "hidden", name: this.name, value: "1" }), h("div", { class: "uk-inline uk-width-1-1", hidden: !this.active && this.mobile }, h("slot", null), this.active ? null :
            h("div", { class: "uk-overlay uk-overlay-default uk-position-cover", style: { opacity: "0.8" } }))));
    }
    get root() { return getElement(this); }
};

export { OrderCheckSection as ks_order_check_section };
