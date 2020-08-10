import { Component, h, Prop } from '@stencil/core';
import Tunnel from '../cartData';
export class CartShippingMessage {
    constructor() {
        this.shippingMessage = "";
    }
    render() {
        return (h("ks-cart-message", { message: this.shippingMessage }));
    }
    static get is() { return "ks-cart-shipping-message"; }
    static get properties() { return {
        "shippingMessage": {
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
            "attribute": "shipping-message",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
}
Tunnel.injectProps(CartShippingMessage, ['shippingMessage']);
