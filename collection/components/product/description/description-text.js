import { Component, h } from '@stencil/core';
export class DescriptionText {
  render() {
    return h("slot", null);
  }
  static get is() { return "ks-description-text"; }
  static get originalStyleUrls() { return {
    "$": ["description-text.css"]
  }; }
  static get styleUrls() { return {
    "$": ["description-text.css"]
  }; }
}
