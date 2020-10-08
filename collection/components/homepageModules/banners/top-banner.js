import { Component, h, Prop, Element } from '@stencil/core';
export class TopBanner {
  id() {
    return "ks-top-banner-" + this.name.replace(" ", "");
  }
  disable() {
    sessionStorage.setItem(this.id(), "true");
    this.root.hidden = true;
  }
  componentWillLoad() {
    if (sessionStorage.getItem(this.id()) != null)
      this.root.hidden = true;
  }
  render() {
    return [
      h("a", { href: this.shipping },
        h("slot", null)),
      h("button", { class: "close", onClick: () => this.disable() },
        h("ks-icon", { name: "x" }))
    ];
  }
  static get is() { return "ks-top-banner"; }
  static get originalStyleUrls() { return {
    "$": ["top-banner.css"]
  }; }
  static get styleUrls() { return {
    "$": ["top-banner.css"]
  }; }
  static get properties() { return {
    "name": {
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
      "attribute": "name",
      "reflect": false
    },
    "newsletter": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Function",
        "resolved": "Function",
        "references": {
          "Function": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "shipping": {
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
      "attribute": "shipping",
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
}
