import { r as registerInstance, h } from './index-20a680bb.js';
var ContactButtons = /** @class */ (function () {
    function ContactButtons(hostRef) {
        registerInstance(this, hostRef);
    }
    ContactButtons.prototype.render = function () {
        return [
            h("a", { href: "tel:" + this.phone, class: "uk-button uk-button-default uk-border-pill", style: { margin: "2px" } }, this.phone),
            h("a", { href: "mailto:" + this.email, class: "uk-button uk-button-default uk-border-pill", style: { margin: "2px" } }, this.email)
        ];
    };
    return ContactButtons;
}());
export { ContactButtons as ks_contact_buttons };
