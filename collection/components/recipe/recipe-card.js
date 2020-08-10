import { Component, h, Prop, Element } from '@stencil/core';
export class RecipeCard {
    constructor() {
        this.hideOnOdd = false;
    }
    render() {
        return (h("a", { href: this.link },
            h("ks-img", { src: this.image, alt: this.heading, center: true }),
            h("div", { class: "info" },
                h("h3", null, this.heading),
                h("div", null,
                    h("span", null, this.cuisine),
                    h("span", { class: "dot" }, "\u2022"),
                    h("span", null, this.category))),
            h("div", { class: "views" },
                h("ks-icon", { name: "search", size: 0.75 }),
                " ",
                this.views)));
    }
    static get is() { return "ks-recipe-card"; }
    static get originalStyleUrls() { return {
        "$": ["recipe-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["recipe-card.css"]
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
        "cuisine": {
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
            "attribute": "cuisine",
            "reflect": false
        },
        "category": {
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
            "attribute": "category",
            "reflect": false
        },
        "views": {
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
            "attribute": "views",
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
        "hideOnOdd": {
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
            "attribute": "hide-on-odd",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get elementRef() { return "root"; }
}
