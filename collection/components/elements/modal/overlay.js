import { Component, h, Method, Element, Prop, Event } from '@stencil/core';
export class Overlay {
  constructor() {
    this.dark = false;
    this.close = true;
    this.timeoutLength = 300;
    this.body = document.body;
  }
  componentDidLoad() {
    this.root.addEventListener('mousedown', (e) => {
      if (e.currentTarget == e.target && this.close)
        this.hide();
    }, false);
  }
  async show() {
    clearTimeout(this.timeout);
    this.scrollToggle();
    this.root.classList.add("active");
    this.root.style.display = "flex";
  }
  async hide() {
    clearTimeout(this.timeout);
    this.scrollToggle();
    this.root.classList.remove("active");
    this.timeout = setTimeout(() => {
      this.root.style.display = "none";
    }, this.timeoutLength);
    this.closed.emit();
  }
  scrollToggle() {
    if (this.body.style.position == "fixed") {
      this.body.style.position = "static";
      this.body.style.overflowY = "auto";
      this.body.style.width = "unset";
      window.scrollTo(0, this.scroll);
      return;
    }
    this.scroll = window.scrollY;
    this.body.style.position = "fixed";
    this.body.style.top = `${-this.scroll}px`;
    this.body.style.overflowY = "scroll";
    this.body.style.width = "100%";
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "ks-overlay"; }
  static get originalStyleUrls() { return {
    "$": ["overlay.css"]
  }; }
  static get styleUrls() { return {
    "$": ["overlay.css"]
  }; }
  static get properties() { return {
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
      "reflect": true,
      "defaultValue": "false"
    },
    "close": {
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
      "attribute": "close",
      "reflect": false,
      "defaultValue": "true"
    }
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
    }
  }; }
  static get elementRef() { return "root"; }
}
