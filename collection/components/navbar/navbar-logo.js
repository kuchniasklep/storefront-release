import { Component, h, Prop } from '@stencil/core';
export class NavbarLogo {
    render() {
        return (h("div", { class: "uk-margin-left-small" },
            h("a", { class: "uk-navbar-item uk-logo", href: "/" },
                h("ks-image", { sync: true, src: this.image, width: this.width, height: this.height, alt: "kuchniasklep.pl" }))));
    }
    static get is() { return "ks-navbar-logo"; }
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
        "width": {
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
            "attribute": "width",
            "reflect": false
        },
        "height": {
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
            "attribute": "height",
            "reflect": false
        }
    }; }
}
