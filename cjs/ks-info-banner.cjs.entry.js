'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const infoBannerCss = "ks-info-banner{display:block;position:relative;max-height:100px;height:100%}ks-info-banner{display:block}ks-info-banner a{display:-webkit-box;display:-ms-flexbox;display:flex;max-height:100px;height:100%}ks-info-banner ks-img{height:auto}ks-info-banner button{position:absolute;top:10px;right:10px;border-style:none;outline-style:none;background-color:transparent;color:white;opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-info-banner button:hover{opacity:0.7}ks-info-banner button:active{opacity:0.5}";

const InfoBanner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.disabled = false;
  }
  disable() {
    const id = "ks-info-banner-" + this.name.replace(" ", "");
    sessionStorage.setItem(id, "true");
    this.disabled = true;
  }
  componentWillLoad() {
    const id = "ks-info-banner-" + this.name.replace(" ", "");
    if (sessionStorage.getItem(id))
      this.disabled = true;
  }
  render() {
    if (!this.disabled)
      return (index.h(index.Host, { style: { backgroundColor: this.color } }, index.h("a", { href: this.link, "aria-label": this.name }, index.h("ks-img", { sync: true, contained: true, center: true, width: this.width, height: this.height, src: this.image, alt: this.name })), index.h("button", { type: "button", "aria-label": "Schowaj banner", onClick: () => this.disable() }, index.h("ks-icon", { name: "x", size: 1.2 }))));
    else
      return;
  }
};
InfoBanner.style = infoBannerCss;

exports.ks_info_banner = InfoBanner;
