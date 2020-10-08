import { Component, h } from '@stencil/core';
export class DescriptionText {
  render() {
    return (h("div", { class: "uk-margin-medium" },
      h("slot", null)));
  }
  static get is() { return "ks-description-text"; }
}
