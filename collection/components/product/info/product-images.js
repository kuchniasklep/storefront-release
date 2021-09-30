import { Component, h, Element, State, Prop } from '@stencil/core';
import { product } from "../../../global/data/product";
import { window_load } from '../../deferredpromise';
import Swiper, { Thumbs } from 'swiper';
Swiper.use([Thumbs]);
export class ProductImages {
  constructor() {
    this.delay = 0;
    this.loaded = false;
    this.rendered = false;
  }
  componentDidRender() {
    if (this.rendered)
      return;
    window_load.promise.then(() => this.initialize());
    this.rendered = true;
  }
  initialize() {
    setTimeout(() => {
      this.lightbox = this.root.querySelector("ks-lightbox");
      const thumbs_enabled = product.get("images").length > 1;
      if (thumbs_enabled) {
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
      }
      this.carousel = new Swiper('.preview', {
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
        thumbs: thumbs_enabled ? {
          swiper: this.thumbs
        } : undefined
      });
      this.loaded = true;
    }, this.delay);
  }
  render() {
    return [
      h("div", { class: "swiper-container preview" },
        h("div", { class: "swiper-wrapper" }, product.get("images").map((image, index) => h("div", { class: "swiper-slide" },
          h("canvas", { width: image.preview.width, height: image.preview.height }),
          h("ks-img", { contained: true, center: true, sync: index == 0, src: image.preview.url, width: image.preview.width, height: image.preview.height, onClick: () => this.lightbox.show(index) }))))),
      product.get("images").length > 1 ?
        h("div", { class: "swiper-container thumb" },
          this.loaded ? null : h("ks-loader", { dark: true }),
          h("div", { class: "swiper-wrapper" }, product.get("images").map((image, index) => h("div", { class: "swiper-slide" },
            h("ks-img", { sync: index < 6, contained: true, center: true, src: image.thumb.url, width: image.thumb.width, height: image.thumb.height })))))
        : null,
      h("ks-lightbox", { data: product.get("images") })
    ];
  }
  static get is() { return "ks-product-images"; }
  static get originalStyleUrls() { return {
    "$": ["product-images.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-images.css"]
  }; }
  static get properties() { return {
    "delay": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "delay",
      "reflect": false,
      "defaultValue": "0"
    }
  }; }
  static get states() { return {
    "loaded": {}
  }; }
  static get elementRef() { return "root"; }
}
