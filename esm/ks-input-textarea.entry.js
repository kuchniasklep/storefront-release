import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';

const InputTextarea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valid = true;
        this.validMessage = "";
    }
    render() {
        const valid = this.valid ? "" : "uk-form-danger";
        const validText = this.valid ? "" : "uk-text-danger";
        return (h("div", { class: "uk-margin" }, this.label ?
            h("label", { class: "uk-form-label " + validText, style: { marginBottom: "3px", display: "block" } }, this.label)
            : null, h("textarea", { rows: this.rows, class: "uk-textarea " + valid, name: this.name, placeholder: this.placeholder, onChange: () => this.Validate() }), !this.valid ?
            h("p", { class: "uk-text-danger", style: { marginTop: "5px" } }, this.validMessage)
            : null));
    }
    async IsValid() {
        return this.valid;
    }
    async Validate() {
        const input = this.root.querySelector("textarea");
        let valid = true;
        let message = "";
        if (input.value.length < this.min) {
            valid = false;
            message += ` Pole wymaga minimum ${this.min} znaków.`;
        }
        if (input.value.length > this.max) {
            valid = false;
            message += ` Pole nie może przekroczyć ${this.max} znaków.`;
        }
        if (this.required && input.value.length == 0) {
            valid = false;
            message = "Pole wymagane.";
        }
        this.valid = valid;
        this.validMessage = message;
        return Promise.resolve();
    }
    get root() { return getElement(this); }
};

export { InputTextarea as ks_input_textarea };
