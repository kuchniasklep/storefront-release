'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');
const functions = require('./functions-80797821.js');
const _commonjsHelpers = require('./_commonjsHelpers-bcc1208a.js');
const index$1 = require('./index-e2b63d60.js');
const validate = require('./validate-6c61d7c0.js');
const coreClass = require('./core-class-fc11eccd.js');
const pagination = require('./pagination-f88b53e0.js');
const thumbs = require('./thumbs-cd125da8.js');

const articleCardCss = "ks-article-card{display:block}@media screen and (min-width: 960px) and (max-width: 1200px){ks-article-card[hide-on-odd]{display:none !important}}";

const ArticleCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hideOnOdd = false;
  }
  render() {
    return (index.h("ks-card", { height: true }, index.h("div", { class: "uk-flex uk-flex-column uk-flex-between uk-height-1-1" }, index.h("a", { href: this.link }, index.h("ks-image", { src: this.image, alt: this.heading, cover: true, width: "600", height: "300" })), index.h("div", { class: "uk-padding-small uk-text-small uk-flex-1" }, index.h("h3", { class: "uk-margin-small-bottom" }, index.h("a", { class: "uk-link-heading", href: this.link }, this.heading)), index.h("div", { class: "uk-text-meta" }, index.h("span", { "uk-icon": "icon: calendar" }), " ", this.date, index.h("span", { "uk-icon": "search", class: "uk-margin-left" }), " ", this.views), index.h("p", { class: "uk-margin-remove-bottom" }, index.h("slot", null))), index.h("div", { class: "uk-card-footer uk-padding-small uk-text-center" }, index.h("a", { class: "uk-button uk-button-text", href: this.link }, "Zobacz wi\u0119cej")))));
  }
  get root() { return index.getElement(this); }
};
ArticleCard.style = articleCardCss;

const Banner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "uk-position-cover", style: { backgroundColor: this.color } }, index.h("a", { href: this.link }, index.h("ks-img", { sync: this.sync, vertical: true, center: true, src: this.image, alt: this.name }))));
  }
};

const ArticleCard$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const dotnavBG = '#dfdfdf';
    return (index.h("div", { class: "uk-section uk-padding-remove" }, index.h("div", { "uk-slideshow": "max-height: 550; ratio: 1:1; autoplay: true; animation: slide", class: "uk-dark" }, index.h("div", { class: "uk-position-relative" }, index.h("div", { class: "uk-slideshow-items" }, index.h("slot", null)), index.h("div", { class: "uk-flex uk-flex-center uk-position-bottom uk-visible@s", style: { height: '36px', transform: 'translateY(36px)' } }, index.h("svg", { height: "36", width: "36", style: { fill: dotnavBG } }, index.h("polygon", { points: "0,0 36,0 36,36" })), index.h("div", { style: { backgroundColor: dotnavBG, padding: '13px 30px' } }, index.h("ul", { class: "uk-slideshow-nav uk-dotnav" })), index.h("svg", { height: "36", width: "36", style: { fill: dotnavBG } }, index.h("polygon", { points: "0,0 36,0 0,36" })))))));
  }
};

const buttonCss = "ks-button{display:block}ks-button>*{display:block;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:var(--product-button-size);width:100%;padding:12px 20px;outline-style:none;border-style:none;text-decoration:none !important;cursor:pointer;border-radius:0px;font-family:var(--font-regular);font-size:15px;background-color:var(--color-dark);color:var(--text-color-dark) !important;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button>*:hover{background-color:var(--color-dark-hover)}ks-button>*:active{background-color:var(--color-dark-active)}ks-button[round]>*{border-radius:100px}ks-button[tall]>*{padding:18px 20px}ks-button[primary]>*{color:var(--text-color-primary) !important;background-color:var(--color-primary) !important}ks-button[primary]>*:hover{background-color:var(--color-primary-hover)}ks-button[primary]>*:active{background-color:var(--color-primary-active)}ks-button[secondary]>*{color:var(--text-color-secondary) !important;background-color:var(--color-secondary) !important}ks-button[secondary]>*:hover{background-color:var(--color-secondary-hover)}ks-button[secondary]>*:active{background-color:var(--color-secondary-active)}";

const Button = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = "Button";
  }
  render() {
    if (this.submit)
      return index.h("input", { type: "submit", value: this.name });
    if (this.link)
      return index.h("a", { href: this.link }, this.name);
    return index.h("button", null, this.name);
  }
  get root() { return index.getElement(this); }
};
Button.style = buttonCss;

const buttonCartCss = "ks-button-cart{display:block;height:100%}ks-button-cart[expand]{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-button-cart[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-cart[padding] button{padding:10px;min-height:60px}}ks-button-cart button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-cart button:hover{background-color:var(--product-card-primary-hover)}ks-button-cart button:active{background-color:var(--product-card-primary-active)}";

const ButtonCart = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.count = "1";
    this.traits = "";
    this.expand = false;
    this.padding = false;
    this.icon = false;
    this.disabled = false;
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
      setTimeout(() => {
        this.ResultHandler();
      }, 1000);
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
    else
      navbar.IncrementHeart();
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

const Card = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.padding = false;
    this.small = false;
    this.margin = false;
    this.height = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    if (this.height)
      this.root.style.height = "100%";
  }
  render() {
    const padding = this.padding ? this.small ? "uk-padding-small" : "" : "uk-padding-remove";
    const margin = this.margin ? "uk-margin-bottom" : "";
    const height = this.height ? "uk-height-1-1" : "";
    return (index.h("div", { class: "uk-card uk-card-default uk-card-body " + padding + " " + margin + " " + height }, index.h("slot", null)));
  }
  get root() { return index.getElement(this); }
};

const categorySimpleCss = "ks-category-simple{display:inline-block;position:relative;height:32px;outline:1px solid transparent}ks-category-simple>a{margin:0 10px;line-height:35px;text-decoration:none;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;color:white;font-size:.875rem}ks-category-simple>a:hover{text-decoration:none;color:#ffffffbb}ks-category-simple>div{background-color:white;color:#252525;position:absolute;z-index:10000;top:33px;left:0px;min-width:200px;opacity:0.0;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;-webkit-box-shadow:0 5px 15px rgba(0, 0, 0, 0.26);box-shadow:0 5px 15px rgba(0, 0, 0, 0.26)}ks-category-simple>div a{display:block;padding:9px 15px;text-decoration:none;font-size:14px;text-align:left;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #f2f2f2;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;color:#252525}ks-category-simple>div a:hover{text-decoration:none;color:#252525;background-color:#f9f9f9}ks-category-simple>div a:active{text-decoration:none;background-color:#e6e6e6}";

const NavbarCategorySimple = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hidden = true;
    this.hiddenO = true;
  }
  MouseOverHandler() {
    clearTimeout(this.timeout);
    this.hidden = false;
    this.hiddenO = false;
  }
  MouseOutHandler() {
    this.hiddenO = true;
    this.timeout = setTimeout(() => {
      this.hidden = true;
    }, 200);
  }
  render() {
    const haschildren = this.category.children && this.category.children.length;
    const divstyle = {
      backgroundColor: this.category.backgroundColor || "",
      outlineColor: this.category.backgroundColor || ""
    };
    const linkstyle = {
      color: this.category.color || "",
      marginLeft: this.category == 0 ? "0" :
        haschildren ? "15px" : ""
    };
    const childrenstyle = {
      visibility: this.hidden ? "hidden" : "visible",
      opacity: this.hiddenO ? "0.0" : "1.0"
    };
    return index.h(index.Host, { style: divstyle }, index.h("a", { href: this.category.url, style: linkstyle }, this.category.name, " ", haschildren ? index.h("ks-icon", { name: "chevron-down", size: 0.8 }) : null), haschildren ?
      index.h("div", { style: childrenstyle }, this.category.children.map((child) => index.h("a", { href: child.url }, child.name)))
      : null);
  }
  get root() { return index.getElement(this); }
};
NavbarCategorySimple.style = categorySimpleCss;

const categoryViewCss = "ks-category-view{display:inline-block;height:32px;outline:1px solid transparent}ks-category-view>a{margin:0 10px 0 15px;line-height:36px;text-decoration:none;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;color:var(--navbar-category-text-color);font-size:.875rem}ks-category-view>a:hover{text-decoration:none;color:rgba(255, 255, 255, 0.733)}ks-category-view>div{background-color:white;color:#252525;position:absolute;z-index:10000;top:33px;left:0px;opacity:0.0;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease;-webkit-box-shadow:0 10px 15px -10px rgba(0, 0, 0, 0.26);box-shadow:0 10px 15px -10px rgba(0, 0, 0, 0.26)}ks-category-view .buttons{background-color:var(--navbar-category-backdrop);width:230px}ks-category-view .buttons a{display:block;padding:10px 15px;width:100%;height:40px;background-color:var(--navbar-category-color);color:white;border:none;outline:none;cursor:pointer;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid transparent;-webkit-transition:background-color 0.3s ease, border-right-color 0.3 ease;transition:background-color 0.3s ease, border-right-color 0.3 ease;border-right:1px solid transparent;font-family:inherit;font-size:14px;text-align:left}ks-category-view .buttons a ks-icon{float:right;margin-top:2px}ks-category-view .buttons a:hover{background-color:var(--navbar-category-hover);color:var(--navbar-category-text-color);text-decoration:none}ks-category-view .buttons a:active{background-color:var(--navbar-category-active);color:var(--navbar-category-text-color);text-decoration:none}ks-category-view .buttons a.active{background-color:white;color:#252525;border-right-color:#f2f2f2}ks-category-view .content{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:1px}ks-category-view .content>div{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:wrap column;flex-flow:wrap column;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}ks-category-view .content>div[hidden]{display:none}ks-category-view .content a{display:block;width:230px;padding:9px 15px;text-decoration:none;font-size:14px;text-align:left;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:1px solid #f6f6f6;border-right:1px solid #f2f2f2;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;color:#252525}ks-category-view .content a:hover{text-decoration:none;color:#252525;background-color:#f9f9f9}ks-category-view .graphic{display:none;-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:1px}@media only screen and (min-width: 1360px){ks-category-view .graphic{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}}ks-category-view .children{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}";

const NavbarCategoryView = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hidden = true;
    this.hiddenO = true;
    this.active = 0;
  }
  componentWillLoad() {
    this.count = this.category.children ? this.category.children.length : 0;
  }
  MouseOverHandler() {
    clearTimeout(this.timeout);
    this.hidden = false;
    this.hiddenO = false;
    this.NavbarColor(false);
  }
  MouseOutHandler() {
    this.hiddenO = true;
    this.timeout = setTimeout(() => {
      this.hidden = true;
    }, 200);
    this.NavbarColor(true);
  }
  NavbarColor(state) {
    const bar = document.querySelector("ks-navbar-categories > nav");
    if (!bar || this.count == 0)
      return;
    bar.style.backgroundColor = state ? "var(--navbar-category-color)" : "var(--navbar-color)";
    bar.style.borderTop = state ? "1px solid transparent" : "1px solid var(--navbar-category-color)";
    bar.style.borderBottom = bar.style.borderTop;
  }
  CalculateHeight() {
    return Math.max(40 * 6, (this.count * 40));
  }
  SetActive(index, children) {
    if (children)
      this.active = index;
  }
  render() {
    const haschildren = this.category.children && this.category.children.length;
    const divstyle = {
      backgroundColor: this.category.backgroundColor || "",
      outlineColor: this.category.backgroundColor || ""
    };
    const linkstyle = {
      color: this.category.color || "",
      marginLeft: this.category == 0 ? "0" : ""
    };
    const childrenstyle = {
      visibility: this.hidden ? "hidden" : "visible",
      opacity: this.hiddenO ? "0.0" : "1.0"
    };
    return index.h(index.Host, { style: divstyle }, index.h("a", { href: this.category.url, style: linkstyle }, this.category.name, haschildren ? index.h("ks-icon", { name: "chevron-down", size: 0.8 }) : null), haschildren ?
      index.h("div", { class: "children", style: childrenstyle }, index.h("div", { class: "buttons" }, this.category.children.map((child, index$1) => index.h("a", { href: child.url, class: this.active == index$1 && child.children ? "active" : "", onMouseOver: () => this.SetActive(index$1, !!child.children) }, child.name, " ", !child.children ? index.h("ks-icon", { name: "link", size: 0.65 }) : null))), index.h("div", { class: "content", style: { maxHeight: this.CalculateHeight() + "px" } }, this.category.children.map((child, index$1) => index.h("div", { hidden: this.active != index$1 || this.hidden }, child.children ? child.children.map((item) => index.h("a", { href: item.url }, item.name)) : null))), index.h("div", { class: "graphic", style: { maxHeight: this.CalculateHeight() + "px" } }, this.category.children.map((child, index$1) => child.image ?
        index.h("ks-img", { vertical: true, right: true, target: "ks-category-view > div", src: child.image, style: { display: (this.active == index$1) ? "flex" : "none" } })
        : null)))
      : null);
  }
  get root() { return index.getElement(this); }
};
NavbarCategoryView.style = categoryViewCss;

const dialogCss = "ks-dialog{display:block}ks-dialog .content{background-color:var(--card-background);-webkit-box-shadow:var(--big-shadow);box-shadow:var(--big-shadow);color:var(--card-text-color);position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:720px;padding:30px;line-height:24px}ks-dialog[nopadding] .content{padding:0px !important}@media (max-width: 720px){ks-dialog .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding:20px}}@media (max-width: 420px){ks-dialog .content{font-size:13px;line-height:18px;padding:15px}}ks-dialog ks-overlay .content{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}ks-dialog ks-overlay.active .content{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-dialog .close{position:absolute;top:20px;right:20px;border-style:none;outline-style:none;background-color:transparent;z-index:200;-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .overlay{position:absolute;top:0;bottom:0;left:0;right:0;z-index:100;padding:30px;background-color:rgba(255,255,255, 0.8);-webkit-animation:fade-in 0.3s 1;animation:fade-in 0.3s 1}ks-dialog .opaque{background-color:#ffffff}ks-dialog .overlay>div{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-box-sizing:border-box;box-sizing:border-box;max-width:800px;width:80%;text-align:center}ks-dialog .overlay>div>*{-webkit-animation:vertical-swipe-in-short 0.5s;animation:vertical-swipe-in-short 0.5s}ks-dialog .overlay .header{font-family:var(--font-emphasis);font-size:20px;font-weight:700}";

const dialog = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closed = index.createEvent(this, "closed", 7);
    this.close = true;
    this.loading = false;
    this.success = false;
    this.failure = false;
    this.heading = "";
    this.message = "";
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show() {
    this.overlay.show();
  }
  async hide() {
    this.overlay.hide();
  }
  async showLoading() {
    this.loading = true;
    this.close = false;
  }
  async showSuccess(heading, message) {
    this.success = true;
    this.heading = heading;
    this.message = message;
    setTimeout(() => {
      this.loading = false;
      this.close = true;
    }, 300);
  }
  async showFailure(heading, message) {
    this.failure = true;
    this.heading = heading;
    this.message = message;
    setTimeout(() => {
      this.loading = false;
      this.close = true;
    }, 300);
  }
  closeHandler() {
    if (this.success || this.failure) {
      setTimeout(() => {
        this.success = false;
        this.failure = false;
      }, 400);
    }
  }
  render() {
    return index.h("ks-overlay", { close: this.close, onClosed: () => this.closeHandler() }, index.h("div", { class: "content" }, this.close ?
      index.h("button", { class: "close", onClick: () => this.hide() }, index.h("ks-icon", { name: "x", size: 1.3 }))
      : null, index.h("slot", null), this.loading ?
      index.h("div", { class: "overlay" }, index.h("ks-loader", { large: true, dark: true }))
      : null, this.success || this.failure ?
      index.h("div", { class: "overlay opaque" }, index.h("div", null, index.h("ks-icon", { name: this.success ? "check" : "alert-triangle", size: 4 }), index.h("p", { class: "header" }, this.heading), index.h("p", null, this.message)))
      : null));
  }
  get root() { return index.getElement(this); }
};
dialog.style = dialogCss;

