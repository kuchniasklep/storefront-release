import { r as registerInstance, h, g as getElement } from './index-a14dfead.js';
import { O as OpenSuggestions$1, R as RemoveFromFavourites, A as AddToFavourites } from './functions-d67550e3.js';
import { e as eachTracker } from './tracker-dce0f039.js';
import { c as common } from './common-cf003c43.js';
import './index-c53317e0.js';

const buttonCartCss = "ks-button-cart{display:block;height:100%}ks-button-cart[expand]{-ms-flex:1;flex:1}ks-button-cart[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-cart[padding] button{padding:10px;min-height:60px}}ks-button-cart button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-cart button:hover{background-color:var(--product-card-primary-hover)}ks-button-cart button:active{background-color:var(--product-card-primary-active)}ks-button-cart[disabled] button{background-color:var(--product-card-disabled-color) !important;color:var(--product-card-disabled-text) !important}";

const ButtonCart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.count = "1";
    this.traits = "";
    this.expand = false;
    this.padding = false;
    this.icon = false;
    this.product = false;
    this.loading = false;
  }
  ClickHandler(count) {
    if (!this.disabled && !this.loading) {
      this.cart(count || this.count);
    }
  }
  async fetch(url, body) {
    const headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    return fetch(url, {
      method: 'POST',
      body: body,
      headers: headers,
      credentials: "same-origin"
    })
      .then(response => {
      if (!response.ok)
        throw { name: response.status, message: response.statusText };
      return response;
    });
  }
  async cart(count) {
    this.loading = true;
    const errorpopup = document.querySelector('ks-error-popup');
    const messagepopup = document.querySelector('ks-message-popup');
    const navbar = document.querySelector('ks-navbar');
    let body = new FormData();
    body.append("id", this.productId);
    body.append("ilosc", count);
    body.append("nazwa", this.name);
    body.append("value", this.price.toString());
    body.append("cechy", this.traits);
    body.append("akcja", 'dodaj');
    body.append("miejsce", '1');
    // Replace link string with state during prerendering rework
    await this.fetch("api/cart/product_add.php?tok=" + ksCartToken, body)
      .then(async (data) => data.json())
      .then(async (data) => {
      if (!data.status) {
        if (data.productLink)
          messagepopup.show("Wymagany wybór cechy", data.message, "Przejdź do produktu", this.url);
        else
          messagepopup.show("Błąd dodawania produktu", data.message);
        return;
      }
      navbar.IncrementCart(count);
      OpenSuggestions$1(this.productId, this.name);
      if (data.event)
        eachTracker(item => item === null || item === void 0 ? void 0 : item.addToCart(data.event, this.productId, this.name, this.price, 1, "PLN"));
    })
      .catch(error => {
      errorpopup.show(error);
    });
    this.loading = false;
  }
  ;
  async AddToCart(count) {
    this.ClickHandler(count);
  }
  async SetCount(count) {
    this.count = count;
  }
  render() {
    return h("button", { "aria-label": "Do koszyka", disabled: this.disabled, onClick: () => this.ClickHandler() }, this.loading ?
      h("ks-loader", { large: true })
      : this.icon ?
        h("ks-icon", { name: "shopping-bag", size: 0.9 }) :
        h("span", null, "DO KOSZYKA"));
  }
  get root() { return getElement(this); }
};
ButtonCart.style = buttonCartCss;

const buttonFavCss = "ks-button-fav{display:block;height:100%}ks-button-fav[expand]{-ms-flex:1;flex:1}ks-button-fav[padding] button{padding:5px;min-height:50px}@media (min-width: 700px){ks-button-fav[padding] button{min-height:60px;padding:10px}}ks-button-fav button{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-button-fav button:hover{background-color:var(--product-card-secondary-hover)}ks-button-fav button:active{background-color:var(--product-card-secondary-active)}ks-button-fav .success{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";

