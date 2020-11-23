import { Component, h, Prop } from '@stencil/core';
export class NavbarButton {
  render() {
    const toggleString = `target: ${this.link}; animation: uk-animation-fade`;
    const toggle = this.animatedToggle ? toggleString : this.toggle;
    return [
      h("a", { href: this.link, "uk-toggle": toggle, style: { lineHeight: "70px", minWidth: "60px" }, "aria-label": this.name },
        h("ks-icon", { name: this.icon, size: 1.4 }),
        this.count && this.count != 0 ?
          h("span", { class: "count uk-position-top-right", style: { marginTop: "5px" } }, this.count)
          : null),
      h("div", null, this.name)
    ];
  }
  static get is() { return "ks-navbar-button"; }
  static get originalStyleUrls() { return {
    "$": ["navbar-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar-button.css"]
  }; }
  static get properties() { return {
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
    "icon": {
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
      "attribute": "icon",
      "reflect": false
    },
    "count": {
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
      "attribute": "count",
      "reflect": false
    },
    "name": {
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
      "attribute": "name",
      "reflect": false
    },
    "toggle": {
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
      "attribute": "toggle",
      "reflect": false
    },
    "animatedToggle": {
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
      "attribute": "animated-toggle",
      "reflect": false
    }
  }; }
}
