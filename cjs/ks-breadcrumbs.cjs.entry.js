'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7c91bddc.js');

const Breadcrumbs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.center = false;
    this.mobile = false;
  }
  render() {
    let alignment = this.center ?
      this.mobile ?
        "uk-flex-center uk-flex-left@m" :
        "uk-flex-center" :
      "";
    return (index.h("ul", { class: "uk-breadcrumb uk-margin-remove " + alignment }, index.h("slot", null)));
  }
};

exports.ks_breadcrumbs = Breadcrumbs;
