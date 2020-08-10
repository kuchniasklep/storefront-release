import { Component, h, Prop } from '@stencil/core';
export class FooterButton {
    render() {
        return (h("a", { href: this.href, rel: "nofollow", class: "uk-button uk-button-danger ks-text-decorated uk-text-bold", style: { backgroundColor: this.color } },
            h("slot", null)));
    }
    static get is() { return "ks-footer-button"; }
    static get originalStyleUrls() { return {
        "$": ["footer-button.css"]
    }; }
    static get styleUrls() { return {
        "$": ["footer-button.css"]
    }; }
    static get properties() { return {
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
