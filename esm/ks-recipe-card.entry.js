import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';

const recipeCardCss = "ks-recipe-card{display:block;background-color:#ffffff;-webkit-box-shadow:0 2px 8px rgba(0,0,0,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.15)}ks-recipe-card>a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}ks-recipe-card .views{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:8px;right:12px;color:transparent;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-recipe-card .views ks-icon{margin-right:3px}ks-recipe-card .info{padding:15px;font-family:var(--font-regular);font-size:14px;text-align:center;text-decoration:none !important;color:#707070;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-recipe-card h3{font-family:var(--font-emphasis);font-size:20px;color:#252525;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;margin-bottom:5px}ks-recipe-card .dot{margin:0 8px}ks-recipe-card a:hover{text-decoration:none}ks-recipe-card>a:hover .info{color:var(--color-secondary)}ks-recipe-card>a:hover h3{color:var(--color-secondary)}ks-recipe-card>a:hover .views{color:#ffffff}@media screen and (min-width: 960px) and (max-width: 1199px){ks-recipe-card[hide-on-odd]{display:none !important}}";

const RecipeCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hideOnOdd = false;
  }
  render() {
    return (h("a", { href: this.link }, h("ks-img", { src: this.image, alt: this.heading, center: true }), h("div", { class: "info" }, h("h3", null, this.heading), h("div", null, h("span", null, this.cuisine), h("span", { class: "dot" }, "\u2022"), h("span", null, this.category))), h("div", { class: "views" }, h("ks-icon", { name: "search", size: 0.75 }), " ", this.views)));
  }
  get root() { return getElement(this); }
};
RecipeCard.style = recipeCardCss;

export { RecipeCard as ks_recipe_card };
