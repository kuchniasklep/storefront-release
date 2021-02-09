import { Component, h } from '@stencil/core';
export class ArticleContainer {
  render() {
    return h("div", null,
      h("slot", null));
  }
  static get is() { return "ks-article-container"; }
  static get originalStyleUrls() { return {
    "$": ["article-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["article-container.css"]
  }; }
}
