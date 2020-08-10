import { r as registerInstance, h } from './index-20a680bb.js';
var Contact = /** @class */ (function () {
    function Contact(hostRef) {
        registerInstance(this, hostRef);
    }
    Contact.prototype.render = function () {
        return (h("div", { class: "uk-text-center uk-text-emphasis", style: { padding: "50px" } }, h("div", { class: "uk-visible@s", style: { height: '20px' } }), h("slot", null), h("ks-contact-buttons", { phone: this.phone, email: this.email })));
    };
    return Contact;
}());
export { Contact as ks_contact };
