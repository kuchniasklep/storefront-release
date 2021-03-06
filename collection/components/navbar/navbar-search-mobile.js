import { Component, h, Element } from '@stencil/core';
export class NavbarSearchMobile {
  submit() {
    const form = this.root.querySelector("form");
    form.submit();
  }
  render() {
    return (h("nav", null,
      h("form", { method: "post", action: "szukaj.html" },
        h("a", { onClick: () => this.submit() },
          h("ks-icon", { name: "search", size: 1.1 })),
        h("input", { "aria-label": "Szukaj produkt\u00F3w", name: "szukaj", type: "search" }),
        h("input", { type: "hidden", name: "postget", value: "tak" }),
        h("input", { type: "hidden", name: "opis", value: "nie" }),
        h("input", { type: "hidden", name: "nrkat", value: "tak" }),
        h("input", { type: "hidden", name: "kodprod", value: "tak" }))));
  }
  static get is() { return "ks-navbar-search-mobile"; }
  static get originalStyleUrls() { return {
    "$": ["navbar-search-mobile.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar-search-mobile.css"]
  }; }
  static get elementRef() { return "root"; }
}
