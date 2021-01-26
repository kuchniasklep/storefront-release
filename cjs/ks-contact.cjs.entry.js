'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const Contact = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "uk-text-center uk-text-emphasis", style: { padding: "50px" } }, index.h("div", { class: "uk-visible@s", style: { height: '20px' } }), index.h("slot", null), index.h("ks-contact-buttons", { phone: this.phone, email: this.email })));
  }
};

exports.ks_contact = Contact;
