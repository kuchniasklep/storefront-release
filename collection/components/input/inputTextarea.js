import { Component, h, Prop, Element, State, Method } from '@stencil/core';
export class InputTextarea {
    constructor() {
        this.valid = true;
        this.validMessage = "";
    }
    render() {
        const valid = this.valid ? "" : "uk-form-danger";
        const validText = this.valid ? "" : "uk-text-danger";
        return (h("div", { class: "uk-margin" },
            this.label ?
                h("label", { class: "uk-form-label " + validText, style: { marginBottom: "3px", display: "block" } }, this.label)
                : null,
            h("textarea", { rows: this.rows, class: "uk-textarea " + valid, name: this.name, placeholder: this.placeholder, onChange: () => this.Validate() }),
            !this.valid ?
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
    static get is() { return "ks-input-textarea"; }
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
        "placeholder": {
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
            "attribute": "placeholder",
            "reflect": false
        },
        "label": {
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
            "attribute": "label",
            "reflect": false
        },
        "rows": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "rows",
            "reflect": false
        },
        "min": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "min",
            "reflect": false
        },
        "max": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "max",
            "reflect": false
        },
        "required": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "required",
            "reflect": false
        }
    }; }
    static get states() { return {
        "valid": {},
        "validMessage": {}
    }; }
    static get methods() { return {
        "IsValid": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "Validate": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "root"; }
}
