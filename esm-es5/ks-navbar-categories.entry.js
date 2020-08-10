import { r as registerInstance, h } from './index-20a680bb.js';
import './index-2db7bf78.js';
import { T as Tunnel } from './navbar-data-beb4ce33.js';
var NavbarCategories = /** @class */ (function () {
    function NavbarCategories(hostRef) {
        registerInstance(this, hostRef);
    }
    NavbarCategories.prototype.render = function () {
        return (h(Tunnel.Consumer, null, function (_a) {
            var categories = _a.categories;
            return (h("nav", { class: "uk-section uk-padding-remove uk-light", style: { backgroundColor: '#00426e', maxHeight: "32px" } }, h("ul", { class: "uk-subnav uk-visible@m uk-margin-remove uk-text-small", style: { padding: '5px 0' } }, categories.map(function (category) { return h("li", null, h("a", { href: category.url }, category.name, category.children ? h("span", { "uk-icon": "icon:  triangle-down" }) : null), category.children ?
                h("div", { "uk-dropdown": "offset: 5" }, h("ul", { class: "uk-nav uk-dropdown-nav" }, category.children.map(function (child) { return h("li", null, h("a", { href: child.url }, child.name)); })))
                : null); }))));
        }));
    };
    return NavbarCategories;
}());
export { NavbarCategories as ks_navbar_categories };
