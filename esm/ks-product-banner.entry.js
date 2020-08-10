import { r as registerInstance, h } from './index-20a680bb.js';

const ProductPrice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "uk-tile uk-padding-remove uk-flex uk-flex-center uk-margin-bottom", style: { backgroundColor: this.color } }, h("ks-image", { alt: this.alt, src: this.image, width: this.width, height: this.height })));
    }
};

export { ProductPrice as ks_product_banner };
