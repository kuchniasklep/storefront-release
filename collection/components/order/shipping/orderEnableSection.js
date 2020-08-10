import { Component, h, Element, Prop } from '@stencil/core';
export class OrderEnableection {
    constructor() {
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
        return (h("div", null,
            h("label", { class: "uk-display-block uk-margin" },
                h("input", { type: "checkbox", class: "uk-checkbox", name: this.name, value: this.value, onChange: () => this.ChangeHandler() }),
                h("span", null,
                    " ",
                    this.heading)),
            h("div", { class: "inputs", hidden: !this.active },
                h("slot", null))));
    }
    static get is() { return "ks-order-enable-section"; }
    static get properties() { return {
        "heading": {
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
            "attribute": "heading",
            "reflect": false
        },
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
        "active": {
            "type": "boolean",
            "mutable": true,
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
            "attribute": "active",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "root"; }
}
