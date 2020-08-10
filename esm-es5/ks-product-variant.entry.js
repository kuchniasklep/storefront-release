import { r as registerInstance, h } from './index-20a680bb.js';
var ProductVariant = /** @class */ (function () {
    function ProductVariant(hostRef) {
        registerInstance(this, hostRef);
    }
    ProductVariant.prototype.render = function () {
        return (h("a", { href: this.link, "aria-label": this.name }, h("div", { class: "uk-card uk-card-default uk-card-body uk-padding-small uk-position-relative uk-transition-toggle" }, h("div", { class: "uk-flex uk-flex-column uk-flex-middle uk-text-small", style: this.unavailable ? { opacity: "0.2" } : null }, h("ks-image", { src: this.image, width: "90", height: "90", alt: this.name })), this.active ? h("div", { class: "uk-overlay-border uk-position-cover" }) : null, h("div", { class: "uk-position-cover uk-transition-fade", style: { backgroundColor: "rgba(255, 255, 255, 0.3)" } }))));
    };
    return ProductVariant;
}());
export { ProductVariant as ks_product_variant };
