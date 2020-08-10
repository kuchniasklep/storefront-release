import { Component, h, Prop } from '@stencil/core';
export class ProductVariant {
    render() {
        return (h("a", { href: this.link, "aria-label": this.name },
            h("div", { class: "uk-card uk-card-default uk-card-body uk-padding-small uk-position-relative uk-transition-toggle" },
                h("div", { class: "uk-flex uk-flex-column uk-flex-middle uk-text-small", style: this.unavailable ? { opacity: "0.2" } : null },
                    h("ks-image", { src: this.image, width: "90", height: "90", alt: this.name })),
                this.active ? h("div", { class: "uk-overlay-border uk-position-cover" }) : null,
                h("div", { class: "uk-position-cover uk-transition-fade", style: { backgroundColor: "rgba(255, 255, 255, 0.3)" } }))));
    }
    static get is() { return "ks-product-variant"; }
    static get properties() { return {
        "image": {
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
            "attribute": "image",
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
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
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
        "active": {
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
            "attribute": "active",
            "reflect": false
        },
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
            "reflect": false
        }
    }; }
}
