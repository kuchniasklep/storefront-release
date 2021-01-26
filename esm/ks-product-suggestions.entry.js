import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';
import { S as Swiper } from './core-class-8ec5acbb.js';

const productSuggestionsCss = "ks-product-suggestions{display:block}ks-product-suggestions .content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;background-color:white;text-align:center}ks-product-suggestions .content>.top{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;padding:60px 20px;max-height:400px}ks-product-suggestions .content>.top>.heading{font-family:var(--font-emphasis);font-size:20px;font-weight:700}ks-product-suggestions .content>.top>.name{font-family:var(--font-emphasis);font-size:18px}ks-product-suggestions .content>.top>.buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:20px;max-width:600px;width:100%}ks-product-suggestions .content>.top>.buttons>*{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;margin:5px}ks-product-suggestions .content>.bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px 0px;height:100%;background-color:#f2f2f2}ks-product-suggestions .content>.bottom>.fade-left,ks-product-suggestions .content>.bottom>.fade-right{position:absolute;top:0;height:100%;width:50px;z-index:1}ks-product-suggestions .content>.bottom>.fade-left{background-image:-webkit-gradient(linear, left top, right top, from(#f2f2f2), to(rgba(242, 242, 242, 0)));background-image:linear-gradient(to right, #f2f2f2, rgba(242, 242, 242, 0));left:0}ks-product-suggestions .content>.bottom>.fade-right{background-image:-webkit-gradient(linear, right top, left top, from(#f2f2f2), to(rgba(242, 242, 242, 0)));background-image:linear-gradient(to left, #f2f2f2, rgba(242, 242, 242, 0));right:0}ks-product-suggestions .swiper-container{width:100%;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto}ks-product-suggestions .swiper-slide{height:100%;width:auto;max-width:230px;overflow:hidden;-webkit-animation:fade-in 0.8s ease 1;animation:fade-in 0.8s ease 1}ks-product-suggestions .swiper-slide>*{width:230px}@media (max-width: 560px){ks-product-suggestions .content>.top{padding:20px 10px}ks-product-suggestions .content>.top>.buttons{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin-top:10px}}@media (max-width: 370px){ks-product-suggestions .content>.top>.buttons>*>button{padding-top:12px;padding-bottom:12px}ks-product-suggestions .content>.top>.heading{font-size:18px}ks-product-suggestions .content>.top>.name{font-family:var(--font-regular);font-size:14px}ks-product-suggestions .swiper-slide>*{width:200px}}";

const ProductSuggestions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return h("ks-overlay", null, h("div", { class: "content" }, h("div", { class: "top" }, h("div", { class: "heading" }, "Dodano do koszyka"), h("div", { class: "name" }, this.name), h("div", { class: "buttons" }, h("ks-button", { tall: true, secondary: true, name: "Przejd\u017A do koszyka", onClick: () => this.toCart() }), h("ks-button", { tall: true, name: "Przegl\u0105daj dalej", onClick: () => this.hide() }))), h("div", { class: "bottom" }, this.loading ? h("ks-loader", { dark: true, large: true }) : null, h("div", { class: "swiper-container product-suggestions", style: { display: this.loading ? "none" : "block" } }, h("div", { class: "swiper-wrapper" }, this.products.map((product) => h("div", { class: "swiper-slide" }, h("ks-product-card", { "link-only": true, name: product.name, img: product.image, link: product.link, currentPrice: product.currentPrice, previousPrice: product.previousPrice != "0.00" ? product.previousPrice : null }))))), h("div", { class: "fade-left" }), h("div", { class: "fade-right" }))));
  }
  get root() { return getElement(this); }
};
ProductSuggestions.style = productSuggestionsCss;

export { ProductSuggestions as ks_product_suggestions };
