import { Component, h } from '@stencil/core';
export class SectionHeading {
  render() {
    return [
      h("h3", { class: "uk-text-center uk-margin-medium-bottom" },
        h("slot", null))
    ];
  }
  static get is() { return "ks-section-heading"; }
}
