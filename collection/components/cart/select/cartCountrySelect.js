import { Component, h, Element, Prop } from '@stencil/core';
import Tunnel from '../cartData';
export class CartCountrySelect {
  onChangeHandler(event) {
    const target = event.target;
    this.CountryChange(target.value);
  }
  render() {
    return [
      h("ks-cart-heading", null, "WYSY\u0141KA I P\u0141ATNO\u015A\u0106"),
      h("div", { class: "select" },
        h("div", { class: "icons" },
          h("span", { "uk-icon": "icon: world; ratio: 1.2;" }),
          h("span", { "uk-icon": "icon: triangle-down; ratio: 1.2;" })),
        h("select", { onChange: (ev) => this.onChangeHandler(ev) },
          h("slot", null)))
    ];
  }
  static get is() { return "ks-cart-country-select"; }
  static get originalStyleUrls() { return {
    "$": ["cartCountrySelect.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartCountrySelect.css"]
  }; }
  static get properties() { return {
    "CountryChange": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(code: string) => void",
        "resolved": "(code: string) => void",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get elementRef() { return "root"; }
}
Tunnel.injectProps(CartCountrySelect, ['CountryChange']);
