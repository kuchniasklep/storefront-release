import { Component, h, Prop, Element } from '@stencil/core';
import Tunnel from './cartData';
export class CartSummaryContainer {
    render() {
        return [
            h("ks-cart-summary", { text: "Warto\u015B\u0107 produkt\u00F3w:", price: this.productValue.toFixed(2) }),
            this.otherValues.map(item => h("ks-cart-summary", { text: item.name, price: item.value.toFixed(2), emphasis: item.value < 0 })),
            h("ks-cart-summary", { large: true, text: "Razem:", price: this.totalValue.toFixed(2) })
        ];
    }
    static get is() { return "ks-cart-summary-container"; }
    static get properties() { return {
        "totalValue": {
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
            "attribute": "total-value",
            "reflect": false
        },
        "productValue": {
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
            "attribute": "product-value",
            "reflect": false
        },
        "otherValues": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CartDataSummaryItem[]",
                "resolved": "CartDataSummaryItem[]",
                "references": {
                    "CartDataSummaryItem": {
                        "location": "import",
                        "path": "./cartData"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get elementRef() { return "root"; }
}
Tunnel.injectProps(CartSummaryContainer, ['totalValue', 'productValue', 'otherValues']);
