import { Component, h, Element, Prop, Method } from '@stencil/core';
export class OrderLoginPrompt {
    constructor() {
        this.message = "";
    }
    async Show() {
        const element = document.querySelector("#ks-order-form-modal");
        UIkit.modal(element).show();
    }
    async Hide() {
        const element = document.querySelector("#ks-order-form-modal");
        UIkit.modal(element).hide();
    }
    render() {
        return (h("div", { id: "ks-order-form-modal", class: "uk-modal-full", "uk-modal": true },
            h("div", { class: "uk-modal-dialog" },
                h("div", { class: "uk-background-cover uk-flex uk-flex-between uk-flex-column", "uk-height-viewport": true },
                    h("div", { class: "uk-padding-small uk-flex-auto uk-flex uk-flex-center uk-flex-middle uk-flex-column" },
                        h("div", { class: "uk-text-center" },
                            h("p", { class: "ks-text-decorated uk-h1 uk-text-bold" }, this.message),
                            h("button", { onClick: () => this.Hide(), class: "uk-button uk-button-danger uk-margin-small-top", style: { padding: "5px 20px", fontSize: "16px" } }, "WR\u00D3\u0106")))))));
    }
    static get is() { return "ks-order-form-modal"; }
    static get properties() { return {
        "message": {
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
            "attribute": "message",
            "reflect": false,
            "defaultValue": "\"\""
        }
    }; }
    static get methods() { return {
        "Show": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        },
        "Hide": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "root"; }
}
