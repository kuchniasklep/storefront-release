'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const OrderEnableection = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", null, index.h("label", { class: "uk-display-block uk-margin" }, index.h("input", { type: "checkbox", class: "uk-checkbox", name: this.name, value: this.value, onChange: () => this.ChangeHandler() }), index.h("span", null, " ", this.heading)), index.h("div", { class: "inputs", hidden: !this.active }, index.h("slot", null))));
    }
    get root() { return index.getElement(this); }
};

exports.ks_order_enable_section = OrderEnableection;
