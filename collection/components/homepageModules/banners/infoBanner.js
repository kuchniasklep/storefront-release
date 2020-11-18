import { Component, h, Prop, Host, State } from '@stencil/core';
export class InfoBanner {
  constructor() {
    this.disabled = false;
  }
  disable() {
    const id = "ks-info-banner-" + this.name.replace(" ", "");
    sessionStorage.setItem(id, "true");
    this.disabled = true;
  }
  componentWillLoad() {
    const id = "ks-info-banner-" + this.name.replace(" ", "");
    if (sessionStorage.getItem(id))
      this.disabled = true;
  }
  render() {
    if (!this.disabled)
      return (h(Host, { style: { backgroundColor: this.color } },
        h("a", { href: this.link, "aria-label": this.name },
          h("ks-img", { sync: true, contained: true, center: true, width: this.width, height: this.height, src: this.image, alt: this.name })),
        h("button", { type: "button", "aria-label": "Schowaj banner", onClick: () => this.disable() },
          h("ks-icon", { name: "x", size: 1.2 }))));
    else
      return;
  }
  static get is() { return "ks-info-banner"; }
  static get originalStyleUrls() { return {
    "$": ["info-banner.css"]
  }; }
  static get styleUrls() { return {
    "$": ["info-banner.css"]
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
    "color": {
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
      "attribute": "color",
      "reflect": false
    },
    "image": {
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
      "attribute": "image",
      "reflect": false
    },
    "link": {
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
      "attribute": "link",
      "reflect": false
    },
    "width": {
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
      "attribute": "width",
      "reflect": true
    },
    "height": {
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
      "attribute": "height",
      "reflect": true
    }
  }; }
  static get states() { return {
    "disabled": {}
  }; }
}
