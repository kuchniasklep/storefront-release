import { Component, h, Prop } from '@stencil/core';
export class Comment {
  render() {
    return h("article", null,
      h("header", null,
        h("ks-icon", { name: "user", size: 2 }),
        h("div", null,
          h("h3", { class: "title" }, this.author),
          h("div", { class: "info" }, this.when))),
      h("slot", null));
  }
  static get is() { return "ks-comment"; }
  static get originalStyleUrls() { return {
    "$": ["comment.css"]
  }; }
  static get styleUrls() { return {
    "$": ["comment.css"]
  }; }
  static get properties() { return {
    "author": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "author",
      "reflect": false
    },
    "when": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "when",
      "reflect": false
    }
  }; }
}