const Featured = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.root.style.display = "block";
  }
  render() {
    return (index.h("a", { href: this.link }, index.h("div", { class: "uk-inline-clip uk-transition-toggle uk-light", tabindex: "0" }, index.h("ks-image", { style: { display: "block" }, src: this.image, alt: this.alt }), index.h("div", { class: "uk-position-center" }, index.h("span", { class: "uk-transition-fade", "uk-icon": "icon: link; ratio: 2", style: { backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50px", padding: "10px" } })))));
  }
  get root() { return index.getElement(this); }
};

const FeaturedContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "uk-container uk-padding-remove uk-margin-medium-bottom" }, index.h("div", { class: "uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m", "uk-grid": "masonry: true" }, index.h("slot", null))));
  }
};

const Flex = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.center = false;
    this.between = false;
    this.around = false;
    this.middle = false;
    this.gutter = false;
    this.column = false;
    this.reverse = false;
    this.height = false;
    this.small = false;
  }
  render() {
    const justify = this.center ? "uk-flex-center" :
      this.between ? "uk-flex-between" :
        this.around ? "uk-flex-around" : "uk-flex";
    const alignment = this.middle ? "uk-flex-middle" : "";
    const gutter = this.gutter ? "uk-grid-small" : "uk-grid-collapse";
    const size = this.small ? "uk-child-width-1-2@xs uk-child-width-small@s" : "";
    const direction = this.column ?
      (this.reverse ? "uk-flex-column-reverse" : "uk-flex-column")
      : (this.reverse ? "uk-flex-row-reverse" : "");
    const height = this.height ? "uk-height-1-1" : "";
    const match = this.match ? "uk-grid-match" : "";
    return (index.h("div", { class: [justify, alignment, gutter, size, direction, height, match].join(" "), "uk-grid": true }, index.h("slot", null)));
  }
};

const footerCss = "ks-footer{display:block;background-color:var(--footer-color);color:var(--footer-text-color);font-size:16px}ks-footer .about{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:40px;margin:auto}ks-footer .info{min-height:100px}ks-footer .contact{padding:0 10px 20px 10px}ks-footer .contact a{display:block;text-decoration:none !important;font-size:18px;color:var(--footer-text-color);-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-footer .contact a:hover{color:var(--footer-text-color-hover)}ks-footer .contact a:active{color:var(--footer-text-color-active)}ks-footer .logo{display:inline-block;max-width:250px;height:auto;margin-bottom:10px}ks-footer .links{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;min-height:100px}ks-footer .reviews{text-align:center}ks-footer .reviews p{margin:0 0 5px 0}ks-footer .newsletter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;text-align:center;padding:30px}ks-footer .newsletter{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding:30px;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color);background-color:var(--footer-button-color);color:var(--footer-heading-color);font-family:var(--font-emphasis);font-size:18px;line-height:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}ks-footer .newsletter:hover{background-color:var(--footer-button-color-hover)}ks-footer .newsletter:active{background-color:var(--footer-button-color-active)}ks-footer .newsletter div:last-child{font-size:40px;line-height:40px;font-weight:700;margin-top:5px}ks-footer .software{background-color:var(--footer-color-darker);color:var(--footer-text-color-darker);font-size:13px;text-align:center;padding:10px}ks-footer .software>a{color:var(--footer-text-color-darker)}@media only screen and (max-width: 1060px){ks-footer .about{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:30px}ks-footer .info{-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}ks-footer .logo{margin-left:10px}ks-footer .reviews{margin:20px 0 10px 0}ks-footer .links{margin-top:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}@media only screen and (max-width: 640px){ks-footer .about{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:30px}ks-footer .info{-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}ks-footer .links{margin-top:0px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}ks-footer .links>*{margin-top:40px;padding:0}ks-footer .newsletter{font-size:14px;line-height:14px}ks-footer .newsletter div:last-child{font-size:30px;line-height:30px}}";

const Footer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("div", { class: "about" }, index.h("div", { class: "info" }, index.h("div", { class: "contact" }, index.h("ks-img", { sync: true, target: "body", class: "logo", src: this.logo }), index.h("a", { href: `mailto:${this.email}` }, " ", this.email, " "), index.h("a", { href: `tel:${this.phone}` }, " ", this.phone, " ")), index.h("div", { class: "reviews" }, index.h("slot", { name: "buttons" }))), index.h("div", { class: "links" }, index.h("slot", null))),
      index.h("div", { class: "newsletter", onClick: () => document.querySelector('ks-newsletter-popup').Show() }, index.h("div", null, "Zapisz si\u0119 do naszego newslettera i zyskaj"), index.h("div", null, "KUPON 10Z\u0141")),
      index.h("div", { class: "software" }, index.h("a", { href: this.softwareLink, rel: "nofollow" }, "Oprogramowanie sklepu ShopGold"))
    ];
  }
};
Footer.style = footerCss;

const footerButtonCss = "ks-footer-button{display:inline-block;max-width:120px;opacity:1.0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-footer-button:hover{opacity:0.4}";

const FooterButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.width = 120;
    this.height = 50;
  }
  render() {
    return (index.h("a", { href: this.href, rel: "nofollow" }, index.h("ks-img", { sync: true, src: this.image, target: "body", width: this.width, height: this.height })));
  }
};
FooterButton.style = footerButtonCss;

const footerLinksCss = "ks-footer-links{display:block;padding:0 20px;margin:0}ks-footer-links h4{color:var(--footer-heading-color);font-family:var(--font-emphasis);font-weight:700;font-size:18px}ks-footer-links ul{display:block;list-style-type:none;margin:0;padding:0}ks-footer-links ul a{color:var(--footer-text-color);text-decoration:none !important;-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-footer-links ul a:hover{color:var(--footer-text-color-hover)}ks-footer-links ul a:active{color:var(--footer-text-color-active)}@media only screen and (max-width: 640px){ks-footer-links h4{font-size:20px}ks-footer-links ul li{margin-bottom:5px}}";

const FooterLinks = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("h4", null, this.heading),
      index.h("ul", null, index.h("slot", null))
    ];
  }
};
FooterLinks.style = footerLinksCss;

const gridCss = "ks-grid{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:-5px}ks-grid>*{width:calc(25% - 10px);margin:5px;-webkit-box-sizing:border-box;box-sizing:border-box}@media screen and (max-width: 639px){ks-grid>*{width:100%}}@media screen and (min-width: 640px) and (max-width: 959px){ks-grid>*{width:calc(50% - 10px)}}@media screen and (min-width: 960px) and (max-width: 1199px){ks-grid>*{width:calc(33.3333333333% - 10px)}}";

const Grid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("slot", null);
  }
};
Grid.style = gridCss;

const homepageInfoCss = "ks-homepage-info{display:block}ks-homepage-info h1,h2{font-family:Lato, sans-serif !important;font-weight:700 !important;text-align:center}ks-homepage-info h1{text-transform:uppercase}ks-homepage-info h2{font-size:1.2rem;line-height:1.4}ks-homepage-info p{text-align:justify;font-size:0.875rem;line-height:1.5}ks-homepage-info>div{background-image:linear-gradient(19deg, \n        rgb(226, 226, 226) 0%, \n        rgb(245, 245, 245) 100%\n    )}";

const HomepageInfo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = 0;
  }
  resizeHandler() {
    this.mobile = (window.innerWidth <= 960) ?
      (window.innerWidth < 639) ?
        (window.innerWidth <= 400) ? 3
          : 2
        : 1
      : 0;
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  render() {
    let containerPadding = "80px 10px 40px 10px";
    if (this.mobile == 2)
      containerPadding = "60px 10px 40px 10px";
    if (this.mobile == 3)
      containerPadding = "40px 10px 40px 10px";
    const itemPadding = this.mobile != 3 ? { padding: "0 50px" } : {};
    return (index.h("div", { class: "uk-section uk-padding-remove-vertical" }, index.h("div", { class: "uk-container uk-container-medium" }, index.h("div", { style: { padding: containerPadding } }, index.h("div", null, index.h("slot", { name: "mainHeading" }), index.h("p", { style: { margin: "0 auto 40px auto", maxWidth: "800px" } }, index.h("slot", { name: "mainContent" }))), this.mobile > 0 ?
      index.h("section", { "uk-slider": "center: true; finite: true", class: "uk-position-relative uk-visible-toggle" }, index.h("div", { class: "uk-overflow-hidden" }, index.h("ul", { class: "uk-slider-items uk-child-width-1-1 uk-text-justify" }, index.h("li", { style: itemPadding }, index.h("slot", { name: "firstHeading" }), index.h("slot", { name: "firstContent" })), index.h("li", { style: itemPadding }, index.h("slot", { name: "secondHeading" }), index.h("slot", { name: "secondContent" })), index.h("li", { style: itemPadding }, index.h("slot", { name: "thirdHeading" }), index.h("slot", { name: "thirdContent" })))), this.mobile != 3 ?
        index.h("div", null, index.h("a", { class: "uk-position-center-left", href: "#", "uk-slidenav-previous": true, "uk-slider-item": "previous" }), index.h("a", { class: "uk-position-center-right", href: "#", "uk-slidenav-next": true, "uk-slider-item": "next" }))
        :
          index.h("ul", { class: "uk-slider-nav uk-dotnav uk-flex-center" }))
      :
        index.h("div", { class: "uk-child-width-1-3 uk-text-justify", "uk-grid": true }, index.h("div", null, index.h("slot", { name: "firstHeading" }), index.h("slot", { name: "firstContent" })), index.h("div", null, index.h("slot", { name: "secondHeading" }), index.h("slot", { name: "secondContent" })), index.h("div", null, index.h("slot", { name: "thirdHeading" }), index.h("slot", { name: "thirdContent" })))))));
  }
};
HomepageInfo.style = homepageInfoCss;

const ProductContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "uk-margin-medium-bottom" }, index.h("div", { class: "uk-flex uk-flex-center" }, index.h("ul", { class: "uk-subnav uk-subnav-pill uk-padding-small uk-padding-remove-horizontal uk-text-small uk-text-normal@s", "uk-switcher": "connect: #ks-homepage-products; toggle: > *; animation: uk-animation-slide-top-small, uk-animation-slide-bottom-small" }, index.h("li", { class: "uk-active" }, index.h("a", { href: "#" }, "Promocje")), index.h("li", { class: "uk-padding-remove" }, index.h("a", { href: "#" }, "Popularne")), index.h("li", { class: "uk-padding-remove" }, index.h("a", { href: "#" }, "Nowo\u015Bci")))), index.h("ul", { class: "uk-switcher uk-margin-top@l", id: "ks-homepage-products" }, index.h("slot", null))));
  }
};

