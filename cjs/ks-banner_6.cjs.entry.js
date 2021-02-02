'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const Banner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "uk-position-cover", style: { backgroundColor: this.color } }, index.h("a", { href: this.link }, index.h("ks-img", { sync: this.sync, vertical: true, center: true, src: this.image, alt: this.name }))));
  }
};

const ArticleCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const dotnavBG = '#dfdfdf';
    return (index.h("div", { class: "uk-section uk-padding-remove" }, index.h("div", { "uk-slideshow": "max-height: 550; ratio: 1:1; autoplay: true; animation: slide", class: "uk-dark" }, index.h("div", { class: "uk-position-relative" }, index.h("div", { class: "uk-slideshow-items" }, index.h("slot", null)), index.h("div", { class: "uk-flex uk-flex-center uk-position-bottom uk-visible@s", style: { height: '36px', transform: 'translateY(36px)' } }, index.h("svg", { height: "36", width: "36", style: { fill: dotnavBG } }, index.h("polygon", { points: "0,0 36,0 36,36" })), index.h("div", { style: { backgroundColor: dotnavBG, padding: '13px 30px' } }, index.h("ul", { class: "uk-slideshow-nav uk-dotnav" })), index.h("svg", { height: "36", width: "36", style: { fill: dotnavBG } }, index.h("polygon", { points: "0,0 36,0 0,36" })))))));
  }
};

const Featured = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.root.style.display = "block";
  }
  render() {
    return (index.h("a", { href: this.link }, index.h("div", { class: "uk-inline-clip uk-transition-toggle uk-light", tabindex: "0" }, index.h("ks-image", { style: { display: "block" }, src: this.image, alt: this.alt }), index.h("div", { class: "uk-position-center" }, index.h("span", { class: "uk-transition-fade", "uk-icon": "icon: link; ratio: 2", style: { backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50px", padding: "10px" } })))));
  }
  get root() { return index.getElement(this); }
};

const FeaturedContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "uk-container uk-padding-remove uk-margin-medium-bottom" }, index.h("div", { class: "uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m", "uk-grid": "masonry: true" }, index.h("slot", null))));
  }
};

const homepageInfoCss = "ks-homepage-info{display:block}ks-homepage-info h1,h2{font-family:Lato, sans-serif !important;font-weight:700 !important;text-align:center}ks-homepage-info h1{text-transform:uppercase}ks-homepage-info h2{font-size:1.2rem;line-height:1.4}ks-homepage-info p{text-align:justify;font-size:0.875rem;line-height:1.5}ks-homepage-info>div{background-image:linear-gradient(19deg, \n        rgb(226, 226, 226) 0%, \n        rgb(245, 245, 245) 100%\n    )}";

const HomepageInfo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = 0;
  }
  resizeHandler() {
    this.mobile = (window.innerWidth <= 960) ?
      (window.innerWidth < 639) ?
        (window.innerWidth <= 400) ? 3
          : 2
        : 1
      : 0;
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  render() {
    let containerPadding = "80px 10px 40px 10px";
    if (this.mobile == 2)
      containerPadding = "60px 10px 40px 10px";
    if (this.mobile == 3)
      containerPadding = "40px 10px 40px 10px";
    const itemPadding = this.mobile != 3 ? { padding: "0 50px" } : {};
    return (index.h("div", { class: "uk-section uk-padding-remove-vertical" }, index.h("div", { class: "uk-container uk-container-medium" }, index.h("div", { style: { padding: containerPadding } }, index.h("div", null, index.h("slot", { name: "mainHeading" }), index.h("p", { style: { margin: "0 auto 40px auto", maxWidth: "800px" } }, index.h("slot", { name: "mainContent" }))), this.mobile > 0 ?
      index.h("section", { "uk-slider": "center: true; finite: true", class: "uk-position-relative uk-visible-toggle" }, index.h("div", { class: "uk-overflow-hidden" }, index.h("ul", { class: "uk-slider-items uk-child-width-1-1 uk-text-justify" }, index.h("li", { style: itemPadding }, index.h("slot", { name: "firstHeading" }), index.h("slot", { name: "firstContent" })), index.h("li", { style: itemPadding }, index.h("slot", { name: "secondHeading" }), index.h("slot", { name: "secondContent" })), index.h("li", { style: itemPadding }, index.h("slot", { name: "thirdHeading" }), index.h("slot", { name: "thirdContent" })))), this.mobile != 3 ?
        index.h("div", null, index.h("a", { class: "uk-position-center-left", href: "#", "uk-slidenav-previous": true, "uk-slider-item": "previous" }), index.h("a", { class: "uk-position-center-right", href: "#", "uk-slidenav-next": true, "uk-slider-item": "next" }))
        :
          index.h("ul", { class: "uk-slider-nav uk-dotnav uk-flex-center" }))
      :
        index.h("div", { class: "uk-child-width-1-3 uk-text-justify", "uk-grid": true }, index.h("div", null, index.h("slot", { name: "firstHeading" }), index.h("slot", { name: "firstContent" })), index.h("div", null, index.h("slot", { name: "secondHeading" }), index.h("slot", { name: "secondContent" })), index.h("div", null, index.h("slot", { name: "thirdHeading" }), index.h("slot", { name: "thirdContent" })))))));
  }
};
HomepageInfo.style = homepageInfoCss;

const ProductContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "uk-margin-medium-bottom" }, index.h("div", { class: "uk-flex uk-flex-center" }, index.h("ul", { class: "uk-subnav uk-subnav-pill uk-padding-small uk-padding-remove-horizontal uk-text-small uk-text-normal@s", "uk-switcher": "connect: #ks-homepage-products; toggle: > *; animation: uk-animation-slide-top-small, uk-animation-slide-bottom-small" }, index.h("li", { class: "uk-active" }, index.h("a", { href: "#" }, "Promocje")), index.h("li", { class: "uk-padding-remove" }, index.h("a", { href: "#" }, "Popularne")), index.h("li", { class: "uk-padding-remove" }, index.h("a", { href: "#" }, "Nowo\u015Bci")))), index.h("ul", { class: "uk-switcher uk-margin-top@l", id: "ks-homepage-products" }, index.h("slot", null))));
  }
};

exports.ks_banner = Banner;
exports.ks_banner_container = ArticleCard;
exports.ks_featured = Featured;
exports.ks_featured_container = FeaturedContainer;
exports.ks_homepage_info = HomepageInfo;
exports.ks_homepage_products = ProductContainer;
