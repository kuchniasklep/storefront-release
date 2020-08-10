'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');

const recipeIngredientCss = "ks-recipe-ingredient{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;margin-bottom:5px}ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:18px}ks-recipe-ingredient .underline{margin:0 20px;-webkit-box-flex:1;-ms-flex:1;flex:1;border-bottom:solid 1px #dbdbdb}ks-recipe-ingredient label{-ms-flex-item-align:center;align-self:center;display:block;position:relative;padding-left:35px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ks-recipe-ingredient input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}ks-recipe-ingredient .checkmark{position:absolute;bottom:-11px;left:0;height:22px;width:22px;border:2px solid #252525;-webkit-box-sizing:border-box;box-sizing:border-box}ks-recipe-ingredient label:hover input~.checkmark{background-color:#ccc}ks-recipe-ingredient .checkmark:after{content:\"\";position:absolute;display:none}ks-recipe-ingredient label input:checked~.checkmark:after{display:block}ks-recipe-ingredient label .checkmark:after{left:6px;top:3px;width:4px;height:9px;border:solid #252525;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}@media only screen and (max-width: 520px){ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:16px}ks-recipe-ingredient label{padding-left:28px}}@media only screen and (max-width: 360px){ks-recipe-ingredient .name,ks-recipe-ingredient .amount{font-size:16px}ks-recipe-ingredient label{padding-left:28px}ks-recipe-ingredient .underline{margin:0;-webkit-box-flex:1;-ms-flex:1;flex:1;border-bottom:none}}";

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

exports.ks_recipe_ingredient = RecipeIngredient;
