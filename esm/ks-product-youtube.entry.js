import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const productYoutubeCss = "ks-product-youtube{display:block;position:relative;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:56.25%;background-color:black}ks-product-youtube iframe{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}";

const ProductYoutube = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get root() { return getElement(this); }
};
ProductYoutube.style = productYoutubeCss;

export { ProductYoutube as ks_product_youtube };
