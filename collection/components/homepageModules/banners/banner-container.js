import { Component, h, Prop, Element, Host } from '@stencil/core';
import { window_load } from '../../deferredpromise';
import Swiper, { Pagination, Autoplay } from 'swiper';
Swiper.use([Pagination, Autoplay]);
export class BannerContainer {
  constructor() {
    this.delay = 0;
    this.autoplay = 5000;
    this.window = false;
    this.rendered = false;
    this.loaded = false;
  }
  componentDidLoad() {
    window_load.promise.then(() => this.initialize());
  }
  initialize() {
    setTimeout(() => {
      this.carousel = new Swiper('ks-banner-container .swiper-container', {
        observer: true,
        observeParents: true,
        centeredSlides: true,
        slidesPerView: "auto",
        preventInteractionOnTransition: true,
        grabCursor: true,
        autoplay: {
          delay: this.autoplay,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      });
      this.loaded = true;
    }, this.delay);
  }
  render() {
    return h(Host, null,
      h("div", { class: "swiper-container" },
        h("div", { class: "swiper-wrapper" },
          h("slot", null))),
      h("div", { class: "pagination" },
        h("svg", { height: "36", width: "36" },
          h("polygon", { points: "0,0 36,0 36,36" })),
        h("div", { class: "swiper-pagination" }),
        h("svg", { height: "36", width: "36" },
          h("polygon", { points: "0,0 36,0 0,36" }))));
  }
  static get is() { return "ks-banner-container"; }
  static get originalStyleUrls() { return {
    "$": ["banner-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["banner-container.css"]
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
    },
    "autoplay": {
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
      "attribute": "autoplay",
      "reflect": false,
      "defaultValue": "5000"
    },
    "loaded": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "loaded",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "root"; }
}