var feather = _commonjsHelpers.createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
	module.exports = factory();
})(typeof self !== 'undefined' ? self : _commonjsHelpers.commonjsGlobal, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/icons.json":
/*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":"<polyline points=\"22 12 18 12 15 21 9 3 6 12 2 12\"></polyline>","airplay":"<path d=\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\"></path><polygon points=\"12 15 17 21 7 21 12 15\"></polygon>","alert-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"></line>","alert-triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"></line><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","align-center":"<line x1=\"18\" y1=\"10\" x2=\"6\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"18\" y1=\"18\" x2=\"6\" y2=\"18\"></line>","align-justify":"<line x1=\"21\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-left":"<line x1=\"17\" y1=\"10\" x2=\"3\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"17\" y1=\"18\" x2=\"3\" y2=\"18\"></line>","align-right":"<line x1=\"21\" y1=\"10\" x2=\"7\" y2=\"10\"></line><line x1=\"21\" y1=\"6\" x2=\"3\" y2=\"6\"></line><line x1=\"21\" y1=\"14\" x2=\"3\" y2=\"14\"></line><line x1=\"21\" y1=\"18\" x2=\"7\" y2=\"18\"></line>","anchor":"<circle cx=\"12\" cy=\"5\" r=\"3\"></circle><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"8\"></line><path d=\"M5 12H2a10 10 0 0 0 20 0h-3\"></path>","aperture":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"14.31\" y1=\"8\" x2=\"20.05\" y2=\"17.94\"></line><line x1=\"9.69\" y1=\"8\" x2=\"21.17\" y2=\"8\"></line><line x1=\"7.38\" y1=\"12\" x2=\"13.12\" y2=\"2.06\"></line><line x1=\"9.69\" y1=\"16\" x2=\"3.95\" y2=\"6.06\"></line><line x1=\"14.31\" y1=\"16\" x2=\"2.83\" y2=\"16\"></line><line x1=\"16.62\" y1=\"12\" x2=\"10.88\" y2=\"21.94\"></line>","archive":"<polyline points=\"21 8 21 21 3 21 3 8\"></polyline><rect x=\"1\" y=\"3\" width=\"22\" height=\"5\"></rect><line x1=\"10\" y1=\"12\" x2=\"14\" y2=\"12\"></line>","arrow-down-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"8 12 12 16 16 12\"></polyline><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line>","arrow-down-left":"<line x1=\"17\" y1=\"7\" x2=\"7\" y2=\"17\"></line><polyline points=\"17 17 7 17 7 7\"></polyline>","arrow-down-right":"<line x1=\"7\" y1=\"7\" x2=\"17\" y2=\"17\"></line><polyline points=\"17 7 17 17 7 17\"></polyline>","arrow-down":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline>","arrow-left-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 8 8 12 12 16\"></polyline><line x1=\"16\" y1=\"12\" x2=\"8\" y2=\"12\"></line>","arrow-left":"<line x1=\"19\" y1=\"12\" x2=\"5\" y2=\"12\"></line><polyline points=\"12 19 5 12 12 5\"></polyline>","arrow-right-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 16 16 12 12 8\"></polyline><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","arrow-right":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline>","arrow-up-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"16 12 12 8 8 12\"></polyline><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"8\"></line>","arrow-up-left":"<line x1=\"17\" y1=\"17\" x2=\"7\" y2=\"7\"></line><polyline points=\"7 17 7 7 17 7\"></polyline>","arrow-up-right":"<line x1=\"7\" y1=\"17\" x2=\"17\" y2=\"7\"></line><polyline points=\"7 7 17 7 17 17\"></polyline>","arrow-up":"<line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline>","at-sign":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path>","award":"<circle cx=\"12\" cy=\"8\" r=\"7\"></circle><polyline points=\"8.21 13.89 7 23 12 20 17 23 15.79 13.88\"></polyline>","bar-chart-2":"<line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line>","bar-chart":"<line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"10\"></line><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"16\"></line>","battery-charging":"<path d=\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\"></path><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line><polyline points=\"11 6 7 12 13 12 9 18\"></polyline>","battery":"<rect x=\"1\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" ry=\"2\"></rect><line x1=\"23\" y1=\"13\" x2=\"23\" y2=\"11\"></line>","bell-off":"<path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path><path d=\"M18.63 13A17.89 17.89 0 0 1 18 8\"></path><path d=\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\"></path><path d=\"M18 8a6 6 0 0 0-9.33-5\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","bell":"<path d=\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\"></path><path d=\"M13.73 21a2 2 0 0 1-3.46 0\"></path>","bluetooth":"<polyline points=\"6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5\"></polyline>","bold":"<path d=\"M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path><path d=\"M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z\"></path>","book-open":"<path d=\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\"></path><path d=\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\"></path>","book":"<path d=\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\"></path><path d=\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\"></path>","bookmark":"<path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path>","box":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","briefcase":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><path d=\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\"></path>","calendar":"<rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line>","camera-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\"></path>","camera":"<path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"></path><circle cx=\"12\" cy=\"13\" r=\"4\"></circle>","cast":"<path d=\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\"></path><line x1=\"2\" y1=\"20\" x2=\"2.01\" y2=\"20\"></line>","check-circle":"<path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"></path><polyline points=\"22 4 12 14.01 9 11.01\"></polyline>","check-square":"<polyline points=\"9 11 12 14 22 4\"></polyline><path d=\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\"></path>","check":"<polyline points=\"20 6 9 17 4 12\"></polyline>","chevron-down":"<polyline points=\"6 9 12 15 18 9\"></polyline>","chevron-left":"<polyline points=\"15 18 9 12 15 6\"></polyline>","chevron-right":"<polyline points=\"9 18 15 12 9 6\"></polyline>","chevron-up":"<polyline points=\"18 15 12 9 6 15\"></polyline>","chevrons-down":"<polyline points=\"7 13 12 18 17 13\"></polyline><polyline points=\"7 6 12 11 17 6\"></polyline>","chevrons-left":"<polyline points=\"11 17 6 12 11 7\"></polyline><polyline points=\"18 17 13 12 18 7\"></polyline>","chevrons-right":"<polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline>","chevrons-up":"<polyline points=\"17 11 12 6 7 11\"></polyline><polyline points=\"17 18 12 13 7 18\"></polyline>","chrome":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"21.17\" y1=\"8\" x2=\"12\" y2=\"8\"></line><line x1=\"3.95\" y1=\"6.06\" x2=\"8.54\" y2=\"14\"></line><line x1=\"10.88\" y1=\"21.94\" x2=\"15.46\" y2=\"14\"></line>","circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","clipboard":"<path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"></path><rect x=\"8\" y=\"2\" width=\"8\" height=\"4\" rx=\"1\" ry=\"1\"></rect>","clock":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline>","cloud-drizzle":"<line x1=\"8\" y1=\"19\" x2=\"8\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"15\"></line><line x1=\"16\" y1=\"19\" x2=\"16\" y2=\"21\"></line><line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"15\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"17\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-lightning":"<path d=\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\"></path><polyline points=\"13 11 9 17 15 17 11 23\"></polyline>","cloud-off":"<path d=\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","cloud-rain":"<line x1=\"16\" y1=\"13\" x2=\"16\" y2=\"21\"></line><line x1=\"8\" y1=\"13\" x2=\"8\" y2=\"21\"></line><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"23\"></line><path d=\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\"></path>","cloud-snow":"<path d=\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"8\" y1=\"20\" x2=\"8.01\" y2=\"20\"></line><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line><line x1=\"12\" y1=\"22\" x2=\"12.01\" y2=\"22\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line><line x1=\"16\" y1=\"20\" x2=\"16.01\" y2=\"20\"></line>","cloud":"<path d=\"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z\"></path>","code":"<polyline points=\"16 18 22 12 16 6\"></polyline><polyline points=\"8 6 2 12 8 18\"></polyline>","codepen":"<polygon points=\"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2\"></polygon><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"15.5\"></line><polyline points=\"22 8.5 12 15.5 2 8.5\"></polyline><polyline points=\"2 15.5 12 8.5 22 15.5\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"8.5\"></line>","codesandbox":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"7.5 4.21 12 6.81 16.5 4.21\"></polyline><polyline points=\"7.5 19.79 7.5 14.6 3 12\"></polyline><polyline points=\"21 12 16.5 14.6 16.5 19.79\"></polyline><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","coffee":"<path d=\"M18 8h1a4 4 0 0 1 0 8h-1\"></path><path d=\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\"></path><line x1=\"6\" y1=\"1\" x2=\"6\" y2=\"4\"></line><line x1=\"10\" y1=\"1\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"1\" x2=\"14\" y2=\"4\"></line>","columns":"<path d=\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\"></path>","command":"<path d=\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z\"></path>","compass":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76\"></polygon>","copy":"<rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path>","corner-down-left":"<polyline points=\"9 10 4 15 9 20\"></polyline><path d=\"M20 4v7a4 4 0 0 1-4 4H4\"></path>","corner-down-right":"<polyline points=\"15 10 20 15 15 20\"></polyline><path d=\"M4 4v7a4 4 0 0 0 4 4h12\"></path>","corner-left-down":"<polyline points=\"14 15 9 20 4 15\"></polyline><path d=\"M20 4h-7a4 4 0 0 0-4 4v12\"></path>","corner-left-up":"<polyline points=\"14 9 9 4 4 9\"></polyline><path d=\"M20 20h-7a4 4 0 0 1-4-4V4\"></path>","corner-right-down":"<polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path>","corner-right-up":"<polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path>","corner-up-left":"<polyline points=\"9 14 4 9 9 4\"></polyline><path d=\"M20 20v-7a4 4 0 0 0-4-4H4\"></path>","corner-up-right":"<polyline points=\"15 14 20 9 15 4\"></polyline><path d=\"M4 20v-7a4 4 0 0 1 4-4h12\"></path>","cpu":"<rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\" ry=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect><line x1=\"9\" y1=\"1\" x2=\"9\" y2=\"4\"></line><line x1=\"15\" y1=\"1\" x2=\"15\" y2=\"4\"></line><line x1=\"9\" y1=\"20\" x2=\"9\" y2=\"23\"></line><line x1=\"15\" y1=\"20\" x2=\"15\" y2=\"23\"></line><line x1=\"20\" y1=\"9\" x2=\"23\" y2=\"9\"></line><line x1=\"20\" y1=\"14\" x2=\"23\" y2=\"14\"></line><line x1=\"1\" y1=\"9\" x2=\"4\" y2=\"9\"></line><line x1=\"1\" y1=\"14\" x2=\"4\" y2=\"14\"></line>","credit-card":"<rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line>","crop":"<path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path><path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>","crosshair":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"22\" y1=\"12\" x2=\"18\" y2=\"12\"></line><line x1=\"6\" y1=\"12\" x2=\"2\" y2=\"12\"></line><line x1=\"12\" y1=\"6\" x2=\"12\" y2=\"2\"></line><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"18\"></line>","database":"<ellipse cx=\"12\" cy=\"5\" rx=\"9\" ry=\"3\"></ellipse><path d=\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\"></path><path d=\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\"></path>","delete":"<path d=\"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><line x1=\"18\" y1=\"9\" x2=\"12\" y2=\"15\"></line><line x1=\"12\" y1=\"9\" x2=\"18\" y2=\"15\"></line>","disc":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","divide-circle":"<line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line><circle cx=\"12\" cy=\"12\" r=\"10\"></circle>","divide-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"16\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"8\"></line>","divide":"<circle cx=\"12\" cy=\"6\" r=\"2\"></circle><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><circle cx=\"12\" cy=\"18\" r=\"2\"></circle>","dollar-sign":"<line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path>","download-cloud":"<polyline points=\"8 17 12 21 16 17\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\"></path>","download":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"7 10 12 15 17 10\"></polyline><line x1=\"12\" y1=\"15\" x2=\"12\" y2=\"3\"></line>","dribbble":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32\"></path>","droplet":"<path d=\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\"></path>","edit-2":"<path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path>","edit-3":"<path d=\"M12 20h9\"></path><path d=\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z\"></path>","edit":"<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path>","external-link":"<path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"></path><polyline points=\"15 3 21 3 21 9\"></polyline><line x1=\"10\" y1=\"14\" x2=\"21\" y2=\"3\"></line>","eye-off":"<path d=\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","eye":"<path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle>","facebook":"<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>","fast-forward":"<polygon points=\"13 19 22 12 13 5 13 19\"></polygon><polygon points=\"2 19 11 12 2 5 2 19\"></polygon>","feather":"<path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line>","figma":"<path d=\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\"></path><path d=\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\"></path><path d=\"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\"></path><path d=\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\"></path>","file-minus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-plus":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"12\"></line><line x1=\"9\" y1=\"15\" x2=\"15\" y2=\"15\"></line>","file-text":"<path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline>","file":"<path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline>","film":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"2.18\" ry=\"2.18\"></rect><line x1=\"7\" y1=\"2\" x2=\"7\" y2=\"22\"></line><line x1=\"17\" y1=\"2\" x2=\"17\" y2=\"22\"></line><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"2\" y1=\"7\" x2=\"7\" y2=\"7\"></line><line x1=\"2\" y1=\"17\" x2=\"7\" y2=\"17\"></line><line x1=\"17\" y1=\"17\" x2=\"22\" y2=\"17\"></line><line x1=\"17\" y1=\"7\" x2=\"22\" y2=\"7\"></line>","filter":"<polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"></polygon>","flag":"<path d=\"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z\"></path><line x1=\"4\" y1=\"22\" x2=\"4\" y2=\"15\"></line>","folder-minus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder-plus":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path><line x1=\"12\" y1=\"11\" x2=\"12\" y2=\"17\"></line><line x1=\"9\" y1=\"14\" x2=\"15\" y2=\"14\"></line>","folder":"<path d=\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\"></path>","framer":"<path d=\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\"></path>","frown":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M16 16s-1.5-2-4-2-4 2-4 2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","gift":"<polyline points=\"20 12 20 22 4 22 4 12\"></polyline><rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect><line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line><path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path><path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>","git-branch":"<line x1=\"6\" y1=\"3\" x2=\"6\" y2=\"15\"></line><circle cx=\"18\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><path d=\"M18 9a9 9 0 0 1-9 9\"></path>","git-commit":"<circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"1.05\" y1=\"12\" x2=\"7\" y2=\"12\"></line><line x1=\"17.01\" y1=\"12\" x2=\"22.96\" y2=\"12\"></line>","git-merge":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M6 21V9a9 9 0 0 0 9 9\"></path>","git-pull-request":"<circle cx=\"18\" cy=\"18\" r=\"3\"></circle><circle cx=\"6\" cy=\"6\" r=\"3\"></circle><path d=\"M13 6h3a2 2 0 0 1 2 2v7\"></path><line x1=\"6\" y1=\"9\" x2=\"6\" y2=\"21\"></line>","github":"<path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>","gitlab":"<path d=\"M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\"></path>","globe":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><path d=\"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z\"></path>","grid":"<rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect>","hard-drive":"<line x1=\"22\" y1=\"12\" x2=\"2\" y2=\"12\"></line><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path><line x1=\"6\" y1=\"16\" x2=\"6.01\" y2=\"16\"></line><line x1=\"10\" y1=\"16\" x2=\"10.01\" y2=\"16\"></line>","hash":"<line x1=\"4\" y1=\"9\" x2=\"20\" y2=\"9\"></line><line x1=\"4\" y1=\"15\" x2=\"20\" y2=\"15\"></line><line x1=\"10\" y1=\"3\" x2=\"8\" y2=\"21\"></line><line x1=\"16\" y1=\"3\" x2=\"14\" y2=\"21\"></line>","headphones":"<path d=\"M3 18v-6a9 9 0 0 1 18 0v6\"></path><path d=\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\"></path>","heart":"<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>","help-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"></path><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"></line>","hexagon":"<path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path>","home":"<path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline>","image":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"></circle><polyline points=\"21 15 16 10 5 21\"></polyline>","inbox":"<polyline points=\"22 12 16 12 14 15 10 15 8 12 2 12\"></polyline><path d=\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\"></path>","info":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"16\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12.01\" y2=\"8\"></line>","instagram":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line>","italic":"<line x1=\"19\" y1=\"4\" x2=\"10\" y2=\"4\"></line><line x1=\"14\" y1=\"20\" x2=\"5\" y2=\"20\"></line><line x1=\"15\" y1=\"4\" x2=\"9\" y2=\"20\"></line>","key":"<path d=\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\"></path>","layers":"<polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline>","layout":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line>","life-buoy":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"9.17\" y2=\"9.17\"></line><line x1=\"14.83\" y1=\"14.83\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"19.07\" y2=\"4.93\"></line><line x1=\"14.83\" y1=\"9.17\" x2=\"18.36\" y2=\"5.64\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"9.17\" y2=\"14.83\"></line>","link-2":"<path d=\"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3\"></path><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path>","linkedin":"<path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle>","list":"<line x1=\"8\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"8\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"8\" y1=\"18\" x2=\"21\" y2=\"18\"></line><line x1=\"3\" y1=\"6\" x2=\"3.01\" y2=\"6\"></line><line x1=\"3\" y1=\"12\" x2=\"3.01\" y2=\"12\"></line><line x1=\"3\" y1=\"18\" x2=\"3.01\" y2=\"18\"></line>","loader":"<line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"6\"></line><line x1=\"12\" y1=\"18\" x2=\"12\" y2=\"22\"></line><line x1=\"4.93\" y1=\"4.93\" x2=\"7.76\" y2=\"7.76\"></line><line x1=\"16.24\" y1=\"16.24\" x2=\"19.07\" y2=\"19.07\"></line><line x1=\"2\" y1=\"12\" x2=\"6\" y2=\"12\"></line><line x1=\"18\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"4.93\" y1=\"19.07\" x2=\"7.76\" y2=\"16.24\"></line><line x1=\"16.24\" y1=\"7.76\" x2=\"19.07\" y2=\"4.93\"></line>","lock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"></path>","log-in":"<path d=\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\"></path><polyline points=\"10 17 15 12 10 7\"></polyline><line x1=\"15\" y1=\"12\" x2=\"3\" y2=\"12\"></line>","log-out":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"></path><polyline points=\"16 17 21 12 16 7\"></polyline><line x1=\"21\" y1=\"12\" x2=\"9\" y2=\"12\"></line>","mail":"<path d=\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\"></path><polyline points=\"22,6 12,13 2,6\"></polyline>","map-pin":"<path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\"></path><circle cx=\"12\" cy=\"10\" r=\"3\"></circle>","map":"<polygon points=\"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6\"></polygon><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"18\"></line><line x1=\"16\" y1=\"6\" x2=\"16\" y2=\"22\"></line>","maximize-2":"<polyline points=\"15 3 21 3 21 9\"></polyline><polyline points=\"9 21 3 21 3 15\"></polyline><line x1=\"21\" y1=\"3\" x2=\"14\" y2=\"10\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","maximize":"<path d=\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\"></path>","meh":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"15\" x2=\"16\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","menu":"<line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\"></line><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><line x1=\"3\" y1=\"18\" x2=\"21\" y2=\"18\"></line>","message-circle":"<path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path>","message-square":"<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path>","mic-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\"></path><path d=\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","mic":"<path d=\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\"></path><path d=\"M19 10v2a7 7 0 0 1-14 0v-2\"></path><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"23\"></line><line x1=\"8\" y1=\"23\" x2=\"16\" y2=\"23\"></line>","minimize-2":"<polyline points=\"4 14 10 14 10 20\"></polyline><polyline points=\"20 10 14 10 14 4\"></polyline><line x1=\"14\" y1=\"10\" x2=\"21\" y2=\"3\"></line><line x1=\"3\" y1=\"21\" x2=\"10\" y2=\"14\"></line>","minimize":"<path d=\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\"></path>","minus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","minus":"<line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","monitor":"<rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line>","moon":"<path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path>","more-horizontal":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle>","more-vertical":"<circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"12\" cy=\"5\" r=\"1\"></circle><circle cx=\"12\" cy=\"19\" r=\"1\"></circle>","mouse-pointer":"<path d=\"M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z\"></path><path d=\"M13 13l6 6\"></path>","move":"<polyline points=\"5 9 2 12 5 15\"></polyline><polyline points=\"9 5 12 2 15 5\"></polyline><polyline points=\"15 19 12 22 9 19\"></polyline><polyline points=\"19 9 22 12 19 15\"></polyline><line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>","music":"<path d=\"M9 18V5l12-2v13\"></path><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><circle cx=\"18\" cy=\"16\" r=\"3\"></circle>","navigation-2":"<polygon points=\"12 2 19 21 12 17 5 21 12 2\"></polygon>","navigation":"<polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon>","octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon>","package":"<line x1=\"16.5\" y1=\"9.4\" x2=\"7.5\" y2=\"4.21\"></line><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"></path><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"></polyline><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"></line>","paperclip":"<path d=\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\"></path>","pause-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"10\" y1=\"15\" x2=\"10\" y2=\"9\"></line><line x1=\"14\" y1=\"15\" x2=\"14\" y2=\"9\"></line>","pause":"<rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"></rect><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"></rect>","pen-tool":"<path d=\"M12 19l7-7 3 3-7 7-3-3z\"></path><path d=\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\"></path><path d=\"M2 2l7.586 7.586\"></path><circle cx=\"11\" cy=\"11\" r=\"2\"></circle>","percent":"<line x1=\"19\" y1=\"5\" x2=\"5\" y2=\"19\"></line><circle cx=\"6.5\" cy=\"6.5\" r=\"2.5\"></circle><circle cx=\"17.5\" cy=\"17.5\" r=\"2.5\"></circle>","phone-call":"<path d=\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-forwarded":"<polyline points=\"19 1 23 5 19 9\"></polyline><line x1=\"15\" y1=\"5\" x2=\"23\" y2=\"5\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-incoming":"<polyline points=\"16 2 16 8 22 8\"></polyline><line x1=\"23\" y1=\"1\" x2=\"16\" y2=\"8\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-missed":"<line x1=\"23\" y1=\"1\" x2=\"17\" y2=\"7\"></line><line x1=\"17\" y1=\"1\" x2=\"23\" y2=\"7\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone-off":"<path d=\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91\"></path><line x1=\"23\" y1=\"1\" x2=\"1\" y2=\"23\"></line>","phone-outgoing":"<polyline points=\"23 7 23 1 17 1\"></polyline><line x1=\"16\" y1=\"8\" x2=\"23\" y2=\"1\"></line><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>","pie-chart":"<path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\"></path><path d=\"M22 12A10 10 0 0 0 12 2v10z\"></path>","play-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polygon points=\"10 8 16 12 10 16 10 8\"></polygon>","play":"<polygon points=\"5 3 19 12 5 21 5 3\"></polygon>","plus-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line>","plus":"<line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line>","pocket":"<path d=\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\"></path><polyline points=\"8 10 12 14 16 10\"></polyline>","power":"<path d=\"M18.36 6.64a9 9 0 1 1-12.73 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"12\"></line>","printer":"<polyline points=\"6 9 6 2 18 2 18 9\"></polyline><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"></path><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\"></rect>","radio":"<circle cx=\"12\" cy=\"12\" r=\"2\"></circle><path d=\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\"></path>","refresh-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><polyline points=\"23 20 23 14 17 14\"></polyline><path d=\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\"></path>","refresh-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><polyline points=\"1 20 1 14 7 14\"></polyline><path d=\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\"></path>","repeat":"<polyline points=\"17 1 21 5 17 9\"></polyline><path d=\"M3 11V9a4 4 0 0 1 4-4h14\"></path><polyline points=\"7 23 3 19 7 15\"></polyline><path d=\"M21 13v2a4 4 0 0 1-4 4H3\"></path>","rewind":"<polygon points=\"11 19 2 12 11 5 11 19\"></polygon><polygon points=\"22 19 13 12 22 5 22 19\"></polygon>","rotate-ccw":"<polyline points=\"1 4 1 10 7 10\"></polyline><path d=\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\"></path>","rotate-cw":"<polyline points=\"23 4 23 10 17 10\"></polyline><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"></path>","rss":"<path d=\"M4 11a9 9 0 0 1 9 9\"></path><path d=\"M4 4a16 16 0 0 1 16 16\"></path><circle cx=\"5\" cy=\"19\" r=\"1\"></circle>","save":"<path d=\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\"></path><polyline points=\"17 21 17 13 7 13 7 21\"></polyline><polyline points=\"7 3 7 8 15 8\"></polyline>","scissors":"<circle cx=\"6\" cy=\"6\" r=\"3\"></circle><circle cx=\"6\" cy=\"18\" r=\"3\"></circle><line x1=\"20\" y1=\"4\" x2=\"8.12\" y2=\"15.88\"></line><line x1=\"14.47\" y1=\"14.48\" x2=\"20\" y2=\"20\"></line><line x1=\"8.12\" y1=\"8.12\" x2=\"12\" y2=\"12\"></line>","search":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line>","send":"<line x1=\"22\" y1=\"2\" x2=\"11\" y2=\"13\"></line><polygon points=\"22 2 15 22 11 13 2 9 22 2\"></polygon>","server":"<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><rect x=\"2\" y=\"14\" width=\"20\" height=\"8\" rx=\"2\" ry=\"2\"></rect><line x1=\"6\" y1=\"6\" x2=\"6.01\" y2=\"6\"></line><line x1=\"6\" y1=\"18\" x2=\"6.01\" y2=\"18\"></line>","settings":"<circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"></path>","share-2":"<circle cx=\"18\" cy=\"5\" r=\"3\"></circle><circle cx=\"6\" cy=\"12\" r=\"3\"></circle><circle cx=\"18\" cy=\"19\" r=\"3\"></circle><line x1=\"8.59\" y1=\"13.51\" x2=\"15.42\" y2=\"17.49\"></line><line x1=\"15.41\" y1=\"6.51\" x2=\"8.59\" y2=\"10.49\"></line>","share":"<path d=\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\"></path><polyline points=\"16 6 12 2 8 6\"></polyline><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"15\"></line>","shield-off":"<path d=\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18\"></path><path d=\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","shield":"<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path>","shopping-bag":"<path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path>","shopping-cart":"<circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path>","shuffle":"<polyline points=\"16 3 21 3 21 8\"></polyline><line x1=\"4\" y1=\"20\" x2=\"21\" y2=\"3\"></line><polyline points=\"21 16 21 21 16 21\"></polyline><line x1=\"15\" y1=\"15\" x2=\"21\" y2=\"21\"></line><line x1=\"4\" y1=\"4\" x2=\"9\" y2=\"9\"></line>","sidebar":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"3\" x2=\"9\" y2=\"21\"></line>","skip-back":"<polygon points=\"19 20 9 12 19 4 19 20\"></polygon><line x1=\"5\" y1=\"19\" x2=\"5\" y2=\"5\"></line>","skip-forward":"<polygon points=\"5 4 15 12 5 20 5 4\"></polygon><line x1=\"19\" y1=\"5\" x2=\"19\" y2=\"19\"></line>","slack":"<path d=\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\"></path><path d=\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z\"></path><path d=\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\"></path><path d=\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z\"></path><path d=\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\"></path><path d=\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z\"></path><path d=\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\"></path><path d=\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z\"></path>","slash":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"4.93\" y1=\"4.93\" x2=\"19.07\" y2=\"19.07\"></line>","sliders":"<line x1=\"4\" y1=\"21\" x2=\"4\" y2=\"14\"></line><line x1=\"4\" y1=\"10\" x2=\"4\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"12\"></line><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"3\"></line><line x1=\"20\" y1=\"21\" x2=\"20\" y2=\"16\"></line><line x1=\"20\" y1=\"12\" x2=\"20\" y2=\"3\"></line><line x1=\"1\" y1=\"14\" x2=\"7\" y2=\"14\"></line><line x1=\"9\" y1=\"8\" x2=\"15\" y2=\"8\"></line><line x1=\"17\" y1=\"16\" x2=\"23\" y2=\"16\"></line>","smartphone":"<rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","smile":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M8 14s1.5 2 4 2 4-2 4-2\"></path><line x1=\"9\" y1=\"9\" x2=\"9.01\" y2=\"9\"></line><line x1=\"15\" y1=\"9\" x2=\"15.01\" y2=\"9\"></line>","speaker":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><circle cx=\"12\" cy=\"14\" r=\"4\"></circle><line x1=\"12\" y1=\"6\" x2=\"12.01\" y2=\"6\"></line>","square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect>","star":"<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"></polygon>","stop-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"></rect>","sun":"<circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line>","sunrise":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"9\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"8 6 12 2 16 6\"></polyline>","sunset":"<path d=\"M17 18a5 5 0 0 0-10 0\"></path><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"2\"></line><line x1=\"4.22\" y1=\"10.22\" x2=\"5.64\" y2=\"11.64\"></line><line x1=\"1\" y1=\"18\" x2=\"3\" y2=\"18\"></line><line x1=\"21\" y1=\"18\" x2=\"23\" y2=\"18\"></line><line x1=\"18.36\" y1=\"11.64\" x2=\"19.78\" y2=\"10.22\"></line><line x1=\"23\" y1=\"22\" x2=\"1\" y2=\"22\"></line><polyline points=\"16 5 12 9 8 5\"></polyline>","tablet":"<rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"></rect><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"></line>","tag":"<path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7.01\" y2=\"7\"></line>","target":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle>","terminal":"<polyline points=\"4 17 10 11 4 5\"></polyline><line x1=\"12\" y1=\"19\" x2=\"20\" y2=\"19\"></line>","thermometer":"<path d=\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\"></path>","thumbs-down":"<path d=\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\"></path>","thumbs-up":"<path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path>","toggle-left":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"8\" cy=\"12\" r=\"3\"></circle>","toggle-right":"<rect x=\"1\" y=\"5\" width=\"22\" height=\"14\" rx=\"7\" ry=\"7\"></rect><circle cx=\"16\" cy=\"12\" r=\"3\"></circle>","tool":"<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>","trash-2":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line>","trash":"<polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path>","trello":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><rect x=\"7\" y=\"7\" width=\"3\" height=\"9\"></rect><rect x=\"14\" y=\"7\" width=\"3\" height=\"5\"></rect>","trending-down":"<polyline points=\"23 18 13.5 8.5 8.5 13.5 1 6\"></polyline><polyline points=\"17 18 23 18 23 12\"></polyline>","trending-up":"<polyline points=\"23 6 13.5 15.5 8.5 10.5 1 18\"></polyline><polyline points=\"17 6 23 6 23 12\"></polyline>","triangle":"<path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"></path>","truck":"<rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"></rect><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"></polygon><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"></circle><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"></circle>","tv":"<rect x=\"2\" y=\"7\" width=\"20\" height=\"15\" rx=\"2\" ry=\"2\"></rect><polyline points=\"17 2 12 7 7 2\"></polyline>","twitch":"<path d=\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\"></path>","twitter":"<path d=\"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\"></path>","type":"<polyline points=\"4 7 4 4 20 4 20 7\"></polyline><line x1=\"9\" y1=\"20\" x2=\"15\" y2=\"20\"></line><line x1=\"12\" y1=\"4\" x2=\"12\" y2=\"20\"></line>","umbrella":"<path d=\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\"></path>","underline":"<path d=\"M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3\"></path><line x1=\"4\" y1=\"21\" x2=\"20\" y2=\"21\"></line>","unlock":"<rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\" ry=\"2\"></rect><path d=\"M7 11V7a5 5 0 0 1 9.9-1\"></path>","upload-cloud":"<polyline points=\"16 16 12 12 8 16\"></polyline><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"21\"></line><path d=\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\"></path><polyline points=\"16 16 12 12 8 16\"></polyline>","upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"></path><polyline points=\"17 8 12 3 7 8\"></polyline><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"></line>","user-check":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><polyline points=\"17 11 19 13 23 9\"></polyline>","user-minus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-plus":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"20\" y1=\"8\" x2=\"20\" y2=\"14\"></line><line x1=\"23\" y1=\"11\" x2=\"17\" y2=\"11\"></line>","user-x":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"8.5\" cy=\"7\" r=\"4\"></circle><line x1=\"18\" y1=\"8\" x2=\"23\" y2=\"13\"></line><line x1=\"23\" y1=\"8\" x2=\"18\" y2=\"13\"></line>","user":"<path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle>","users":"<path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>","video-off":"<path d=\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\"></path><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","video":"<polygon points=\"23 7 16 12 23 17 23 7\"></polygon><rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>","voicemail":"<circle cx=\"5.5\" cy=\"11.5\" r=\"4.5\"></circle><circle cx=\"18.5\" cy=\"11.5\" r=\"4.5\"></circle><line x1=\"5.5\" y1=\"16\" x2=\"18.5\" y2=\"16\"></line>","volume-1":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-2":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><path d=\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\"></path>","volume-x":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon><line x1=\"23\" y1=\"9\" x2=\"17\" y2=\"15\"></line><line x1=\"17\" y1=\"9\" x2=\"23\" y2=\"15\"></line>","volume":"<polygon points=\"11 5 6 9 2 9 2 15 6 15 11 19 11 5\"></polygon>","watch":"<circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path>","wifi-off":"<line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line><path d=\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\"></path><path d=\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\"></path><path d=\"M10.71 5.05A16 16 0 0 1 22.58 9\"></path><path d=\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wifi":"<path d=\"M5 12.55a11 11 0 0 1 14.08 0\"></path><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"></path><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"></path><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"></line>","wind":"<path d=\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\"></path>","x-circle":"<circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-octagon":"<polygon points=\"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2\"></polygon><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line>","x-square":"<rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"></line><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"></line>","x":"<line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line>","youtube":"<path d=\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z\"></path><polygon points=\"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\"></polygon>","zap-off":"<polyline points=\"12.41 6.75 13 2 10.57 4.92\"></polyline><polyline points=\"18.57 12.91 21 10 15.66 10\"></polyline><polyline points=\"8 8 3 14 12 14 11 22 16 16\"></polyline><line x1=\"1\" y1=\"1\" x2=\"23\" y2=\"23\"></line>","zap":"<polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"></polygon>","zoom-in":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"11\" y1=\"8\" x2=\"11\" y2=\"14\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>","zoom-out":"<circle cx=\"11\" cy=\"11\" r=\"8\"></circle><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"></line><line x1=\"8\" y1=\"11\" x2=\"14\" y2=\"11\"></line>"};

/***/ }),

