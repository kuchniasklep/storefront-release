'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const OrderChoice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    CheckHandler() {
        const inputs = document.querySelectorAll(`input[name=${this.name}]`);
        const thisInput = this.root.querySelector("input");
        inputs.forEach((input) => {
            if (input == thisInput)
                this.active = thisInput.checked;
            else {
                const parent = input.parentElement.parentElement;
                parent.active = input.checked;
            }
        });
    }
    componentDidLoad() {
        this.root.style.display = "inline-block";
    }
    render() {
        const style = {
            fontSize: "18px",
            padding: "8px",
            backgroundColor: this.active ? "#252525" : "#F2F2F2",
            color: this.active ? "white" : "black",
            transition: "background-color ease 0.15s, color ease 0.15s"
        };
        return (index.h("label", null, index.h("input", { hidden: true, type: "radio", name: this.name, value: this.value, checked: this.active, onChange: () => this.CheckHandler() }), index.h("div", { class: "ks-text-decorated uk-text-bold uk-width-1-1 uk-text-center", style: style }, this.text)));
    }
    get root() { return index.getElement(this); }
};

exports.ks_order_toggle = OrderChoice;
