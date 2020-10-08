import { Component, h, State, Listen, Prop } from '@stencil/core';
export class NavbarContactPanel {
  constructor() {
    this.mobile = 0;
    this.height = 0;
    this.width = 0;
    this.menuWidth = 0;
    this.initialized = true;
  }
  resizeHandler() {
    this.mobile = (window.innerWidth <= 1200) ?
      (window.innerWidth <= 960) ?
        (window.innerWidth <= 640) ? 3
          : 2
        : 1
      : 0;
    this.mapDimensions();
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  mapDimensions() {
    if (this.mobile == 0) {
      this.height = 250;
      this.width = Math.floor(document.documentElement.clientWidth * 0.6) - 1;
    }
    else if (this.mobile == 3) {
      this.height = document.documentElement.clientHeight - 440;
      this.width = document.documentElement.clientWidth;
    }
    else {
      this.height = document.documentElement.clientHeight - 420;
      this.width = document.documentElement.clientWidth;
    }
  }
  Toggle() {
    this.initialized = true;
    this.mapDimensions();
  }
  render() {
    return [
      this.initialized ?
        h("div", { class: "map" },
          h("iframe", { frameborder: "0", height: this.height, width: this.width, src: "https://maps.google.pl/maps?ie=UTF8&q=Pozna%C5%84ska+23%2C+58-500+Jelenia+G%C3%B3ra&gl=PL&hl=pl&t=m&iwloc=A&output=embed" }))
        : null,
      h("div", { class: "info ks-text-decorated" },
        h("div", { class: "address", innerHTML: this.contact }),
        h("div", { class: "buttons" },
          h("div", { class: "margin" },
            h("a", { href: "tel:" + this.phone, class: "uk-button" }, this.phone),
            h("br", null),
            h("a", { href: "mailto:" + this.email, class: "uk-button" }, this.email))))
    ];
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
    }
  }; }
  static get states() { return {
    "mobile": {},
    "height": {},
    "width": {},
    "menuWidth": {},
    "initialized": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
