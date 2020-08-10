import { r as registerInstance, h } from './index-20a680bb.js';
var ProductPrice = /** @class */ (function () {
    function ProductPrice(hostRef) {
        registerInstance(this, hostRef);
    }
    ProductPrice.prototype.render = function () {
        return (h("div", { class: "uk-tile uk-padding-remove uk-flex uk-flex-center uk-margin-bottom", style: { backgroundColor: this.color } }, h("ks-image", { alt: this.alt, src: this.image, width: this.width, height: this.height })));
    };
    return ProductPrice;
}());
export { ProductPrice as ks_product_banner };
