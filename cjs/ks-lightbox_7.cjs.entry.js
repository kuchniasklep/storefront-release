'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-601dda3f.js');
const coreClass = require('./core-class-be7c7c21.js');
const pagination = require('./pagination-36e87606.js');
const thumbs = require('./thumbs-62d86163.js');
const product = require('./product-36eb00ad.js');
const validate = require('./validate-6c61d7c0.js');
require('./index-6a08c494.js');

const lightboxCss = "ks-lightbox{display:block}ks-lightbox .content{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding:10px;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}ks-lightbox .close{position:absolute;top:15px;right:15px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color);border-radius:100%;padding:5px;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;z-index:1000000;transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;-webkit-transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease,\n                -webkit-transform 0.1s ease}ks-lightbox .close:hover{background-color:var(--lightbox-element-color-hover);-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}ks-lightbox .close:active{background-color:var(--lightbox-element-color-active);-webkit-transform:scale(0.95, 0.95);transform:scale(0.95, 0.95)}ks-lightbox .lightbox-full{width:100%;-ms-flex:1;flex:1}ks-lightbox .lightbox-thumb{margin-top:10px;width:100%}ks-lightbox .lightbox-thumb .swiper-slide{height:70px;width:70px;overflow:hidden;opacity:0.6;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-lightbox .lightbox-thumb .swiper-slide:hover{opacity:0.8}ks-lightbox .lightbox-thumb .swiper-slide-thumb-active{opacity:1 !important}ks-lightbox .swiper-pagination{display:none}ks-lightbox .swiper-pagination{bottom:0px !important;padding:5px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color)}ks-lightbox .swiper-pagination-bullet{background-color:#ffffff}ks-lightbox .swiper-pagination-bullet-active{background-color:#ffffff}@media only screen and (max-width: 720px){ks-lightbox .content{padding:0}ks-lightbox .swiper-pagination{display:block}ks-lightbox .lightbox-thumb{display:none !important}ks-lightbox .lightbox-full .swiper-slide ks-img img{border-radius:0px}}";

coreClass.Swiper.use([pagination.Pagination, thumbs.Thumbs]);
let Lightbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show(index = 0) {
    this.overlay.show().then(() => {
      var _a;
      if (this.carousel == undefined) {
        this.thumbs = new coreClass.Swiper('.lightbox-thumb', {
          observer: true,
          observeParents: true,
          grabCursor: true,
          slidesPerView: "auto",
          centerInsufficientSlides: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          spaceBetween: 10,
          resistanceRatio: 0.7
        });
        this.carousel = new coreClass.Swiper('.lightbox-full', {
          observer: true,
          observeParents: true,
          centeredSlides: true,
          slidesPerView: "auto",
          spaceBetween: 20,
          preventInteractionOnTransition: true,
          thumbs: {
            swiper: this.thumbs
          },
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }
      (_a = this.carousel) === null || _a === void 0 ? void 0 : _a.slideTo(index, 0, false);
    });
  }
  async hide() {
    this.overlay.hide();
  }
  render() {
    return index.h("ks-overlay", { dark: true }, index.h("div", { class: "content" }, index.h("div", { class: "swiper-container lightbox-full" }, index.h("div", { class: "swiper-wrapper" }, this.data.map(image => index.h("div", { class: "swiper-slide" }, index.h("ks-img", { contained: true, center: true, target: ".lightbox-full", src: image.full.url, width: image.full.width, height: image.full.height })))), index.h("div", { class: "swiper-pagination" })), index.h("div", { class: "swiper-container lightbox-thumb" }, index.h("div", { class: "swiper-wrapper" }, this.data.map(image => index.h("div", { class: "swiper-slide" }, index.h("ks-img", { contained: true, center: true, src: image.thumb.url, width: image.thumb.width, height: image.thumb.height })))))), index.h("div", { class: "close", onClick: () => this.overlay.hide() }, index.h("ks-icon", { name: "x", size: 1.2 })));
  }
  get root() { return index.getElement(this); }
};
Lightbox.style = lightboxCss;

const productBrandCss = "ks-product-brand{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;right:0;left:0}ks-product-brand>a{display:block;max-width:150px;height:60px;transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;-webkit-transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease,\n                -webkit-transform 0.3s ease}ks-product-brand>a:hover{opacity:0.8}ks-product-brand>a:active{opacity:0.5;-webkit-transform:scale(0.95);transform:scale(0.95)}ks-product-brand img{width:unset !important}@media (max-width: 960px){ks-product-brand{-ms-flex-pack:center;justify-content:center}}";

let ProductBrand = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const brand = product.product.get("brand");
    return index.h("a", { href: brand.link }, index.h("ks-img2", { src: brand.logo, alt: brand.name, width: brand.width, height: brand.height }));
  }
};
ProductBrand.style = productBrandCss;

