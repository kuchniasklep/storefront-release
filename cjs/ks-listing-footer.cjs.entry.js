'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d2dd4d1b.js');

const listingFooterCss = "ks-listing-footer{display:block;position:relative;z-index:1;padding:15px;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);background-color:white;text-align:center;font-size:0.875rem}ks-listing-footer *:not([slot=tags]){max-width:1200px;margin:15px auto 15px auto;padding:0 15px;line-height:1.5}ks-listing-footer *[slot=tags]{max-width:1200px;margin:auto}ks-listing-footer *[slot=tags]>*{display:inline-block;padding:3px 10px;margin:2px;margin-bottom:3px;line-height:1.5;background:#222222;color:#ffffff !important;vertical-align:middle;white-space:nowrap;border-radius:2px;text-decoration:none !important}";

const ListingFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("slot", null),
      index.h("slot", { name: "tags" })
    ];
  }
};
ListingFooter.style = listingFooterCss;

exports.ks_listing_footer = ListingFooter;
