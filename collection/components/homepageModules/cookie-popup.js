import { Component, h, Element, Prop, Host, State } from '@stencil/core';
export class CookiePopup {
  constructor() {
    this.delay = 2000;
    this.hide = false;
    this.hidden = true;
  }
  hidepanel() {
    this.hide = true;
    this.cookie();
    setTimeout(() => {
      this.hidden = true;
      this.hide = false;
    }, 400);
  }
  cookie() {
    var expiration = "";
    var expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 12 * 2);
    expiration = "expires=" + expirationDate.toUTCString() + "; ";
    document.cookie = "akceptCookie=tak; " + expiration + "path=/";
  }
  componentDidLoad() {
    setTimeout(() => {
      this.hidden = false;
    }, this.delay);
  }
  render() {
    return h(Host, { hidden: this.hidden, hide: this.hide },
      h("p", null, this.message),
      h("ks-button", { round: true, border: true, light: true, name: this.button, onClick: () => this.hidepanel() }));
  }
  static get is() { return "ks-cookie-popup"; }
  static get originalStyleUrls() { return {
    "$": ["cookie-popup.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cookie-popup.css"]
  }; }
  static get properties() { return {
    "message": {
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
      "attribute": "message",
      "reflect": false
    },
    "button": {
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
      "attribute": "button",
      "reflect": false
    },
    "delay": {
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
      "attribute": "delay",
      "reflect": false,
      "defaultValue": "2000"
    }
  }; }
  static get states() { return {
    "hide": {},
    "hidden": {}
  }; }
  static get elementRef() { return "root"; }
}
