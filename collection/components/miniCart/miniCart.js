import { Component, Listen, Element, h } from '@stencil/core';
export class MiniCart {
  componentDidLoad() {
    this.PageHeight();
  }
  PageHeight() {
    const panel = document.querySelector("ks-navbar-panel .panel");
    if (panel) {
      panel.style.height = document.documentElement.offsetHeight - this.root.offsetHeight + "px";
      console.log(panel.style.height);
    }
  }
  resizeHandler() {
    this.PageHeight();
  }
  render() {
    return [
      h("div", { class: "arrow" }),
      h("div", { class: "content" }, "Test")
    ];
  }
  static get is() { return "ks-mini-cart"; }
  static get originalStyleUrls() { return {
    "$": ["miniCart.css"]
  }; }
  static get styleUrls() { return {
    "$": ["miniCart.css"]
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
