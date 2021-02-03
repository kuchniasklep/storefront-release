'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7c91bddc.js');

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

const recipeIngredientCss = "ks-recipe-ingredient{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;margin-bottom:5px}ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:18px}ks-recipe-ingredient .underline{margin:0 20px;-webkit-box-flex:1;-ms-flex:1;flex:1;border-bottom:solid 1px #dbdbdb}ks-recipe-ingredient label{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;display:block;position:relative;padding-left:35px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ks-recipe-ingredient input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}ks-recipe-ingredient .checkmark{position:absolute;bottom:-11px;left:0;height:22px;width:22px;border:2px solid #252525;-webkit-box-sizing:border-box;box-sizing:border-box}ks-recipe-ingredient label:hover input~.checkmark{background-color:#ccc}ks-recipe-ingredient .checkmark:after{content:\"\";position:absolute;display:none}ks-recipe-ingredient label input:checked~.checkmark:after{display:block}ks-recipe-ingredient label .checkmark:after{left:6px;top:3px;width:4px;height:9px;border:solid #252525;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}@media only screen and (max-width: 520px){ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:16px}ks-recipe-ingredient label{padding-left:28px}}@media only screen and (max-width: 360px){ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:16px}ks-recipe-ingredient label{padding-left:28px}ks-recipe-ingredient .underline{margin:0;-webkit-box-flex:1;-ms-flex:1;flex:1;border-bottom:none}}";

const RecipeIngredient = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.id = 0;
    this.checked = false;
  }
  componentWillRender() {
    this.id = Array.from(this.root.parentNode.children).indexOf(this.root);
    this.regex = new RegExp(`(?:(?:^|.*;\\s*)ingredient${this.id}\\s*\\=\\s*([^;]*).*$)|^.*$`);
    this.checked = this.getCookie();
  }
  getCookie() {
    const cookie = document.cookie.replace(this.regex, "$1");
    return cookie == "true";
  }
  setCookie() {
    document.cookie = `ingredient${this.id}=true; max-age=${60 * 60 * 24 * 30}; path=${window.location.pathname}; samesite=strict`;
  }
  removeCookie() {
    document.cookie = `ingredient${this.id}=; path=${window.location.pathname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
  click(event) {
    const checkbox = event.target;
    if (checkbox.checked)
      this.setCookie();
    else
      this.removeCookie();
  }
  render() {
    return [
      index.h("label", null, index.h("input", { type: "checkbox", checked: this.checked, onClick: event => this.click(event) }), index.h("span", { class: "checkmark" })),
      index.h("div", { class: "name" }, this.name),
      index.h("div", { class: "underline" }),
      index.h("div", { class: "amount" }, this.amount)
    ];
  }
  get root() { return index.getElement(this); }
};
RecipeIngredient.style = recipeIngredientCss;

const recipeNutritionCss = "ks-recipe-nutrition{display:block;text-align:center;color:#FFFFFF}ks-recipe-nutrition>div:first-child{font-family:var(--font-regular);font-size:13px;background-color:#353535;padding:8px 10px}ks-recipe-nutrition>div:last-child{font-family:var(--font-emphasis);font-size:18px;background-color:#252525;padding:3px 10px}";

const RecipeNutrition = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("div", null, this.type),
      index.h("div", null, this.value)
    ];
  }
};
RecipeNutrition.style = recipeNutritionCss;

const recipeProcedureCss = "ks-recipe-procedure{display:-webkit-box;display:-ms-flexbox;display:flex}ks-recipe-procedure>div{width:50%;padding:30px;-webkit-box-sizing:border-box;box-sizing:border-box}ks-recipe-procedure .ingredients{background-color:#F5F5F5}ks-recipe-procedure .preparation{font-size:15px}ks-recipe-procedure .preparation h2{font-family:var(--font-emphasis);font-weight:700;font-size:22px}@media only screen and (max-width: 960px){ks-recipe-procedure{display:block}ks-recipe-procedure>div{width:100%}}@media only screen and (max-width: 520px){ks-recipe-procedure>div{padding:20px}}";

const RecipeProcedure = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("div", { class: "ingredients" }, index.h("slot", { name: "ingredients" })),
      index.h("div", { class: "preparation" }, index.h("slot", { name: "preparation" }))
    ];
  }
};
RecipeProcedure.style = recipeProcedureCss;

exports.ks_recipe_info = RecipeInfo;
exports.ks_recipe_ingredient = RecipeIngredient;
exports.ks_recipe_nutrition = RecipeNutrition;
exports.ks_recipe_procedure = RecipeProcedure;
