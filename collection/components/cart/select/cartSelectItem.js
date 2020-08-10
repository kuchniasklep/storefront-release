import { Component, h, Element, Prop } from '@stencil/core';
export class CartSelectItem {
    constructor() {
        this.logo = "";
        this.name = "";
        this.price = "";
        this.color = "";
    }
    render() {
        return [
            this.logo ?
                h("div", { class: "logo", style: { backgroundColor: this.color } },
                    h("ks-img", { vertical: true, center: true, src: this.logo, target: "ks-cart-select-shipping, ks-cart-select-payment" })) : null,
            h("div", { class: "name" }, this.name),
            (this.price != "" && this.price != "0") ?
                h("div", { class: "price" }, this.price.replace(".", ",") + " ZŁ")
                : null
        ];
    }
    static get is() { return "ks-cart-select-item"; }
    static get originalStyleUrls() { return {
        "$": ["cartSelectItem.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cartSelectItem.css"]
    }; }
    static get properties() { return {
        "logo": {
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
            "attribute": "logo",
            "reflect": true,
            "defaultValue": "\"\""
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
            "reflect": true,
            "defaultValue": "\"\""
        },
        "price": {
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
            "attribute": "price",
            "reflect": true,
            "defaultValue": "\"\""
        },
        "color": {
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
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
    static get elementRef() { return "root"; }
}
