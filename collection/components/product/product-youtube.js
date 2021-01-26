import { Component, h, Prop, State, Element } from '@stencil/core';
export class ProductYoutube {
  constructor() {
    this.videoId = "";
    this.active = false;
  }
  componentDidRender() {
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.active = true;
          if (this.observer)
            this.observer.disconnect();
        }
      }
    }, {
      rootMargin: "500px"
    });
    this.observer.observe(this.root);
  }
  render() {
    return (this.active ?
      h("iframe", { width: "1280", height: "720", src: "https://www.youtube.com/embed/" + this.videoId, frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true })
      : null);
  }
  static get is() { return "ks-product-youtube"; }
  static get originalStyleUrls() { return {
    "$": ["product-youtube.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-youtube.css"]
  }; }
  static get properties() { return {
    "videoId": {
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
      "attribute": "video-id",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get states() { return {
    "active": {}
  }; }
  static get elementRef() { return "root"; }
}
