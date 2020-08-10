import { Component, h, Prop } from '@stencil/core';
export class OrderCountrySelect {
    constructor() {
        this.lightUp = false;
    }
    Change(e) {
        if (this.connectTo) {
            const connect = document.querySelector(`ks-input-select-dynamic[name="${this.connectTo}"]`);
            const select = e.target;
            connect.setAttribute("api-data", select.value);
            connect.setAttribute("light-up", "false");
        }
    }
    render() {
        return (h("ks-input-select", { name: this.name, label: this.label, onChange: (e) => this.Change(e), "light-up": this.lightUp },
            h("slot", null)));
    }
    static get is() { return "ks-order-country-select"; }
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
        "label": {
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
            "attribute": "label",
            "reflect": false
        },
        "connectTo": {
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
            "attribute": "connect-to",
            "reflect": false
        },
        "lightUp": {
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
            "attribute": "light-up",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
