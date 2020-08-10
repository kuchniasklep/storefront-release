import { Component, h, Prop, Element } from '@stencil/core';
export class Form {
    render() {
        return (h("form", { action: this.action, method: this.method, enctype: "multipart/form-data", onSubmit: (event) => this.Submit(event) },
            h("slot", null),
            h("input", { class: "uk-button uk-button-danger uk-width-1-1 uk-margin-medium-top", style: { padding: "8px 40px" }, type: "submit", value: "Wy\u015Blij Formularz", formnovalidate: true })));
    }
    async Submit(event) {
        event.preventDefault();
        const form = this.root.querySelector("form");
        const inputs = form.querySelectorAll("ks-input-text, ks-input-textarea, ks-input-check, ks-input-number, ks-input-date, ks-input-select");
        let valid = true;
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            await input.Validate();
            const isValid = await input.IsValid();
            if (!isValid) {
                valid = false;
            }
        }
        if (valid)
            form.submit();
    }
    static get is() { return "ks-form"; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        },
        "action": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "action",
            "reflect": false
        },
        "method": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "method",
            "reflect": false
        }
    }; }
    static get elementRef() { return "root"; }
}