/***/ "./node_modules/classnames/dedupe.js":
/*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			for (var k in object) {
				if (hasOwn.call(object, k)) {
					// set value to false instead of deleting it to avoid changing object structure
					// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
					resultSet[k] = !!object[k];
				}
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k);
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
}());


/***/ }),

/***/ "./node_modules/core-js/es/array/from.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var index = 0;
  var iteratorMethod = getIteratorMethod(O);
  var length, result, step, iterator;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    result = new C();
    for (;!(step = iterator.next()).done; index++) {
      createProperty(result, index, mapping
        ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true)
        : step.value
      );
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
// false -> Array#indexOf
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
// true  -> Array#includes
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          hide(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    hide(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var exist = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return exist ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-iterator-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")));

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var document = global.document;

module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array-iterator-method.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var key;
  while (length > i) definePropertyModule.f(O, key = keys[i++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var arrayIndexOf = arrayIncludes(false);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var correctSetter = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    correctSetter = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    validateSetPrototypeOfArguments(O, proto);
    if (correctSetter) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var Reflect = global.Reflect;

// all object keys, includes non-enumerable and symbols
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.1.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-at.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// CONVERT_TO_STRING: true  -> String#at
// CONVERT_TO_STRING: false -> String#codePointAt
module.exports = function (that, pos, CONVERT_TO_STRING) {
  var S = String(requireObjectCoercible(that));
  var position = toInteger(pos);
  var size = S.length;
  var first, second;
  if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
  first = S.charCodeAt(position);
  return first < 0xD800 || first > 0xDBFF || position + 1 === size
    || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
      ? CONVERT_TO_STRING ? S.charAt(position) : first
      : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + postfix).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

module.exports = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) {
    throw TypeError("Can't set " + String(proto) + ' as a prototype');
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = codePointAt(string, index, true);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (0, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/default-attrs.json":
/*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/
/*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
/***/ (function(module) {

module.exports = {"xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");

var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Icon = function () {
  function Icon(name, contents) {
    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, Icon);

    this.name = name;
    this.contents = contents;
    this.tags = tags;
    this.attrs = _extends({}, _defaultAttrs2.default, { class: 'feather feather-' + name });
  }

  /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */


  _createClass(Icon, [{
    key: 'toSvg',
    value: function toSvg() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });

      return '<svg ' + attrsToString(combinedAttrs) + '>' + this.contents + '</svg>';
    }

    /**
     * Return string representation of an `Icon`.
     *
     * Added for backward compatibility. If old code expects `feather.icons.<name>`
     * to be a string, `toString()` will get implicitly called.
     *
     * @returns {string}
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.contents;
    }
  }]);

  return Icon;
}();

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */


function attrsToString(attrs) {
  return Object.keys(attrs).map(function (key) {
    return key + '="' + attrs[key] + '"';
  }).join(' ');
}

exports.default = Icon;

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");

var _icons2 = _interopRequireDefault(_icons);

var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");

var _tags2 = _interopRequireDefault(_tags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.keys(_icons2.default).map(function (key) {
  return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
}).reduce(function (object, icon) {
  object[icon.name] = icon;
  return object;
}, {});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");

var _toSvg2 = _interopRequireDefault(_toSvg);

var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");

var _replace2 = _interopRequireDefault(_replace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };

/***/ }),

/***/ "./src/replace.js":
/*!************************!*\
  !*** ./src/replace.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-env browser */


var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");

var _dedupe2 = _interopRequireDefault(_dedupe);

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */
function replace() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof document === 'undefined') {
    throw new Error('`feather.replace()` only works in a browser environment.');
  }

  var elementsToReplace = document.querySelectorAll('[data-feather]');

  Array.from(elementsToReplace).forEach(function (element) {
    return replaceElement(element, attrs);
  });
}

/**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */
function replaceElement(element) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var elementAttrs = getAttrs(element);
  var name = elementAttrs['data-feather'];
  delete elementAttrs['data-feather'];

  var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
  var svgDocument = new DOMParser().parseFromString(svgString, 'image/svg+xml');
  var svgElement = svgDocument.querySelector('svg');

  element.parentNode.replaceChild(svgElement, element);
}

/**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */
function getAttrs(element) {
  return Array.from(element.attributes).reduce(function (attrs, attr) {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
}

exports.default = replace;

/***/ }),

/***/ "./src/tags.json":
/*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/
/*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
/***/ (function(module) {

module.exports = {"activity":["pulse","health","action","motion"],"airplay":["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],"anchor":[],"archive":["index","box"],"at-sign":["mention","at","email","message"],"award":["achievement","badge"],"aperture":["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],"battery":["power","electricity"],"battery-charging":["power","electricity"],"bell":["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],"bluetooth":["wireless"],"book-open":["read","library"],"book":["read","dictionary","booklet","magazine","library"],"bookmark":["read","clip","marker","tag"],"box":["cube"],"briefcase":["work","bag","baggage","folder"],"calendar":["date"],"camera":["photo"],"cast":["chromecast","airplay"],"circle":["off","zero","record"],"clipboard":["copy"],"clock":["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],"cloud":["weather"],"codepen":["logo"],"codesandbox":["logo"],"code":["source","programming"],"coffee":["drink","cup","mug","tea","cafe","hot","beverage"],"columns":["layout"],"command":["keyboard","cmd","terminal","prompt"],"compass":["navigation","safari","travel","direction"],"copy":["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],"cpu":["processor","technology"],"credit-card":["purchase","payment","cc"],"crop":["photo","image"],"crosshair":["aim","target"],"database":["storage","memory"],"delete":["remove"],"disc":["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],"droplet":["water"],"edit":["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],"eye":["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],"facebook":["logo","social"],"fast-forward":["music"],"figma":["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],"film":["movie","video"],"filter":["funnel","hopper"],"flag":["report"],"folder-minus":["directory"],"folder-plus":["directory"],"folder":["directory"],"framer":["logo","design","tool"],"frown":["emoji","face","bad","sad","emotion"],"gift":["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],"github":["logo","version control"],"gitlab":["logo","version control"],"globe":["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],"hash":["hashtag","number","pound"],"headphones":["music","audio","sound"],"heart":["like","love","emotion"],"help-circle":["question mark"],"hexagon":["shape","node.js","logo"],"home":["house","living"],"image":["picture"],"inbox":["email"],"instagram":["logo","camera"],"key":["password","login","authentication","secure"],"layers":["stack"],"layout":["window","webpage"],"life-bouy":["help","life ring","support"],"link":["chain","url"],"link-2":["chain","url"],"linkedin":["logo","social media"],"list":["options"],"lock":["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],"mail":["email","message"],"map-pin":["location","navigation","travel","marker"],"map":["location","navigation","travel"],"maximize":["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],"meh":["emoji","face","neutral","emotion"],"menu":["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],"mic":["record","sound","listen"],"minimize":["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],"minus":["subtract"],"monitor":["tv","screen","display"],"moon":["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],"move":["arrows"],"music":["note"],"navigation":["location","travel"],"navigation-2":["location","travel"],"octagon":["stop"],"package":["box","container"],"paperclip":["attachment"],"pause":["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],"percent":["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],"phone":["call"],"play":["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],"plus":["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],"pocket":["logo","save"],"power":["on","off"],"printer":["fax","office","device"],"radio":["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],"repeat":["loop","arrows"],"rewind":["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],"rss":["feed","subscribe"],"save":["floppy disk"],"scissors":["cut"],"search":["find","magnifier","magnifying glass"],"send":["message","mail","email","paper airplane","paper aeroplane"],"settings":["cog","edit","gear","preferences"],"share-2":["network","connections"],"shield":["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],"shuffle":["music"],"skip-back":["music"],"skip-forward":["music"],"slack":["logo"],"slash":["ban","no"],"sliders":["settings","controls"],"smartphone":["cellphone","device"],"smile":["emoji","face","happy","good","emotion"],"speaker":["audio","music"],"star":["bookmark","favorite","like"],"stop-circle":["media","music"],"sun":["brightness","weather","light"],"sunrise":["weather","time","morning","day"],"sunset":["weather","time","evening","night"],"tablet":["device"],"tag":["label"],"target":["logo","bullseye"],"terminal":["code","command line","prompt"],"thermometer":["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],"tool":["settings","spanner"],"trash":["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],"triangle":["delta"],"truck":["delivery","van","shipping","transport","lorry"],"tv":["television","stream"],"twitch":["logo"],"twitter":["logo","social"],"type":["text"],"umbrella":["rain","weather"],"unlock":["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],"user":["person","account"],"users":["group"],"video-off":["camera","movie","film"],"video":["camera","movie","film"],"voicemail":["phone"],"volume":["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],"watch":["clock","time"],"wifi-off":["disabled"],"wifi":["connection","signal","wireless"],"wind":["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],"x":["cancel","close","delete","remove","times","clear"],"youtube":["logo","video","play"],"zap-off":["flash","camera","lightning"],"zap":["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]};

/***/ }),

/***/ "./src/to-svg.js":
/*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */
function toSvg(name) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  console.warn('feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.');

  if (!name) {
    throw new Error('The required `key` (icon name) parameter is missing.');
  }

  if (!_icons2.default[name]) {
    throw new Error('No icon matching \'' + name + '\'. See the complete list of icons at https://feathericons.com');
  }

  return _icons2.default[name].toSvg(attrs);
}

exports.default = toSvg;

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/es/array/from */"./node_modules/core-js/es/array/from.js");
module.exports = __webpack_require__(/*! /home/travis/build/feathericons/feather/src/index.js */"./src/index.js");


/***/ })

/******/ });
});

});

