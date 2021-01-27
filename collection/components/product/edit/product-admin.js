import { Component, Prop, State, h } from '@stencil/core';
export class ProductAdmin {
  constructor() {
    this.editLink = "";
    this.homeQuantity = "";
    this.externalQuantity = "";
    this.availability = "";
    this.overwrite = false;
    this.distributors = false;
    this.expanded = false;
  }
  expand() {
    this.expanded = !this.expanded;
    console.log("EXPAND");
  }
  render() {
    return [
      h("div", { class: "bar" },
        h("div", null,
          h("ks-icon", { name: "home" }),
          " ",
          this.homeQuantity),
        this.externalQuantity != "" ?
          h("div", null,
            h("ks-icon", { name: "truck" }),
            " ",
            this.externalQuantity)
          : null,
        this.availability != "" ?
          h("div", null,
            h("ks-icon", { class: "hide-mobile", name: "x-octagon" }),
            " ",
            this.availability)
          : null,
        this.overwrite ?
          h("div", null,
            h("ks-icon", { class: "hide-mobile", name: "alert-octagon" }),
            " Nadpisany")
          : null,
        h("div", { class: "links" },
          h("a", { class: "button", href: this.editLink },
            h("ks-icon", { name: "edit" })),
          this.distributors ?
            h("button", { class: "button", onClick: () => this.expand() },
              h("ks-icon", { name: this.expanded ? "chevron-up" : "chevron-down" }))
            : null)),
      this.distributors ?
        h("div", { class: "distributors", hidden: !this.expanded },
          h("tr", null,
            h("th", null, "Dystrybutor"),
            h("th", null, "Czas wysy\u0142ki"),
            h("th", null, "Stan zewn\u0119trzny"),
            h("th", null, "Tryb niedost\u0119pno\u015Bci"),
            h("th", null, "Komunikaty")),
          h("slot", null))
        : null
    ];
  }
  static get is() { return "ks-product-admin"; }
  static get originalStyleUrls() { return {
    "$": ["product-admin.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-admin.css"]
  }; }
  static get properties() { return {
    "editLink": {
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
      "attribute": "edit-link",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "homeQuantity": {
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
      "attribute": "home-quantity",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "externalQuantity": {
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
      "attribute": "external-quantity",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "availability": {
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
      "attribute": "availability",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "overwrite": {
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
      "attribute": "overwrite",
      "reflect": false,
      "defaultValue": "false"
    },
    "distributors": {
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
      "attribute": "distributors",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "expanded": {}
  }; }
}
