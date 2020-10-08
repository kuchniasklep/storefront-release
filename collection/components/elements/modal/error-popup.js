import { Component, h, Method, Element, State } from '@stencil/core';
import Swiper, { Pagination, Thumbs } from 'swiper';
Swiper.use([Pagination, Thumbs]);
export class ErrorPopup {
  constructor() {
    this.name = "";
    this.message = "";
    this.stack = "";
    this.visible = "";
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show(error) {
    this.name = error.name;
    this.message = error.message;
    this.stack = error.stack === undefined ? "" : error.stack;
    this.overlay.show();
    this.visible = "visible";
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  render() {
    let name = `${this.name}: ${this.message}`;
    let message = "";
    let stack = this.stack;
    const status = parseInt(this.name);
    if (!isNaN(status)) {
      if (status >= 400 && status < 500)
        message = `Wystąpił błąd aplikacji. `;
      if (status >= 500)
        message = `Wystąpił błąd serwera. `;
      stack += name;
    }
    else
      message = "Wystąpił błąd aplikacji. ";
    message += "Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";
    const userAgent = `User-agent: ${navigator.userAgent}`;
    return h("ks-overlay", { dark: true },
      h("div", { class: `content ${this.visible}` },
        h("div", { class: "bar" },
          h("div", { class: "title" }, name),
          h("div", { class: "close", onClick: () => this.hide() },
            h("ks-icon", { name: "x", size: 1.2 }))),
        h("div", { class: "message" }, message),
        h("div", { class: "data" },
          userAgent,
          h("span", { class: "stack" }, stack))));
  }
  static get is() { return "ks-error-popup"; }
  static get originalStyleUrls() { return {
    "$": ["error-popup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["error-popup.css"]
  }; }
  static get states() { return {
    "name": {},
    "message": {},
    "stack": {},
    "visible": {}
  }; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "(error: Error) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "Error": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "hide": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "root"; }
}