const feather$1 = /*@__PURE__*/_commonjsHelpers.getDefaultExportFromCjs(feather);

const iconCss = "ks-icon{display:inline-block;color:inherit}ks-icon svg{stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;fill:none;vertical-align:top}ks-icon svg.thin{stroke-width:1}ks-icon svg.medium{stroke-width:1.3}";

const Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = "alert-octagon";
    this.size = 1;
  }
  componentWillLoad() {
    this.componentWillUpdate();
  }
  componentWillUpdate() {
    const icon = feather$1.icons[this.name];
    this.svg = icon.contents;
    this.attrs = icon.attrs;
    this.root.style.lineHeight = `${this.attrs.width * this.size}px`;
  }
  render() {
    let stroke = "";
    if (this.size >= 1.3 && this.size < 2)
      stroke = "medium";
    else if (this.size >= 2)
      stroke = "thin";
    const width = this.attrs.width * this.size;
    const height = this.attrs.height * this.size;
    var svg = document.createElement('svg');
    svg.setAttribute("xmlns", this.attrs.xmlns);
    svg.setAttribute("width", `${width}`);
    svg.setAttribute("height", `${height}`);
    svg.setAttribute("viewBox", `0 0 ${this.attrs.width} ${this.attrs.height}`);
    svg.setAttribute("class", stroke);
    svg.innerHTML = this.svg;
    return index.h(index.Host, { innerHTML: svg.outerHTML });
  }
  get root() { return index.getElement(this); }
};
Icon.style = iconCss;

const Image = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.sync = false;
    this.cover = false;
    this.contain = false;
    this.loaded = false;
    this.loadAnimated = false;
  }
  async loadCheck(e) {
    if (e.target instanceof HTMLElement && !e.target.getAttribute("src").includes('data:image'))
      this.loaded = true;
  }
  componentDidUpdate() {
    if (this.loaded && !this.loadAnimated) {
      setTimeout(() => {
        this.loadAnimated = true;
      }, 1000);
    }
  }
  srcListener() {
    this.loaded = false;
    this.loadAnimated = false;
  }
  render() {
    let imageStyle = "";
    if (!this.loaded)
      imageStyle = "uk-invisible uk-position-center";
    else if (!this.loadAnimated)
      imageStyle = "uk-animation-fade";
    if (this.sync)
      return index.h("img", { src: this.src, width: this.width, height: this.height, alt: this.alt });
    else if (this.cover)
      return (index.h("div", { class: "uk-cover-container" }, index.h("canvas", { width: this.width, height: this.height }), !this.loaded ? index.h("div", { class: "ks-spinner uk-position-center" }) : null, index.h("img", { "uk-cover": true, onLoad: e => this.loadCheck(e), class: imageStyle, width: this.width, height: this.height, "data-src": this.src, alt: this.alt, "uk-img": "target: !ks-image" })));
    else if (this.contain)
      return (index.h("div", { class: "uk-position-relative" }, index.h("canvas", { width: this.width, height: this.height }), !this.loaded ? index.h("div", { class: "ks-spinner uk-position-center" }) : null, index.h("img", { onLoad: e => this.loadCheck(e), class: imageStyle + " uk-position-center uk-responsive-height", "data-src": this.src, width: this.width, height: this.height, alt: this.alt, "uk-img": "target: !ks-image" })));
    else
      return (index.h("div", { class: "uk-position-relative" }, !this.loaded ? [
        index.h("canvas", { width: this.width, height: this.height }),
        index.h("div", { class: "ks-spinner uk-position-center" })
      ] : null, index.h("img", { onLoad: e => this.loadCheck(e), class: imageStyle, "data-src": this.src, width: this.width, height: this.height, alt: this.alt, "uk-img": "target: !ks-image" })));
  }
  static get watchers() { return {
    "src": ["srcListener"]
  }; }
};

const imgCss = "ks-img{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;height:100%;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-img[limit]{height:unset;width:unset}ks-img img{max-width:initial;height:initial;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img canvas{max-width:100%;max-height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}ks-img .horizontal{width:100%;height:auto}ks-img .vertical{width:auto;height:100%}ks-img .contained{max-width:100%;max-height:100%;width:auto;height:auto}ks-img[src*=\".svg\"] .contained{width:100%;height:100%}ks-img.left{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}ks-img.right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}ks-img.center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}ks-img img.loading{opacity:0}";

const Img = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.lazyLoaded = index.createEvent(this, "lazyLoaded", 7);
    this.sync = false;
    this.vertical = false;
    this.contained = false;
    this.left = false;
    this.right = false;
    this.center = false;
    this.limit = false;
    this.loaded = false;
    this.loadAnimated = false;
  }
  loadHandler(e) {
    if (e.target instanceof HTMLElement && !e.target.getAttribute("src").includes('data:image')) {
      this.loaded = true;
      this.lazyLoaded.emit();
    }
  }
  componentDidUpdate() {
    if (this.loaded && !this.loadAnimated) {
      setTimeout(() => {
        this.loadAnimated = true;
      }, 1000);
    }
  }
  srcListener() {
    const image = this.root.querySelector("img");
    image.removeAttribute("src");
    image.setAttribute("src", this.src);
    setTimeout(() => {
      if (!image.complete) {
        this.loaded = false;
        this.loadAnimated = false;
      }
    }, 200);
  }
  componentDidLoad() {
    this.image = this.root.querySelector('img');
    const target = this.target ? this.root.closest(this.target) : this.root;
    const onIntersection = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (this.observer) {
            this.observer.disconnect();
          }
          if (this.image.getAttribute('data-src')) {
            this.image.setAttribute('src', this.image.getAttribute('data-src'));
            this.image.removeAttribute('data-src');
          }
        }
      }
    };
    if (this.image) {
      this.observer = new IntersectionObserver(onIntersection);
      this.observer.observe(target);
    }
    this.SetAlignment();
  }
  SetAlignment() {
    const float = this.center ? "center" :
      this.right ? "right" :
        this.left ? "left" : "";
    if (float != "")
      this.root.classList.add(float);
  }
  render() {
    const responsive = this.contained ? "contained" :
      this.vertical ? "vertical" : "horizontal";
    const loading = this.loadAnimated ? "" : "loading";
    const classes = [responsive].join(" ");
    const max = this.limit ? { maxWidth: `${this.width}px` } : null;
    if (this.sync)
      return (index.h("img", { class: classes, src: this.src, alt: this.alt, width: this.width, height: this.height, style: max }));
    return [
      (!this.loadAnimated ? index.h("ks-loader", { dark: true }) : null),
      !this.loaded ? index.h("canvas", { width: this.width, height: this.height, style: max }) : null,
      index.h("img", { class: classes + " " + loading, alt: this.alt, onLoad: (e) => this.loadHandler(e), "data-src": this.src, width: this.width, height: this.height, style: max })
    ];
  }
  get root() { return index.getElement(this); }
  static get watchers() { return {
    "src": ["srcListener"]
  }; }
};
Img.style = imgCss;

