import { Component, h, Element, Prop } from '@stencil/core';
export class OrderToggleSection {
    constructor() {
        this.value = "left";
    }
    ChangeHandler() {
        const input = this.root.querySelector(`ks-order-toggle input[name='${this.name}']:checked`);
        this.value = input.value == this.lValue ? "left" : "right";
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.ChangeHandler();
    }
    render() {
        return (h("div", null,
            h("div", { class: "uk-child-width-1-2 uk-flex" },
                h("ks-order-toggle", { active: this.value == "left", text: this.left, name: this.name, value: this.lValue, onClick: () => this.ChangeHandler() }),
                h("ks-order-toggle", { active: this.value == "right", text: this.right, name: this.name, value: this.rValue, onClick: () => this.ChangeHandler() })),
            h("br", null),
            h("div", { hidden: this.value != "left" },
                h("slot", { name: "left" })),
            h("div", { hidden: this.value != "right" },
                h("slot", { name: "right" }))));
    }
    static get is() { return "ks-order-toggle-section"; }
    static get properties() { return {
        "left": {
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
            "attribute": "left",
            "reflect": false
        },
        "right": {
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
            "attribute": "right",
            "reflect": false
        },
        "lValue": {
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
            "attribute": "l-value",
            "reflect": false
        },
        "rValue": {
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
            "attribute": "r-value",
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
            "mutable": true,
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
            "reflect": false,
            "defaultValue": "\"left\""
        }
    }; }
    static get elementRef() { return "root"; }
}
