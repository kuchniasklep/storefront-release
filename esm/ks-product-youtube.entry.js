import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';

const ProductYoutube = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      h("iframe", { src: "https://www.youtube-nocookie.com/embed/" + this.videoId + "?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1", width: "1280", height: "720", frameborder: "0", allowFullScreen: true, "uk-responsive": true })
      : null);
  }
  get root() { return getElement(this); }
};

export { ProductYoutube as ks_product_youtube };