const infoMessageCss = "ks-info-message[disabled]{display:none}ks-info-message{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;background-color:var(--color-secondary);color:#ffffff;max-height:100px;-webkit-transition:max-height 0.3s ease;transition:max-height 0.3s ease}ks-info-message[animating]{max-height:0}ks-info-message .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;margin:10px;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-info-message .close{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px;color:#ffffff;background-color:rgba(0, 0, 0, 0.12);-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-info-message .close:hover{background-color:rgba(0, 0, 0, 0.06)}@media only screen and (max-width: 639px){ks-info-message .content{font-size:13px}}";

const InfoMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.disabled = false;
    this.animating = false;
    this.id = "";
  }
  componentWillLoad() {
    this.id = "ks-info-message-" + this.name.replace(" ", "");
    if (sessionStorage.getItem(this.id) == "true")
      this.disabled = true;
  }
  disable() {
    sessionStorage.setItem(this.id, "true");
    this.animating = true;
    setTimeout(() => {
      this.disabled = true;
    }, 300);
  }
  render() {
    return [
      index.h("div", { class: "content" }, index.h("slot", null)),
      index.h("div", { class: "close" }, index.h("ks-icon", { name: "x", onClick: () => this.disable() }))
    ];
  }
  get root() { return index.getElement(this); }
};
InfoMessage.style = infoMessageCss;

const inputCheckCss = "ks-input-check{display:block;margin-bottom:15px}ks-input-check label{position:relative}ks-input-check input{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:16px;width:16px;overflow:hidden;margin:0px 8px 2px 0px;vertical-align:middle;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#e7e7e7;background-repeat:no-repeat;background-position:50% 50%;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0;font:inherit;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;-webkit-transition-property:background-color,border;transition-property:background-color,border}ks-input-check input:focus{outline:none;border-color:#222222}ks-input-check[invalid] input{border-color:var(--color-secondary-darker)}ks-input-check[invalid] input:focus{border-color:var(--color-secondary-darker)}ks-input-check input:checked{background-color:#222222;border-color:transparent}ks-input-check input[type=\"radio\"]{border-radius:50%}ks-input-check input:checked::after{content:\"🗸\";color:white;margin-top:3px;font-size:16px !important}ks-input-check input[type=\"radio\"]:checked::after{content:\"\";background-color:white;margin-top:0px;width:6px;height:6px;border-radius:50%}ks-input-check[invalid] span{color:var(--color-secondary-darker)}ks-input-check[invalid] p{margin:10px 0px 0px 0px;color:var(--color-secondary-darker);font-weight:700}ks-input-check[large] label{display:-webkit-box;display:-ms-flexbox;display:flex}ks-input-check[large] label input{width:32px;height:32px;margin:1px 12px 2px 0px}ks-input-check[large] label span{width:100%}ks-input-check[large] input:checked::after{margin-top:2px;font-size:18px}ks-input-check[large] input[type=\"radio\"]:checked::after{margin-top:0px;width:16px;height:16px}ks-input-check[large] p{margin-left:40px}";

const InputCheck = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.nomessage = false;
    this.invalid = false;
    this.invalidMessage = "";
  }
  render() {
    const type = this.radio ? "radio" :
      this.checkbox ? "checkbox" :
        "checkbox";
    return [
      index.h("label", null, index.h("input", { name: this.name, type: type, checked: this.currentCheck, value: this.value, onChange: (event) => {
          this.currentCheck = event.target.checked;
          this.Validate();
        } }), index.h("span", { innerHTML: this.label })),
      this.invalid && this.required && !this.nomessage ?
        index.h("p", null, this.invalidMessage)
        : null
    ];
  }
  componentWillLoad() {
    this.currentCheck = this.checked;
  }
  async IsValid() {
    return !this.invalid;
  }
  async Validate() {
    const input = this.root.querySelector("input");
    let valid = true;
    let message = "";
    if (this.required && !input.checked) {
      valid = false;
      message = "Pole wymagane.";
    }
    this.invalid = !valid;
    this.invalidMessage = message;
    return Promise.resolve();
  }
  get root() { return index.getElement(this); }
};
InputCheck.style = inputCheckCss;

const inputTextCss = "ks-input-text{display:block;margin-bottom:15px}ks-input-text label{display:block;margin-bottom:3px;color:#000000;font-size:14px}ks-input-text[invalid] label{color:var(--color-secondary-darker)}ks-input-text input{height:40px;vertical-align:middle;display:inline-block;max-width:100%;width:100%;padding:0 10px;background:#f4f4f4;color:#373737;border:1px solid #e5e5e5;overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0;font:inherit}ks-input-text input:focus{outline:none;background-color:#f4f4f4;color:#373737;border-color:#222222}ks-input-text[emphasis] input{border-color:black;background-color:white}ks-input-text[invalid] input{border-color:var(--color-secondary-darker);color:var(--color-secondary-darker)}ks-input-text[center] input{text-align:center !important}ks-input-text[large] input{font-size:17px;height:55px;padding-left:12px;padding-right:12px}ks-input-text[invalid] p{margin-top:5px;color:var(--color-secondary-darker)}ks-input-text[invalid] input::-webkit-input-placeholder{color:var(--color-secondary)}ks-input-text[invalid] input:-ms-input-placeholder{color:var(--color-secondary)}ks-input-text[invalid] input::-ms-input-placeholder{color:var(--color-secondary)}ks-input-text[invalid] input::-moz-placeholder{color:var(--color-secondary)}ks-input-text[invalid] input::placeholder{color:var(--color-secondary)}ks-input-text .wrapper{position:relative}ks-input-text .wrapper input{padding-left:45px}ks-input-text .wrapper ks-icon{position:absolute;top:50%;left:12px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}ks-input-text[value=\"\"] .wrapper ks-icon,ks-input-text:not([value]) .wrapper ks-icon{color:#aaaaaa}ks-input-text[invalid] .wrapper ks-icon{color:var(--color-secondary)}";

const InputText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.sameAs = "";
    this.regex = "";
    this.regexMessage = "";
    this.nomessage = false;
    this.novalidate = false;
    this.message = "";
    this.invalid = false;
  }
  render() {
    const type = this.email ? "email" :
      this.url ? "url" :
        this.password ? "password" :
          "text";
    return [
      this.label ?
        index.h("label", null, this.label)
        : null,
      !!this.icon ?
        index.h("div", { class: "wrapper" }, index.h("ks-icon", { name: this.icon, size: 0.95 }), index.h("input", { name: this.name, type: type, value: this.value, placeholder: this.placeholder, onChange: () => this.Change() }))
        :
          index.h("input", { name: this.name, type: type, value: this.value, placeholder: this.placeholder, onChange: () => this.Change() }),
      this.invalid && !this.nomessage ?
        index.h("p", null, this.message)
        : null
    ];
  }
  Change() {
    this.value = this.root.querySelector("input").value;
    if (!this.novalidate)
      this.Validate();
  }
  MessageWatcher() {
    this.invalid = this.message != "";
  }
  async IsValid() {
    return this.message == "" ? true : false;
  }
  async Validate() {
    const input = this.root.querySelector("input");
    let message = "";
    if (this.email) {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(input.value.toLowerCase()))
        message = "Nieprawidłowy adres e-mail.";
    }
    if (this.digits) {
      const regex = /^([0-9])*$/;
      if (!regex.test(input.value))
        message = "W polu dozwolone są tylko liczby.";
    }
    if (this.price) {
      input.value = input.value.replace(",", ".");
      if (!isNaN(parseFloat(input.value)))
        input.value = parseFloat(input.value).toFixed(2);
      const regex = /^([0-9])*([.][0-9]{1,2})?$/;
      if (!regex.test(input.value))
        message = "W polu dozwolone są tylko ceny bez waluty.";
    }
    if (this.sameAs) {
      const other = this.root.closest("form").querySelector(`input[name='${this.sameAs}']`);
      if (input.value != other.value)
        message += `Podane ${this.password ? "hasła" : "pola"} nie są takie same.`;
    }
    if (this.regex != "" && this.regexMessage != "") {
      const regex = new RegExp(this.regex, "i");
      if (!regex.test(input.value))
        message += this.regexMessage;
    }
    if (input.value.length < this.min)
      message += ` Pole wymaga minimum ${this.min} znaków.`;
    if (input.value.length > this.max)
      message += ` Pole nie może przekroczyć ${this.max} znaków.`;
    if (this.required && input.value.length == 0)
      message = "Pole wymagane.";
    this.message = message;
    return Promise.resolve();
  }
  get root() { return index.getElement(this); }
  static get watchers() { return {
    "message": ["MessageWatcher"]
  }; }
};
InputText.style = inputTextCss;

const loaderCss = "ks-loader{display:block;position:absolute;width:50px;height:50px;border-radius:50px;top:50%;left:50%;-webkit-transform:translate(-50%, -50%) scale(0);-ms-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);background-color:#ffffff;opacity:0;-webkit-animation:none;animation:none}ks-loader[dark]{background-color:#252525}ks-loader[running]{-webkit-animation:ks-loader-animation 1.0s infinite cubic-bezier(0, 0, 0.38, 0.99);animation:ks-loader-animation 1.0s infinite cubic-bezier(0, 0, 0.38, 0.99)}ks-loader[large]{width:100px;height:100px;border-radius:100px}ks-loader[oversized]{width:200px;height:200px;border-radius:200px}@-webkit-keyframes ks-loader-animation{0%{-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);opacity:0.5}100%{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);opacity:0}}@keyframes ks-loader-animation{0%{-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);opacity:0.5}100%{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);opacity:0}}";

const Loader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.running = true;
  }
  render() {
    return index.h(index.Host, null);
  }
};
Loader.style = loaderCss;

const store = index$1.createStore({
  cartLink: "",
  cartCount: 0,
  favouritesLink: "",
  favouritesCount: 0,
  loginLink: "",
  logoutLink: "",
  accountLink: "",
  categories: []
});

const navbarCss = "ks-navbar{display:block;min-height:104px}ks-navbar>nav{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;color:var(--navbar-text-color);background-color:var(--navbar-color)}ks-navbar>nav>.logo{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-navbar>nav>.search{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:unset;-ms-flex:unset;flex:unset;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-navbar>nav>.buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:unset;-ms-flex:unset;flex:unset;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-navbar>nav>.logo>div{margin-right:auto;margin-left:15px;max-width:217px;width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}ks-navbar>nav>.logo>div ks-img{max-width:217px;margin-right:15px}ks-navbar>nav>.logo>div .promo{display:block;font-size:11px;font-weight:700;text-decoration:none;color:var(--navbar-text-color);white-space:nowrap}@media only screen and (min-width: 640px){ks-navbar>nav>.logo{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-navbar>nav>.buttons{-webkit-box-flex:1;-ms-flex:1;flex:1}}@media only screen and (min-width: 1400px){ks-navbar>nav>.search{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-navbar>nav>.logo>div ks-img{width:217px}ks-navbar>nav>.logo>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:unset;width:unset}ks-navbar>nav>.logo>div .promo{margin-left:15px;display:block;padding:8px 20px 5px 20px;border-radius:50px;background-color:var(--navbar-text-color);color:var(--navbar-color);font-size:13px;font-weight:700}ks-navbar>nav>.logo>div a.promo{-webkit-box-shadow:0 0 0px rgba(255, 255, 255, 0.529);box-shadow:0 0 0px rgba(255, 255, 255, 0.529);-webkit-transition:box-shadow 0.2s ease;-webkit-transition:-webkit-box-shadow 0.2s ease;transition:-webkit-box-shadow 0.2s ease;transition:box-shadow 0.2s ease;transition:box-shadow 0.2s ease, -webkit-box-shadow 0.2s ease}ks-navbar>nav>.logo>div a.promo:hover{-webkit-box-shadow:0 0 15px rgba(255, 255, 255, 0.529);box-shadow:0 0 15px rgba(255, 255, 255, 0.529)}ks-navbar>nav>.logo>div a.promo:active{-webkit-box-shadow:0 0 8px rgba(255, 255, 255, 0.529);box-shadow:0 0 8px rgba(255, 255, 255, 0.529)}}#ks-navbar-menu-buttons{-webkit-box-sizing:border-box;box-sizing:border-box;min-height:70px;padding:0 15px;text-decoration:none}@media only screen and (max-width: 639px){ks-navbar .tablet-desktop{display:none}}@media only screen and (max-width: 959px){ks-navbar .desktop{display:none}}@media only screen and (min-width: 960px){ks-navbar .mobile-tablet{display:none}}";

const Navbar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.navbarRendered = index.createEvent(this, "navbarRendered", 7);
    this.mobile = false;
  }
  async componentDidLoad() {
    let cachedCategories = sessionStorage.getItem("category-data");
    if (cachedCategories == null) {
      var headers = new Headers();
      headers.append('pragma', 'no-cache');
      headers.append('cache-control', 'no-cache');
      const json = await fetch(this.categoryUrl, { method: 'GET', headers: headers })
        .then(response => response.json());
      const jsonString = JSON.stringify(json);
      sessionStorage.setItem("category-data", jsonString);
      cachedCategories = jsonString;
    }
    store.set("categories", JSON.parse(cachedCategories));
    this.render();
  }
  componentDidRender() {
    this.navbarRendered.emit();
  }
  componentWillLoad() {
    store.set("cartLink", this.cartLink);
    store.set("cartCount", this.cartCount);
    store.set("favouritesCount", this.heartCount);
    store.set("favouritesLink", this.heartLink);
    store.set("loginLink", this.loginLink);
    store.set("logoutLink", this.logoutLink);
    store.set("accountLink", this.accountLink);
    this.resizeHandler();
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 960 ? true : false;
  }
  async IncrementCart(count = "1") {
    const countInt = parseInt(count);
    const incremented = store.get("cartCount") + countInt;
    store.set("cartCount", incremented);
  }
  async DecrementCart() {
    const count = store.get("cartCount");
    if (count > 0)
      store.set("cartCount", count - 1);
  }
  async IncrementHeart() {
    const incremented = store.get("favouritesCount") + 1;
    store.set("favouritesCount", incremented);
  }
  async DecrementHeart() {
    const count = store.get("favouritesCount");
    if (count > 0)
      store.set("favouritesCount", count - 1);
  }
  render() {
    const favouritesCount = store.get("favouritesCount");
    const cartCount = store.get("cartCount");
    return [
      index.h("nav", null, index.h("div", { class: "logo" }, index.h("div", null, index.h("a", { href: "/" }, index.h("ks-img", { contained: true, sync: true, src: this.logo, width: 217, height: 35, alt: "kuchniasklep.pl" })), this.promo ? this.promoLink && !this.mobile ?
        index.h("a", { class: "promo", href: this.promoLink }, this.promo) :
        index.h("span", { class: "promo" }, this.promo)
        : null)), index.h("div", { class: "search" }, index.h("ks-navbar-search", null)), index.h("div", { class: "buttons", id: "ks-navbar-menu-buttons" }, index.h("ks-navbar-button", { name: "Kontakt", icon: "phone", onClick: () => this.root.querySelector("ks-navbar-contact-panel").Toggle() }), this.accountLink ?
        index.h("ks-navbar-button", { name: "Twoje konto", link: this.accountLink, icon: "user", class: "desktop" })
        : null, index.h("ks-navbar-button", { name: "Schowek", link: this.heartLink, icon: "star", count: favouritesCount, class: "tablet-desktop" }), index.h("ks-navbar-button", { name: "Koszyk", link: this.cartLink, icon: "shopping-bag", count: cartCount, class: "tablet-desktop" }), this.loginLink ?
        index.h("ks-navbar-button", { name: "Zaloguj", link: this.loginLink, icon: "key", class: "desktop" })
        : null, this.logoutLink ?
        index.h("ks-navbar-button", { name: "Wyloguj", link: this.logoutLink, icon: "log-out", class: "desktop" })
        : null, index.h("ks-navbar-button", { name: "Menu", icon: "menu", class: "mobile-tablet", onClick: () => this.root.querySelector("ks-navbar-sidebar").toggle() })), index.h("ks-navbar-contact-panel", { phone: this.phone, email: this.email, contact: this.contact })),
      !this.mobile ?
        index.h("ks-navbar-categories", null)
        : [
          index.h("ks-navbar-search-mobile", null),
          index.h("ks-navbar-sidebar", null)
        ]
    ];
  }
  get root() { return index.getElement(this); }
};
Navbar.style = navbarCss;

