import { Component, h, Prop } from '@stencil/core';
export class CartDiscountPointsLogin {
    constructor() {
        this.message = "";
        this.loginUrl = "";
        this.points = 1;
    }
    render() {
        return [
            h("div", null,
                h("a", { href: this.loginUrl, class: "uk-button uk-button-secondary ks-text-decorated" }, "Zaloguj si\u0119")),
            h("div", { class: "messsage" },
                h("div", { class: "points ks-text-decorated" },
                    h("span", null,
                        "+",
                        this.points)),
                h("div", { class: "info" }, this.message))
        ];
    }
    static get is() { return "ks-cart-discount-points-login"; }
    static get originalStyleUrls() { return {
        "$": ["cartDiscountPointsLogin.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cartDiscountPointsLogin.css"]
    }; }
    static get properties() { return {
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
        "loginUrl": {
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
            "attribute": "login-url",
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
