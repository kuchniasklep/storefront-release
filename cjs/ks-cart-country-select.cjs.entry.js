'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');
require('./index-c953c5aa.js');
const cartData = require('./cartData-1fa306d1.js');

const cartCountrySelectCss = "ks-cart-country-select{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-cart-country-select .select{position:relative;height:35px;margin-bottom:20px}ks-cart-country-select .select .icons{position:absolute;width:25px;height:25px;top:5px;right:4px;pointer-events:none;opacity:1.0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-cart-country-select .select .icons span{position:absolute}ks-cart-country-select .select span:last-of-type{opacity:0.0}ks-cart-country-select .select select{height:100%;padding:3px 35px 3px 5px;outline:none;border:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;-moz-text-align-last:right;text-align-last:right;font-size:18px;font-family:'Nunito', sans-serif;color:#151515;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-cart-country-select .select option{font-size:16px}ks-cart-country-select .select:hover select{color:#606060}ks-cart-country-select .select:hover span:first-of-type{opacity:0.0}ks-cart-country-select .select:hover span:last-of-type{opacity:1.0}@media only screen and (max-width: 520px){ks-cart-country-select{display:block}ks-cart-country-select .select{margin-bottom:35px}ks-cart-country-select .select select{height:50px;width:100%;padding:0 20px;background-color:#f8f8f8;border:1px solid #d2d2d2;-moz-text-align-last:left;text-align-last:left;font-size:16px}ks-cart-country-select .select .icons{height:50px;width:50px;top:0;right:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:13px;background-color:#252525;color:white}ks-cart-country-select .select span:first-of-type{opacity:0.0 !important}ks-cart-country-select .select span:last-of-type{opacity:1.0 !important}}";

const CartCountrySelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    onChangeHandler(event) {
        const target = event.target;
        this.CountryChange(target.value);
    }
    render() {
        return [
            index.h("ks-cart-heading", null, "WYSY\u0141KA I P\u0141ATNO\u015A\u0106"),
            index.h("div", { class: "select" }, index.h("div", { class: "icons" }, index.h("span", { "uk-icon": "icon: world; ratio: 1.2;" }), index.h("span", { "uk-icon": "icon: triangle-down; ratio: 1.2;" })), index.h("select", { onChange: (ev) => this.onChangeHandler(ev) }, index.h("slot", null)))
        ];
    }
    get root() { return index.getElement(this); }
};
cartData.Tunnel.injectProps(CartCountrySelect, ['CountryChange']);
CartCountrySelect.style = cartCountrySelectCss;

exports.ks_cart_country_select = CartCountrySelect;
