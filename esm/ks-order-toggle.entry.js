import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const OrderChoice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("label", null, h("input", { hidden: true, type: "radio", name: this.name, value: this.value, checked: this.active, onChange: () => this.CheckHandler() }), h("div", { class: "ks-text-decorated uk-text-bold uk-width-1-1 uk-text-center", style: style }, this.text)));
    }
    get root() { return getElement(this); }
};

export { OrderChoice as ks_order_toggle };
