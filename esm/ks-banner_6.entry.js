import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const Banner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "uk-position-cover", style: { backgroundColor: this.color } }, h("a", { href: this.link }, h("ks-img", { sync: this.sync, vertical: true, center: true, src: this.image, alt: this.name }))));
  }
};

const ArticleCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const dotnavBG = '#dfdfdf';
    return (h("div", { class: "uk-section uk-padding-remove" }, h("div", { "uk-slideshow": "max-height: 550; ratio: 1:1; autoplay: true; animation: slide", class: "uk-dark" }, h("div", { class: "uk-position-relative" }, h("div", { class: "uk-slideshow-items" }, h("slot", null)), h("div", { class: "uk-flex uk-flex-center uk-position-bottom uk-visible@s", style: { height: '36px', transform: 'translateY(36px)' } }, h("svg", { height: "36", width: "36", style: { fill: dotnavBG } }, h("polygon", { points: "0,0 36,0 36,36" })), h("div", { style: { backgroundColor: dotnavBG, padding: '13px 30px' } }, h("ul", { class: "uk-slideshow-nav uk-dotnav" })), h("svg", { height: "36", width: "36", style: { fill: dotnavBG } }, h("polygon", { points: "0,0 36,0 0,36" })))))));
  }
};

const Featured = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.root.style.display = "block";
  }
  render() {
    return (h("a", { href: this.link }, h("div", { class: "uk-inline-clip uk-transition-toggle uk-light", tabindex: "0" }, h("ks-image", { style: { display: "block" }, src: this.image, alt: this.alt }), h("div", { class: "uk-position-center" }, h("span", { class: "uk-transition-fade", "uk-icon": "icon: link; ratio: 2", style: { backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "50px", padding: "10px" } })))));
  }
  get root() { return getElement(this); }
};

const FeaturedContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "uk-container uk-padding-remove uk-margin-medium-bottom" }, h("div", { class: "uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m", "uk-grid": "masonry: true" }, h("slot", null))));
  }
};

const homepageInfoCss = "ks-homepage-info{display:block}ks-homepage-info h1,h2{font-family:Lato, sans-serif !important;font-weight:700 !important;text-align:center}ks-homepage-info h1{text-transform:uppercase}ks-homepage-info h2{font-size:1.2rem;line-height:1.4}ks-homepage-info p{text-align:justify;font-size:0.875rem;line-height:1.5}ks-homepage-info>div{background-image:linear-gradient(19deg, \n        rgb(226, 226, 226) 0%, \n        rgb(245, 245, 245) 100%\n    )}";

const HomepageInfo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "uk-section uk-padding-remove-vertical" }, h("div", { class: "uk-container uk-container-medium" }, h("div", { style: { padding: containerPadding } }, h("div", null, h("slot", { name: "mainHeading" }), h("p", { style: { margin: "0 auto 40px auto", maxWidth: "800px" } }, h("slot", { name: "mainContent" }))), this.mobile > 0 ?
      h("section", { "uk-slider": "center: true; finite: true", class: "uk-position-relative uk-visible-toggle" }, h("div", { class: "uk-overflow-hidden" }, h("ul", { class: "uk-slider-items uk-child-width-1-1 uk-text-justify" }, h("li", { style: itemPadding }, h("slot", { name: "firstHeading" }), h("slot", { name: "firstContent" })), h("li", { style: itemPadding }, h("slot", { name: "secondHeading" }), h("slot", { name: "secondContent" })), h("li", { style: itemPadding }, h("slot", { name: "thirdHeading" }), h("slot", { name: "thirdContent" })))), this.mobile != 3 ?
        h("div", null, h("a", { class: "uk-position-center-left", href: "#", "uk-slidenav-previous": true, "uk-slider-item": "previous" }), h("a", { class: "uk-position-center-right", href: "#", "uk-slidenav-next": true, "uk-slider-item": "next" }))
        :
          h("ul", { class: "uk-slider-nav uk-dotnav uk-flex-center" }))
      :
        h("div", { class: "uk-child-width-1-3 uk-text-justify", "uk-grid": true }, h("div", null, h("slot", { name: "firstHeading" }), h("slot", { name: "firstContent" })), h("div", null, h("slot", { name: "secondHeading" }), h("slot", { name: "secondContent" })), h("div", null, h("slot", { name: "thirdHeading" }), h("slot", { name: "thirdContent" })))))));
  }
};
HomepageInfo.style = homepageInfoCss;

const ProductContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "uk-margin-medium-bottom" }, h("div", { class: "uk-flex uk-flex-center" }, h("ul", { class: "uk-subnav uk-subnav-pill uk-padding-small uk-padding-remove-horizontal uk-text-small uk-text-normal@s", "uk-switcher": "connect: #ks-homepage-products; toggle: > *; animation: uk-animation-slide-top-small, uk-animation-slide-bottom-small" }, h("li", { class: "uk-active" }, h("a", { href: "#" }, "Promocje")), h("li", { class: "uk-padding-remove" }, h("a", { href: "#" }, "Popularne")), h("li", { class: "uk-padding-remove" }, h("a", { href: "#" }, "Nowo\u015Bci")))), h("ul", { class: "uk-switcher uk-margin-top@l", id: "ks-homepage-products" }, h("slot", null))));
  }
};

export { Banner as ks_banner, ArticleCard as ks_banner_container, Featured as ks_featured, FeaturedContainer as ks_featured_container, HomepageInfo as ks_homepage_info, ProductContainer as ks_homepage_products };
