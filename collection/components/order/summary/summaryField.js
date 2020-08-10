import { Component, h, Element, Prop } from '@stencil/core';
export class OrderSummaryField {
    constructor() {
        this.dark = false;
        this.large = false;
        this.single = false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        const bgColor = this.dark ? "#252525" : "#f2f2f2";
        const color = this.dark ? "white" : "inherit";
        const font = this.large ? "20px" : "inherit";
        if (this.single)
            return (h("div", { class: "uk-padding-small " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } },
                h("slot", null)));
        return (h("div", { class: "uk-padding-small uk-flex uk-flex-wrap uk-child-width-1-1 uk-child-width-auto@m uk-flex-between " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } },
            h("div", { class: "uk-text-center uk-text-left@m", style: { minWidth: "150px" } },
                h("slot", { name: "left" })),
            h("div", { class: "uk-text-center uk-text-right@m" },
                h("slot", { name: "right" }))));
    }
    static get is() { return "ks-order-summary-field"; }
    static get properties() { return {
        "dark": {
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
            "attribute": "dark",
            "reflect": false,
            "defaultValue": "false"
        },
        "large": {
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
            "attribute": "large",
            "reflect": false,
            "defaultValue": "false"
        },
        "single": {
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
            "attribute": "single",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "root"; }
}
