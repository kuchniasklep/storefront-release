import { Component, h, Prop, Element } from '@stencil/core';
export class Filtering {
  render() {
    return [
      h("ks-button", { narrow: true, muted: true, border: true, name: "Filtruj", left: true, icon: "filter", onClick: () => this.root.querySelector('ks-sidepanel').show() }),
      h("ks-sidepanel", { left: true },
        h("span", { class: "heading" }, "Filtrowanie"),
        h("form", { method: "POST", action: this.baseUrl },
          h("slot", null),
          h("ks-button", { class: "clear", border: true, link: this.baseUrl, name: "Wyczy\u015B\u0107 Filtry" }),
          h("ks-button", { submit: true, secondary: true, name: "Zobacz filtry" })))
    ];
  }
  static get is() { return "ks-filtering"; }
  static get originalStyleUrls() { return {
    "$": ["filtering.css"]
  }; }
  static get styleUrls() { return {
    "$": ["filtering.css"]
  }; }
  static get properties() { return {
    "baseUrl": {
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
      "attribute": "base-url",
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
}
