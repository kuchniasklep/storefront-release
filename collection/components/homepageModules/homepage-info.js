import { Component, h, Prop } from '@stencil/core';
export class HomepageInfo {
  constructor() {
    this.expanded = false;
  }
  render() {
    return [
      h("div", { class: "main" },
        h("slot", { name: "mainHeading" }),
        h("slot", { name: "mainContent" })),
      h("div", { class: "more" },
        h("div", null,
          h("slot", { name: "firstHeading" }),
          h("slot", { name: "firstContent" })),
        h("div", null,
          h("slot", { name: "secondHeading" }),
          h("slot", { name: "secondContent" })),
        h("div", null,
          h("slot", { name: "thirdHeading" }),
          h("slot", { name: "thirdContent" }))),
      h("ks-button", { border: true, round: true, name: this.expanded ? "Zwiń" : "Rozwiń", onClick: () => this.expanded = !this.expanded })
    ];
  }
  static get is() { return "ks-homepage-info"; }
  static get originalStyleUrls() { return {
    "$": ["homepage-info.css"]
  }; }
  static get styleUrls() { return {
    "$": ["homepage-info.css"]
  }; }
  static get properties() { return {
    "expanded": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "expanded",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
