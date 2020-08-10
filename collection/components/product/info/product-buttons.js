import { Component, h, Element, State, Prop } from '@stencil/core';
import Tunnel from '../product-data';
export class ProductButtons {
    constructor() {
        this.value = "1";
    }
    render() {
        return [
            h("div", { class: "uk-grid-small uk-margin-small-top", "uk-grid": true }, this.buttons.available ?
                this.CartButtons(this.buttons.id, this.traitIDs, this.name, this.availability.toString()) :
                this.UnavailableButtons(this.buttons.contact)),
            h("div", { class: "uk-margin-small-top uk-margin-bottom" },
                h("ks-flex", { gutter: true }, this.InstallmentButtons(this.currentPrice)))
        ];
    }
    CartButtons(id, traitIDs, name, count) {
        return [
            h("div", { class: "uk-width-expand" },
                h("ks-button-cart", { product: true, productId: id, name: name, traits: traitIDs, count: this.value })),
            h("div", { class: "uk-width-1-4 uk-width-1-5@s" },
                h("ks-button-fav", { expand: true, "product-id": id })),
            count ?
                h("form", { class: "uk-width-1-1 uk-width-1-5@s", onSubmit: (e) => this.Submit(e) },
                    h("input", { class: "uk-input uk-text-center", type: "number", min: "1", max: count, value: this.value, "aria-label": "Ilo\u015B\u0107", onChange: () => this.CountChange(count) }))
                : null
        ];
    }
    Submit(e) {
        e.preventDefault();
        const button = this.root.querySelector("ks-button-cart");
        button.AddToCart(this.value);
    }
    CountChange(maxCount) {
        const input = this.root.querySelector("input");
        const count = parseInt(input.value);
        if (count > parseInt(maxCount)) {
            this.value = maxCount;
        }
        else if (count < 1)
            this.value = "1";
        else {
            this.value = count.toString();
        }
        input.value = this.value;
        const button = this.root.querySelector("ks-button-cart");
        button.SetCount(this.value);
        this.updateShippingTime(this.buttons.id, parseInt(this.value));
    }
    UnavailableButtons(contact) {
        return (h("div", { class: "uk-width-expand" }, contact ?
            h("a", { href: contact, rel: "nofollow", class: "uk-button-danger uk-button uk-width-expand" }, "NIEDOST\u0118PNY, WY\u015ALIJ ZAPYTANIE") :
            h("button", { class: "uk-button-danger uk-button uk-width-1-1", disabled: true }, "NIEDOST\u0118PNY")));
    }
    InstallmentButtons(price) {
        const priceInt = parseInt(price);
        let payu = false;
        let creditagricole = false;
        if (priceInt >= 500 && priceInt <= 20000)
            creditagricole = true;
        if (priceInt >= 300 && priceInt <= 20000)
            payu = true;
        return [
            creditagricole ?
                h("div", { class: "uk-flex-1" },
                    h("button", { id: "ks-product-creditagricole", class: "uk-button uk-button-secondary uk-width-expand" }, "RATY CA"),
                    h("ks-product-creditagricole", { price: price, button: "ks-product-creditagricole" }))
                : null,
            payu ?
                h("div", { class: "uk-flex-1" },
                    h("button", { id: "ks-product-payu", class: "uk-button uk-button-secondary uk-width-expand" }, "RATY PAYU"),
                    h("ks-product-payu", { price: price, button: "ks-product-payu" }))
                : null
        ];
    }
    static get is() { return "ks-product-buttons"; }
    static get properties() { return {
        "buttons": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ProductButtonData",
                "resolved": "ProductButtonData",
                "references": {
                    "ProductButtonData": {
                        "location": "import",
                        "path": "../product-data"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "traitIDs": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "trait-i-ds",
            "reflect": false
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        },
        "availability": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "availability",
            "reflect": false
        },
        "currentPrice": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "current-price",
            "reflect": false
        },
        "updateShippingTime": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(id: string, count: number) => void",
                "resolved": "(id: string, count: number) => void",
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
    static get states() { return {
        "value": {}
    }; }
    static get elementRef() { return "root"; }
}
Tunnel.injectProps(ProductButtons, ['buttons', 'traitIDs', 'name', 'availability', 'currentPrice', 'updateShippingTime']);