const ButtonFav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
        RemoveFromFavourites(this.productId, () => this.ResultHandler());
      else
        AddToFavourites(this.productId, () => this.ResultHandler());
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
    return (h("button", { "aria-label": "Do koszyka", onClick: () => this.ClickHandler() }, this.loading ? h("ks-loader", null) :
      h("ks-icon", { name: this.subtract ? "x" : "star" }), this.success ?
      h("div", { class: "success" }, h("ks-icon", { name: "check" }))
      : null));
  }
  get root() { return getElement(this); }
};
ButtonFav.style = buttonFavCss;

async function Fetch(url, body) {
  const headers = new Headers();
  headers.append('pragma', 'no-cache');
  headers.append('cache-control', 'no-cache');
  return fetch(url, {
    method: 'POST',
    body: body,
    headers: headers,
    credentials: "same-origin"
  })
    .then(response => {
    if (!response.ok)
      throw { name: response.status, message: response.statusText };
    return response;
  });
}

async function addToCart(id, count, name, price, traits = "", place = 1) {
  const errorpopup = document.querySelector('ks-error-popup');
  const messagepopup = document.querySelector('ks-message-popup');
  const navbar = document.querySelector('ks-navbar');
  let body = new FormData();
  body.append("id", id);
  body.append("ilosc", count.toString());
  body.append("nazwa", name);
  body.append("value", price.toString());
  body.append("cechy", traits);
  body.append("akcja", 'dodaj');
  body.append("miejsce", place.toString());
  const api = common.get('api').addToCart;
  return Fetch(api, body)
    .then(async (data) => data.json())
    .then(async (data) => {
    if (!data.status) {
      if (data.productLink)
        messagepopup.show("Wymagany wybór cechy", data.message, "Przejdź do produktu", this.url);
      else
        messagepopup.show("Błąd dodawania produktu", data.message);
      return;
    }
    navbar.IncrementCart(count.toString());
    OpenSuggestions(this.productId, this.name);
    if (data.event)
      eachTracker(item => item === null || item === void 0 ? void 0 : item.addToCart(data.event, this.productId, this.name, this.price, 1, "PLN"));
  })
    .catch(error => {
    errorpopup.show(error);
  });
}
function OpenSuggestions(id, name) {
  const suggestions = document.querySelector("ks-product-suggestions");
  suggestions.show(id, name);
}

async function addToFavourites(id) {
  const errorpopup = document.querySelector('ks-error-popup');
  const navbar = document.querySelector('ks-navbar');
  let cartBody = new FormData();
  cartBody.append("id", id);
  const api = common.get('api').addToFavourites;
  return Fetch(api, cartBody)
    .then(() => navbar.IncrementHeart())
    .catch(error => errorpopup.show(error));
}
async function removeFromFavourites(id) {
  const errorpopup = document.querySelector('ks-error-popup');
  const navbar = document.querySelector('ks-navbar');
  let cartBody = new FormData();
  cartBody.append("id", id);
  cartBody.append("akcja", "usun");
  const api = common.get('api').removeFromFavourites;
  return Fetch(api, cartBody)
    .then(() => navbar.DecrementHeart())
    .catch(error => errorpopup.show(error));
}

