import { Component, h, Prop, State, Element, Listen } from '@stencil/core';
export class ProductWide {
  constructor() {
    this.unavailable = false;
    this.cartLoading = false;
    this.mobile = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  CartHandler(success) {
    if (!success)
      this.cartLoading = false;
  }
  resizeHandler() {
    if (window.innerWidth <= 700)
      this.mobile = true;
    else
      this.mobile = false;
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  render() {
    let currentPrice;
    if (this.currentPrice)
      currentPrice = this.currentPrice.replace(".", ",") + " zł";
    let previousPrice;
    if (this.previousPrice)
      previousPrice = this.previousPrice.replace(".", ",") + " zł";
    return (h("ks-flex", { between: true, middle: true, column: this.mobile ? true : false, style: this.mobile ? { display: "block", marginBottom: "20px" } : { display: "block" } },
      h("a", { href: this.link },
        h("ks-image", { src: this.img, width: "200", height: "200", contain: true, alt: "zdj\u0119cie produktu" })),
      h("a", { href: this.link, class: "uk-flex-1 uk-padding-small uk-link-reset " + (this.mobile ? "uk-text-center" : "") },
        h("span", { class: "uk-h3 uk-margin-small-bottom" }, this.name),
        h("br", null),
        this.unavailable ? h("span", { class: "uk-h5 uk-text-normal uk-text-danger" }, "Produkt niedost\u0119pny") : null,
        h("div", { class: "uk-margin-small-top" },
          h("span", { class: "uk-h4 uk-text-bold uk-text-normal uk-text-danger" }, currentPrice),
          this.previousPrice ? h("span", { class: "uk-h4 uk-text-muted uk-margin-left" },
            h("s", null, previousPrice)) : null),
        h("p", { class: "uk-text-small uk-visible@m" },
          h("slot", null))),
      h("div", { class: "uk-flex " + (this.mobile ? "uk-width-1-1" : "uk-flex-column") },
        h("ks-button-fav", { subtract: true, padding: true, expand: true, "product-id": this.productId }),
        this.unavailable ?
          h("ks-button-cart", { icon: true, padding: true, expand: true, disabled: true }) :
          h("ks-button-cart", { icon: true, padding: true, expand: true, "product-id": this.productId, name: this.name }))));
  }
  static get is() { return "ks-product-wide"; }
  static get properties() { return {
    "unavailable": {
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
      "attribute": "unavailable",
      "reflect": false,
      "defaultValue": "false"
    },
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
    "img": {
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
      "attribute": "img",
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
    "currentPrice": {
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
      "attribute": "current-price",
      "reflect": false
    },
    "previousPrice": {
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
      "attribute": "previous-price",
      "reflect": false
    },
    "productId": {
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
      "attribute": "product-id",
      "reflect": false
    },
    "uniqueId": {
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
      "attribute": "unique-id",
      "reflect": false
    }
  }; }
  static get states() { return {
    "cartLoading": {},
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
