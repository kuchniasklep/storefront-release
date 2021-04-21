import { Component, h, Method, Element, Prop, State, Event } from '@stencil/core';
export class dialog {
  constructor() {
    this.close = true;
    this.loading = false;
    this.success = false;
    this.failure = false;
    this.heading = "";
    this.message = "";
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show() {
    this.overlay.show();
  }
  async hide() {
    this.overlay.hide();
  }
  async showLoading() {
    this.loading = true;
    this.close = false;
  }
  async showSuccess(heading, message) {
    this.success = true;
    this.heading = heading;
    this.message = message;
    setTimeout(() => {
      this.loading = false;
      this.close = true;
    }, 300);
  }
  async showFailure(heading, message) {
    this.failure = true;
    this.heading = heading;
    this.message = message;
    setTimeout(() => {
      this.loading = false;
      this.close = true;
    }, 300);
  }
  closeHandler() {
    if (this.success || this.failure) {
      setTimeout(() => {
        this.success = false;
        this.failure = false;
      }, 400);
    }
  }
  render() {
    return h("ks-overlay", { dark: this.dark, close: this.close, onClosed: () => this.closeHandler() },
      h("div", { class: "content" },
        this.close ?
          h("button", { class: "close", onClick: () => this.hide() },
            h("ks-icon", { name: "x", size: 1.3 }))
          : null,
        h("slot", null),
        this.loading ?
          h("div", { class: "overlay" },
            h("ks-loader", { large: true, dark: true }))
          : null,
        this.success || this.failure ?
          h("div", { class: "overlay opaque" },
            h("div", null,
              h("ks-icon", { name: this.success ? "check" : "alert-triangle", size: 4 }),
              h("p", { class: "header" }, this.heading),
              h("p", null, this.message)))
          : null));
  }
  static get is() { return "ks-dialog"; }
  static get originalStyleUrls() { return {
    "$": ["dialog.css"]
  }; }
  static get styleUrls() { return {
    "$": ["dialog.css"]
  }; }
  static get properties() { return {
    "nopadding": {
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
      "attribute": "nopadding",
      "reflect": true
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
      "reflect": true
    },
    "smallmobile": {
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
      "attribute": "smallmobile",
      "reflect": true
    }
  }; }
  static get states() { return {
    "close": {},
    "loading": {},
    "success": {},
    "failure": {},
    "heading": {},
    "message": {}
  }; }
  static get events() { return [{
      "method": "closed",
      "name": "closed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "hide": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "showLoading": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "showSuccess": {
      "complexType": {
        "signature": "(heading: string, message: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "showFailure": {
      "complexType": {
        "signature": "(heading: string, message: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "root"; }
}
