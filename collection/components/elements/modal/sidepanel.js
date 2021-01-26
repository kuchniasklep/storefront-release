import { Component, h, Method, Element, State } from '@stencil/core';
import Swiper, { Pagination, Thumbs } from 'swiper';
Swiper.use([Pagination, Thumbs]);
export class SidePanel {
  constructor() {
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
    return h("ks-overlay", null,
      h("div", { class: `content ${this.visible}` },
        h("slot", null)));
  }
  static get is() { return "ks-sidepanel"; }
  static get originalStyleUrls() { return {
    "$": ["sidepanel.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sidepanel.css"]
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
