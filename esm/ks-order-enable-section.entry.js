import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderEnableection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
    }
    ChangeHandler() {
        const input = this.root.querySelector(`div > label > input`);
        this.active = input.checked;
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.ChangeHandler();
    }
    render() {
        return (h("div", null, h("label", { class: "uk-display-block uk-margin" }, h("input", { type: "checkbox", class: "uk-checkbox", name: this.name, value: this.value, onChange: () => this.ChangeHandler() }), h("span", null, " ", this.heading)), h("div", { class: "inputs", hidden: !this.active }, h("slot", null))));
    }
    get root() { return getElement(this); }
};

export { OrderEnableection as ks_order_enable_section };
