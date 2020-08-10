import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
var Sorting = /** @class */ (function () {
    function Sorting(hostRef) {
        registerInstance(this, hostRef);
    }
    Sorting.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("form", { action: this.post, method: "post", style: { margin: "0" } }, h("input", { type: "hidden", name: "sortowanie", value: "0" })), h("button", { class: "uk-button uk-button-danger uk-width-1-1", type: "button" }, "SORTUJ"), h("div", { "uk-dropdown": true, id: "test" }, h("ul", { class: "uk-nav uk-dropdown-nav" }, h("li", null, h("a", { onClick: function () { return _this.Sort(1); } }, "Polecane ", h("span", { class: "uk-float-right", "uk-icon": "icon: check" }))), h("li", null, h("a", { onClick: function () { return _this.Sort(2); } }, "Popularne ", h("span", { class: "uk-float-right", "uk-icon": "icon: users" }))), h("li", null, h("a", { onClick: function () { return _this.Sort(3); } }, "Najnowsze ", h("span", { class: "uk-float-right", "uk-icon": "icon: future" }))), h("hr", null), h("li", null, h("a", { onClick: function () { return _this.Sort(4); } }, "Najta\u0144sze ", h("span", { class: "uk-float-right", "uk-icon": "icon: minus-circle" }))), h("li", null, h("a", { onClick: function () { return _this.Sort(5); } }, "Najdro\u017Csze ", h("span", { class: "uk-float-right", "uk-icon": "icon: plus-circle" })))))));
    };
    Sorting.prototype.componentDidLoad = function () {
        this.dropdown = this.root.querySelector("div[uk-dropdown]");
        this.form = this.root.querySelector("form");
        this.input = this.form.querySelector("input");
    };
    Sorting.prototype.Sort = function (value) {
        this.input.value = value.toString();
        this.form.submit();
    };
    Object.defineProperty(Sorting.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return Sorting;
}());
export { Sorting as ks_sorting };