const productInstallmentsCss = "ks-product-installments{display:block;position:relative}ks-product-installments>.arrow{display:none;position:absolute;bottom:-5px;left:50%;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-installments>.content{display:none;position:absolute;top:55px;width:100%;z-index:10;background-color:var(--color-dark);border-radius:20px;overflow:hidden}ks-product-installments[active]>.arrow{display:block}ks-product-installments[active]>.content{display:block}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]{background-color:#222222}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:hover{background-color:#2e2e2e}ks-product-installments>.content>*:nth-child(2n+2) ks-product-button[icon]:active{background-color:#3a3a3a}";

let ProductInfo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = "";
    this.active = false;
  }
  clickOutside(event) {
    const target = event.target;
    if (!target.closest('ks-product-installments'))
      this.active = false;
    return target;
  }
  render() {
    return [
      index.h("ks-product-button", { onClick: () => this.active = !this.active }, this.name),
      index.h("div", { class: "arrow" }),
      index.h("div", { class: "content" }, index.h("slot", null))
    ];
  }
  get root() { return index.getElement(this); }
};
ProductInfo.style = productInstallmentsCss;

const productNotifyCss = "ks-product-notify{display:block}ks-product-notify fieldset{border:none;margin:0;padding:0}ks-product-notify .info{text-align:center;margin-bottom:40px}ks-product-notify h3{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-notify ks-input-check{margin-bottom:5px}ks-product-notify ks-button{margin-top:20px}";

let ProductNotify = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async requestHandler(event) {
    const notifyStrings = product.product.get("notifyStrings");
    const productId = product.product.get("id");
    const api = product.product.get("api").notify;
    event.preventDefault();
    if (!await validate.ValidateInput(this.root.querySelector('form')))
      return;
    this.dialog.showLoading();
    const target = event.target;
    const data = new FormData(target);
    data.append("product", productId);
    await fetch(api, { body: data, method: "post" })
      .then(async (response) => response.json())
      .then(async (data) => {
      const containsData = "status" in data && "heading" in data && "paragraph" in data;
      if (!containsData)
        throw new Error(notifyStrings.errorParagraph);
      if (data.status == "success")
        this.dialog.showSuccess(data.heading, data.paragraph);
      else
        this.dialog.showFailure(data.heading, data.paragraph);
    })
      .catch(async (error) => {
      let message = "";
      if (!window.navigator.onLine)
        message = "Brak internetu.";
      else if (error.message != "")
        message = error.message;
      console.log(error.message);
      this.dialog.showFailure(notifyStrings.errorHeading, message);
    });
  }
  async show() {
    this.dialog.show();
  }
  componentDidLoad() {
    this.dialog = this.root.querySelector('ks-dialog');
  }
  render() {
    const notifyStrings = product.product.get("notifyStrings");
    return index.h("ks-dialog", null, index.h("form", { onSubmit: e => this.requestHandler(e) }, index.h("fieldset", null, index.h("div", { class: "info" }, index.h("h3", null, notifyStrings.heading), index.h("p", null, notifyStrings.paragraph)), index.h("ks-input-text", { email: true, name: "email", required: true, nomessage: true, placeholder: "E-mail", icon: "mail" }), index.h("ks-input-check", { checked: true, name: "backorders", nomessage: true, label: notifyStrings.backorders }), index.h("ks-input-check", { name: "zgoda", required: true, nomessage: true, label: notifyStrings.agreement }), index.h("ks-button", { submit: true, name: "POWIADOM MNIE" }))));
  }
  get root() { return index.getElement(this); }
};
ProductNotify.style = productNotifyCss;

