import { Component, h } from '@stencil/core';
export class ProductContainer {
  render() {
    return (h("div", { class: "uk-margin-medium-bottom" },
      h("div", { class: "uk-flex uk-flex-center" },
        h("ul", { class: "uk-subnav uk-subnav-pill uk-padding-small uk-padding-remove-horizontal uk-text-small uk-text-normal@s", "uk-switcher": "connect: #ks-homepage-products; toggle: > *; animation: uk-animation-slide-top-small, uk-animation-slide-bottom-small" },
          h("li", { class: "uk-active" },
            h("a", { href: "#" }, "Promocje")),
          h("li", { class: "uk-padding-remove" },
            h("a", { href: "#" }, "Popularne")),
          h("li", { class: "uk-padding-remove" },
            h("a", { href: "#" }, "Nowo\u015Bci")))),
      h("ul", { class: "uk-switcher uk-margin-top@l", id: "ks-homepage-products" },
        h("slot", null))));
  }
  static get is() { return "ks-homepage-products"; }
}
