import { Component, h, Prop, Element } from '@stencil/core';
export class ArticleCard {
    constructor() {
        this.hideOnOdd = false;
    }
    render() {
        return (h("ks-card", { height: true },
            h("div", { class: "uk-flex uk-flex-column uk-flex-between uk-height-1-1" },
                h("a", { href: this.link },
                    h("ks-image", { src: this.image, alt: this.heading, cover: true, width: "600", height: "300" })),
                h("div", { class: "uk-padding-small uk-text-small uk-flex-1" },
                    h("h3", { class: "uk-margin-small-bottom" },
                        h("a", { class: "uk-link-heading", href: this.link }, this.heading)),
                    h("div", { class: "uk-text-meta" },
                        h("span", { "uk-icon": "icon: calendar" }),
                        " ",
                        this.date,
                        h("span", { "uk-icon": "search", class: "uk-margin-left" }),
                        " ",
                        this.views),
                    h("p", { class: "uk-margin-remove-bottom" },
                        h("slot", null))),
                h("div", { class: "uk-card-footer uk-padding-small uk-text-center" },
                    h("a", { class: "uk-button uk-button-text", href: this.link }, "Zobacz wi\u0119cej")))));
    }
    static get is() { return "ks-article-card"; }
    static get originalStyleUrls() { return {
        "$": ["articleCard.css"]
    }; }
    static get styleUrls() { return {
        "$": ["articleCard.css"]
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
        "date": {
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
            "attribute": "date",
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
