'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
const productStore = require('./product-store-e1a028d5.js');

function AppendSuggestions(api, id, name) {
  const suggestions = document.createElement("ks-product-suggestions");
  suggestions.setAttribute("product-id", id);
  suggestions.setAttribute("name", name);
  suggestions.setAttribute("api", api);
  document.body.appendChild(suggestions);
}

const productInfoCss = "ks-product-info{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:100%;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);padding:40px 30px}ks-product-info.hydrated{-webkit-animation:500ms fade-in;animation:500ms fade-in}ks-product-info>*{margin:0px auto;width:100%;max-width:700px}ks-product-info .left{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media only screen and (min-width: 960px){ks-product-info{display:-ms-grid;display:grid;-ms-grid-columns:48% 52%;grid-template-columns:48% 52%;-ms-grid-rows:auto 1fr;grid-template-rows:auto 1fr}ks-product-info>*:nth-child(1){-ms-grid-row:1;-ms-grid-column:1}ks-product-info>*:nth-child(2){-ms-grid-row:1;-ms-grid-column:2}ks-product-info>*:nth-child(3){-ms-grid-row:2;-ms-grid-column:1}ks-product-info>*:nth-child(4){-ms-grid-row:2;-ms-grid-column:2}ks-product-info>.top{-ms-grid-column:2;grid-column:2;-ms-grid-row:1;grid-row:1}ks-product-info>.left{-ms-grid-column:1;grid-column:1;-ms-grid-row:1;-ms-grid-row-span:2;grid-row:1 / 3}ks-product-info>.bottom{-ms-grid-column:2;grid-column:2;-ms-grid-row:2;grid-row:2}}@media only screen and (min-width: 1200px){ks-product-info{padding:40px 30px}}@media only screen and (max-width: 460px){ks-product-info{padding:20px 10px}}ks-product-info ks-product-button[large]{max-width:700px;margin:auto}ks-product-info .installments{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-bottom:10px;margin-left:auto;margin-right:auto;max-width:700px}ks-product-info .installments>*:not(:last-child){margin-right:5px}ks-product-info .installments>*:first-child{width:45%}ks-product-info .installments>*:last-child{width:55%}@media only screen and (max-width: 640px){ks-product-info .installments{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap}ks-product-info .installments>*{width:100% !important;margin-right:0}}ks-product-info .attributes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width: 640px){ks-product-info .attributes{margin-top:20px}}";

const ProductInfo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dataId = "";
    this.shippingApi = "";
    this.traitApi = "";
    this.cartApi = "";
    this.cartCountApi = "";
    this.favouritesApi = "";
    this.suggestionApi = "";
  }
  connectedCallback() {
    const dataElement = document.getElementById(this.dataId);
    const data = JSON.parse(dataElement.innerHTML);
    Object.keys(data).map(key => {
      productStore.store.set(key, data[key]);
    });
    if (productStore.store.get("images")[0].preview.height <= 400 || (productStore.store.get("negotiate") && productStore.store.get("shippingMessage"))) {
      productStore.store.set("externalPoints", true);
    }
  }
  componentDidLoad() {
    this.navbar = document.querySelector("ks-navbar");
    this.errorPopup = document.querySelector("ks-error-popup");
  }
  async CountChange(event) {
    productStore.store.set("count", event.detail);
    let body = new FormData();
    body.append("id", productStore.store.get("id"));
    body.append("count", event.detail.toString());
    productStore.store.set("cartLoading", true);
    await this.fetch(this.shippingApi, body)
      .then(response => response.json())
      .then(json => {
      productStore.store.set("shippingTime", json.shippingTime);
      productStore.store.set("shippingMessage", json.shippingMessage);
      if (productStore.store.get("negotiate") && productStore.store.get("shippingMessage"))
        productStore.store.set("externalPoints", true);
    })
      .catch(error => this.errorPopup.show(error));
    productStore.store.set("cartLoading", false);
  }
  async TraitChange(event) {
    productStore.store.set("cartLoading", true);
    const traits = event.detail.reduce((accumulator, trait) => {
      return accumulator + "x" + trait[0].id + "-" + trait[1].id;
    }, "");
    let body = new FormData();
    body.append("id", productStore.store.get("id"));
    body.append("traits", traits);
    await this.fetch(this.traitApi, body)
      .then(response => response.json())
      .then(json => {
      if (json.currentPrice != undefined)
        productStore.store.set("currentPrice", json.currentPrice);
      if (json.previousPrice != undefined)
        productStore.store.set("previousPrice", json.previousPrice);
      if (json.ean != undefined)
        productStore.store.set("ean", json.ean);
      if (json.catalog != undefined)
        productStore.store.set("catalog", json.catalog);
      productStore.store.set("traitIDs", traits);
      if (json.image != undefined) {
        const images = productStore.store.get("images");
        images[0].full = json.image.full;
        images[0].preview = json.image.preview;
        images[0].thumb = json.image.thumb;
        productStore.store.set("images", images);
      }
    })
      .catch(error => this.errorPopup.show(error));
    productStore.store.set("cartLoading", false);
  }
  async AddToCart() {
    productStore.store.set("cartLoading", true);
    const id = productStore.store.get("id");
    const count = productStore.store.get("count").toString();
    const traitIDs = productStore.store.get("traitIDs");
    const name = productStore.store.get("name");
    let countBody = new FormData();
    countBody.append("id", id);
    countBody.append("ilosc", count);
    countBody.append("cechy", traitIDs);
    countBody.append("akcja", 'dodaj');
    await this.fetch(this.cartCountApi, countBody)
      .then(async () => {
      let cartBody = new FormData();
      cartBody.append("id", id);
      cartBody.append("ilosc", count);
      cartBody.append("cechy", traitIDs);
      cartBody.append("komentarz", "");
      cartBody.append("komentarz", "");
      cartBody.append("txt", "");
      cartBody.append("wroc", "");
      cartBody.append("miejsce", "0");
      await this.fetch(this.cartApi, cartBody)
        .then(() => {
        this.navbar.IncrementCart(count);
        AppendSuggestions(this.suggestionApi, id, name);
      })
        .catch(error => this.errorPopup.show(error));
    })
      .catch(error => this.errorPopup.show(error));
    productStore.store.set("cartLoading", false);
  }
  async AddToFavourites() {
    productStore.store.set("favouritesLoading", true);
    let body = new FormData();
    body.append("id", productStore.store.get("id"));
    await this.fetch(this.favouritesApi, body)
      .then(() => this.navbar.IncrementHeart())
      .catch(error => this.errorPopup.show(error));
    productStore.store.set("favouritesCompleted", true);
    productStore.store.set("favouritesLoading", false);
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
  render() {
    return [
      index.h("div", { class: "top" }, index.h("slot", { name: "top" })),
      index.h("div", { class: "left" }, index.h("slot", { name: "left" })),
      index.h("div", { class: "bottom" }, index.h("slot", null), index.h("div", { class: "installments" }, index.h("slot", { name: "inst" })), index.h("div", { class: "attributes" }, index.h("slot", { name: "attr" })))
    ];
  }
  get root() { return index.getElement(this); }
};
ProductInfo.style = productInfoCss;

exports.ks_product_info = ProductInfo;
