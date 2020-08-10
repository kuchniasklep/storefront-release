import { Component, h, Prop } from '@stencil/core';
export class CartDiscountPointsMessage {
    constructor() {
        this.heading = "";
        this.message = "";
        this.points = 1;
    }
    render() {
        return [
            h("div", { class: "ks-text-decorated" }, this.heading),
            h("div", { class: "messsage" },
                h("div", { class: "points ks-text-decorated" },
                    h("span", null,
                        "+",
                        this.points)),
                h("div", { class: "info" }, this.message))
        ];
    }
    static get is() { return "ks-cart-discount-points-message"; }
    static get originalStyleUrls() { return {
        "$": ["cartDiscountPointsMessage.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cartDiscountPointsMessage.css"]
    }; }
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
        "message": {
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
            "attribute": "message",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "points": {
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
            "attribute": "points",
            "reflect": false,
            "defaultValue": "1"
        }
    }; }
}
