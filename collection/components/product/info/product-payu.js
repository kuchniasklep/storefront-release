import { Component, h, Prop } from '@stencil/core';
export class ProductPayu {
    componentWillLoad() {
        this.price = this.price.replace("zł", "");
        this.price = this.price.replace(',', '.');
        this.price = this.price.trim();
    }
    render() {
        // Render
        return (h("script", null,
            "var openpayu = openpayu || ",
            "{}",
            "; openpayu.options = ",
            '{',
            "creditAmount: ",
            this.price,
            ", posId: '226525', key: 'wE', showLongDescription: true",
            '}',
            "; OpenPayU.Installments.miniInstallment(\"",
            "#" + this.button,
            "\"); let payuButton = document.querySelector(\"",
            "#" + this.button,
            "\"); let payuSpan = payuButton.querySelector(\"span\"); let payuLink = payuSpan.querySelector(\"a\"); payuSpan.style.display = \"none\"; payuButton.addEventListener(\"click\", function(event)",
            "{",
            "event.stopPropagation(); payuLink.click();",
            '}',
            ");"));
    }
    static get is() { return "ks-product-payu"; }
    static get properties() { return {
        "button": {
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
            "attribute": "button",
            "reflect": false
        },
        "price": {
            "type": "string",
            "mutable": true,
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
            "attribute": "price",
            "reflect": false
        }
    }; }
}