const productPurchaseCss = "ks-product-purchase{display:-ms-flexbox;display:flex;margin:10px 0 15px 0;width:100%}ks-product-purchase>button{position:relative;overflow:hidden;border-style:none;outline-style:none;border-radius:50px;margin-right:10px;background-color:var(--color-secondary);color:var(--text-color-secondary);font-family:var(--product-price-font);font-size:18px;font-weight:700;-webkit-transition:var(--transition-background-color),\n                var(--transition-color);transition:var(--transition-background-color),\n                var(--transition-color)}ks-product-purchase button:hover{background-color:var(--color-secondary-hover)}ks-product-purchase button:active{background-color:var(--color-secondary-active)}ks-product-purchase button.disabled{background-color:#e4e4e4;color:var(--text-color-faded);font-size:17px;line-height:17px}ks-product-purchase button.disabled:hover{background-color:#cfcfcf}ks-product-purchase button.disabled:active{background-color:#bdbdbd}@media only screen and (max-width: 1200px){ks-product-purchase button{font-family:var(--product-price-font);font-size:var(--product-price-size-small);line-height:var(--product-price-size-small)}}@media only screen and (max-width: 960px){ks-product-purchase{-ms-flex-pack:center;justify-content:center;margin-top:10px;max-width:400px}ks-product-purchase>button.fav{-ms-flex-order:3;order:3;margin-right:0px}ks-product-purchase>ks-product-count{-ms-flex-order:1;order:1}ks-product-purchase>button.cart{-ms-flex-order:2;order:2;max-width:none}}@media only screen and (max-width: 560px){ks-product-purchase{-ms-flex-wrap:wrap;flex-wrap:wrap}}ks-product-purchase>button.cart{max-width:300px;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-purchase>button.fav{-ms-flex:0 0 auto;flex:0 0 auto;padding:13px;line-height:0px;background-color:#e4e4e4;color:var(--text-color-faded)}ks-product-purchase>button.fav ks-icon{-webkit-transform:rotate(0);transform:rotate(0);transition:-webkit-transform 0.1s ease;-webkit-transition:-webkit-transform 0.1s ease;transition:transform 0.1s ease;transition:transform 0.1s ease, -webkit-transform 0.1s ease}ks-product-purchase>button.fav:hover ks-icon{-webkit-transform:rotate(72deg);transform:rotate(72deg)}ks-product-purchase button.loading{color:transparent}ks-product-purchase button ks-loader{opacity:0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-purchase button.loading ks-loader{opacity:1}ks-product-purchase button.fav.completed{color:transparent;background-color:var(--color-secondary) !important}ks-product-purchase button.fav ks-icon.completed{position:absolute;top:50%;left:50%;opacity:0;color:white;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity);-webkit-transition-delay:0.3s;transition-delay:0.3s}ks-product-purchase button.fav.completed ks-icon.completed{opacity:1}";

