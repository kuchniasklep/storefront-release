import { r as registerInstance, h } from './index-20a680bb.js';
var DescriptionImage = /** @class */ (function () {
    function DescriptionImage(hostRef) {
        registerInstance(this, hostRef);
    }
    DescriptionImage.prototype.render = function () {
        return (h("div", { class: "uk-flex uk-flex-center" }, h("ks-image", { src: this.image })));
    };
    return DescriptionImage;
}());
export { DescriptionImage as ks_description_image };
