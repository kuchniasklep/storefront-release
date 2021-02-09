import { Component, h, Method, Element, State } from '@stencil/core';
import Swiper, { Pagination, Thumbs } from 'swiper';
Swiper.use([Pagination, Thumbs]);
export class MessagePopup {
  constructor() {
    this.name = "";
    this.message = "";
    this.link = "";
    this.linkname = "";
    this.visible = "";
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show(name, message, linkname = "", link = "") {
    this.name = name;
    this.message = message;
    this.linkname = linkname;
    this.link = link;
    this.overlay.show();
    this.visible = "visible";
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  render() {
    return h("ks-dialog", null,
      h("div", { class: "title" }, this.name),
      h("div", { class: "message", innerHTML: this.message }),
      this.linkname && this.link ?
        h("ks-button", { secondary: true, round: true, link: this.link, name: this.linkname })
        : null);
  }
  static get is() { return "ks-message-popup"; }
  static get originalStyleUrls() { return {
    "$": ["message-popup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["message-popup.css"]
  }; }
  static get states() { return {
    "name": {},
    "message": {},
    "link": {},
    "linkname": {},
    "visible": {}
  }; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "(name: string, message: string, linkname?: string, link?: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
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
