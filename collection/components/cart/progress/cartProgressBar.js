import { Component, h, Prop, Element, Listen, State } from '@stencil/core';
import Tunnel from '../cartData';
export class CartProgressBar {
  constructor() {
    this.numberPlacement = false;
  }
  componentWillLoad() {
    this.resizeHandler();
    if (!this.shippingProgress) {
      this.root.hidden = true;
    }
    else {
      this.root.hidden = false;
      this.root.style.backgroundColor = this.shippingProgress.color;
    }
  }
  resizeHandler() {
    if (this.shippingProgress) {
      const barWidth = Math.min(this.productValue / this.shippingProgress.threshold * 100, 100);
      this.numberPlacement = (barWidth / 100 * window.innerWidth) > 200;
    }
  }
  componentWillUpdate() {
    this.componentWillLoad();
  }
  render() {
    const data = this.shippingProgress;
    if (!data)
      return null;
    const threshold = (Number.isInteger(data.threshold) ?
      data.threshold.toString() :
      data.threshold.toFixed(2)).replace(".", ",");
    const current = this.productValue.toFixed(2).replace(".", ",");
    const barWidth = Math.min(this.productValue / data.threshold * 100, 100);
    const thresholdAchieved = this.productValue >= data.threshold;
    return [
      h("div", { class: "heading ks-text-decorated" },
        h("div", null, data.heading),
        h("div", null,
          "od ",
          threshold,
          " z\u0142")),
      h("div", { class: "progress", style: { backgroundColor: thresholdAchieved ? "transparent" : "" } },
        h("div", { class: "progress-fill", style: { width: `${barWidth}%` } }, this.numberPlacement ?
          h("div", { class: "progress-number" }, thresholdAchieved ? h("span", { "uk-icon": "icon: check; ratio: 1.5" }) : `${current} zł`)
          : null),
        !this.numberPlacement ?
          h("div", { class: "progress-number outside" }, thresholdAchieved ? h("span", { "uk-icon": "icon: check; ratio: 1.5" }) : `${current} zł`)
          : null)
    ];
  }
  static get is() { return "ks-cart-progress-bar"; }
  static get originalStyleUrls() { return {
    "$": ["cartProgressBar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartProgressBar.css"]
  }; }
  static get properties() { return {
    "productValue": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "product-value",
      "reflect": false
    },
    "shippingProgress": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "CartDataShippingProgress",
        "resolved": "CartDataShippingProgress",
        "references": {
          "CartDataShippingProgress": {
            "location": "import",
            "path": "../cartData"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "numberPlacement": {}
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
Tunnel.injectProps(CartProgressBar, ['productValue', 'shippingProgress']);
