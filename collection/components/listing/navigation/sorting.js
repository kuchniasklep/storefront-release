import { Component, h, Prop, Listen, Element } from '@stencil/core';
export class Sorting {
  constructor() {
    this.enabled = false;
  }
  render() {
    return (h("div", null,
      h("form", { action: this.post, method: "post", style: { margin: "0" } },
        h("input", { type: "hidden", name: "sortowanie", value: "0" })),
      h("ks-button", { onClick: () => this.toggle(), narrow: true, muted: true, border: true, name: "Sortuj", icon: "shuffle" }),
      h("div", { class: "dropdown" },
        h("a", { onClick: () => this.sort(1) },
          "Polecane ",
          h("ks-icon", { name: "check", size: 0.9 })),
        h("a", { onClick: () => this.sort(2) },
          "Popularne ",
          h("ks-icon", { name: "users", size: 0.9 })),
        h("a", { onClick: () => this.sort(3) },
          "Najnowsze ",
          h("ks-icon", { name: "clock", size: 0.9 })),
        h("hr", null),
        h("a", { onClick: () => this.sort(4) },
          "Najta\u0144sze ",
          h("ks-icon", { name: "plus-circle", size: 0.9 })),
        h("a", { onClick: () => this.sort(5) },
          "Najdro\u017Csze ",
          h("ks-icon", { name: "minus-circle", size: 0.9 })))));
  }
  componentDidLoad() {
    this.form = this.root.querySelector("form");
    this.input = this.form.querySelector("input");
  }
  sort(value) {
    this.input.value = value.toString();
    this.form.submit();
  }
  toggle() {
    this.enabled = !this.enabled;
  }
  disable(e) {
    if (!this.root.contains(e.target))
      this.enabled = false;
  }
  static get is() { return "ks-sorting"; }
  static get originalStyleUrls() { return {
    "$": ["sorting.css"]
  }; }
  static get styleUrls() { return {
    "$": ["sorting.css"]
  }; }
  static get properties() { return {
    "post": {
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
      "attribute": "post",
      "reflect": false
    },
    "current": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "current",
      "reflect": false
    },
    "enabled": {
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
      "attribute": "enabled",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "click",
      "method": "disable",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
