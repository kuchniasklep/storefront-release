import { Component, h, Prop, Method, Element, State, Listen } from '@stencil/core';
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
    setTimeout(() => {
      this.visible = "visible";
    }, 10);
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  onClosed() {
    this.visible = "hidden";
  }
  render() {
    return h("ks-overlay", { dark: true },
      h("nav", { class: `content ${this.visible}` },
        h("button", { class: "close", onClick: () => this.hide() },
          h("ks-icon", { name: "x" })),
        h("slot", null)));
  }
  static get is() { return "ks-sidepanel"; }
  static get originalStyleUrls() { return {
    "$": ["sidepanel.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sidepanel.css"]
  }; }
  static get properties() { return {
    "left": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "left",
      "reflect": true
    }
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
  static get listeners() { return [{
      "name": "closed",
      "method": "onClosed",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
