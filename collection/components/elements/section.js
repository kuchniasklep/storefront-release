import { Component, h, Prop } from '@stencil/core';
export class Section {
  constructor() {
    this.muted = false;
    this.dark = false;
    this.darker = false;
    this.expand = false;
    this.marginTop = false;
    this.mobileCollapse = false;
  }
  render() {
    const sectionStyle = this.muted ?
      "uk-section-muted" :
      this.dark ? "uk-section-secondary" : "";
    const containerSize = this.expand ? "uk-container-expand" : "";
    const margin = "uk-margin-bottom " +
      (this.mobileCollapse ?
        "uk-padding-remove uk-padding-small@s uk-padding-remove-vertical@s uk-margin-remove-top " :
        "uk-padding-small uk-padding-remove-vertical ") +
      (this.marginTop ? this.mobileCollapse ? "uk-margin-top@s " : "uk-margin-top " : "");
    const darker = { backgroundColor: "rgb(24, 24, 24)" };
    return (h("div", { class: "uk-section uk-padding-remove-vertical " + sectionStyle, style: this.darker ? darker : null },
      h("div", { class: "uk-container " + containerSize + " " + margin },
        h("slot", null))));
  }
  static get is() { return "ks-section"; }
  static get properties() { return {
    "muted": {
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
      "attribute": "muted",
      "reflect": false,
      "defaultValue": "false"
    },
    "dark": {
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
      "attribute": "dark",
      "reflect": false,
      "defaultValue": "false"
    },
    "darker": {
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
      "attribute": "darker",
      "reflect": false,
      "defaultValue": "false"
    },
    "expand": {
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
      "attribute": "expand",
      "reflect": false,
      "defaultValue": "false"
    },
    "marginTop": {
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
      "attribute": "margin-top",
      "reflect": false,
      "defaultValue": "false"
    },
    "mobileCollapse": {
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
      "attribute": "mobile-collapse",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
