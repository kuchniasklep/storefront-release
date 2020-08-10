import { Component, h, Prop } from '@stencil/core';
export class Breadcrumbs {
    constructor() {
        this.center = false;
        this.mobile = false;
    }
    render() {
        let alignment = this.center ?
            this.mobile ?
                "uk-flex-center uk-flex-left@m" :
                "uk-flex-center" :
            "";
        return (h("ul", { class: "uk-breadcrumb uk-margin-remove " + alignment },
            h("slot", null)));
    }
    static get is() { return "ks-breadcrumbs"; }
    static get properties() { return {
        "center": {
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
            "attribute": "center",
            "reflect": false,
            "defaultValue": "false"
        },
        "mobile": {
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
            "attribute": "mobile",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
