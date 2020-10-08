import { Component, h, Prop, Element } from '@stencil/core';
import Tunnel from '../cartData';
export class CartDealContainer {
  render() {
    return [
      this.dealGroups.map((group) => h("ks-cart-deal-group", { key: group.name, name: group.name, deals: group.deals })),
      this.deals.map((product) => h("ks-cart-deal", { key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price }))
    ];
  }
  static get is() { return "ks-cart-deal-container"; }
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
    "productAmount": {
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
      "attribute": "product-amount",
      "reflect": false
    },
    "deals": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "CartDataDeal[]",
        "resolved": "CartDataDeal[]",
        "references": {
          "CartDataDeal": {
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
    },
    "dealGroups": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "CartDataDealGroup[]",
        "resolved": "CartDataDealGroup[]",
        "references": {
          "CartDataDealGroup": {
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
  static get elementRef() { return "root"; }
}
Tunnel.injectProps(CartDealContainer, ['deals', 'dealGroups']);
