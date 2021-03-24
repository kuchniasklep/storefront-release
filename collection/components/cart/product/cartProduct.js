import { Component, h, Prop, State, Listen, Event, Method } from '@stencil/core';
export class CartProduct {
  constructor() {
    this.shippingTime = "";
    this.amount = 1;
    this.removable = false;
    this.loading = false;
    this.mobile = 0;
  }
  onRemoveHandler() {
    this.loading = true;
    this.removeProduct.emit(this.productId);
  }
  onCountHandler(detail) {
    this.productCount.emit([this.productId, detail.current, detail.last]);
  }
  async ResetLoading() {
    this.loading = false;
  }
  resizeHandler() {
    this.mobile =
      window.innerWidth < 959 ?
        window.innerWidth < 640 ?
          2 : 1
        : 0;
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  render() {
    const price = this.price.toFixed(2).replace(".", ",") + " zł";
    const inlineBlockOnMobile = { display: this.removable || this.shippingTime ? "block" : "inline-block" };
    return [
      h("div", { class: "ks-text-decorated", "uk-grid": true },
        h("a", { href: this.link },
          h("ks-image", { src: this.img, width: "150", height: "150", contain: true, alt: "zdj\u0119cie produktu" })),
        h("div", { class: "description" },
          h("a", { href: this.link, innerHTML: this.name }),
          this.mobile >= 1 ?
            h("div", { class: "numbers" },
              h("div", { style: inlineBlockOnMobile },
                h("span", { class: "price" }, price),
                h("span", { class: "shipping" }, this.shippingTime)),
              h("div", { style: inlineBlockOnMobile }, this.removable ?
                h("ks-cart-spinner", { onChanged: (e) => this.onCountHandler(e.detail), "initial-value": this.amount, max: this.maxAmount }) :
                h("div", { class: "amount" },
                  this.amount,
                  " szt.")))
            : this.shippingTime != "" ?
              h("div", { class: "numbers" }, this.shippingTime)
              : null),
        this.mobile == 0 ? [
          h("div", { class: "price" }, price),
          h("div", { class: "amount" }, this.removable ?
            h("ks-cart-spinner", { onChanged: (e) => this.onCountHandler(e.detail), "initial-value": this.amount, max: this.maxAmount }) :
            h("span", null,
              this.amount,
              " szt."))
        ] : null,
        this.removable ?
          this.mobile == 2 ?
            this.loading ?
              h("div", { "uk-spinner": true, class: "uk-position-top-right uk-position-small" }) :
              h("button", { type: "button", "uk-close": true, class: "uk-close-large uk-position-top-right uk-position-small", onClick: () => this.onRemoveHandler() })
            :
              h("nav", { style: { width: "50px" }, class: "uk-text-center" }, this.loading ?
                h("div", { "uk-spinner": true }) :
                h("button", { type: "button", "uk-close": true, class: "uk-close-large", onClick: () => this.onRemoveHandler() }))
          : null),
      h("hr", null)
    ];
  }
  static get is() { return "ks-cart-product"; }
  static get originalStyleUrls() { return {
    "$": ["cartProduct.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartProduct.css"]
  }; }
  static get properties() { return {
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
      "reflect": true
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
    "price": {
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
      "attribute": "price",
      "reflect": false
    },
    "shippingTime": {
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
      "attribute": "shipping-time",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "amount": {
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
      "attribute": "amount",
      "reflect": true,
      "defaultValue": "1"
    },
    "maxAmount": {
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
      "attribute": "max-amount",
      "reflect": false
    },
    "removable": {
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
      "attribute": "removable",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "loading": {},
    "mobile": {}
  }; }
  static get events() { return [{
      "method": "removeProduct",
      "name": "removeProduct",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "productCount",
      "name": "productCount",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "[id: string, count: number, last: number]",
        "resolved": "[id: string, count: number, last: number]",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "ResetLoading": {
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
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
