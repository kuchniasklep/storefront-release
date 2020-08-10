'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const InputCheck = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.valid = true;
        this.validMessage = "";
    }
    render() {
        const type = this.radio ? "radio" :
            this.checkbox ? "checkbox" :
                "checkbox";
        const valid = this.valid ? "" : "uk-form-danger";
        return (index.h("div", { class: "uk-margin" }, index.h("label", { class: valid }, index.h("input", { class: "uk-margin-small-right uk-" + type, name: this.name, type: type, checked: this.currentCheck, value: this.value, onChange: (event) => {
                this.currentCheck = event.target.checked;
                this.Validate();
            } }), index.h("span", { innerHTML: this.label })), !this.valid ?
            index.h("p", { class: "uk-text-danger uk-text-bold", style: { marginTop: "10px" } }, this.validMessage)
            : null));
    }
    componentWillLoad() {
        this.currentCheck = this.checked;
    }
    async IsValid() {
        return this.valid;
    }
    async Validate() {
        const input = this.root.querySelector("input");
        let valid = true;
        let message = "";
        if (this.required && !input.checked) {
            valid = false;
            message = "Pole wymagane.";
        }
        this.valid = valid;
        this.validMessage = message;
        return Promise.resolve();
    }
    get root() { return index.getElement(this); }
};

exports.ks_input_check = InputCheck;
