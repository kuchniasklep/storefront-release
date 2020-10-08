'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const recipeInfoCss = "ks-recipe-info{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}ks-recipe-info>*{width:100%}ks-recipe-info .info{-webkit-box-sizing:border-box;box-sizing:border-box;padding:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}ks-recipe-info .title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}ks-recipe-info .heading>h1{font-family:var(--font-emphasis);font-weight:700;font-size:24px;margin-bottom:10px}ks-recipe-info .categories{color:#9b9b9b;font-size:16px}ks-recipe-info .categories>a{color:#9b9b9b;-webkit-transition:color 0.3s ease;transition:color 0.3s ease;text-decoration:none}ks-recipe-info .categories>a:hover{color:#555555}ks-recipe-info .categories>*:first-child{margin-right:8px}ks-recipe-info .categories>*:last-child{margin-left:8px}ks-recipe-info .time{color:var(--color-secondary);text-align:right;font-family:var(--font-emphasis);font-weight:700;font-size:23px}ks-recipe-info .time ks-icon{margin-right:10px}ks-recipe-info .yield ks-icon{margin-right:8px;margin-top:-2px}ks-recipe-info .yield{color:#9b9b9b;text-align:right;font-family:var(--font-emphasis);font-size:18px;margin-top:-2px}ks-recipe-info .summary{margin-top:25px;font-size:15px;text-align:justify}ks-recipe-info .nutrition{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;margin-top:20px}ks-recipe-info .image{background-color:#F5F5F5;overflow:hidden;height:400px}@media only screen and (min-width: 960px){ks-recipe-info .info{width:600px;min-width:600px;border-bottom:1px solid #f5f5f5}}@media only screen and (max-width: 959px){ks-recipe-info{display:block}ks-recipe-info .nutrition{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}ks-recipe-info .nutrition>*{margin:0 3px 6px 3px}ks-recipe-info .image{height:500px}}@media only screen and (max-width: 520px){ks-recipe-info .title{display:block;text-align:center}ks-recipe-info .time,ks-recipe-info .yield{display:inline-block;color:#9b9b9b;text-align:right;font-family:var(--font-emphasis);font-weight:400;font-size:18px}ks-recipe-info .time{margin-right:10px}ks-recipe-info .time ks-icon,ks-recipe-info .yield ks-icon{margin-right:10px}ks-recipe-info .image{height:100vw}}@media only screen and (max-width: 520px){ks-recipe-info .info{padding:20px}}";

const RecipeInfo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.cuisineLink = "";
    this.categoryLink = "";
  }
  render() {
    return [
      index.h("div", { class: "info" }, index.h("div", { class: "title" }, index.h("div", { class: "heading" }, index.h("slot", { name: "heading" }), index.h("div", { class: "categories" }, this.link(this.cuisine, this.cuisineLink), "\u2022", this.link(this.category, this.categoryLink))), index.h("div", null, index.h("div", { class: "time" }, index.h("ks-icon", { name: "clock" }), this.time), index.h("div", { class: "yield" }, index.h("ks-icon", { name: "users" }), this.yield))), index.h("div", { class: "summary" }, index.h("slot", { name: "summary" })), index.h("div", { class: "nutrition" }, index.h("slot", { name: "nutrition" }))),
      index.h("div", { class: "image" }, index.h("ks-img", { vertical: true, center: true, src: this.image }))
    ];
  }
  link(name, url) {
    if (url)
      return index.h("a", { href: url }, name);
    return index.h("span", null, name);
  }
};
RecipeInfo.style = recipeInfoCss;

exports.ks_recipe_info = RecipeInfo;
