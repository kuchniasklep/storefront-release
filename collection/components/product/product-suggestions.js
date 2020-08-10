import { Component, h, Element, State, Prop } from '@stencil/core';
export class ProductSuggestions {
    constructor() {
        this.loaded = false;
        this.products = new Array();
    }
    async componentDidLoad() {
        if (this.products.length == 0)
            fetch(this.api + "?id=" + this.productId, { cache: "no-cache" })
                .then(async (response) => {
                this.products = await response.json();
                this.loaded = true;
            });
        const element = document.querySelector("#ks-product-suggestions-" + this.productId);
        UIkit.modal(element).show();
    }
    Hide() {
        //window.location.reload();
        const element = document.querySelector("#ks-product-suggestions-" + this.productId);
        UIkit.modal(element).hide();
    }
    ToCart() {
        window.location.href = 'koszyk.html';
    }
    render() {
        return (h("div", { id: "ks-product-suggestions-" + this.productId, class: "uk-modal-full", "uk-modal": true },
            h("div", { class: "uk-modal-dialog" },
                h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true },
                    h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column" },
                        h("div", { class: "uk-text-center" },
                            h("span", { class: "uk-h2 uk-text-bold" }, "Dodano do koszyka"),
                            h("br", null),
                            h("span", { class: "uk-h4 uk-margin-top" }, this.name)),
                        h("div", { class: "uk-margin-top" },
                            h("button", { onClick: () => this.Hide(), class: "uk-button uk-button-secondary", style: { padding: "5px 15px" } }, "Przegl\u0105daj dalej"),
                            h("button", { onClick: () => this.ToCart(), class: "uk-button uk-button-danger", style: { padding: "5px 15px" } }, "Przejd\u017A do koszyka"))),
                    h("div", { class: "uk-padding-small uk-flex-1 uk-flex uk-flex-center uk-flex-middle uk-padding-remove-horizontal", style: { backgroundColor: "#f2f2f2", height: "40%" } },
                        h("div", { "uk-spinner": "ratio: 3", style: { color: "black", display: this.loaded ? "none" : "block" } }),
                        this.loaded ?
                            h("div", { class: "uk-position-relative uk-visible-toggle uk-dark uk-width-1-1", tabindex: "-1", "uk-slider": "finite: true; center: true; index: 1", style: { outline: "none" } },
                                h("div", { class: "uk-position-relative uk-margin-left uk-margin-right" },
                                    h("div", { class: "uk-slider-container" },
                                        h("ul", { class: "uk-slider-items uk-grid-small uk-grid-match", "uk-grid": true }, this.products.map((product) => h("ks-product-card", { style: { maxWidth: "200px" }, "link-only": true, name: product.name, img: product.image, link: product.link, currentPrice: product.currentPrice, previousPrice: product.previousPrice != "0.00" ? product.previousPrice : null })))),
                                    h("div", { class: "uk-position-center-left", style: { height: "100%", width: "50px", backgroundImage: "linear-gradient(to right, #f2f2f2, rgba(242, 242, 242, 0))" } }),
                                    h("div", { class: "uk-position-center-right", style: { height: "100%", width: "50px", backgroundImage: "linear-gradient(to left, #f2f2f2, rgba(242, 242, 242, 0))" } })))
                            : null)))));
    }
    static get is() { return "ks-product-suggestions"; }
    static get properties() { return {
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
            "reflect": true
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
        "api": {
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
            "attribute": "api",
            "reflect": false
        }
    }; }
    static get states() { return {
        "loaded": {}
    }; }
    static get elementRef() { return "root"; }
}
