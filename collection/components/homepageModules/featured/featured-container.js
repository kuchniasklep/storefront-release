import { Component, h } from '@stencil/core';
export class FeaturedContainer {
  render() {
    return [
      h("div", { class: "left" },
        " ",
        h("slot", { name: "left" }),
        " "),
      h("div", { class: "right" },
        " ",
        h("slot", { name: "right" }),
        " ")
    ];
  }
  static get is() { return "ks-featured-container"; }
  static get originalStyleUrls() { return {
    "$": ["featured-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["featured-container.css"]
  }; }
}
