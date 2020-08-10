import { Component, h } from '@stencil/core';
export class ArticleCard {
    render() {
        const dotnavBG = '#dfdfdf';
        return (h("div", { class: "uk-section uk-padding-remove" },
            h("div", { "uk-slideshow": "max-height: 550; ratio: 1:1; autoplay: true; animation: slide", class: "uk-dark" },
                h("div", { class: "uk-position-relative" },
                    h("div", { class: "uk-slideshow-items" },
                        h("slot", null)),
                    h("div", { class: "uk-flex uk-flex-center uk-position-bottom uk-visible@s", style: { height: '36px', transform: 'translateY(36px)' } },
                        h("svg", { height: "36", width: "36", style: { fill: dotnavBG } },
                            h("polygon", { points: "0,0 36,0 36,36" })),
                        h("div", { style: { backgroundColor: dotnavBG, padding: '13px 30px' } },
                            h("ul", { class: "uk-slideshow-nav uk-dotnav" })),
                        h("svg", { height: "36", width: "36", style: { fill: dotnavBG } },
                            h("polygon", { points: "0,0 36,0 0,36" })))))));
    }
    static get is() { return "ks-banner-container"; }
}
