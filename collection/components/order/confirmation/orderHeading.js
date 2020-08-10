import { Component, h, Element, Prop } from '@stencil/core';
export class OrderHeading {
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            h("div", { style: { marginBottom: "20px" }, class: "uk-flex uk-flex-middle uk-flex-between" },
                h("div", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading),
                h("a", { href: this.link, class: "uk-link-text" },
                    h("span", { "uk-icon": "file-edit" })))
        ];
    }
    static get is() { return "ks-order-heading"; }
    static get properties() { return {
        "heading": {
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
            "attribute": "heading",
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
        }
    }; }
    static get elementRef() { return "root"; }
}