const navbarButtonCss = "ks-navbar-button{display:block;position:relative;height:70px}ks-navbar-button>a{outline-style:none;text-decoration:none !important;line-height:70px;min-width:60px;color:var(--navbar-text-color) !important;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-navbar-button>a:hover{background-color:var(--navbar-color-hover)}ks-navbar-button>a:active{background-color:var(--navbar-color-active)}ks-navbar-button>div{position:absolute;bottom:-28px;z-index:2147483649;width:250%;left:-75%;font-size:14px;text-transform:uppercase;text-align:center;color:var(--navbar-text-color);opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}ks-navbar-button>a:hover+div{opacity:1}ks-navbar-contact>div ks-navbar-button>div{display:none}@media only screen and (max-width: 1000px){ks-navbar-button>div{display:none}}ks-navbar-button .count{position:absolute;top:0;right:0;min-width:30px;height:30px;padding:0px 0px;margin-top:5px;border-radius:500px;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:middle;background:var(--color-secondary);color:var(--navbar-text-color);font-size:16px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-navbar-button>a{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}ks-navbar-button ks-icon svg.medium{stroke-width:1.2}";

const NavbarButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("a", { href: this.link, "aria-label": this.name }, index.h("ks-icon", { name: this.icon, size: 1.4 }), this.count && this.count != 0 ?
        index.h("span", { class: "count" }, this.count)
        : null),
      index.h("div", null, this.name)
    ];
  }
};
NavbarButton.style = navbarButtonCss;

const navbarCategoriesCss = "ks-navbar-categories{display:block}ks-navbar-categories>nav{background-color:var(--navbar-category-color);-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease;height:32px;border-top:1px solid transparent;border-bottom:1px solid transparent;position:relative}";

const NavbarCategories = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("nav", null, " ", store.get("categories").map(category => {
      let expanded = false;
      if (category.children)
        for (let x = 0; x < category.children.length; x++) {
          const c = category.children[x];
          if (c.children) {
            expanded = true;
            break;
          }
        }
      if (expanded)
        return index.h("ks-category-view", { category: category });
      else
        return index.h("ks-category-simple", { category: category });
    }), " ");
  }
};
NavbarCategories.style = navbarCategoriesCss;

const navbarContactPanelCss = "ks-navbar-contact-panel{display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;position:absolute;top:0px;left:0px;overflow:hidden;width:100%;color:var(--navbar-category-text-color);z-index:100000}ks-navbar-contact-panel.visible{-webkit-animation:fade-in 0.3s ease 1;animation:fade-in 0.3s ease 1}ks-navbar-contact-panel.hidden{-webkit-animation:fade-out 0.3s ease 1;animation:fade-out 0.3s ease 1}ks-navbar-contact-panel[toggled]{display:-webkit-box;display:-ms-flexbox;display:flex}ks-navbar-contact-panel .navbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;position:relative;right:0px;height:70px;background-color:var(--navbar-color)}ks-navbar-contact-panel .content{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;background-color:var(--navbar-category-color);-webkit-box-shadow:0 6px 6px rgba(0, 0, 0, 0.2);box-shadow:0 6px 6px rgba(0, 0, 0, 0.2)}ks-navbar-contact-panel .map{-webkit-box-flex:0;-ms-flex:none;flex:none;background-color:#eeeeee}ks-navbar-contact-panel .info{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:20px;font-size:16px;text-align:center}ks-navbar-contact-panel .address,ks-navbar-contact-panel .buttons{width:100%}ks-navbar-contact-panel .buttons a{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;margin:2px;padding:3px;font-size:18px;color:#ffffff;background-color:transparent;border:1px solid #ffffff;border-radius:500px;line-height:40px;text-align:center;text-decoration:none;text-transform:none;vertical-align:middle;overflow:visible}@media only screen and (max-width: 639px){ks-navbar-contact-panel .address{font-size:14px}ks-navbar-contact-panel .buttons a{font-size:14px}}@media only screen and (min-width: 640px){ks-navbar-contact-panel .margin{margin-right:10%}ks-navbar-contact-panel .address{width:calc(100% * 1 / 3.001)}ks-navbar-contact-panel .buttons{width:calc(100% * 2 / 3.001)}}@media only screen and (min-width: 1200px){ks-navbar-contact-panel .info>*{width:50%}}@media only screen and (max-width: 1200px){ks-navbar-contact-panel .content{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;height:calc(100vh - 72px)}}";

const NavbarContactPanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggled = false;
    this.mobile = 0;
    this.height = 0;
    this.width = 0;
    this.menuWidth = 0;
    this.initialized = false;
    this.visible = "hidden";
  }
  resizeHandler() {
    this.mobile = (window.innerWidth <= 1200) ?
      (window.innerWidth <= 960) ?
        (window.innerWidth <= 640) ? 3
          : 2
        : 1
      : 0;
    this.mapDimensions();
    this.FreezeScrolling();
    this.MenuWidth();
  }
  componentWillRender() {
    this.resizeHandler();
  }
  mapDimensions() {
    if (this.mobile == 0) {
      this.height = 250;
      this.width = Math.floor(document.documentElement.clientWidth * 0.6) - 1;
    }
    else if (this.mobile == 3) {
      this.height = document.documentElement.clientHeight - 350;
      this.width = document.documentElement.clientWidth;
    }
    else {
      this.height = document.documentElement.clientHeight - 350;
      this.width = document.documentElement.clientWidth;
    }
  }
  MenuWidth() {
    const buttons = document.getElementById("ks-navbar-menu-buttons");
    this.menuWidth = buttons.clientWidth;
  }
  FreezeScrolling() {
    if (this.toggled && this.mobile) {
      window.scrollTo(0, 0);
      document.querySelector('html').style.overflowY = "hidden";
    }
    else {
      document.querySelector('html').style.overflowY = "";
    }
  }
  async Toggle() {
    clearTimeout(this.fadeTimeout);
    this.FreezeScrolling();
    if (!this.initialized) {
      this.initialized = true;
      this.mapDimensions();
    }
    if (this.toggled) {
      this.visible = "hidden";
      this.fadeTimeout = setTimeout(() => {
        this.toggled = !this.toggled;
      }, 300);
    }
    else {
      this.visible = "visible";
      this.toggled = !this.toggled;
    }
  }
  render() {
    return index.h(index.Host, { class: this.visible }, index.h("div", { class: "navbar", style: { width: `${this.menuWidth}px` } }, index.h("ks-navbar-button", { icon: "x", onClick: () => this.Toggle() })), index.h("div", { class: "content" }, this.initialized ?
      index.h("div", { class: "map" }, index.h("iframe", { frameborder: "0", height: this.height, width: this.width, src: "https://maps.google.pl/maps?ie=UTF8&q=Pozna%C5%84ska+23%2C+58-500+Jelenia+G%C3%B3ra&gl=PL&hl=pl&t=m&iwloc=A&output=embed" }))
      : null, index.h("div", { class: "info ks-text-decorated" }, index.h("div", { class: "address", innerHTML: this.contact }), index.h("div", { class: "buttons" }, index.h("div", { class: "margin" }, index.h("a", { href: "tel:" + this.phone }, this.phone), index.h("br", null), index.h("a", { href: "mailto:" + this.email }, this.email))))));
  }
  get root() { return index.getElement(this); }
};
NavbarContactPanel.style = navbarContactPanelCss;

const navbarSearchCss = "ks-navbar-search{display:block}@media only screen and (max-width: 959px){ks-navbar-search{display:none}}ks-navbar-search form{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:350px;max-width:100%;height:40px;margin:0}ks-navbar-search a{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;bottom:0;left:auto;right:0;padding-right:10px;color:#151515;-webkit-transition:color 0.2s ease;transition:color 0.2s ease}ks-navbar-search a:hover{color:#858585}ks-navbar-search a:active{color:#b5b5b5}ks-navbar-search input{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:visible;-webkit-appearance:none;vertical-align:middle;margin:0;padding-right:50px;font-size:16px;text-align:center;background-color:#fff;border-radius:20px;border:none}ks-navbar-search input:focus{outline:0}";

const NavbarSearch = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  submit() {
    const form = this.root.querySelector("form");
    form.submit();
  }
  render() {
    return (index.h("form", { method: "post", action: "szukaj.html" }, index.h("a", { onClick: () => this.submit() }, index.h("ks-icon", { name: "search", size: 1.1 })), index.h("input", { "aria-label": "Szukaj produkt\u00F3w", name: "szukaj", type: "search" }), index.h("input", { type: "hidden", name: "postget", value: "tak" }), index.h("input", { type: "hidden", name: "opis", value: "nie" }), index.h("input", { type: "hidden", name: "nrkat", value: "tak" }), index.h("input", { type: "hidden", name: "kodprod", value: "tak" })));
  }
  get root() { return index.getElement(this); }
};
NavbarSearch.style = navbarSearchCss;

const navbarSearchMobileCss = "ks-navbar-search-mobile{display:block}@media only screen and (min-width: 960px){ks-navbar-search-mobile{display:none}}ks-navbar-search-mobile>nav{padding:15px;background-color:var(--navbar-category-color)}ks-navbar-search-mobile form{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:40px;margin:0}ks-navbar-search-mobile a{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;bottom:0;left:auto;right:0;padding-right:10px;color:#151515;-webkit-transition:color 0.2s ease;transition:color 0.2s ease}ks-navbar-search-mobile a:hover{color:#858585}ks-navbar-search-mobile a:active{color:#b5b5b5}ks-navbar-search-mobile input{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:visible;-webkit-appearance:none;vertical-align:middle;margin:0;padding-right:50px;font-size:16px;text-align:center;background-color:#fff;border-radius:20px;border:none}ks-navbar-search-mobile input:focus{outline:0}";

const NavbarSearchMobile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  submit() {
    const form = this.root.querySelector("form");
    form.submit();
  }
  render() {
    return (index.h("nav", null, index.h("form", { method: "post", action: "szukaj.html" }, index.h("a", { onClick: () => this.submit() }, index.h("ks-icon", { name: "search", size: 1.1 })), index.h("input", { "aria-label": "Szukaj produkt\u00F3w", name: "szukaj", type: "search" }), index.h("input", { type: "hidden", name: "postget", value: "tak" }), index.h("input", { type: "hidden", name: "opis", value: "nie" }), index.h("input", { type: "hidden", name: "nrkat", value: "tak" }), index.h("input", { type: "hidden", name: "kodprod", value: "tak" }))));
  }
  get root() { return index.getElement(this); }
};
NavbarSearchMobile.style = navbarSearchMobileCss;

const navbarSidebarCss = "ks-navbar-sidebar{display:block}ks-navbar-sidebar nav{position:absolute;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:300px;height:100%;padding:25px 30px;overflow-y:auto;background:#ffffff;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-navbar-sidebar nav .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-navbar-sidebar nav{width:270px;padding:20px}ks-navbar-sidebar nav .close{right:15px}}ks-navbar-sidebar nav ul{margin:0;padding:0;list-style:none;font-size:16px}ks-navbar-sidebar nav ul .header:first-child{margin-top:0px}ks-navbar-sidebar nav ul .header{margin-top:15px}ks-navbar-sidebar nav ul .divider{padding:0px;margin:5px 0px !important;border-bottom:1px solid #e2e2e2}ks-navbar-sidebar nav ul li{padding:5px 0px}ks-navbar-sidebar nav a{display:block;color:#252525 !important;text-decoration:none !important}ks-navbar-sidebar nav ul ks-icon{float:right}ks-navbar-sidebar nav ul .badge{float:right;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:30px;height:30px;padding:0px 0px;border-radius:50px;vertical-align:middle;background:#e21334;color:#ffffff;font-size:16px;-webkit-transform:translateX(4px);-ms-transform:translateX(4px);transform:translateX(4px)}ks-navbar-sidebar nav .parent a{position:relative}ks-navbar-sidebar nav .parent a ks-icon{position:absolute;top:0px;right:0px}ks-navbar-sidebar nav .children{max-height:0px;overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:max-height 0.3s ease,\n                padding 0.3s ease;transition:max-height 0.3s ease,\n                padding 0.3s ease}ks-navbar-sidebar nav .children.active{padding:8px 0px 5px 10px}ks-navbar-sidebar nav .children li{padding:3px 0}ks-navbar-sidebar nav .children .seeall{color:#bbbbbb  !important}@media (min-width: 640px){ks-navbar-sidebar nav .small{display:none !important}}";

const NavbarSidebar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = undefined;
    this.toggled = false;
  }
  expand(e, index) {
    if (!store.get("categories")[index].children)
      return;
    e.preventDefault();
    if (this.active == index)
      this.active = undefined;
    else
      this.active = index;
  }
  componentDidRender() {
    this.sidepanel = this.root.querySelector("ks-sidepanel");
  }
  childrenHeight(index, category) {
    if (this.active == index)
      return { maxHeight: (category.children.length + 1) * 34 + "px" };
    return { maxHeight: "0px" };
  }
  async toggle() {
    if (this.toggled)
      this.sidepanel.hide();
    else
      this.sidepanel.show();
    this.toggled = !this.toggled;
  }
  render() {
    const loginLink = store.get("loginLink");
    const cartLink = store.get("cartLink");
    const favouritesLink = store.get("favouritesLink");
    const accountLink = store.get("accountLink");
    const logoutLink = store.get("logoutLink");
    const cartCount = store.get("cartCount");
    const favouritesCount = store.get("favouritesCount");
    return index.h("ks-sidepanel", null, index.h("nav", null, index.h("button", { class: "close", onClick: () => this.toggle() }, index.h("ks-icon", { name: "x" })), index.h("ul", null, index.h("li", { class: "header" }, "MENU"), index.h("li", { class: "divider" }), loginLink ?
      index.h("li", null, index.h("a", { href: loginLink }, "Zaloguj si\u0119 ", index.h("ks-icon", { name: "log-in" })))
      : null, index.h("li", { class: "small" }, index.h("a", { href: cartLink }, "Koszyk", cartCount && cartCount != 0 ?
      index.h("span", { class: "badge" }, cartCount) :
      index.h("ks-icon", { name: "shopping-bag" }))), index.h("li", { class: "small" }, index.h("a", { href: favouritesLink }, "Schowek", favouritesCount && favouritesCount != 0 ?
      index.h("span", { class: "badge" }, favouritesCount) :
      index.h("ks-icon", { name: "star" }))), accountLink ?
      index.h("li", null, index.h("a", { href: accountLink }, "Panel Klienta ", index.h("ks-icon", { name: "user" })))
      : null, logoutLink ?
      index.h("li", null, index.h("a", { href: logoutLink }, "Wyloguj si\u0119 ", index.h("ks-icon", { name: "log-out" })))
      : null, index.h("li", { class: "header" }, "KATEGORIE"), index.h("li", { class: "divider" }), store.get("categories").map((category, index$1) => index.h("li", { class: category.children ? "parent" : "" }, index.h("a", { href: category.children ? "" : category.url, onClick: (e) => this.expand(e, index$1) }, category.name, category.children ?
      index.h("ks-icon", { name: (this.active == index$1) ? "minus" : "plus" })
      : null), category.children ?
      index.h("ul", { class: "children" + (this.active == index$1 ? " active" : ""), style: this.childrenHeight(index$1, category) }, category.children.map(child => index.h("li", null, index.h("a", { href: child.url }, child.name))), index.h("li", null, index.h("a", { href: category.url, class: "seeall" }, "Zobacz wszystko")))
      : null)))));
  }
  get root() { return index.getElement(this); }
};
NavbarSidebar.style = navbarSidebarCss;

