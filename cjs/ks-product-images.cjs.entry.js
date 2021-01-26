'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');
require('./index-e2b63d60.js');
const coreClass = require('./core-class-fc11eccd.js');
const thumbs = require('./thumbs-cd125da8.js');
const productStore = require('./product-store-35faa98d.js');

const productImagesCss = "ks-product-images{display:block;margin-right:30px}ks-product-images .swiper-slide{position:relative}ks-product-images .swiper-slide canvas{max-width:100%;max-height:500px}ks-product-images .preview ks-img{position:absolute;top:0;width:100%;max-height:500px;margin:auto}ks-product-images .thumb{margin-top:20px;position:relative}ks-product-images .thumb::after{content:\"\";position:absolute;top:0;bottom:0;right:0;left:-30px;background:-webkit-gradient(linear, left top, right top, from(rgba(255,255,255,0)), color-stop(85%, rgba(255,255,255,0)), to(rgba(255,255,255,1)));background:linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 85%, rgba(255,255,255,1) 100%);z-index:2;pointer-events:none}ks-product-images .thumb .swiper-slide{width:70px;height:70px;opacity:0.4;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-product-images .thumb .swiper-slide-thumb-active{opacity:1}@media only screen and (max-width: 959px){ks-product-images{margin-right:0px;margin-top:30px}ks-product-images .thumb{margin-bottom:0px}}@media only screen and (max-width: 460px){ks-product-images .swiper-slide canvas{max-height:300px}ks-product-images .preview ks-img{max-height:300px}}";

coreClass.Swiper.use([thumbs.Thumbs]);
const ProductImages = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidRender() {
    this.lightbox = this.root.querySelector("ks-lightbox");
    this.thumbs = new coreClass.Swiper('.thumb', {
      observer: true,
      observeParents: true,
      grabCursor: true,
      slidesPerView: "auto",
      preventInteractionOnTransition: true,
      centerInsufficientSlides: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 3,
    });
    this.carousel = new coreClass.Swiper('.preview', {
      observer: true,
      observeParents: true,
      spaceBetween: 30,
      grabCursor: true,
      autoHeight: true,
      thumbs: {
        swiper: this.thumbs
      }
    });
  }
  render() {
    return [
      index.h("div", { class: "swiper-container preview" }, index.h("div", { class: "swiper-wrapper" }, productStore.store.get("images").map((image, index$1) => index.h("div", { class: "swiper-slide" }, index.h("canvas", { width: image.preview.width, height: image.preview.height }), index.h("ks-img", { contained: true, center: true, src: image.preview.url, width: image.preview.width, height: image.preview.height, onClick: () => this.lightbox.show(index$1) }))))),
      productStore.store.get("images").length > 1 ?
        index.h("div", { class: "swiper-container thumb" }, index.h("div", { class: "swiper-wrapper" }, productStore.store.get("images").map(image => index.h("div", { class: "swiper-slide" }, index.h("ks-img", { contained: true, center: true, src: image.thumb.url, width: image.thumb.width, height: image.thumb.height })))))
        : null,
      index.h("ks-lightbox", { data: productStore.store.get("images") })
    ];
  }
  get root() { return index.getElement(this); }
};
ProductImages.style = productImagesCss;

exports.ks_product_images = ProductImages;
