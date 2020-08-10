import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderToggleSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = "left";
    }
    ChangeHandler() {
        const input = this.root.querySelector(`ks-order-toggle input[name='${this.name}']:checked`);
        this.value = input.value == this.lValue ? "left" : "right";
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.ChangeHandler();
    }
    render() {
        return (h("div", null, h("div", { class: "uk-child-width-1-2 uk-flex" }, h("ks-order-toggle", { active: this.value == "left", text: this.left, name: this.name, value: this.lValue, onClick: () => this.ChangeHandler() }), h("ks-order-toggle", { active: this.value == "right", text: this.right, name: this.name, value: this.rValue, onClick: () => this.ChangeHandler() })), h("br", null), h("div", { hidden: this.value != "left" }, h("slot", { name: "left" })), h("div", { hidden: this.value != "right" }, h("slot", { name: "right" }))));
    }
    get root() { return getElement(this); }
};

export { OrderToggleSection as ks_order_toggle_section };
