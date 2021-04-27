'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e55d229.js');

const breadcrumbsCss = "ks-breadcrumbs{display:block}";

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
Breadcrumbs.style = breadcrumbsCss;

exports.ks_breadcrumbs = Breadcrumbs;
