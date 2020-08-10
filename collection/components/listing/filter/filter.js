import { Component, h, Prop } from '@stencil/core';
export class Filter {
    constructor() {
        this.active = false;
    }
    render() {
        return (h("ul", { "uk-accordion": "animation: false;" },
            h("li", { class: this.active ? "uk-open" : null },
                h("a", { class: "uk-accordion-title", href: "#" }, this.name),
                h("div", { class: "uk-accordion-content" },
                    h("slot", null)))));
    }
    static get is() { return "ks-filter"; }
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
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
