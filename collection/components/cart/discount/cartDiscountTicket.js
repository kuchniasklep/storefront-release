import { Component, h, Prop, Event, State } from '@stencil/core';
export class CartDiscountTicket {
    constructor() {
        this.name = "";
        this.value = "";
        this.loading = false;
    }
    onRemoveHandler() {
        this.loading = true;
        this.remove.emit();
    }
    render() {
        return [
            h("div", { class: "content ks-text-decorated" },
                h("div", { class: "name" }, this.name),
                h("div", { class: "value" }, this.value)),
            h("div", { class: "remove", onClick: () => this.onRemoveHandler() }, this.loading ?
                h("div", { "uk-spinner": true })
                :
                    h("span", { "uk-icon": "icon: close; ratio: 1.3;" }))
        ];
    }
    static get is() { return "ks-cart-discount-ticket"; }
    static get originalStyleUrls() { return {
        "$": ["cartDiscountTicket.css"]
    }; }
    static get styleUrls() { return {
        "$": ["cartDiscountTicket.css"]
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
        "value": {
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
            "attribute": "value",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
    static get states() { return {
        "loading": {}
    }; }
    static get events() { return [{
            "method": "remove",
            "name": "remove",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
