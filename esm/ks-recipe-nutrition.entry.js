import { r as registerInstance, h } from './index-20a680bb.js';

const recipeNutritionCss = "ks-recipe-nutrition{display:block;text-align:center;color:#FFFFFF}ks-recipe-nutrition>div:first-child{font-family:var(--font-regular);font-size:13px;background-color:#353535;padding:8px 10px}ks-recipe-nutrition>div:last-child{font-family:var(--font-emphasis);font-size:18px;background-color:#252525;padding:3px 10px}";

const RecipeNutrition = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", null, this.type),
            h("div", null, this.value)
        ];
    }
};
RecipeNutrition.style = recipeNutritionCss;

export { RecipeNutrition as ks_recipe_nutrition };
