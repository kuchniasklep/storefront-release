import { Component, h, Prop, Host, State, Watch } from '@stencil/core';
export class CartMessage {
  constructor() {
    this.message = "";
    this.visibility = "hide";
    this.messageDelay = "";
  }
  componentWillLoad() {
    this.watchHandler(this.message);
  }
  watchHandler(newValue) {
    if (newValue == "") {
      this.visibility = "hide";
      setTimeout(() => {
        this.messageDelay = "";
      }, 500);
    }
    else {
      this.visibility = "show";
      this.messageDelay = this.message;
    }
  }
  render() {
    return (h(Host, { class: this.visibility },
      h("p", null, this.messageDelay)));
  }
  static get is() { return "ks-cart-message"; }
  static get originalStyleUrls() { return {
    "$": ["cartMessage.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartMessage.css"]
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
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "visibility": {},
    "messageDelay": {}
  }; }
  static get watchers() { return [{
      "propName": "message",
      "methodName": "watchHandler"
    }]; }
}
