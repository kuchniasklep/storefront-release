'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7d3fd69d.js');

const ContactButtons = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("a", { href: "tel:" + this.phone, class: "uk-button uk-button-default uk-border-pill", style: { margin: "2px" } }, this.phone),
      index.h("a", { href: "mailto:" + this.email, class: "uk-button uk-button-default uk-border-pill", style: { margin: "2px" } }, this.email)
    ];
  }
};

exports.ks_contact_buttons = ContactButtons;
