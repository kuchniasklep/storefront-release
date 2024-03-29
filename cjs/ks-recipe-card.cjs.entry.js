'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7d3fd69d.js');

const recipeCardCss = "ks-recipe-card{display:block;background-color:#ffffff;-webkit-box-shadow:0 2px 8px rgba(0,0,0,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.15)}ks-recipe-card>a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;max-width:100%}ks-recipe-card a{color:inherit}ks-recipe-card .info{padding:15px;font-family:var(--font-regular);font-size:14px;text-align:center;text-decoration:none !important;color:#707070;-webkit-transition:color 0.3s ease, opacity 0.3s ease;transition:color 0.3s ease, opacity 0.3s ease}ks-recipe-card h3{font-family:var(--font-emphasis);font-size:20px;color:#252525;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;margin-bottom:5px}ks-recipe-card .dot{margin:0 8px}ks-recipe-card a:hover{text-decoration:none}ks-recipe-card>a:hover .info{color:var(--color-secondary)}ks-recipe-card>a:hover h3{color:var(--color-secondary)}ks-recipe-card .info a:hover{opacity:0.6}@media screen and (min-width: 960px) and (max-width: 1199px){ks-recipe-card[hide-on-odd]{display:none !important}}";

const RecipeCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hideOnOdd = false;
  }
  render() {
    return (index.h("a", { href: this.link }, index.h("ks-img2", { horizontal: true, src: this.image, width: this.width, height: this.height, alt: this.heading }), index.h("div", { class: "info" }, index.h("h3", null, this.heading), index.h("div", null, index.h("a", { href: this.cuisineLink }, this.cuisine), index.h("span", { class: "dot" }, "\u2022"), index.h("a", { href: this.categoryLink }, this.category)))));
  }
  get root() { return index.getElement(this); }
};
RecipeCard.style = recipeCardCss;

exports.ks_recipe_card = RecipeCard;
