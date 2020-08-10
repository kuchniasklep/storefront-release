import { r as registerInstance, h } from './index-20a680bb.js';
var Breadcrumbs = /** @class */ (function () {
    function Breadcrumbs(hostRef) {
        registerInstance(this, hostRef);
        this.center = false;
        this.mobile = false;
    }
    Breadcrumbs.prototype.render = function () {
        var alignment = this.center ?
            this.mobile ?
                "uk-flex-center uk-flex-left@m" :
                "uk-flex-center" :
            "";
        return (h("ul", { class: "uk-breadcrumb uk-margin-remove " + alignment }, h("slot", null)));
    };
    return Breadcrumbs;
}());
export { Breadcrumbs as ks_breadcrumbs };
