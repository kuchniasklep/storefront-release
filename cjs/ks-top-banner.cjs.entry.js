'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-601dda3f.js');

const topBannerCss = "ks-top-banner{display:block;position:relative;height:40px;padding-right:90px;font-family:var(--font-emphasis);font-size:16px;line-height:16px;font-weight:700;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background-color:var(--color-yellow);-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color)}ks-top-banner:hover{background-color:var(--color-yellow-hover)}ks-top-banner:active{background-color:var(--color-yellow-active)}ks-top-banner a{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;height:100%;color:inherit !important;text-decoration:none !important}ks-top-banner a>ks-img{width:auto}ks-top-banner .close{position:absolute;top:5px;right:5px;border-style:none;outline-style:none;border-radius:100%;padding:3px;background-color:transparent;opacity:1.0;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-top-banner .close:hover{opacity:0.6}ks-top-banner .close:active{opacity:0.4}@media only screen and (max-width: 959px){ks-top-banner{font-size:14px;line-height:14px;padding-right:20px}}@media only screen and (max-width: 480px){ks-top-banner a>span{max-width:150px;margin:0}ks-top-banner{font-size:13px;line-height:13px}}";

let TopBanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  id() {
    return "ks-top-banner-" + this.name.replace(" ", "");
  }
  disable() {
    sessionStorage.setItem(this.id(), "true");
    this.root.hidden = true;
  }
  componentWillLoad() {
    if (sessionStorage.getItem(this.id()) != null)
      this.root.hidden = true;
  }
  render() {
    return [
      index.h("a", { href: this.shipping }, index.h("slot", null)),
      index.h("button", { class: "close", onClick: () => this.disable() }, index.h("ks-icon", { name: "x" }))
    ];
  }
  get root() { return index.getElement(this); }
};
TopBanner.style = topBannerCss;

exports.ks_top_banner = TopBanner;
