import { Component, h } from '@stencil/core';
export class FeaturedContainer {
  render() {
    return (h("div", { class: "uk-container uk-padding-remove uk-margin-medium-bottom" },
      h("div", { class: "uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m", "uk-grid": "masonry: true" },
        h("slot", null))));
  }
  static get is() { return "ks-featured-container"; }
}
