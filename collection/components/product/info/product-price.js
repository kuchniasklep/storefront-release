import { Component, h } from '@stencil/core';
import Tunnel from '../product-data';
export class ProductPrice {
    render() {
        return (h(Tunnel.Consumer, null, (data) => {
            let previousPrice = data.previousPrice.replace(".", ",") + " zł";
            let currentPrice = data.currentPrice.replace(".", ",") + " zł";
            let shippingPrice = data.shippingPrice.replace(".", ",") + " zł";
            return (h("div", { class: "uk-margin-small-bottom" },
                h("hr", null),
                h("div", { class: "uk-flex uk-flex-wrap uk-flex-center uk-flex-between@s uk-flex-middle uk-text-center", "uk-grid": true },
                    h("div", { class: "uk-text-left@s" },
                        data.previousPrice ? h("h4", { style: { margin: "0" } },
                            h("s", null,
                                h("b", null, previousPrice))) : null,
                        h("h3", { style: { color: "rgb(255, 27, 57)", margin: "0" } },
                            h("b", null, currentPrice))),
                    h("div", { class: "uk-visible@s" },
                        "Koszt wysy\u0142ki:",
                        h("h4", { style: { margin: "0" } },
                            h("b", null, shippingPrice))),
                    h("div", { class: "uk-visible@s" },
                        "Czas wysy\u0142ki:",
                        h("h4", { style: { margin: "0" } },
                            h("b", null, data.shippingTime)))),
                h("div", { class: "uk-hidden@s uk-text-center uk-margin-top" },
                    h("div", null,
                        "Koszt wysy\u0142ki: ",
                        h("b", null, shippingPrice)),
                    h("div", null,
                        "Czas wysy\u0142ki: ",
                        h("b", null, data.shippingTime))),
                h("hr", null)));
        }));
    }
    static get is() { return "ks-product-price"; }
}