const newsletterPopupCss = "ks-newsletter-popup{display:block}ks-newsletter-popup form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;max-width:720px}ks-newsletter-popup .info{padding:60px 60px 20px 60px;fill:#252525;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;min-height:10px}ks-newsletter-popup .info .top{width:100%;margin-bottom:10px;font-size:initial}ks-newsletter-popup .info .heading{width:100%;font-family:var(--font-emphasis);font-size:initial}ks-newsletter-popup .info p{text-align:center;margin-top:10px}ks-newsletter-popup .buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;min-height:10px}ks-newsletter-popup .buttons>*{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-newsletter-popup ks-input-check{margin:20px;font-size:13px;line-height:18px}ks-newsletter-popup .email-form{display:-webkit-box;display:-ms-flexbox;display:flex}ks-newsletter-popup .email-form>*{margin-bottom:0px}ks-newsletter-popup .email-form>* input{height:60px}ks-newsletter-popup .email-form>ks-button{width:30%}ks-newsletter-popup .email-form>ks-input-text{width:100%}@media (max-width: 540px){ks-newsletter-popup .info{padding:70px 30px 50px 30px}ks-newsletter-popup .info .top{display:none}ks-newsletter-popup .info p{font-size:12px}ks-newsletter-popup ks-input-check{font-size:11px;line-height:16px}ks-newsletter-popup .email-form{display:block}ks-newsletter-popup .email-form>ks-button{width:100%}}";

const NewsletterPopup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.loggedIn = true;
    this.agreement = "Wyrażam zgodę na przetwarzanie danych osobowych do celów marketingowych, w celu zbadania opinii o sklepie oraz na otrzymywanie informacji handlowych na wskazany przeze mnie adres e-mail.";
    this.infoMessage = "Aby otrzymać kupon rabatowy musisz posiadać konto w naszym sklepie. Minimalna wartość zamówienia wynosi: 100,00 zł";
    this.successHeading = "ZAPISANO DO NEWSLETTERA";
    this.faliureHeading = "BŁĄD ZAPISU";
  }
  componentDidLoad() {
    this.dialog = this.root.querySelector("ks-dialog");
    if (document.cookie.search("newsletterPopup=tak") == -1) {
      setTimeout(() => {
        this.Show();
      }, 4000);
    }
  }
  async requestHandler(event) {
    event.preventDefault();
    if (!await validate.ValidateInput(this.root.querySelector('form')))
      return;
    this.dialog.showLoading();
    const target = event.target;
    const data = new FormData(target);
    data.append("zgoda_newsletter_marketing", "1");
    data.append("zgoda_newsletter_info_handlowa", "1");
    data.append("popup", "1");
    fetch(this.api + "?tok=" + ksNewsletterToken, { body: data, method: "post" })
      .then(async (response) => {
      const result = await response.text();
      if (result.search("SUCCESS") != -1)
        this.dialog.showSuccess(this.successHeading, result.replace("SUCCESS", ""));
      else
        this.dialog.showFailure(this.faliureHeading, result);
    })
      .catch(async (error) => {
      let message = "";
      if (!window.navigator.onLine)
        message = "Brak internetu.";
      if (error.messsage)
        message = error.messsage;
      this.dialog.showFailure(this.faliureHeading, message);
    });
  }
  async Show() {
    this.dialog.show();
  }
  SetCookie() {
    var expiration = "";
    var expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    expiration = "expires=" + expirationDate.toUTCString() + "; ";
    document.cookie = "newsletterPopup=tak; " + expiration + "path=/";
  }
  render() {
    return [
      index.h("ks-dialog", { nopadding: true, onClosed: () => this.SetCookie() }, index.h("form", { onSubmit: e => this.requestHandler(e) }, index.h("div", { class: "info" }, index.h("svg", { class: "top", viewBox: "0 0 303 15", width: 909, height: 30 }, index.h("text", { x: "0", y: "12" }, "Zapisz si\u0119 do naszego Newslettera i zyskaj")), index.h("svg", { class: "heading", viewBox: "0 0 96 12", width: 980, height: 80 }, index.h("text", { x: "-1", y: "12" }, "KUPON 10Z\u0141")), index.h("p", null, this.infoMessage)), !this.loggedIn ?
        index.h("div", { class: "buttons" }, index.h("ks-button", { tall: true, name: "ZALOGUJ SI\u0118", link: this.loginLink }), index.h("ks-button", { tall: true, name: "NOWE KONTO", link: this.registerLink }))
        : [
          index.h("ks-input-check", { large: true, required: true, nomessage: true, name: "zgoda", label: this.agreement }),
          index.h("div", { class: "email-form" }, index.h("ks-input-text", { email: true, required: true, nomessage: true, center: true, name: "email", placeholder: "Adres email", value: this.email ? this.email : null }), index.h("ks-button", { submit: true, name: "ZAPISZ SI\u0118" }))
        ]))
    ];
  }
  get root() { return index.getElement(this); }
};
NewsletterPopup.style = newsletterPopupCss;

const overlayCss = "ks-overlay{display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;z-index:100000;position:fixed;height:100%;width:100%;top:0;left:0;-webkit-backdrop-filter:var(--overlay-filter);backdrop-filter:var(--overlay-filter);background-color:var(--overlay-background);color:var(--overlay-text)}ks-overlay.active{opacity:1.0;-webkit-animation:showanimation 0.3s ease;animation:showanimation 0.3s ease}ks-overlay:not(.active){opacity:0.0;-webkit-animation:hideanimation 0.3s ease;animation:hideanimation 0.3s ease}ks-overlay[dark]{-webkit-backdrop-filter:var(--overlay-dark-filter);backdrop-filter:var(--overlay-dark-filter);background-color:var(--overlay-dark-background);color:var(--overlay-dark-text)}@-webkit-keyframes showanimation{from{opacity:0}to{opacity:1}}@keyframes showanimation{from{opacity:0}to{opacity:1}}@-webkit-keyframes hideanimation{from{opacity:1}to{opacity:0}}@keyframes hideanimation{from{opacity:1}to{opacity:0}}";

const Overlay = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closed = index.createEvent(this, "closed", 7);
    this.dark = false;
    this.close = true;
    this.timeoutLength = 300;
    this.body = document.body;
  }
  componentDidLoad() {
    this.root.addEventListener('click', (e) => {
      if (e.currentTarget == e.target && this.close)
        this.hide();
    }, false);
  }
  async show() {
    clearTimeout(this.timeout);
    this.scrollToggle();
    this.root.classList.add("active");
    this.root.style.display = "flex";
  }
  async hide() {
    clearTimeout(this.timeout);
    this.scrollToggle();
    this.root.classList.remove("active");
    this.timeout = setTimeout(() => {
      this.root.style.display = "none";
    }, this.timeoutLength);
    this.closed.emit();
  }
  scrollToggle() {
    if (this.body.style.position == "fixed") {
      this.body.style.position = "static";
      this.body.style.overflowY = "auto";
      this.body.style.width = "unset";
      window.scrollTo(0, this.scroll);
      return;
    }
    this.scroll = window.scrollY;
    this.body.style.position = "fixed";
    this.body.style.top = `${-this.scroll}px`;
    this.body.style.overflowY = "scroll";
    this.body.style.width = "100%";
  }
  render() {
    return index.h("slot", null);
  }
  get root() { return index.getElement(this); }
};
Overlay.style = overlayCss;

const productCardCss = "ks-product-card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;text-align:center;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media (min-width: 360px){ks-product-card{width:calc(50% - 15px)}}@media (min-width: 640px){ks-product-card{width:230px}}ks-product-card .top{display:block;padding:15px;min-height:200px;color:inherit !important;text-decoration:none !important;font-size:14px}ks-product-card ks-img{height:auto}ks-product-card .price>*{display:block}ks-product-card .price .previous{color:#707070;font-size:14px}ks-product-card .price .current{color:var(--color-secondary);font-weight:bold;font-size:16px}ks-product-card .bottom{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:10px}ks-product-card .bottom .unavailable,ks-product-card .bottom .link{display:block;width:100%;padding:10px 10px;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;color:white;background-color:var(--color-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .bottom .link:hover{background-color:var(--color-secondary-hover)}ks-product-card .bottom .link:active{background-color:var(--color-secondary-active)}ks-product-card[unavailable] .top,ks-product-card[unavailable] .price{opacity:0.6}@media (max-width: 420px){ks-product-card .top{font-size:13px;padding:8px}ks-product-card .price{line-height:18px}}";

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
      index.h("a", { href: this.link, "aria-label": this.name, class: "top" }, index.h("ks-img", { src: this.img, width: 280, height: 280, alt: "zdj\u0119cie produktu" }), this.name),
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

const recipeCardCss = "ks-recipe-card{display:block;background-color:#ffffff;-webkit-box-shadow:0 2px 8px rgba(0,0,0,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.15)}ks-recipe-card>a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}ks-recipe-card .views{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:8px;right:12px;color:transparent;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-recipe-card .views ks-icon{margin-right:3px}ks-recipe-card .info{padding:15px;font-family:var(--font-regular);font-size:14px;text-align:center;text-decoration:none !important;color:#707070;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-recipe-card h3{font-family:var(--font-emphasis);font-size:20px;color:#252525;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;margin-bottom:5px}ks-recipe-card .dot{margin:0 8px}ks-recipe-card a:hover{text-decoration:none}ks-recipe-card>a:hover .info{color:var(--color-secondary)}ks-recipe-card>a:hover h3{color:var(--color-secondary)}ks-recipe-card>a:hover .views{color:#ffffff}@media screen and (min-width: 960px) and (max-width: 1199px){ks-recipe-card[hide-on-odd]{display:none !important}}";

const RecipeCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hideOnOdd = false;
  }
  render() {
    return (index.h("a", { href: this.link }, index.h("ks-img", { src: this.image, alt: this.heading, center: true }), index.h("div", { class: "info" }, index.h("h3", null, this.heading), index.h("div", null, index.h("span", null, this.cuisine), index.h("span", { class: "dot" }, "\u2022"), index.h("span", null, this.category))), index.h("div", { class: "views" }, index.h("ks-icon", { name: "search", size: 0.75 }), " ", this.views)));
  }
  get root() { return index.getElement(this); }
};
RecipeCard.style = recipeCardCss;

const Section = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.muted = false;
    this.dark = false;
    this.darker = false;
    this.expand = false;
    this.marginTop = false;
    this.mobileCollapse = false;
  }
  render() {
    const sectionStyle = this.muted ?
      "uk-section-muted" :
      this.dark ? "uk-section-secondary" : "";
    const containerSize = this.expand ? "uk-container-expand" : "";
    const margin = "uk-margin-bottom " +
      (this.mobileCollapse ?
        "uk-padding-remove uk-padding-small@s uk-padding-remove-vertical@s uk-margin-remove-top " :
        "uk-padding-small uk-padding-remove-vertical ") +
      (this.marginTop ? this.mobileCollapse ? "uk-margin-top@s " : "uk-margin-top " : "");
    const darker = { backgroundColor: "rgb(24, 24, 24)" };
    return (index.h("div", { class: "uk-section uk-padding-remove-vertical " + sectionStyle, style: this.darker ? darker : null }, index.h("div", { class: "uk-container " + containerSize + " " + margin }, index.h("slot", null))));
  }
};

const SeeMore = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.href = "";
    this.text = "";
  }
  render() {
    return (index.h("div", { class: "uk-flex uk-flex-center uk-margin-top" }, index.h("a", { href: this.href, class: "uk-button uk-button-default uk-margin-auto", style: {
        backgroundColor: "white",
        padding: "3px 30px",
        border: "none",
        borderRadius: "50px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.18)"
      } }, this.text)));
  }
};

const sidepanelCss = "ks-sidepanel{display:block}ks-sidepanel .content{position:absolute;z-index:100000;width:100%;height:100%;top:0px;left:0px;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);transition:transform 0.2s ease, -ms-transform 0.2 ease}ks-sidepanel .content.visible{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%)}ks-sidepanel .content.hidden{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}";

coreClass.Swiper.use([pagination.Pagination, thumbs.Thumbs]);
const SidePanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = "";
    this.message = "";
    this.stack = "";
    this.visible = "";
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show() {
    this.overlay.show();
    this.visible = "visible";
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  render() {
    return index.h("ks-overlay", null, index.h("div", { class: `content ${this.visible}` }, index.h("slot", null)));
  }
  get root() { return index.getElement(this); }
};
SidePanel.style = sidepanelCss;

exports.ks_article_card = ArticleCard;
exports.ks_banner = Banner;
exports.ks_banner_container = ArticleCard$1;
exports.ks_button = Button;
exports.ks_button_cart = ButtonCart;
exports.ks_button_fav = ButtonFav;
exports.ks_card = Card;
exports.ks_category_simple = NavbarCategorySimple;
exports.ks_category_view = NavbarCategoryView;
exports.ks_dialog = dialog;
exports.ks_featured = Featured;
exports.ks_featured_container = FeaturedContainer;
exports.ks_flex = Flex;
exports.ks_footer = Footer;
exports.ks_footer_button = FooterButton;
exports.ks_footer_links = FooterLinks;
exports.ks_grid = Grid;
exports.ks_homepage_info = HomepageInfo;
exports.ks_homepage_products = ProductContainer;
exports.ks_icon = Icon;
exports.ks_image = Image;
exports.ks_img = Img;
exports.ks_info_message = InfoMessage;
exports.ks_input_check = InputCheck;
exports.ks_input_text = InputText;
exports.ks_loader = Loader;
exports.ks_navbar = Navbar;
exports.ks_navbar_button = NavbarButton;
exports.ks_navbar_categories = NavbarCategories;
exports.ks_navbar_contact_panel = NavbarContactPanel;
exports.ks_navbar_search = NavbarSearch;
exports.ks_navbar_search_mobile = NavbarSearchMobile;
exports.ks_navbar_sidebar = NavbarSidebar;
exports.ks_newsletter_popup = NewsletterPopup;
exports.ks_overlay = Overlay;
exports.ks_product_card = ProductCard;
exports.ks_recipe_card = RecipeCard;
exports.ks_section = Section;
exports.ks_see_more = SeeMore;
exports.ks_sidepanel = SidePanel;
