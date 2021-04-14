import { Component, h, Element, State, Prop, Method } from '@stencil/core';
import Swiper from 'swiper';
export class ProductSuggestions {
  constructor() {
    this.suggestionHeading = "Produkty sugerowane";
    this.loading = true;
    this.products = new Array();
  }
  componentDidRender() {
    this.overlay = this.root.querySelector('ks-overlay');
  }
  async show(productId, name) {
    this.showCarousel();
    this.loading = true;
    this.name = name;
    this.products = [];
    this.overlay.show();
    setTimeout(async () => {
      const headers = new Headers();
      headers.append('pragma', 'no-cache');
      headers.append('cache-control', 'no-cache');
      let body = new FormData();
      body.append("id", productId);
      await fetch(this.api, {
        method: 'POST',
        body: body,
        headers: headers,
        credentials: "same-origin"
      }).then(response => {
        return response.json();
      }).then(data => {
        this.products = data;
        this.loading = false;
      });
    }, 1500);
  }
  hide() {
    this.overlay.hide();
  }
  toCart() {
    window.location.href = 'koszyk.html';
  }
  showCarousel() {
    if (this.carousel == undefined) {
      this.carousel = new Swiper('.product-suggestions', {
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        initialSlide: 1,
        preventInteractionOnTransition: true,
      });
      console.log(this.carousel);
    }
  }
  render() {
    return h("ks-overlay", null,
      h("div", { class: "content" },
        h("div", { class: "top" },
          h("div", { class: "heading" }, "Dodano do koszyka"),
          h("div", { class: "name" }, this.name),
          h("div", { class: "buttons" },
            h("ks-button", { secondary: true, name: "Przejd\u017A do koszyka", onClick: () => this.toCart() }),
            h("ks-button", { name: "Przegl\u0105daj dalej", onClick: () => this.hide() }))),
        h("div", { class: "bottom" },
          this.loading ? null : h("h3", { class: "suggestion-heading" }, this.suggestionHeading),
          this.loading ? h("ks-loader", { dark: true, large: true }) : null,
          h("div", { class: "swiper-container product-suggestions", style: { display: this.loading ? "none" : "block" } },
            h("div", { class: "swiper-wrapper" }, this.products.map((product) => h("div", { class: "swiper-slide" },
              h("ks-product-card", { "link-only": true, name: product.name, img: product.image, link: product.link, currentPrice: product.currentPrice, previousPrice: product.previousPrice != "0.00" ? product.previousPrice : null }))))),
          h("div", { class: "fade-left" }),
          h("div", { class: "fade-right" }))));
  }
  static get is() { return "ks-product-suggestions"; }
  static get originalStyleUrls() { return {
    "$": ["product-suggestions.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-suggestions.css"]
  }; }
  static get properties() { return {
    "api": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "api",
      "reflect": false
    },
    "suggestionHeading": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "suggestion-heading",
      "reflect": false,
      "defaultValue": "\"Produkty sugerowane\""
    }
  }; }
  static get states() { return {
    "name": {},
    "loading": {},
    "products": {}
  }; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "(productId: string, name: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
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
    }
  }; }
  static get elementRef() { return "root"; }
}
