import { Component, h, Prop, Element, Listen } from '@stencil/core';
import { AppendSuggestions } from "../product-functions";
import { store } from "../product-store";
export class ProductInfo {
  constructor() {
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
      store.set(key, data[key]);
    });
    if (store.get("negotiate") && store.get("shippingMessage"))
      store.set("externalPoints", true);
  }
  componentDidLoad() {
    this.navbar = document.querySelector("ks-navbar");
    this.errorPopup = document.querySelector("ks-error-popup");
  }
  async CountChange(event) {
    store.set("count", event.detail);
    let body = new FormData();
    body.append("id", store.get("id"));
    body.append("count", event.detail.toString());
    store.set("cartLoading", true);
    await this.fetch(this.shippingApi, body)
      .then(response => response.json())
      .then(json => {
      store.set("shippingTime", json.shippingTime);
      store.set("shippingMessage", json.shippingMessage);
      if (store.get("negotiate") && store.get("shippingMessage"))
        store.set("externalPoints", true);
    })
      .catch(error => this.errorPopup.show(error));
    store.set("cartLoading", false);
  }
  async TraitChange(event) {
    store.set("cartLoading", true);
    const traits = event.detail.reduce((accumulator, trait) => {
      return accumulator + "x" + trait[0].id + "-" + trait[1].id;
    }, "");
    let body = new FormData();
    body.append("id", store.get("id"));
    body.append("traits", traits);
    await this.fetch(this.traitApi, body)
      .then(response => response.json())
      .then(json => {
      if (json.currentPrice != undefined)
        store.set("currentPrice", json.currentPrice);
      if (json.previousPrice != undefined)
        store.set("previousPrice", json.previousPrice);
      if (json.ean != undefined)
        store.set("ean", json.ean);
      if (json.catalog != undefined)
        store.set("catalog", json.catalog);
      store.set("traitIDs", traits);
      if (json.image != undefined) {
        const images = store.get("images");
        images[0].full = json.image.full;
        images[0].preview = json.image.preview;
        images[0].thumb = json.image.thumb;
        store.set("images", images);
      }
    })
      .catch(error => this.errorPopup.show(error));
    store.set("cartLoading", false);
  }
  async AddToCart() {
    store.set("cartLoading", true);
    const id = store.get("id");
    const count = store.get("count").toString();
    const traitIDs = store.get("traitIDs");
    const name = store.get("name");
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
    store.set("cartLoading", false);
  }
  async AddToFavourites() {
    store.set("favouritesLoading", true);
    let body = new FormData();
    body.append("id", store.get("id"));
    await this.fetch(this.favouritesApi, body)
      .then(() => this.navbar.IncrementHeart())
      .catch(error => this.errorPopup.show(error));
    store.set("favouritesCompleted", true);
    store.set("favouritesLoading", false);
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
      h("div", { class: "top" },
        h("slot", { name: "top" })),
      h("div", { class: "left" },
        h("slot", { name: "left" })),
      h("div", { class: "bottom" },
        h("slot", null),
        h("div", { class: "installments" },
          h("slot", { name: "inst" })),
        h("div", { class: "attributes" },
          h("slot", { name: "attr" })))
    ];
  }
  static get is() { return "ks-product-info"; }
  static get originalStyleUrls() { return {
    "$": ["product-info.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-info.css"]
  }; }
  static get properties() { return {
    "dataId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "data-id",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "shippingApi": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "shipping-api",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "traitApi": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "trait-api",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "cartApi": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "cart-api",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "cartCountApi": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "cart-count-api",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "favouritesApi": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "favourites-api",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "suggestionApi": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "suggestion-api",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "countChange",
      "method": "CountChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "traitChange",
      "method": "TraitChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "addToCart",
      "method": "AddToCart",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "addToFavourites",
      "method": "AddToFavourites",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
