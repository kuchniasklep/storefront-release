import { r as registerInstance, h } from './index-20a680bb.js';
var ProductCreditAgricole = /** @class */ (function () {
    function ProductCreditAgricole(hostRef) {
        registerInstance(this, hostRef);
    }
    ProductCreditAgricole.prototype.componentWillLoad = function () {
        this.price = this.price.replace("zł", "");
        this.price = this.price.replace(',', '.');
        this.price = this.price.trim();
    };
    ProductCreditAgricole.prototype.render = function () {
        return (h("script", null, "let CreditAgricoleButton = document.querySelector(\"", "#" + this.button, "\"); CreditAgricoleButton.addEventListener(\"click\", function(event)", "{", "var iWidth = 820; var iHeight = 680; var iX = (screen.availWidth - iWidth) / 2; var iY = (screen.availHeight - iHeight) / 2; var wartosc = ", this.price, "; var parametryLukas = \"PSP2000493;500.00;10000.00\"; var lukas = parametryLukas.split(';'); var adres = 'https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp?PARAM_TYPE=RAT&PARAM_PROFILE=' + lukas[0] + '&PARAM_CREDIT_AMOUNT=' + wartosc; window.open(adres, 'Policz_rate_LUKAS', 'height=' + iHeight + ', width=' + iWidth + ',top=' + iY + ',left=' + iX + ',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');", '}', ");"));
    };
    return ProductCreditAgricole;
}());
var ProductPayu = /** @class */ (function () {
    function ProductPayu(hostRef) {
        registerInstance(this, hostRef);
    }
    ProductPayu.prototype.componentWillLoad = function () {
        this.price = this.price.replace("zł", "");
        this.price = this.price.replace(',', '.');
        this.price = this.price.trim();
    };
    ProductPayu.prototype.render = function () {
        // Render
        return (h("script", null, "var openpayu = openpayu || ", "{}", "; openpayu.options = ", '{', "creditAmount: ", this.price, ", posId: '226525', key: 'wE', showLongDescription: true", '}', "; OpenPayU.Installments.miniInstallment(\"", "#" + this.button, "\"); let payuButton = document.querySelector(\"", "#" + this.button, "\"); let payuSpan = payuButton.querySelector(\"span\"); let payuLink = payuSpan.querySelector(\"a\"); payuSpan.style.display = \"none\"; payuButton.addEventListener(\"click\", function(event)", "{", "event.stopPropagation(); payuLink.click();", '}', ");"));
    };
    return ProductPayu;
}());
export { ProductCreditAgricole as ks_product_creditagricole, ProductPayu as ks_product_payu };
