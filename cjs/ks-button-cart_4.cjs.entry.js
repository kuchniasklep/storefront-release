'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aaabf9e8.js');
const functions = require('./functions-37701883.js');

const buttonCartCss = "ks-button-cart{display:block;height:100%}ks-button-cart[expand]{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-button-cart[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-cart[padding] button{padding:10px;min-height:60px}}ks-button-cart button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-cart button:hover{background-color:var(--product-card-primary-hover)}ks-button-cart button:active{background-color:var(--product-card-primary-active)}ks-button-cart[disabled] button{background-color:var(--product-card-disabled-color) !important;color:var(--product-card-disabled-text) !important}";

const ButtonCart = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.count = "1";
    this.traits = "";
    this.expand = false;
    this.padding = false;
    this.icon = false;
    this.product = false;
    this.loading = false;
  }
  ClickHandler(count) {
    const productCount = count || this.count;
    if (!this.disabled && !this.loading) {
      this.loading = true;
      functions.AddToCart(this.productId, productCount, this.traits, this.product ? "0" : "1", this.name, (s) => this.ResultHandler(s));
    }
  }
  ResultHandler(state) {
    this.loading = true;
    if (state) {
      const navbar = document.querySelector("ks-navbar");
      navbar.IncrementCart(this.count);
      setTimeout(() => this.loading = false, 1000);
    }
    else
      this.loading = false;
  }
  async AddToCart(count) {
    this.ClickHandler(count);
  }
  async SetCount(count) {
    this.count = count;
  }
  render() {
    return index.h("button", { "aria-label": "Do koszyka", disabled: this.disabled, onClick: () => this.ClickHandler() }, this.loading ?
      index.h("ks-loader", { large: true })
      : this.icon ?
        index.h("ks-icon", { name: "shopping-bag", size: 0.9 }) :
        index.h("span", null, "DO KOSZYKA"));
  }
  get root() { return index.getElement(this); }
};
ButtonCart.style = buttonCartCss;

const buttonFavCss = "ks-button-fav{display:block;height:100%}ks-button-fav[expand]{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-button-fav[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-fav[padding] button{min-height:60px;padding:10px}}ks-button-fav button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-fav button:hover{background-color:var(--product-card-secondary-hover)}ks-button-fav button:active{background-color:var(--product-card-secondary-active)}ks-button-fav .success{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";

const ButtonFav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.subtract = false;
    this.expand = false;
    this.padding = false;
    this.loading = false;
    this.success = false;
  }
  ClickHandler() {
    if (!this.loading && !this.success) {
      this.loading = true;
      if (this.subtract)
        functions.RemoveFromFavourites(this.productId, () => this.ResultHandler());
      else
        functions.AddToFavourites(this.productId, () => this.ResultHandler());
    }
  }
  ResultHandler() {
    this.loading = true;
    this.success = true;
    const navbar = document.querySelector("ks-navbar");
    if (this.subtract)
      navbar.DecrementHeart();
  }
  render() {
    return (index.h("button", { "aria-label": "Do koszyka", onClick: () => this.ClickHandler() }, this.loading ?
      index.h("ks-loader", null) : index.h("ks-icon", { name: this.subtract ? "x" : "star" }), this.success ?
      index.h("div", { class: "success" }, index.h("ks-icon", { name: "check" }))
      : null));
  }
  get root() { return index.getElement(this); }
};
ButtonFav.style = buttonFavCss;

const productCardCss = "ks-product-card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;text-align:center;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media (min-width: 360px){ks-product-card{width:calc(50% - 15px)}}@media (min-width: 640px){ks-product-card{width:228px}}ks-product-card .top{display:block;padding:15px;min-height:200px;color:inherit !important;text-decoration:none !important;font-size:14px}ks-product-card ks-img{height:auto;margin-bottom:10px}ks-product-card .price>*{display:block}ks-product-card .price .previous{color:#707070;font-size:14px}ks-product-card .price .current{color:var(--color-secondary);font-weight:bold;font-size:16px}ks-product-card .bottom{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px}ks-product-card .bottom .unavailable,ks-product-card .bottom .link{display:block;width:100%;padding:10px 10px;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;color:white;background-color:var(--color-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .bottom .link:hover{background-color:var(--color-secondary-hover)}ks-product-card .bottom .link:active{background-color:var(--color-secondary-active)}ks-product-card[unavailable] .top,ks-product-card[unavailable] .price{opacity:0.6}@media (max-width: 420px){ks-product-card .top{font-size:13px;padding:8px}ks-product-card .price{line-height:18px}}";

const ProductCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.unavailable = false;
    this.linkOnly = false;
  }
  render() {
    const currentPrice = this.currentPrice ? this.currentPrice.replace(".", ",") + " zł" : "";
    const previousPrice = this.previousPrice ? this.previousPrice.replace(".", ",") + " zł" : "";
    return [
      index.h("a", { href: this.link, "aria-label": this.name, class: "top" }, index.h("ks-img", { fill: true, src: this.img, width: 280, height: 280, alt: "zdj\u0119cie produktu" }), index.h("span", null, this.name)),
      index.h("div", { class: "price" }, this.previousPrice ?
        index.h("s", { class: "previous" }, previousPrice)
        : null, index.h("span", { class: "current" }, currentPrice)),
      index.h("div", { class: "bottom" }, this.unavailable ? index.h("a", { href: this.link, class: "unavailable" }, "NIEDOST\u0118PNY")
        : this.linkOnly ? index.h("a", { href: this.link, class: "link" }, "ZOBACZ WI\u0118CEJ")
          : [
            index.h("ks-button-fav", { "product-id": this.productId }),
            index.h("ks-button-cart", { expand: true, "product-id": this.productId, name: this.name })
          ])
    ];
  }
};
ProductCard.style = productCardCss;

const productContainerCss = "ks-product-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px}ks-product-container>*{margin-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>*{width:50%}}@media (min-width: 640px){ks-product-container>*{width:228px}}";

const Container = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("slot", null);
  }
};
Container.style = productContainerCss;

exports.ks_button_cart = ButtonCart;
exports.ks_button_fav = ButtonFav;
exports.ks_product_card = ProductCard;
exports.ks_product_container = Container;
