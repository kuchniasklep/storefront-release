'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const ProductYoutube = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.videoId = "";
    this.active = false;
  }
  componentDidLoad() {
    const onIntersection = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (this.observer) {
            this.observer.disconnect();
          }
          this.active = true;
        }
      }
    };
    addEventListener("load", () => {
      this.observer = new IntersectionObserver(onIntersection, {
        rootMargin: "500px"
      });
      this.observer.observe(this.root);
    });
  }
  render() {
    return (this.active ?
      index.h("iframe", { src: "https://www.youtube-nocookie.com/embed/" + this.videoId + "?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1", width: "1280", height: "720", frameborder: "0", allowFullScreen: true, "uk-responsive": true })
      : null);
  }
  get root() { return index.getElement(this); }
};

exports.ks_product_youtube = ProductYoutube;
