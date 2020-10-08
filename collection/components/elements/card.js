import { Component, h, Prop, Element } from '@stencil/core';
export class Card {
  constructor() {
    this.padding = false;
    this.small = false;
    this.margin = false;
    this.height = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    if (this.height)
      this.root.style.height = "100%";
  }
  render() {
    const padding = this.padding ? this.small ? "uk-padding-small" : "" : "uk-padding-remove";
    const margin = this.margin ? "uk-margin-bottom" : "";
    const height = this.height ? "uk-height-1-1" : "";
    return (h("div", { class: "uk-card uk-card-default uk-card-body " + padding + " " + margin + " " + height },
      h("slot", null)));
  }
  static get is() { return "ks-card"; }
  static get properties() { return {
    "padding": {
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
      "attribute": "padding",
      "reflect": false,
      "defaultValue": "false"
    },
    "small": {
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
      "attribute": "small",
      "reflect": false,
      "defaultValue": "false"
    },
    "margin": {
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
      "attribute": "margin",
      "reflect": false,
      "defaultValue": "false"
    },
    "height": {
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
      "attribute": "height",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "root"; }
}
