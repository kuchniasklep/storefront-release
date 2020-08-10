import { Component, h, Prop } from '@stencil/core';
export class ProductCreditAgricole {
    componentWillLoad() {
        this.price = this.price.replace("zł", "");
        this.price = this.price.replace(',', '.');
        this.price = this.price.trim();
    }
    render() {
        return (h("script", null,
            "let CreditAgricoleButton = document.querySelector(\"",
            "#" + this.button,
            "\"); CreditAgricoleButton.addEventListener(\"click\", function(event)",
            "{",
            "var iWidth = 820; var iHeight = 680; var iX = (screen.availWidth - iWidth) / 2; var iY = (screen.availHeight - iHeight) / 2; var wartosc = ",
            this.price,
            "; var parametryLukas = \"PSP2000493;500.00;10000.00\"; var lukas = parametryLukas.split(';'); var adres = 'https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp?PARAM_TYPE=RAT&PARAM_PROFILE=' + lukas[0] + '&PARAM_CREDIT_AMOUNT=' + wartosc; window.open(adres, 'Policz_rate_LUKAS', 'height=' + iHeight + ', width=' + iWidth + ',top=' + iY + ',left=' + iX + ',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');",
            '}',
            ");"));
    }
    static get is() { return "ks-product-creditagricole"; }
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
