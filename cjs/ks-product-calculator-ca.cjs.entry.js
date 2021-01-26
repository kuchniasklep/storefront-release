'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const ProductCalculatorCA = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.price = "";
    this.parameters = "";
    this.width = 820;
    this.height = 680;
  }
  render() {
    return [
      index.h("slot", null),
      index.h("script", null, "let CreditAgricoleButton = document.querySelector(\"ks-product-calculator-ca ", '>', " *:first-child\"); CreditAgricoleButton.addEventListener(\"click\", function(event)", "{", "var iWidth = ", this.width, "; var iHeight = ", this.height, "; var iX = (screen.availWidth - iWidth) / 2; var iY = (screen.availHeight - iHeight) / 2; var wartosc = ", this.price, "; var parametryLukas = \"", this.parameters, "\"; var lukas = parametryLukas.split(';'); var adres = 'https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp?PARAM_TYPE=RAT&PARAM_PROFILE=' + lukas[0] + '&PARAM_CREDIT_AMOUNT=' + wartosc; window.open(adres, 'Policz_rate_LUKAS', 'height=' + iHeight + ', width=' + iWidth + ',top=' + iY + ',left=' + iX + ',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');", '}', ");")
    ];
  }
};

exports.ks_product_calculator_ca = ProductCalculatorCA;
