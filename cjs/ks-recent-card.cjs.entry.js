'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-601dda3f.js');

let RecentCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("a", { href: this.link }, index.h("div", { style: { margin: "5px", padding: "5px", width: "60px", height: "60px", backgroundColor: "white", borderRadius: "4px" } }, index.h("ks-image", { src: this.img, alt: this.name, contain: true, width: "60", height: "60" }))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_recent_card = RecentCard;