const productCardCss = "ks-product-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:100%;text-align:center;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}@media (min-width: 360px){ks-product-card{width:calc(50% - 15px)}}@media (min-width: 640px){ks-product-card{width:228px}}ks-product-card .top{display:block;padding:15px;min-height:200px;color:inherit !important;text-decoration:none !important;font-size:14px}ks-product-card ks-img{height:auto;margin-bottom:10px}ks-product-card .price>*{display:block;font-family:var(--font-emphasis)}ks-product-card .price .previous{color:#888888;font-size:15px}ks-product-card .price .current{color:var(--color-secondary);font-weight:bold;font-size:17px}ks-product-card .bottom{display:-ms-flexbox;display:flex;margin-top:10px}ks-product-card .bottom .unavailable,ks-product-card .bottom .link{display:block;width:100%;padding:10px 10px;font-size:.875rem;text-align:center;text-decoration:none;text-transform:none;color:white;background-color:var(--color-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .bottom .unavailable{color:#252525;background-color:#f1f1f1}ks-product-card .bottom .link:hover{background-color:var(--color-secondary-hover)}ks-product-card .bottom .link:active{background-color:var(--color-secondary-active)}ks-product-card[unavailable] .top,ks-product-card[unavailable] .price{opacity:0.6}ks-product-card[unavailable] .price .current{color:#252525}@media (max-width: 420px){ks-product-card .top{font-size:13px;padding:8px}ks-product-card .price{line-height:18px}}ks-product-card .cart{position:relative;display:block;width:100%;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;font-family:var(--font-regular);outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-primary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .cart:hover{background-color:var(--product-card-primary-hover)}ks-product-card .cart:active{background-color:var(--product-card-primary-active)}ks-product-card .fav{position:relative;display:block;height:100%;min-height:42px;min-width:44px;padding:1px 10px;font-size:.875rem;line-height:40px;text-align:center;text-decoration:none;text-transform:none;outline:none;border:none;border-radius:0px;color:white;background-color:var(--product-card-secondary);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-product-card .fav:hover{background-color:var(--product-card-secondary-hover)}ks-product-card .fav:active{background-color:var(--product-card-secondary-active)}ks-product-card .fav .success{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--product-card-secondary);-webkit-animation:fade-in 0.2s 1;animation:fade-in 0.2s 1}";

const ProductCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.unavailable = false;
    this.linkOnly = false;
    this.cartLoading = false;
    this.favLoading = false;
    this.favSuccess = false;
  }
  cart() {
    this.cartLoading = true;
    addToCart(this.productId, 1, this.name, this.currentPrice)
      .then(() => this.cartLoading = false);
  }
  favourites() {
    if (this.favLoading)
      return;
    this.favLoading = true;
    if (this.favSuccess) {
      this.favSuccess = false;
      removeFromFavourites(this.productId).then(() => {
        this.favLoading = false;
      });
    }
    else {
      addToFavourites(this.productId).then(() => {
        this.favSuccess = true;
        setTimeout(() => this.favLoading = false, 200);
      });
    }
  }
  render() {
    const currentPrice = this.currentPrice ? this.currentPrice.toFixed(2) + " zł" : "";
    const previousPrice = this.previousPrice ? this.previousPrice.toFixed(2) + " zł" : "";
    const translations = common.get('translations');
    return [
      h("a", { href: this.link, "aria-label": this.name, class: "top" }, h("ks-img", { fill: true, src: this.img, width: 280, height: 280, alt: this.name }), h("span", null, this.name)),
      h("div", { class: "price" }, this.previousPrice ?
        h("s", { class: "previous" }, previousPrice)
        : null, h("span", { class: "current" }, currentPrice)),
      h("div", { class: "bottom" }, this.unavailable ? h("a", { href: this.link, class: "unavailable" }, translations.unavailable)
        : this.linkOnly ? h("a", { href: this.link, class: "link" }, translations.seeMore)
          : [
            h("button", { class: "fav", onClick: () => this.favourites() }, this.favLoading ? h("ks-loader", null) : h("ks-icon", { name: "star" }), this.favSuccess ?
              h("div", { class: "success" }, h("ks-icon", { name: "check" }))
              : null),
            h("button", { class: "cart", onClick: () => this.cart() }, this.cartLoading ?
              h("ks-loader", { large: true }) :
              h("span", null, translations.addToCart))
          ])
    ];
  }
};
ProductCard.style = productCardCss;

const productContainerCss = "ks-product-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-pack:center;justify-content:center;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px;padding:0 10px}ks-product-container>*{margin-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>*{width:50%}}@media (min-width: 640px){ks-product-container>*{width:228px}}";

const Container = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("slot", null);
  }
};
Container.style = productContainerCss;

export { ButtonCart as ks_button_cart, ButtonFav as ks_button_fav, ProductCard as ks_product_card, Container as ks_product_container };
