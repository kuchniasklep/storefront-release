import { Component, h, Element, Prop, State, Listen } from '@stencil/core';
export class OrderButtonPair {
  constructor() {
    this.mobile = false;
    this.linkLeft = "";
    this.linkRight = "";
    this.split = 50;
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 640;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.resizeHandler();
  }
  render() {
    const split = this.mobile ? "100%" : this.split - 1 + "%";
    return (h("div", { class: "ks-text-decorated uk-text-bold uk-flex uk-flex-wrap uk-margin-top" },
      h("a", { href: this.linkLeft, class: `uk-display-block uk-button uk-button-default ${this.mobile ? "uk-margin-small-bottom" : "uk-margin-right"}`, style: { fontSize: "18px", width: split } },
        h("slot", { name: "left" })),
      h("a", { href: this.linkRight, class: "uk-display-block uk-button uk-button-default uk-width-expand", style: { fontSize: "18px" } },
        h("slot", { name: "right" }))));
  }
  static get is() { return "ks-order-button-pair"; }
  static get properties() { return {
    "linkLeft": {
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
      "attribute": "link-left",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "linkRight": {
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
      "attribute": "link-right",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "split": {
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
      "attribute": "split",
      "reflect": false,
      "defaultValue": "50"
    }
  }; }
  static get states() { return {
    "mobile": {}
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
