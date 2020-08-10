import { Component, h, Prop, Element, State, Method } from '@stencil/core';
export class InputCheck {
    constructor() {
        this.valid = true;
        this.validMessage = "";
    }
    render() {
        const type = this.radio ? "radio" :
            this.checkbox ? "checkbox" :
                "checkbox";
        const valid = this.valid ? "" : "uk-form-danger";
        return (h("div", { class: "uk-margin" },
            h("label", { class: valid },
                h("input", { class: "uk-margin-small-right uk-" + type, name: this.name, type: type, checked: this.currentCheck, value: this.value, onChange: (event) => {
                        this.currentCheck = event.target.checked;
                        this.Validate();
                    } }),
                h("span", { innerHTML: this.label })),
            !this.valid ?
                h("p", { class: "uk-text-danger uk-text-bold", style: { marginTop: "10px" } }, this.validMessage)
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
    static get is() { return "ks-input-check"; }
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
        "value": {
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
            "attribute": "value",
            "reflect": false
        },
        "radio": {
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
            "attribute": "radio",
            "reflect": false
        },
        "checkbox": {
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
            "attribute": "checkbox",
            "reflect": false
        },
        "checked": {
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
            "attribute": "checked",
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
