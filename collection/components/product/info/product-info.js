import { Component, h, Element, Listen, Event } from '@stencil/core';
import { OpenSuggestions } from "../../functions";
import { eachTracker } from '../../../global/data/tracker';
import { product } from "../../../global/data/product";
export class ProductInfo {
  componentDidLoad() {
    this.navbar = document.querySelector("ks-navbar");
    this.errorPopup = document.querySelector("ks-error-popup");
    this.messagePopup = document.querySelector('ks-message-popup');
  }
  async CountChange(event) {
    product.set("count", event.detail);
    let body = new FormData();
    body.append("id", product.get("id"));
    body.append("count", event.detail.toString());
    product.set("cartLoading", true);
    await this.fetch(product.get("api").shipping, body)
      .then(response => response.json())
      .then(json => {
      product.set("shippingTime", json.shippingTime);
      product.set("shippingMessage", json.shippingMessage);
    })
      .catch(error => this.errorPopup.show(error));
    product.set("cartLoading", false);
  }
  async TraitChange(event) {
    product.set("cartLoading", true);
    const traits = event.detail.reduce((accumulator, trait) => {
      return accumulator + "x" + trait[0].id + "-" + trait[1].id;
    }, "");
    let body = new FormData();
    body.append("id", product.get("id"));
    body.append("traits", traits);
    await this.fetch(product.get("api").trait, body)
      .then(response => response.json())
      .then(json => {
      if (json.currentPrice != undefined)
        product.set("currentPrice", json.currentPrice);
      if (json.previousPrice != undefined)
        product.set("previousPrice", json.previousPrice);
      if (json.ean != undefined)
        product.set("ean", json.ean);
      if (json.catalog != undefined)
        product.set("catalog", json.catalog);
      product.set("traitIDs", traits);
      if (json.image != undefined) {
        const images = product.get("images");
        images[0].full = json.image.full;
        images[0].preview = json.image.preview;
        images[0].thumb = json.image.thumb;
        product.set("images", images);
      }
    })
      .catch(error => this.errorPopup.show(error));
    product.set("cartLoading", false);
  }
  async AddToCart() {
    product.set("cartLoading", true);
    const id = product.get("id");
    const count = product.get("count").toString();
    const traitIDs = product.get("traitIDs");
    const name = product.get("name");
    const value = product.get("currentPrice");
    let body = new FormData();
    body.append("id", id);
    body.append("ilosc", count);
    body.append("nazwa", name);
    body.append("value", value);
    body.append("cechy", traitIDs);
    body.append("akcja", 'dodaj');
    body.append("miejsce", '0');
    await this.fetch(product.get("api").cart, body)
      .then(response => response.json())
      .then(async (data) => {
      if (!data.status) {
        this.messagePopup.show("Błąd dodawania produktu", data.message);
        return;
      }
      OpenSuggestions(id, name);
      if (data.event)
        eachTracker(item => item === null || item === void 0 ? void 0 : item.addToCart(data.event, id, name, parseFloat(product.get("currentPrice")), product.get("count"), "PLN"));
    })
      .catch(error => this.errorPopup.show(error));
    product.set("cartLoading", false);
  }
  async AddToFavourites() {
    product.set("favouritesLoading", true);
    let body = new FormData();
    body.append("id", product.get("id"));
    await this.fetch(product.get("api").favourites, body)
      .then(() => this.navbar.IncrementHeart())
      .catch(error => this.errorPopup.show(error));
    product.set("favouritesCompleted", true);
    product.set("favouritesLoading", false);
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
  componentDidRender() {
    this.productRendered.emit();
  }
  render() {
    return [
      h("div", { class: "top" },
        h("slot", { name: "top" })),
      h("div", { class: "left" },
        h("slot", { name: "left" })),
      h("div", { class: "bottom" },
        h("slot", null),
        h("slot", { name: "brand" }))
    ];
  }
  static get is() { return "ks-product-info"; }
  static get originalStyleUrls() { return {
    "$": ["product-info.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-info.css"]
  }; }
  static get events() { return [{
      "method": "productRendered",
      "name": "productRendered",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
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
