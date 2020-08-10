import { Component, h, Prop } from '@stencil/core';
export class ProductPoints {
    constructor() {
        this.count = 0;
        this.value = 0;
    }
    render() {
        return [
            h("div", null, this.count),
            h("div", null,
                "Kupuj\u0105c ten produkt otrzymasz od nas ",
                this.count,
                " punkt\u00F3w do wykorzystania na zakupy w naszym sklepie. Dotyczy tylko zarejestrowanych Klient\u00F3w. Warto\u015B\u0107 ",
                this.value,
                " punkt\u00F3w wynosi 1 z\u0142.")
        ];
    }
    static get is() { return "ks-product-points"; }
    static get originalStyleUrls() { return {
        "$": ["product-points.css"]
    }; }
    static get styleUrls() { return {
        "$": ["product-points.css"]
    }; }
    static get properties() { return {
        "count": {
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
            "attribute": "count",
            "reflect": false,
            "defaultValue": "0"
        },
        "value": {
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
            "attribute": "value",
            "reflect": false,
            "defaultValue": "0"
        }
    }; }
}
