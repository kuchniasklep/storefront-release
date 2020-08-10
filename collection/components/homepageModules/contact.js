import { Component, h, Prop } from '@stencil/core';
export class Contact {
    render() {
        return (h("div", { class: "uk-text-center uk-text-emphasis", style: { padding: "50px" } },
            h("div", { class: "uk-visible@s", style: { height: '20px' } }),
            h("slot", null),
            h("ks-contact-buttons", { phone: this.phone, email: this.email })));
    }
    static get is() { return "ks-contact"; }
    static get properties() { return {
        "phone": {
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
            "attribute": "phone",
            "reflect": false
        },
        "email": {
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
            "attribute": "email",
            "reflect": false
        }
    }; }
}
