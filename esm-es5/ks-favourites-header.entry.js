import{r as registerInstance,h,g as getElement}from"./index-5edb5049.js";import{a as RemoveAllFavourites}from"./functions-d67550e3.js";var FavouritesHeader=function(){function e(e){registerInstance(this,e)}e.prototype.render=function(){var e=this.value.replace(".",",");return[h("ks-flex",{between:true,middle:true,gutter:true},h("div",{class:"uk-text-center uk-width-1-1 uk-width-auto@m ks-text-decorated",style:{padding:"0 20px"}},h("span",{class:"uk-h1"},"SCHOWEK: "),h("span",{class:"uk-h1 uk-text-danger uk-text-bold",style:{marginLeft:"10px"}},e)),h("div",{class:"uk-text-center uk-width-1-1 uk-width-auto@m"},h("button",{class:"uk-button uk-button-danger uk-border-pill",style:{padding:"3px 30px"},onClick:function(){RemoveAllFavourites()}},"WYCZYŚĆ SCHOWEK"))),h("br",{class:"uk-hidden@m"}),h("hr",null)]};Object.defineProperty(e.prototype,"root",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{FavouritesHeader as ks_favourites_header};