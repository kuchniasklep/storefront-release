'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
const thumbs = require('./thumbs-0c01f734.js');
const pagination = require('./pagination-5b45f8d8.js');

const lightboxCss = "ks-lightbox{display:block}ks-lightbox .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap;padding:10px;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ks-lightbox .close{position:absolute;top:15px;right:15px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color);border-radius:100%;padding:5px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000000;-webkit-transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                -webkit-transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease;transition:var(--transition-background-color),\n                transform 0.1s ease,\n                -webkit-transform 0.1s ease}ks-lightbox .close:hover{background-color:var(--lightbox-element-color-hover);-webkit-transform:scale(1.05, 1.05);-ms-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05)}ks-lightbox .close:active{background-color:var(--lightbox-element-color-active);-webkit-transform:scale(0.95, 0.95);-ms-transform:scale(0.95, 0.95);transform:scale(0.95, 0.95)}ks-lightbox .lightbox-full{width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-lightbox .lightbox-thumb{margin-top:10px;width:100%}ks-lightbox .lightbox-thumb .swiper-slide{height:70px;width:70px;overflow:hidden;opacity:0.6;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-lightbox .lightbox-thumb .swiper-slide:hover{opacity:0.8}ks-lightbox .lightbox-thumb .swiper-slide-thumb-active{opacity:1 !important}ks-lightbox .swiper-pagination{display:none}ks-lightbox .swiper-pagination{bottom:0px !important;padding:5px;-webkit-backdrop-filter:var(--lightbox-element-filter);backdrop-filter:var(--lightbox-element-filter);background-color:var(--lightbox-element-color)}ks-lightbox .swiper-pagination-bullet{background-color:#ffffff}ks-lightbox .swiper-pagination-bullet-active{background-color:#ffffff}@media only screen and (max-width: 720px){ks-lightbox .content{padding:0}ks-lightbox .swiper-pagination{display:block}ks-lightbox .lightbox-thumb{display:none !important}ks-lightbox .lightbox-full .swiper-slide ks-img img{border-radius:0px}}";

thumbs.Swiper.use([pagination.Pagination, thumbs.Thumbs]);
const Lightbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show(index = 0) {
    this.overlay.show().then(() => {
      var _a;
      if (this.carousel == undefined) {
        this.thumbs = new thumbs.Swiper('.lightbox-thumb', {
          observer: true,
          observeParents: true,
          grabCursor: true,
          slidesPerView: "auto",
          centerInsufficientSlides: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          spaceBetween: 10,
          resistanceRatio: 0.7
        });
        this.carousel = new thumbs.Swiper('.lightbox-full', {
          observer: true,
          observeParents: true,
          centeredSlides: true,
          slidesPerView: "auto",
          spaceBetween: 20,
          preventInteractionOnTransition: true,
          thumbs: {
            swiper: this.thumbs
          },
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }
      (_a = this.carousel) === null || _a === void 0 ? void 0 : _a.slideTo(index, 0, false);
    });
  }
  async hide() {
    this.overlay.hide();
  }
  render() {
    return index.h("ks-overlay", { dark: true }, index.h("div", { class: "content" }, index.h("div", { class: "swiper-container lightbox-full" }, index.h("div", { class: "swiper-wrapper" }, this.data.map(image => index.h("div", { class: "swiper-slide" }, index.h("ks-img", { contained: true, center: true, target: ".lightbox-full", src: image.full.url, width: image.full.width, height: image.full.height })))), index.h("div", { class: "swiper-pagination" })), index.h("div", { class: "swiper-container lightbox-thumb" }, index.h("div", { class: "swiper-wrapper" }, this.data.map(image => index.h("div", { class: "swiper-slide" }, index.h("ks-img", { contained: true, center: true, src: image.thumb.url, width: image.thumb.width, height: image.thumb.height })))))), index.h("div", { class: "close", onClick: () => this.overlay.hide() }, index.h("ks-icon", { name: "x", size: 1.2 })));
  }
  get root() { return index.getElement(this); }
};
Lightbox.style = lightboxCss;

exports.ks_lightbox = Lightbox;
