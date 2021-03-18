import { Component, h, Element, Event } from '@stencil/core';
export class CartCountrySelect {
  ChangeHandler(event) {
    const target = event.target;
    this.countryChange.emit(target.value);
  }
  render() {
    return [
      h("ks-cart-heading", null, "WYSY\u0141KA I P\u0141ATNO\u015A\u0106"),
      h("div", { class: "select" },
        h("div", { class: "icons" },
          h("span", { "uk-icon": "icon: world; ratio: 1.2;" }),
          h("span", { "uk-icon": "icon: triangle-down; ratio: 1.2;" })),
        h("select", { onChange: (ev) => this.ChangeHandler(ev) },
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
  static get events() { return [{
      "method": "countryChange",
      "name": "countryChange",
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
    }]; }
  static get elementRef() { return "root"; }
}
