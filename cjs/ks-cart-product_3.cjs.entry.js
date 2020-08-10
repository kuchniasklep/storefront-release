'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const cartProductCss = "ks-cart-product{display:block}ks-cart-product>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px}ks-cart-product .description{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-product .description a{color:inherit !important;text-decoration:none !important}ks-cart-product .numbers{font-weight:700}ks-cart-product .price{text-align:center;width:100px}ks-cart-product .amount{text-align:center;width:120px}@media only screen and (max-width: 959px){ks-cart-product .price{text-align:initial;width:initial;color:#e21334}ks-cart-product .shipping{margin-left:10px}ks-cart-product .amount{text-align:initial;width:initial;margin-left:15px}ks-cart-product ks-cart-spinner{margin-top:10px}}@media only screen and (max-width: 640px){ks-cart-product>div{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}ks-cart-product .description{text-align:center}ks-cart-product .shipping{display:block;font-size:16px;margin-bottom:5px}ks-cart-product .numbers{margin-top:7px}}";

const CartProduct = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.shippingTime = "";
        this.amount = 1;
        this.removable = false;
        this.loading = false;
        this.mobile = 0;
        this.remove = index.createEvent(this, "remove", 7);
        this.count = index.createEvent(this, "count", 7);
    }
    onRemoveHandler() {
        this.remove.emit();
        this.loading = true;
    }
    onCountHandler(detail) {
        this.count.emit(detail);
    }
    async ResetLoading() {
        this.loading = false;
    }
    resizeHandler() {
        this.mobile =
            window.innerWidth < 959 ?
                window.innerWidth < 640 ?
                    2 : 1
                : 0;
    }
    componentWillLoad() {
        this.resizeHandler();
    }
    render() {
        const price = this.price.toFixed(2).replace(".", ",") + " zł";
        const inlineBlockOnMobile = { display: this.removable ? "block" : "inline-block" };
        return [
            index.h("div", { class: "ks-text-decorated", "uk-grid": true }, index.h("a", { href: this.link }, index.h("ks-image", { src: this.img, width: "150", height: "150", contain: true, alt: "zdj\u0119cie produktu" })), index.h("div", { class: "description" }, index.h("a", { href: this.link, innerHTML: this.name }), this.mobile >= 1 ?
                index.h("div", { class: "numbers" }, index.h("div", { style: inlineBlockOnMobile }, index.h("span", { class: "price" }, price), index.h("span", { class: "shipping" }, this.shippingTime)), index.h("div", { style: inlineBlockOnMobile }, this.removable ?
                    index.h("ks-cart-spinner", { onChanged: (e) => this.onCountHandler(e.detail), "initial-value": this.amount, max: this.maxAmount }) :
                    index.h("span", { class: "amount" }, this.amount, " szt.")))
                : this.shippingTime != "" ?
                    index.h("div", { class: "numbers" }, this.shippingTime)
                    : null), this.mobile == 0 ? [
                index.h("div", { class: "price" }, price),
                index.h("div", { class: "amount" }, this.removable ?
                    index.h("ks-cart-spinner", { onChanged: (e) => this.onCountHandler(e.detail), "initial-value": this.amount, max: this.maxAmount }) :
                    index.h("span", null, this.amount, " szt."))
            ] : null, this.removable ?
                this.mobile == 2 ?
                    this.loading ?
                        index.h("div", { "uk-spinner": true, class: "uk-position-top-right uk-position-small" }) :
                        index.h("button", { type: "button", "uk-close": true, class: "uk-close-large uk-position-top-right uk-position-small", onClick: () => this.onRemoveHandler() })
                    :
                        index.h("nav", { style: { width: "50px" }, class: "uk-text-center" }, this.loading ?
                            index.h("div", { "uk-spinner": true }) :
                            index.h("button", { type: "button", "uk-close": true, class: "uk-close-large", onClick: () => this.onRemoveHandler() }))
                : null),
            index.h("hr", null)
        ];
    }
};
CartProduct.style = cartProductCss;

const CartProductHeading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.root.style.display = "block";
    }
    render() {
        return [
            index.h("div", { class: "uk-flex uk-flex-middle ks-text-decorated", "uk-grid": true, style: { fontSize: "18px" } }, index.h("div", { class: "uk-width-expand uk-text-bold", style: { fontSize: "22px" } }, "PRODUKTY"), index.h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "CENA"), index.h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "ILO\u015A\u0106"), this.removable ?
                index.h("div", { style: { width: "50px" }, class: "uk-text-center" }, "USU\u0143")
                : null),
            index.h("hr", null)
        ];
    }
    get root() { return index.getElement(this); }
};

const cartProductPriceCss = "ks-cart-product-price{display:block}ks-cart-product-price>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-cart-product-price .sentence{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:18px;font-weight:700;text-align:center}ks-cart-product-price .price{color:#e21334}ks-cart-product-price .shipping{display:inline-block;margin-left:15px}ks-cart-product-price .edit{-webkit-box-sizing:border-box;box-sizing:border-box;width:auto;max-width:100%}ks-cart-product-price .edit a{padding:3px 20px}@media only screen and (min-width: 960px){ks-cart-product-price .sentence{text-align:right}}@media only screen and (max-width: 959px){ks-cart-product-price .edit{margin-top:10px;width:100%}}@media only screen and (max-width: 640px){ks-cart-product-price .shipping{display:block;margin-left:0;font-size:16px}}";

const CartProductPrice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.shippingTime = "";
        this.editLink = "";
        this.loading = 0;
        this.loadingDelayed = false;
    }
    LoadingWatcher() {
        if (this.loading) {
            this.loadingTimeout = setTimeout(() => {
                this.loadingDelayed = true;
            }, 300);
        }
        else {
            clearTimeout(this.loadingTimeout);
            this.loadingDelayed = false;
        }
    }
    componentDidLoad() {
        this.root.style.display = "block";
        this.LoadingWatcher();
    }
    render() {
        const price = this.price.toFixed(2).replace(".", ",") + " zł";
        let produkty = "produkt";
        const lastDigit = parseInt(this.amount.toString().split('').pop());
        if (this.amount == 1)
            produkty = "produkt";
        else if (this.amount > 1 && this.amount < 5)
            produkty = "produkty";
        else if (this.amount >= 5 && this.amount <= 21)
            produkty = "produktów";
        else if (lastDigit <= 1 || lastDigit >= 5)
            produkty = "produktów";
        else
            produkty = "produkty";
        return [
            index.h("div", null, index.h("div", { class: "sentence ks-text-decorated" }, this.loadingDelayed && this.loading ?
                index.h("div", { class: "uk-animation-fade", "uk-spinner": "ratio: 0.7" }) : [
                index.h("span", null, "Razem ", this.amount, " ", produkty, " za ", index.h("span", { class: "price" }, price)),
                this.shippingTime != "" ? index.h("span", { class: "shipping" }, this.shippingTime) : null
            ]), this.editLink ?
                index.h("div", { class: "edit" }, index.h("a", { href: this.editLink, class: "uk-button uk-button-default uk-width-1-1" }, "Wr\u00F3\u0107 do koszyka"))
                : null),
            index.h("hr", null)
        ];
    }
    get root() { return index.getElement(this); }
    static get watchers() { return {
        "loading": ["LoadingWatcher"]
    }; }
};
CartProductPrice.style = cartProductPriceCss;

exports.ks_cart_product = CartProduct;
exports.ks_cart_product_heading = CartProductHeading;
exports.ks_cart_product_price = CartProductPrice;
