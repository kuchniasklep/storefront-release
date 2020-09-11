import { Component, h, Prop } from '@stencil/core';
export class FooterButton {
    render() {
        return (h("a", { href: this.href, rel: "nofollow" },
            h("ks-img", { src: this.image })));
    }
    static get is() { return "ks-footer-button"; }
    static get originalStyleUrls() { return {
        "$": ["footer-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["footer-button.css"]
    }; }
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
        "href": {
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
            "attribute": "href",
            "reflect": false
        }
    }; }
}
