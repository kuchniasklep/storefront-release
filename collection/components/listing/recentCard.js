import { Component, h, Prop, Element } from '@stencil/core';
export class RecentCard {
    render() {
        return (h("a", { href: this.link },
            h("div", { style: { margin: "5px", padding: "5px", width: "60px", height: "60px", backgroundColor: "white", borderRadius: "4px" } },
                h("ks-image", { src: this.img, alt: this.name, contain: true, width: "60", height: "60" }))));
    }
    static get is() { return "ks-recent-card"; }
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
        }
    }; }
    static get elementRef() { return "root"; }
}
