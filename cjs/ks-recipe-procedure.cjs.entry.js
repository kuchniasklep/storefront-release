'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

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

exports.ks_recipe_procedure = RecipeProcedure;
