import { r as registerInstance, c as createEvent, h, g as getElement } from './index-74ff0cef.js';

const cartProductCss = "ks-cart-product{display:block}ks-cart-product>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px}ks-cart-product .description{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-product .description a{color:inherit !important;text-decoration:none !important}ks-cart-product .numbers{font-weight:700}ks-cart-product .price{text-align:center;width:100px}ks-cart-product .amount{text-align:center;width:120px}@media only screen and (max-width: 959px){ks-cart-product .price{text-align:initial;width:initial;color:#e21334}ks-cart-product .shipping{margin-left:10px}ks-cart-product .amount{text-align:initial;width:initial;margin-left:15px}ks-cart-product ks-cart-spinner{margin-top:10px}}@media only screen and (max-width: 640px){ks-cart-product>div{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}ks-cart-product .description{text-align:center}ks-cart-product .shipping{display:block;font-size:16px;margin-bottom:5px}ks-cart-product .numbers{margin-top:7px}}";

const CartProduct = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.remove = createEvent(this, "remove", 7);
    this.count = createEvent(this, "count", 7);
    this.shippingTime = "";
    this.amount = 1;
    this.removable = false;
    this.loading = false;
    this.mobile = 0;
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
      h("div", { class: "ks-text-decorated", "uk-grid": true }, h("a", { href: this.link }, h("ks-image", { src: this.img, width: "150", height: "150", contain: true, alt: "zdj\u0119cie produktu" })), h("div", { class: "description" }, h("a", { href: this.link, innerHTML: this.name }), this.mobile >= 1 ?
        h("div", { class: "numbers" }, h("div", { style: inlineBlockOnMobile }, h("span", { class: "price" }, price), h("span", { class: "shipping" }, this.shippingTime)), h("div", { style: inlineBlockOnMobile }, this.removable ?
          h("ks-cart-spinner", { onChanged: (e) => this.onCountHandler(e.detail), "initial-value": this.amount, max: this.maxAmount }) :
          h("span", { class: "amount" }, this.amount, " szt.")))
        : this.shippingTime != "" ?
          h("div", { class: "numbers" }, this.shippingTime)
          : null), this.mobile == 0 ? [
        h("div", { class: "price" }, price),
        h("div", { class: "amount" }, this.removable ?
          h("ks-cart-spinner", { onChanged: (e) => this.onCountHandler(e.detail), "initial-value": this.amount, max: this.maxAmount }) :
          h("span", null, this.amount, " szt."))
      ] : null, this.removable ?
        this.mobile == 2 ?
          this.loading ?
            h("div", { "uk-spinner": true, class: "uk-position-top-right uk-position-small" }) :
            h("button", { type: "button", "uk-close": true, class: "uk-close-large uk-position-top-right uk-position-small", onClick: () => this.onRemoveHandler() })
          :
            h("nav", { style: { width: "50px" }, class: "uk-text-center" }, this.loading ?
              h("div", { "uk-spinner": true }) :
              h("button", { type: "button", "uk-close": true, class: "uk-close-large", onClick: () => this.onRemoveHandler() }))
        : null),
      h("hr", null)
    ];
  }
};
CartProduct.style = cartProductCss;

const CartProductHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      h("div", { class: "uk-flex uk-flex-middle ks-text-decorated", "uk-grid": true, style: { fontSize: "18px" } }, h("div", { class: "uk-width-expand uk-text-bold", style: { fontSize: "22px" } }, "PRODUKTY"), h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "CENA"), h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "ILO\u015A\u0106"), this.removable ?
        h("div", { style: { width: "50px" }, class: "uk-text-center" }, "USU\u0143")
        : null),
      h("hr", null)
    ];
  }
  get root() { return getElement(this); }
};

const cartProductPriceCss = "ks-cart-product-price{display:block}ks-cart-product-price>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-cart-product-price .sentence{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:18px;font-weight:700;text-align:center}ks-cart-product-price .price{color:#e21334}ks-cart-product-price .shipping{display:inline-block;margin-left:15px}ks-cart-product-price .edit{-webkit-box-sizing:border-box;box-sizing:border-box;width:auto;max-width:100%}ks-cart-product-price .edit a{padding:3px 20px}@media only screen and (min-width: 960px){ks-cart-product-price .sentence{text-align:right}}@media only screen and (max-width: 959px){ks-cart-product-price .edit{margin-top:10px;width:100%}}@media only screen and (max-width: 640px){ks-cart-product-price .shipping{display:block;margin-left:0;font-size:16px}}";

const CartProductPrice = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      h("div", null, h("div", { class: "sentence ks-text-decorated" }, this.loadingDelayed && this.loading ?
        h("div", { class: "uk-animation-fade", "uk-spinner": "ratio: 0.7" }) : [
        h("span", null, "Razem ", this.amount, " ", produkty, " za ", h("span", { class: "price" }, price)),
        this.shippingTime != "" ? h("span", { class: "shipping" }, this.shippingTime) : null
      ]), this.editLink ?
        h("div", { class: "edit" }, h("a", { href: this.editLink, class: "uk-button uk-button-default uk-width-1-1" }, "Wr\u00F3\u0107 do koszyka"))
        : null),
      h("hr", null)
    ];
  }
  get root() { return getElement(this); }
  static get watchers() { return {
    "loading": ["LoadingWatcher"]
  }; }
};
CartProductPrice.style = cartProductPriceCss;

export { CartProduct as ks_cart_product, CartProductHeading as ks_cart_product_heading, CartProductPrice as ks_cart_product_price };
