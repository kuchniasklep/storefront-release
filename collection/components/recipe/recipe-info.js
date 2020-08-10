import { Component, h, Prop } from '@stencil/core';
export class RecipeInfo {
    constructor() {
        this.cuisineLink = "";
        this.categoryLink = "";
    }
    render() {
        return [
            h("div", { class: "info" },
                h("div", { class: "title" },
                    h("div", { class: "heading" },
                        h("slot", { name: "heading" }),
                        h("div", { class: "categories" },
                            this.link(this.cuisine, this.cuisineLink),
                            "\u2022",
                            this.link(this.category, this.categoryLink))),
                    h("div", null,
                        h("div", { class: "time" },
                            h("ks-icon", { name: "clock" }),
                            this.time),
                        h("div", { class: "yield" },
                            h("ks-icon", { name: "users" }),
                            this.yield))),
                h("div", { class: "summary" },
                    h("slot", { name: "summary" })),
                h("div", { class: "nutrition" },
                    h("slot", { name: "nutrition" }))),
            h("div", { class: "image" },
                h("ks-img", { vertical: true, center: true, src: this.image }))
        ];
    }
    link(name, url) {
        if (url)
            return h("a", { href: url }, name);
        return h("span", null, name);
    }
    static get is() { return "ks-recipe-info"; }
    static get originalStyleUrls() { return {
        "$": ["recipe-info.css"]
    }; }
    static get styleUrls() { return {
        "$": ["recipe-info.css"]
    }; }
    static get properties() { return {
        "time": {
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
            "attribute": "time",
            "reflect": false
        },
        "yield": {
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
            "attribute": "yield",
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
        "cuisineLink": {
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
            "attribute": "cuisine-link",
            "reflect": false,
            "defaultValue": "\"\""
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
        "categoryLink": {
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
            "attribute": "category-link",
            "reflect": false,
            "defaultValue": "\"\""
        },
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
        }
    }; }
}
