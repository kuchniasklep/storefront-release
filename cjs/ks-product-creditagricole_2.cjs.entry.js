'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const ProductCreditAgricole = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.price = this.price.replace("zł", "");
        this.price = this.price.replace(',', '.');
        this.price = this.price.trim();
    }
    render() {
        return (index.h("script", null, "let CreditAgricoleButton = document.querySelector(\"", "#" + this.button, "\"); CreditAgricoleButton.addEventListener(\"click\", function(event)", "{", "var iWidth = 820; var iHeight = 680; var iX = (screen.availWidth - iWidth) / 2; var iY = (screen.availHeight - iHeight) / 2; var wartosc = ", this.price, "; var parametryLukas = \"PSP2000493;500.00;10000.00\"; var lukas = parametryLukas.split(';'); var adres = 'https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp?PARAM_TYPE=RAT&PARAM_PROFILE=' + lukas[0] + '&PARAM_CREDIT_AMOUNT=' + wartosc; window.open(adres, 'Policz_rate_LUKAS', 'height=' + iHeight + ', width=' + iWidth + ',top=' + iY + ',left=' + iX + ',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');", '}', ");"));
    }
};

const ProductPayu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.price = this.price.replace("zł", "");
        this.price = this.price.replace(',', '.');
        this.price = this.price.trim();
    }
    render() {
        // Render
        return (index.h("script", null, "var openpayu = openpayu || ", "{}", "; openpayu.options = ", '{', "creditAmount: ", this.price, ", posId: '226525', key: 'wE', showLongDescription: true", '}', "; OpenPayU.Installments.miniInstallment(\"", "#" + this.button, "\"); let payuButton = document.querySelector(\"", "#" + this.button, "\"); let payuSpan = payuButton.querySelector(\"span\"); let payuLink = payuSpan.querySelector(\"a\"); payuSpan.style.display = \"none\"; payuButton.addEventListener(\"click\", function(event)", "{", "event.stopPropagation(); payuLink.click();", '}', ");"));
    }
};

exports.ks_product_creditagricole = ProductCreditAgricole;
exports.ks_product_payu = ProductPayu;
