import { Component, h, Prop } from '@stencil/core';
export class ArticleCard {
  constructor() {
    this.hideOnOdd = false;
  }
  render() {
    return [
      h("a", { href: this.link, class: "image" },
        h("ks-img", { src: this.image, alt: this.heading, width: 600, height: 300 })),
      h("div", { class: "info" },
        h("h3", null,
          h("a", { href: this.link }, this.heading)),
        h("div", { class: "meta" },
          h("ks-icon", { name: "calendar", size: 0.9 }),
          " ",
          this.date,
          h("ks-icon", { name: "search", size: 0.9 }),
          " ",
          this.views),
        h("slot", null)),
      h("div", { class: "footer" },
        h("a", { href: this.link }, "Zobacz wi\u0119cej"))
    ];
  }
  static get is() { return "ks-article-card"; }
  static get originalStyleUrls() { return {
    "$": ["articleCard.css"]
  }; }
  static get styleUrls() { return {
    "$": ["articleCard.css"]
  }; }
  static get properties() { return {
    "image": {
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
      "attribute": "image",
      "reflect": false
    },
    "heading": {
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
      "attribute": "heading",
      "reflect": false
    },
    "date": {
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
      "attribute": "date",
      "reflect": false
    },
    "views": {
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
      "attribute": "views",
      "reflect": false
    },
    "link": {
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
      "attribute": "link",
      "reflect": false
    },
    "hideOnOdd": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "hide-on-odd",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
