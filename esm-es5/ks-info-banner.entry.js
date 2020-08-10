import { r as registerInstance, h } from './index-20a680bb.js';
var InfoBanner = /** @class */ (function () {
    function InfoBanner(hostRef) {
        registerInstance(this, hostRef);
    }
    InfoBanner.prototype.disable = function () {
        var id = "ks-info-banner-" + this.name.replace(" ", "");
        sessionStorage.setItem(id, "true");
    };
    InfoBanner.prototype.render = function () {
        var _this = this;
        var id = "ks-info-banner-" + this.name.replace(" ", "");
        var disabled = sessionStorage.getItem(id);
        if (disabled == null)
            return (h("div", { id: id, class: "uk-position-relative", style: { backgroundColor: this.color } }, h("a", { href: this.link, "aria-label": this.name }, h("div", { class: "uk-flex uk-flex-center" }, h("ks-image", { width: "600", height: "100", src: this.image, alt: this.name }))), h("button", { type: "button", "aria-label": "Schowaj banner", onClick: function () { return _this.disable(); }, class: "uk-light uk-position-small uk-position-top-right", "uk-close": true, "uk-toggle": "target: #" + id })));
        else
            return;
    };
    return InfoBanner;
}());
export { InfoBanner as ks_info_banner };
