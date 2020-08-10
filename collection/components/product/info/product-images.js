import { Component, h, } from '@stencil/core';
import Tunnel from '../product-data';
export class ProductImages {
    render() {
        let thumbnailIndex = 0;
        return (h(Tunnel.Consumer, null, ({ images }) => {
            return (h("div", { "uk-slideshow": "max-height: 500; ratio: 1:1; animation: slide" },
                h("div", { class: "uk-position-relative" },
                    h("ul", { class: "uk-slideshow-items", "uk-lightbox": true }, images.map(image => h("li", null,
                        h("a", { href: image.full, "aria-label": "Podgl\u0105d zdj\u0119cia" },
                            h("ks-img", { vertical: true, center: true, src: image.preview, alt: "Zdj\u0119cie produktu" })))))),
                h("div", { class: "uk-position-small" },
                    h("ul", { class: "uk-thumbnav uk-flex-center" }, images.map(image => h("li", { "uk-slideshow-item": thumbnailIndex++ },
                        h("a", { href: "#", "aria-label": "miniaturka zdj\u0119cia" },
                            h("ks-image", { src: image.thumb, alt: "Miniaturka zdj\u0119cia", width: "50", height: "50" }))))))));
        }));
    }
    static get is() { return "ks-product-images"; }
}
