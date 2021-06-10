'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aaabf9e8.js');
const deferredpromise = require('./deferredpromise-4a0fd44b.js');

const img2Css = "ks-img2{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:inherit;max-width:inherit;height:100%;position:relative}ks-img2 img{display:inline-block;width:auto;height:auto;max-width:inherit;max-height:inherit;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2[src*=\".svg\"] img{display:inline-block;height:100%;width:100%;max-width:inherit;max-height:inherit;overflow:visible;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2[vertical] img{width:auto}ks-img2[horizontal] img{height:auto}ks-img2 img.loading{opacity:0}ks-img2[limit] img{max-width:100%;max-height:100%}";

const Img2 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.lazyLoaded = index.createEvent(this, "lazyLoaded", 7);
    this.sync = false;
    this.loaded = false;
  }
  loadHandler(e) {
    if (e.target instanceof HTMLElement && !e.target.getAttribute("src").includes('data:image')) {
      this.loaded = true;
      this.lazyLoaded.emit();
    }
  }
  srcListener() {
    const image = this.root.querySelector("img");
    image.removeAttribute("src");
    image.setAttribute("src", this.src);
    setTimeout(() => {
      if (!image.complete) {
        this.loaded = false;
      }
    }, 200);
  }
  componentDidLoad() {
    if (!this.sync)
      deferredpromise.window_load.promise.then(() => this.initializeObserver());
  }
  initializeObserver() {
    this.image = this.root.querySelector('img');
    const target = this.target ? this.root.closest(this.target) : this.root.parentElement;
    const onIntersection = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (this.observer) {
            this.observer.disconnect();
          }
          if (this.image.getAttribute('data-src')) {
            this.image.setAttribute('src', this.image.getAttribute('data-src'));
            this.image.removeAttribute('data-src');
          }
        }
      }
    };
    if (this.image) {
      this.observer = new IntersectionObserver(onIntersection, {
        rootMargin: this.observerMargin
      });
      this.observer.observe(target);
    }
  }
  render() {
    const loading = this.loaded ? "" : "loading";
    if (this.sync)
      return (index.h("img", { src: this.src, alt: this.alt, width: this.width, height: this.height }));
    return [
      (!this.loaded ? index.h("ks-loader", { dark: true }) : null),
      !this.loaded ? index.h("canvas", { width: this.width, height: this.height }) : null,
      index.h("img", { class: loading, alt: this.alt, onLoad: (e) => this.loadHandler(e), "data-src": this.src, width: this.width, height: this.height })
    ];
  }
  get root() { return index.getElement(this); }
  static get watchers() { return {
    "src": ["srcListener"]
  }; }
};
Img2.style = img2Css;

exports.ks_img2 = Img2;
