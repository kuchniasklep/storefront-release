import { Component, h, Prop, Element } from '@stencil/core';
export class Featured {
    componentWillLoad() {
        this.root.style.display = "block";
    }
    render() {
        return (h("a", { href: this.link },
            h("div", { class: "uk-inline-clip uk-transition-toggle uk-light", tabindex: "0" },
                h("ks-image", { style: { display: "block" }, src: this.image, alt: this.alt }),
                h("div", { class: "uk-position-center" },
                    h("span", { class: "uk-transition-fade", "uk-icon": "icon: link; ratio: 2", style: { backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50px", padding: "10px" } })))));
    }
    static get is() { return "ks-featured"; }
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
        "alt": {
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
            "attribute": "alt",
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
