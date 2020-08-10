import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
import { b as RemoveAllFavourites } from './functions-016ae99f.js';
var FavouritesHeader = /** @class */ (function () {
    function FavouritesHeader(hostRef) {
        registerInstance(this, hostRef);
    }
    FavouritesHeader.prototype.render = function () {
        var value = this.value
            .replace(".", ",");
        return [
            h("ks-flex", { between: true, middle: true, gutter: true }, h("div", { class: "uk-text-center uk-width-1-1 uk-width-auto@m ks-text-decorated", style: { padding: "0 20px" } }, h("span", { class: "uk-h1" }, "SCHOWEK: "), h("span", { class: "uk-h1 uk-text-danger uk-text-bold", style: { marginLeft: "10px" } }, value)), h("div", { class: "uk-text-center uk-width-1-1 uk-width-auto@m" }, h("button", { class: "uk-button uk-button-danger uk-border-pill", style: { padding: "3px 30px" }, onClick: function () {
                    RemoveAllFavourites();
                } }, "WYCZY\u015A\u0106 SCHOWEK"))),
            h("br", { class: "uk-hidden@m" }), h("hr", null)
        ];
    };
    Object.defineProperty(FavouritesHeader.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return FavouritesHeader;
}());
export { FavouritesHeader as ks_favourites_header };
