import { Component, h, Element, Prop } from '@stencil/core';
export class OrderSummaryContainer {
    constructor() {
        this.heading = "";
        this.returnHeading = "";
        this.returnLink = "";
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            h("div", { class: "uk-padding-small uk-padding@s uk-margin-bottom" },
                h("div", { class: "uk-text-center uk-text-bold ks-text-decorated uk-margin-medium-bottom uk-margin-top", style: { fontSize: "26px" } }, this.heading),
                h("div", { style: { maxWidth: "700px", margin: "auto" }, "uk-margin": true },
                    h("slot", null))),
            h("a", { href: this.returnLink, class: "uk-button uk-button-secondary uk-width-1-1 uk-width-expand@m ks-text-decorated", style: { fontSize: "24px", fontWeight: "700", padding: "20px" } }, this.returnHeading)
        ];
    }
    static get is() { return "ks-order-summary-container"; }
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
            "reflect": false,
            "defaultValue": "\"\""
        },
        "returnHeading": {
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
            "attribute": "return-heading",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "returnLink": {
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
            "attribute": "return-link",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
    static get elementRef() { return "root"; }
}
