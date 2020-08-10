'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

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

exports.ks_recipe_nutrition = RecipeNutrition;
