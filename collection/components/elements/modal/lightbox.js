import { Component, h, Method, Element, Prop } from '@stencil/core';
import Swiper, { Pagination, Thumbs } from 'swiper';
Swiper.use([Pagination, Thumbs]);
export class Lightbox {
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show(index = 0) {
    this.overlay.show().then(() => {
      var _a;
      if (this.carousel == undefined) {
        this.thumbs = new Swiper('.lightbox-thumb', {
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
        this.carousel = new Swiper('.lightbox-full', {
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
    return h("ks-overlay", { dark: true },
      h("div", { class: "content" },
        h("div", { class: "swiper-container lightbox-full" },
          h("div", { class: "swiper-wrapper" }, this.data.map(image => h("div", { class: "swiper-slide" },
            h("ks-img", { contained: true, center: true, target: ".lightbox-full", src: image.full.url, width: image.full.width, height: image.full.height })))),
          h("div", { class: "swiper-pagination" })),
        h("div", { class: "swiper-container lightbox-thumb" },
          h("div", { class: "swiper-wrapper" }, this.data.map(image => h("div", { class: "swiper-slide" },
            h("ks-img", { contained: true, center: true, src: image.thumb.url, width: image.thumb.width, height: image.thumb.height })))))),
      h("div", { class: "close", onClick: () => this.overlay.hide() },
        h("ks-icon", { name: "x", size: 1.2 })));
  }
  static get is() { return "ks-lightbox"; }
  static get originalStyleUrls() { return {
    "$": ["lightbox.css"]
  }; }
  static get styleUrls() { return {
    "$": ["lightbox.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "LightboxImageData[]",
        "resolved": "LightboxImageData[]",
        "references": {
          "LightboxImageData": {
            "location": "import",
            "path": "./lightbox-data"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "(index?: number) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "hide": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "root"; }
}
