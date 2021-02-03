import { Component, h, Element } from '@stencil/core';
import { store } from "../product-store";
import Swiper, { Thumbs } from 'swiper';
Swiper.use([Thumbs]);
export class ProductImages {
  componentDidRender() {
    this.lightbox = this.root.querySelector("ks-lightbox");
    this.thumbs = new Swiper('.thumb', {
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
    if (store.get("images").length > 1) {
      this.carousel = new Swiper('.preview', {
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
  }
  render() {
    return [
      h("div", { class: "swiper-container preview" },
        h("div", { class: "swiper-wrapper" }, store.get("images").map((image, index) => h("div", { class: "swiper-slide" },
          h("canvas", { width: image.preview.width, height: image.preview.height }),
          h("ks-img", { contained: true, center: true, sync: index == 0, src: image.preview.url, width: image.preview.width, height: image.preview.height, onClick: () => this.lightbox.show(index) }))))),
      store.get("images").length > 1 ?
        h("div", { class: "swiper-container thumb" },
          h("div", { class: "swiper-wrapper" }, store.get("images").map((image, index) => h("div", { class: "swiper-slide" },
            h("ks-img", { sync: index < 6, contained: true, center: true, src: image.thumb.url, width: image.thumb.width, height: image.thumb.height })))))
        : null,
      h("ks-lightbox", { data: store.get("images") })
    ];
  }
  static get is() { return "ks-product-images"; }
  static get originalStyleUrls() { return {
    "$": ["product-images.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-images.css"]
  }; }
  static get elementRef() { return "root"; }
}
