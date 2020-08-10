import { Component, h, Prop, Element } from '@stencil/core';
export class CartTile {
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        const mutedColor = "#eeeeee";
        const titleStyle = {
            backgroundColor: this.color,
            color: "white",
            height: "50px"
        };
        const priceStyle = {
            fontSize: "20px",
            padding: "5px 10px"
        };
        const infoStyle = {
            backgroundColor: mutedColor,
            msFlex: "1 0 auto",
            padding: "8px",
            fontSize: "16px",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.1s ease-in, color 0.1s ease-in"
        };
        return (h("div", { class: "uk-height-1-1 uk-flex uk-flex-column" },
            this.price ?
                h("div", { class: "uk-flex uk-flex-middle uk-flex-between", style: titleStyle },
                    h("div", { class: "uk-flex-auto" },
                        h("ks-image", { src: this.logo, alt: this.name, width: "130", height: "40" })),
                    h("div", { class: "ks-text-decorated uk-text-right", style: priceStyle }, this.price))
                :
                    h("div", { class: "uk-flex uk-flex-middle uk-flex-center", style: titleStyle },
                        h("ks-image", { src: this.logo, alt: this.name, width: "140", height: "40" })),
            h("div", { class: "uk-flex-1 uk-flex uk-flex-middle", style: infoStyle },
                h("div", { class: "uk-width-1-1 uk-padding-small uk-text-center" },
                    h("slot", null)))));
    }
    static get is() { return "ks-cart-tile"; }
    static get properties() { return {
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
            "reflect": false
        },
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
            "reflect": false
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
            "reflect": false
        }
    }; }
    static get elementRef() { return "root"; }
}
