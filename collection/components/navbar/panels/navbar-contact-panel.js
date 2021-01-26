import { Component, h, State, Listen, Prop, Method, Element, Host } from '@stencil/core';
export class NavbarContactPanel {
  constructor() {
    this.toggled = false;
    this.mobile = 0;
    this.height = 0;
    this.width = 0;
    this.menuWidth = 0;
    this.initialized = false;
    this.visible = "hidden";
  }
  resizeHandler() {
    this.mobile = (window.innerWidth <= 1200) ?
      (window.innerWidth <= 960) ?
        (window.innerWidth <= 640) ? 3
          : 2
        : 1
      : 0;
    this.mapDimensions();
    this.FreezeScrolling();
    this.MenuWidth();
  }
  componentWillRender() {
    this.resizeHandler();
  }
  mapDimensions() {
    if (this.mobile == 0) {
      this.height = 250;
      this.width = Math.floor(document.documentElement.clientWidth * 0.6) - 1;
    }
    else if (this.mobile == 3) {
      this.height = document.documentElement.clientHeight - 350;
      this.width = document.documentElement.clientWidth;
    }
    else {
      this.height = document.documentElement.clientHeight - 350;
      this.width = document.documentElement.clientWidth;
    }
  }
  MenuWidth() {
    const buttons = document.getElementById("ks-navbar-menu-buttons");
    this.menuWidth = buttons.clientWidth;
  }
  FreezeScrolling() {
    if (this.toggled && this.mobile) {
      window.scrollTo(0, 0);
      document.querySelector('html').style.overflowY = "hidden";
    }
    else {
      document.querySelector('html').style.overflowY = "";
    }
  }
  async Toggle() {
    clearTimeout(this.fadeTimeout);
    this.FreezeScrolling();
    if (!this.initialized) {
      this.initialized = true;
      this.mapDimensions();
    }
    if (this.toggled) {
      this.visible = "hidden";
      this.fadeTimeout = setTimeout(() => {
        this.toggled = !this.toggled;
      }, 300);
    }
    else {
      this.visible = "visible";
      this.toggled = !this.toggled;
    }
  }
  render() {
    return h(Host, { class: this.visible },
      h("div", { class: "navbar", style: { width: `${this.menuWidth}px` } },
        h("ks-navbar-button", { icon: "x", onClick: () => this.Toggle() })),
      h("div", { class: "content" },
        this.initialized ?
          h("div", { class: "map" },
            h("iframe", { frameborder: "0", height: this.height, width: this.width, src: "https://maps.google.pl/maps?ie=UTF8&q=Pozna%C5%84ska+23%2C+58-500+Jelenia+G%C3%B3ra&gl=PL&hl=pl&t=m&iwloc=A&output=embed" }))
          : null,
        h("div", { class: "info ks-text-decorated" },
          h("div", { class: "address", innerHTML: this.contact }),
          h("div", { class: "buttons" },
            h("div", { class: "margin" },
              h("a", { href: "tel:" + this.phone }, this.phone),
              h("br", null),
              h("a", { href: "mailto:" + this.email }, this.email))))));
  }
  static get is() { return "ks-navbar-contact-panel"; }
  static get originalStyleUrls() { return {
    "$": ["navbar-contact-panel.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar-contact-panel.css"]
  }; }
  static get properties() { return {
    "phone": {
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
      "attribute": "phone",
      "reflect": false
    },
    "email": {
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
      "attribute": "email",
      "reflect": false
    },
    "contact": {
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
      "attribute": "contact",
      "reflect": false
    },
    "toggled": {
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
      "attribute": "toggled",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "mobile": {},
    "height": {},
    "width": {},
    "menuWidth": {},
    "initialized": {},
    "visible": {}
  }; }
  static get methods() { return {
    "Toggle": {
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
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
