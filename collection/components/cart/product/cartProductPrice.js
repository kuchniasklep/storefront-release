import { Component, h, Element, Prop, State, Watch } from '@stencil/core';
export class CartProductPrice {
    constructor() {
        this.shippingTime = "";
        this.editLink = "";
        this.loading = 0;
        this.loadingDelayed = false;
    }
    LoadingWatcher() {
        if (this.loading) {
            this.loadingTimeout = setTimeout(() => {
                this.loadingDelayed = true;
            }, 300);
        }
        else {
            clearTimeout(this.loadingTimeout);
            this.loadingDelayed = false;
        }
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.LoadingWatcher();
    }
    render() {
        const price = this.price.toFixed(2).replace(".", ",") + " zł";
        let produkty = "produkt";
        const lastDigit = parseInt(this.amount.toString().split('').pop());
        if (this.amount == 1)
            produkty = "produkt";
        else if (this.amount > 1 && this.amount < 5)
            produkty = "produkty";
        else if (this.amount >= 5 && this.amount <= 21)
            produkty = "produktów";
        else if (lastDigit <= 1 || lastDigit >= 5)
            produkty = "produktów";
        else
            produkty = "produkty";
        return [
            h("div", null,
                h("div", { class: "sentence ks-text-decorated" }, this.loadingDelayed && this.loading ?
                    h("div", { class: "uk-animation-fade", "uk-spinner": "ratio: 0.7" }) : [
                    h("span", null,
                        "Razem ",
                        this.amount,
                        " ",
                        produkty,
                        " za ",
                        h("span", { class: "price" }, price)),
                    this.shippingTime != "" ? h("span", { class: "shipping" }, this.shippingTime) : null
                ]),
                this.editLink ?
                    h("div", { class: "edit" },
                        h("a", { href: this.editLink, class: "uk-button uk-button-default uk-width-1-1" }, "Wr\u00F3\u0107 do koszyka"))
                    : null),
            h("hr", null)
        ];
    }
    static get is() { return "ks-cart-product-price"; }
    static get originalStyleUrls() { return {
        "$": ["cartProductPrice.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cartProductPrice.css"]
    }; }
    static get properties() { return {
        "price": {
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
            "attribute": "price",
            "reflect": false
        },
        "amount": {
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
            "attribute": "amount",
            "reflect": false
        },
        "shippingTime": {
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
            "attribute": "shipping-time",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "editLink": {
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
            "attribute": "edit-link",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "loading": {
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
            "attribute": "loading",
            "reflect": false,
            "defaultValue": "0"
        }
    }; }
    static get states() { return {
        "loadingDelayed": {}
    }; }
    static get elementRef() { return "root"; }
    static get watchers() { return [{
            "propName": "loading",
            "methodName": "LoadingWatcher"
        }]; }
}
