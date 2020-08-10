import { Component, h, Prop, Element } from '@stencil/core';
import Tunnel from '../cartData';
export class CartProductContainer {
    render() {
        return [
            h("ks-cart-product-heading", { removable: true }),
            this.products.map((product, index) => h("ks-cart-product", { removable: true, key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price, amount: product.amount, "max-amount": product.maxAmount, "shipping-time": product.shippingTime, onRemove: () => this.RemoveProduct(index), onCount: (e) => this.ProductCount(index, e.detail.current, e.detail.last) })),
            h("ks-cart-product-price", { amount: this.productAmount, price: this.productValue, loading: this.loadingProducts, "shipping-time": this.totalShippingTime })
        ];
    }
    static get is() { return "ks-cart-product-container"; }
    static get properties() { return {
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
        "productAmount": {
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
            "attribute": "product-amount",
            "reflect": false
        },
        "loadingProducts": {
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
            "attribute": "loading-products",
            "reflect": false
        },
        "totalShippingTime": {
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
            "attribute": "total-shipping-time",
            "reflect": false
        },
        "products": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "CartDataProduct[]",
                "resolved": "CartDataProduct[]",
                "references": {
                    "CartDataProduct": {
                        "location": "import",
                        "path": "../cartData"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "RemoveProduct": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(index: number) => void",
                "resolved": "(index: number) => void",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "ProductCount": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(index: number, current: number, last: number) => void",
                "resolved": "(index: number, current: number, last: number) => void",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get elementRef() { return "root"; }
}
Tunnel.injectProps(CartProductContainer, ['productValue', 'productAmount', 'products', 'loadingProducts', 'totalShippingTime', 'RemoveProduct', 'ProductCount']);