let ProductPurchase = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.addToCart = index.createEvent(this, "addToCart", 7);
    this.addToFavourites = index.createEvent(this, "addToFavourites", 7);
    this.cartText = "Do koszyka";
    this.availabilityText = "Powiadom o dostępności";
    this.favouritesIcon = "star";
    this.cartAnimation = false;
    this.favouritesAnimation = false;
  }
  CartHandler() {
    if (product.product.get("availability") > 0) {
      if (!product.product.get("cartLoading"))
        this.addToCart.emit();
    }
    else
      document.querySelector("ks-product-notify").show();
  }
  FavouritesHandler() {
    if (!product.product.get("favouritesLoading") && !product.product.get("favouritesCompleted")) {
      this.addToFavourites.emit();
    }
  }
  render() {
    const available = product.product.get("availability") > 0;
    if (product.product.get("cartLoading"))
      this.cartAnimation = true;
    else
      setTimeout(() => {
        this.cartAnimation = false;
      }, 300);
    if (product.product.get("favouritesLoading"))
      this.favouritesAnimation = true;
    else
      setTimeout(() => {
        this.favouritesAnimation = false;
      }, 300);
    const favClass = [
      "fav",
      product.product.get("favouritesCompleted") ? "completed" : null,
      product.product.get("favouritesLoading") ? "loading" : null
    ];
    return [
      index.h("button", { onClick: () => this.CartHandler(), class: "cart" + (product.product.get("cartLoading") ? " loading" : "") + (available ? "" : " disabled") }, available ? this.cartText : this.availabilityText, index.h("ks-loader", { oversized: true, running: this.cartAnimation })),
      available ? index.h("ks-product-count", null) : null,
      index.h("button", { onClick: () => this.FavouritesHandler(), class: favClass.join(" ") }, index.h("ks-icon", { name: this.favouritesIcon }), index.h("ks-loader", { running: this.favouritesAnimation }), index.h("ks-icon", { class: "completed", name: "check" }))
    ];
  }
  get root() { return index.getElement(this); }
};
ProductPurchase.style = productPurchaseCss;

const productTagsCss = "ks-product-tags{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}ks-product-tags div{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-tags a{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:5px 15px;margin:2px;border-radius:20px;font-size:14px;font-family:var(--font-emphsis);text-align:center;background-color:#252525;color:white}ks-product-tags ks-button{display:none;margin-top:8px}@media (max-width: 1200px){ks-product-tags a{width:calc(33.33% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+7){display:none}ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 800px){ks-product-tags a{width:calc(50% - 8px);margin:4px}ks-product-tags:not([expanded]) a:nth-child(n+5){display:none}ks-product-tags[expandable='2'] ks-button,ks-product-tags[expandable='3'] ks-button{display:initial}}@media (max-width: 460px){ks-product-tags a{width:100%}ks-product-tags:not([expanded]) a:nth-child(n+4){display:none}ks-product-tags[expandable] ks-button{display:initial}}";

let ProductTags = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.expanded = false;
  }
  componentDidLoad() {
    const count = this.root.querySelectorAll('a').length;
    if (count > 6)
      this.expandable = 3;
    else if (count > 4)
      this.expandable = 2;
    else if (count > 3)
      this.expandable = 1;
  }
  render() {
    return [
      index.h("div", null, index.h("slot", null)),
      index.h("ks-button", { transparent: true, narrower: true, round: true, icon: this.expanded ? "minus" : "plus", onClick: () => this.expanded = !this.expanded })
    ];
  }
  get root() { return index.getElement(this); }
};
ProductTags.style = productTagsCss;

const productTooltipCss = "ks-product-tooltip{display:block;position:relative}ks-product-tooltip .message,ks-product-tooltip .arrow{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none;position:absolute;z-index:2;opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-product-tooltip .message{background-color:#252525;color:#ffffff;padding:17px 20px;margin-top:5px;border-radius:20px;font-size:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-product-tooltip .arrow{bottom:-10px;left:80px;-webkit-transform:translateX(-5px);transform:translateX(-5px);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #252525}ks-product-tooltip[active] .message,ks-product-tooltip[active] .arrow{opacity:1}";

let ProductButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = false;
  }
  onMouseover() {
    this.active = true;
  }
  onMouseout() {
    this.active = false;
  }
  render() {
    return [
      index.h("slot", null),
      index.h("div", { class: "arrow" }),
      index.h("div", { class: "message" }, this.message)
    ];
  }
};
ProductButton.style = productTooltipCss;

exports.ks_lightbox = Lightbox;
exports.ks_product_brand = ProductBrand;
exports.ks_product_installments = ProductInfo;
exports.ks_product_notify = ProductNotify;
exports.ks_product_purchase = ProductPurchase;
exports.ks_product_tags = ProductTags;
exports.ks_product_tooltip = ProductButton;
