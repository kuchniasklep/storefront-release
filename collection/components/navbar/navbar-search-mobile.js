import { Component, h, Element } from '@stencil/core';
export class NavbarSearchMobile {
  submit() {
    const form = this.root.querySelector("form");
    form.submit();
  }
  render() {
    return (h("nav", { class: "uk-section uk-padding-remove uk-light", style: { backgroundColor: '#00426e' } },
      h("div", { class: "uk-hidden@m uk-padding-small" },
        h("form", { method: "post", action: "szukaj.html", class: "uk-search uk-search-large uk-width-1-1" },
          h("a", { onClick: () => this.submit(), class: "uk-search-icon-flip uk-margin-small-right", "uk-search-icon": "ratio: 0.6" }),
          h("input", { class: "uk-search-input uk-text-center", "aria-label": "Szukaj produkt\u00F3w", name: "szukaj", type: "search" }),
          h("input", { type: "hidden", name: "postget", value: "tak" }),
          h("input", { type: "hidden", name: "opis", value: "nie" }),
          h("input", { type: "hidden", name: "nrkat", value: "tak" }),
          h("input", { type: "hidden", name: "kodprod", value: "tak" })))));
  }
  static get is() { return "ks-navbar-search-mobile"; }
  static get elementRef() { return "root"; }
}
