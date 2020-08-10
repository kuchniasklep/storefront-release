import { Component, h, Prop } from '@stencil/core';
export class Comment {
    constructor() {
        this.separator = false;
    }
    render() {
        return (h("div", null,
            h("article", { class: "uk-comment uk-padding" },
                h("header", { class: "uk-comment-header uk-grid-medium uk-flex-middle", "uk-grid": true },
                    h("div", { class: "uk-width-auto" },
                        h("span", { "uk-icon": "icon: user; ratio: 2;" })),
                    h("div", { class: "uk-width-expand" },
                        h("span", { class: "uk-comment-title uk-margin-remove uk-h4" }, this.author),
                        h("div", { class: "uk-comment-meta uk-margin-remove-top" }, this.when))),
                h("div", { class: "uk-comment-body" },
                    h("p", null,
                        h("slot", null)))),
            this.separator ? h("hr", { class: "uk-margin-remove" }) : null));
    }
    static get is() { return "ks-comment"; }
    static get properties() { return {
        "author": {
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
            "attribute": "author",
            "reflect": false
        },
        "when": {
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
            "attribute": "when",
            "reflect": false
        },
        "separator": {
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
            "attribute": "separator",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
