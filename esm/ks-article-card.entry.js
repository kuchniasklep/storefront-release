import { r as registerInstance, h } from './index-2d9093e5.js';

const articleCardCss = "ks-article-card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;background-color:white;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-article-card .image{position:relative;padding-top:50%}ks-article-card .image>*{position:absolute;top:0}ks-article-card .info{padding:15px;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;font-size:.875rem;line-height:1.5}ks-article-card .info h3{margin-bottom:5px}ks-article-card .info a{text-decoration:none !important;color:#151515;-webkit-transition:var(--transition-color);transition:var(--transition-color)}ks-article-card .info a:hover{color:var(--color-secondary)}ks-article-card .info a:active{color:var(--color-secondary-hover)}ks-article-card .meta{font-size:.875rem;line-height:1.4;color:#707070}ks-article-card .meta ks-icon:not(:first-of-type){margin-left:15px}ks-article-card .footer{padding:20px;text-align:center;position:relative;border-top:1px solid #e2e2e2}ks-article-card .footer a{text-decoration:none !important;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;color:#151515;font-size:.875rem;line-height:1.4;position:relative;opacity:1;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}ks-article-card .footer a:active{opacity:0.6}ks-article-card .footer a:before{content:\"\";position:absolute;left:50%;bottom:-2px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);height:1px;width:0%;border-bottom:1px solid #151515;opacity:1;-webkit-transition:width 0.3s ease, opacity 0.2s ease;transition:width 0.3s ease, opacity 0.2s ease}ks-article-card .footer a:hover:before{width:100%}ks-article-card .footer a:active:before{opacity:0.6;width:100%}@media screen and (min-width: 960px) and (max-width: 1200px){ks-article-card[hide-on-odd]{display:none !important}}";

const ArticleCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hideOnOdd = false;
  }
  render() {
    return [
      h("a", { href: this.link, class: "image" }, h("ks-img", { src: this.image, alt: this.heading, width: 600, height: 300 })),
      h("div", { class: "info" }, h("h3", null, h("a", { href: this.link }, this.heading)), h("div", { class: "meta" }, h("ks-icon", { name: "calendar", size: 0.9 }), " ", this.date, h("ks-icon", { name: "search", size: 0.9 }), " ", this.views), h("slot", null)),
      h("div", { class: "footer" }, h("a", { href: this.link }, "Zobacz wi\u0119cej"))
    ];
  }
};
ArticleCard.style = articleCardCss;

export { ArticleCard as ks_article_card };
