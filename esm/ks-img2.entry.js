import { r as registerInstance, c as createEvent, h, g as getElement } from './index-46fe532f.js';
import { w as window_load } from './deferredpromise-0f64146f.js';

const img2Css = "ks-img2{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:inherit;max-width:inherit;height:100%}ks-img2 img{display:inline-block;width:auto;height:auto;max-width:100%;max-height:100%;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2[src*=\".svg\"] img{display:inline-block;height:100%;width:100%;max-width:inherit;max-height:inherit;overflow:visible;opacity:1;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-img2 img.loading{opacity:0}";

const Img2 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.lazyLoaded = createEvent(this, "lazyLoaded", 7);
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
      window_load.promise.then(() => this.initializeObserver());
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
      return (h("img", { src: this.src, alt: this.alt, width: this.width, height: this.height }));
    return [
      (!this.loaded ? h("ks-loader", { dark: true }) : null),
      !this.loaded ? h("canvas", { width: this.width, height: this.height }) : null,
      h("img", { class: loading, alt: this.alt, onLoad: (e) => this.loadHandler(e), "data-src": this.src, width: this.width, height: this.height })
    ];
  }
  get root() { return getElement(this); }
  static get watchers() { return {
    "src": ["srcListener"]
  }; }
};
Img2.style = img2Css;

export { Img2 as ks_img2 };
