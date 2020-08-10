import { Component, h, Prop, Element } from '@stencil/core';
export class OrderAddressField {
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            h("span", { innerHTML: this.name }),
            h("div", { class: "uk-padding-small uk-margin-bottom", style: { backgroundColor: "#f2f2f2" } },
                h("slot", null))
        ];
    }
    static get is() { return "ks-order-address-field"; }
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
        }
    }; }
    static get elementRef() { return "root"; }
}
