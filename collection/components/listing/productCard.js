import { Component, h, Prop, State, Element } from '@stencil/core';
export class ProductCard {
    constructor() {
        this.unavailable = false;
        this.linkOnly = false;
        this.cartLoading = false;
        this.favLoading = false;
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    CartHandler(success) {
        if (!success)
            this.cartLoading = false;
    }
    render() {
        let currentPrice;
        if (this.currentPrice)
            currentPrice = this.currentPrice.replace(".", ",") + " zł";
        let previousPrice;
        if (this.previousPrice)
            previousPrice = this.previousPrice.replace(".", ",") + " zł";
        return (h("div", null,
            h("a", { href: this.link, "aria-label": this.name, class: "uk-padding-small uk-text-xsmall uk-text-center uk-link-reset uk-position-relative" },
                this.unavailable ?
                    h("div", { class: "uk-position-cover uk-overlay uk-overlay-default uk-position-z-index", style: { opacity: "0.7" } })
                    : null,
                h("ks-image", { style: { display: "block", marginBottom: "10px" }, src: this.img, width: "280", height: "280", contain: true, alt: "zdj\u0119cie produktu" }),
                this.name),
            h("div", { class: "uk-text-xsmall uk-text-center uk-position-relative", style: { pointerEvents: "none" } },
                this.unavailable ?
                    h("div", { class: "uk-position-cover uk-overlay uk-overlay-default uk-position-z-index", style: { opacity: "0.7" } })
                    : null,
                this.previousPrice ? [
                    h("s", { class: "uk-text-muted" }, previousPrice), h("br", null)
                ] : null,
                h("span", { class: "uk-text-bold uk-text-normal uk-text-danger" }, currentPrice)),
            h("div", { class: "uk-button-group uk-margin-small-top uk-width-1-1" }, this.unavailable ?
                h("a", { href: this.link, class: "uk-button uk-button-danger uk-width-expand", style: { zIndex: "100" } }, "NIEDOST\u0118PNY")
                : this.linkOnly ?
                    h("a", { href: this.link, class: "uk-button uk-button-danger uk-width-expand" }, "ZOBACZ WI\u0118CEJ")
                    : [
                        h("ks-button-fav", { "product-id": this.productId }),
                        h("ks-button-cart", { expand: true, "product-id": this.productId, name: this.name })
                    ])));
    }
    static get is() { return "ks-product-card"; }
    static get originalStyleUrls() { return {
        "$": ["productCard.css"]
    }; }
    static get styleUrls() { return {
        "$": ["productCard.css"]
    }; }
    static get properties() { return {
        "unavailable": {
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
            "attribute": "unavailable",
            "reflect": false,
            "defaultValue": "false"
        },
        "linkOnly": {
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
            "attribute": "link-only",
            "reflect": false,
            "defaultValue": "false"
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
            "reflect": false
        },
        "img": {
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
            "attribute": "img",
            "reflect": false
        },
        "link": {
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
            "attribute": "link",
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "current-price",
            "reflect": false
        },
        "previousPrice": {
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
            "attribute": "previous-price",
            "reflect": false
        },
        "productId": {
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
            "attribute": "product-id",
            "reflect": false
        },
        "uniqueId": {
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
            "attribute": "unique-id",
            "reflect": false
        }
    }; }
    static get states() { return {
        "cartLoading": {},
        "favLoading": {}
    }; }
    static get elementRef() { return "root"; }
}
