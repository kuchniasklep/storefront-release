import { Component, Prop, h } from '@stencil/core';
export class ProductAdminDistributor {
    constructor() {
        this.name = "";
        this.time = "";
        this.quantity = "";
        this.unavailableMode = "";
        this.warning = "";
        this.overwrite = false;
    }
    render() {
        return [
            h("td", null, this.name),
            h("td", null, this.time),
            h("td", null, this.quantity),
            h("td", null, this.unavailableMode),
            h("td", null, this.warning)
        ];
    }
    static get is() { return "ks-product-admin-distributor"; }
    static get originalStyleUrls() { return {
        "$": ["product-admin-distributor.css"]
    }; }
    static get styleUrls() { return {
        "$": ["product-admin-distributor.css"]
    }; }
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
            "reflect": false,
            "defaultValue": "\"\""
        },
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
            "reflect": false,
            "defaultValue": "\"\""
        },
        "quantity": {
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
            "attribute": "quantity",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "unavailableMode": {
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
            "attribute": "unavailable-mode",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "warning": {
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
            "attribute": "warning",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "overwrite": {
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
            "attribute": "overwrite",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
