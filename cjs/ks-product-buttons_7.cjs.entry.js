'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b1f42468.js');
require('./index-c953c5aa.js');
const productData = require('./product-data-06c46721.js');

const ProductButtons = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.value = "1";
    }
    render() {
        return [
            index.h("div", { class: "uk-grid-small uk-margin-small-top", "uk-grid": true }, this.buttons.available ?
                this.CartButtons(this.buttons.id, this.traitIDs, this.name, this.availability.toString()) :
                this.UnavailableButtons(this.buttons.contact)),
            index.h("div", { class: "uk-margin-small-top uk-margin-bottom" }, index.h("ks-flex", { gutter: true }, this.InstallmentButtons(this.currentPrice)))
        ];
    }
    CartButtons(id, traitIDs, name, count) {
        return [
            index.h("div", { class: "uk-width-expand" }, index.h("ks-button-cart", { product: true, productId: id, name: name, traits: traitIDs, count: this.value })),
            index.h("div", { class: "uk-width-1-4 uk-width-1-5@s" }, index.h("ks-button-fav", { expand: true, "product-id": id })),
            count ?
                index.h("form", { class: "uk-width-1-1 uk-width-1-5@s", onSubmit: (e) => this.Submit(e) }, index.h("input", { class: "uk-input uk-text-center", type: "number", min: "1", max: count, value: this.value, "aria-label": "Ilo\u015B\u0107", onChange: () => this.CountChange(count) }))
                : null
        ];
    }
    Submit(e) {
        e.preventDefault();
        const button = this.root.querySelector("ks-button-cart");
        button.AddToCart(this.value);
    }
    CountChange(maxCount) {
        const input = this.root.querySelector("input");
        const count = parseInt(input.value);
        if (count > parseInt(maxCount)) {
            this.value = maxCount;
        }
        else if (count < 1)
            this.value = "1";
        else {
            this.value = count.toString();
        }
        input.value = this.value;
        const button = this.root.querySelector("ks-button-cart");
        button.SetCount(this.value);
        this.updateShippingTime(this.buttons.id, parseInt(this.value));
    }
    UnavailableButtons(contact) {
        return (index.h("div", { class: "uk-width-expand" }, contact ?
            index.h("a", { href: contact, rel: "nofollow", class: "uk-button-danger uk-button uk-width-expand" }, "NIEDOST\u0118PNY, WY\u015ALIJ ZAPYTANIE") :
            index.h("button", { class: "uk-button-danger uk-button uk-width-1-1", disabled: true }, "NIEDOST\u0118PNY")));
    }
    InstallmentButtons(price) {
        const priceInt = parseInt(price);
        let payu = false;
        let creditagricole = false;
        if (priceInt >= 500 && priceInt <= 20000)
            creditagricole = true;
        if (priceInt >= 300 && priceInt <= 20000)
            payu = true;
        return [
            creditagricole ?
                index.h("div", { class: "uk-flex-1" }, index.h("button", { id: "ks-product-creditagricole", class: "uk-button uk-button-secondary uk-width-expand" }, "RATY CA"), index.h("ks-product-creditagricole", { price: price, button: "ks-product-creditagricole" }))
                : null,
            payu ?
                index.h("div", { class: "uk-flex-1" }, index.h("button", { id: "ks-product-payu", class: "uk-button uk-button-secondary uk-width-expand" }, "RATY PAYU"), index.h("ks-product-payu", { price: price, button: "ks-product-payu" }))
                : null
        ];
    }
    get root() { return index.getElement(this); }
};
productData.Tunnel.injectProps(ProductButtons, ['buttons', 'traitIDs', 'name', 'availability', 'currentPrice', 'updateShippingTime']);

const ProductButtons$1 = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(productData.Tunnel.Consumer, null, (data) => (index.h("div", { class: "uk-margin-bottom uk-flex uk-flex-center uk-flex-wrap" }, data.catalog ?
            index.h("span", { class: "uk-label" }, " ", index.h("b", null, "ID:"), " ", data.catalog, " ")
            : null, data.model ?
            index.h("span", { class: "uk-label" }, " ", index.h("b", null, "Model:"), " ", data.model, " ")
            : null, data.ean ?
            index.h("span", { class: "uk-label" }, " ", index.h("b", null, "EAN:"), " ", data.ean, " ")
            : null, data.brand && data.brandLink ?
            index.h("a", { href: data.brandLink }, index.h("span", { class: "uk-label" }, " ", index.h("b", null, "Producent:"), " ", data.brand, " "))
            : null, data.warranty ?
            data.warrantyLink ?
                index.h("a", { href: data.warrantyLink }, index.h("span", { class: "uk-label uk-label-danger" }, " ", data.warranty, " "))
                : index.h("span", { class: "uk-label uk-label-danger" }, " ", data.warranty, " ")
            : null))));
    }
};

const ProductImages = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        let thumbnailIndex = 0;
        return (index.h(productData.Tunnel.Consumer, null, ({ images }) => {
            return (index.h("div", { "uk-slideshow": "max-height: 500; ratio: 1:1; animation: slide" }, index.h("div", { class: "uk-position-relative" }, index.h("ul", { class: "uk-slideshow-items", "uk-lightbox": true }, images.map(image => index.h("li", null, index.h("a", { href: image.full, "aria-label": "Podgl\u0105d zdj\u0119cia" }, index.h("ks-img", { vertical: true, center: true, src: image.preview, alt: "Zdj\u0119cie produktu" })))))), index.h("div", { class: "uk-position-small" }, index.h("ul", { class: "uk-thumbnav uk-flex-center" }, images.map(image => index.h("li", { "uk-slideshow-item": thumbnailIndex++ }, index.h("a", { href: "#", "aria-label": "miniaturka zdj\u0119cia" }, index.h("ks-image", { src: image.thumb, alt: "Miniaturka zdj\u0119cia", width: "50", height: "50" }))))))));
        }));
    }
};

const ProductPrice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(productData.Tunnel.Consumer, null, (data) => {
            let previousPrice = data.previousPrice.replace(".", ",") + " zł";
            let currentPrice = data.currentPrice.replace(".", ",") + " zł";
            let shippingPrice = data.shippingPrice.replace(".", ",") + " zł";
            return (index.h("div", { class: "uk-margin-small-bottom" }, index.h("hr", null), index.h("div", { class: "uk-flex uk-flex-wrap uk-flex-center uk-flex-between@s uk-flex-middle uk-text-center", "uk-grid": true }, index.h("div", { class: "uk-text-left@s" }, data.previousPrice ? index.h("h4", { style: { margin: "0" } }, index.h("s", null, index.h("b", null, previousPrice))) : null, index.h("h3", { style: { color: "rgb(255, 27, 57)", margin: "0" } }, index.h("b", null, currentPrice))), index.h("div", { class: "uk-visible@s" }, "Koszt wysy\u0142ki:", index.h("h4", { style: { margin: "0" } }, index.h("b", null, shippingPrice))), index.h("div", { class: "uk-visible@s" }, "Czas wysy\u0142ki:", index.h("h4", { style: { margin: "0" } }, index.h("b", null, data.shippingTime)))), index.h("div", { class: "uk-hidden@s uk-text-center uk-margin-top" }, index.h("div", null, "Koszt wysy\u0142ki: ", index.h("b", null, shippingPrice)), index.h("div", null, "Czas wysy\u0142ki: ", index.h("b", null, data.shippingTime))), index.h("hr", null)));
        }));
    }
};

const ProductSchema = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(productData.Tunnel.Consumer, null, (data) => (index.h("script", { type: "application/ld+json" }, this.generateData(data)))));
    }
    generateData(data) {
        const images = data.images.map(image => "https://kuchniasklep.pl" + image.preview);
        var futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 4 * 30);
        const timePosition = futureDate.toISOString().indexOf("T");
        const priceValidUntil = futureDate.toISOString().substr(0, timePosition);
        const json = {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": data.name,
            "description": data.description,
            "image": images,
            "brand": {
                "@type": "Thing",
                "name": data.brand
            },
            "sku": data.catalog,
            "mpn": data.model,
            "gtin13": data.ean,
            "aggregateRating": data.reviews.count ? {
                "@type": "AggregateRating",
                "ratingValue": data.reviews.score,
                "reviewCount": data.reviews.count
            } : "",
            "review": data.reviews.review.length > 0 ? {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": data.reviews.review[0].overallScore,
                    "bestRating": data.reviews.review[0].bestScore
                },
                "author": {
                    "@type": "Person",
                    "name": data.reviews.review[0].name
                }
            } : "",
            "offers": {
                "@type": "Offer",
                "url": window.location.href,
                "priceCurrency": "PLN",
                "price": data.currentPrice,
                "priceValidUntil": priceValidUntil,
                "itemCondition": "https://schema.org/NewCondition",
                "availability": data.availability > 0 ? "InStock" : "OutOfStock"
            }
        };
        return JSON.stringify(json);
    }
};

const ProductTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(productData.Tunnel.Consumer, null, ({ name, breadcrumbs }) => (index.h("div", { class: "uk-text-center uk-text-left@m uk-margin-bottom" }, index.h("h1", { style: { marginBottom: "5px" } }, index.h("b", null, name)), index.h("ks-breadcrumbs", { center: true, mobile: true }, breadcrumbs.map(item => index.h("li", null, index.h("a", { href: item.link }, item.name))))))));
    }
};

const ProductTrait = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    selectedTraits(data) {
        const selects = this.root.querySelectorAll("select");
        for (let i = 0; i < selects.length; i++) {
            const select = selects[i];
            const selectedIndex = select.selectedIndex;
            data.traits[i].selected = data.traits[i].items[selectedIndex].id;
        }
        let traitIDs = "";
        for (let i = 0; i < data.traits.length; i++) {
            const element = data.traits[i];
            traitIDs += "x" + element.id + "-" + element.selected;
        }
        return traitIDs;
    }
    async selectTrait(data) {
        const productId = data.buttons.id;
        const traitIDs = this.selectedTraits(data);
        const traitData = await this.fetchTraits("inne/produkt.php", ksTraitsToken, productId, traitIDs);
        const traitImage = await this.fetchTraits("inne/produkt_cecha_zdjecie.php", ksTraitImageToken, productId, traitIDs);
        if (traitData.cena != null && traitData.cenapoprzednia != null)
            data.update({
                currentPrice: traitData.cena,
                previousPrice: traitData.cenapoprzednia,
                ean: traitData.ean,
                catalog: traitData.nrkat,
                traitIDs: traitIDs
            });
        else
            data.update({
                ean: traitData.ean,
                catalog: traitData.nrkat,
                traitIDs: traitIDs
            });
        data.updateImage({
            full: traitImage.duze,
            preview: traitImage.duze,
            thumb: traitImage.male
        });
    }
    async fetchTraits(api, token, id, traits) {
        return new Promise(function (resolve) {
            $.post(api + "?tok=" + token, {
                id: "555_" + id,
                cechy: traits
            }, function (data) {
                resolve(data);
            }, "json");
        });
    }
    render() {
        return (index.h(productData.Tunnel.Consumer, null, (data) => {
            data.update({ traitIDs: this.selectedTraits(data) });
            return (data.traits.map(trait => index.h("div", { class: "uk-margin-bottom" }, index.h("ks-flex", null, index.h("div", { class: "uk-width-auto uk-flex uk-flex-center uk-flex-middle uk-padding-remove uk-margin-right" }, trait.name), index.h("div", { class: "uk-width-expand" }, index.h("select", { "aria-label": trait.name, class: "uk-select", onChange: () => this.selectTrait(data) }, trait.items.map(item => index.h("option", null, item.name))))))));
        }));
    }
    get root() { return index.getElement(this); }
};

exports.ks_product_buttons = ProductButtons;
exports.ks_product_codes = ProductButtons$1;
exports.ks_product_images = ProductImages;
exports.ks_product_price = ProductPrice;
exports.ks_product_schema = ProductSchema;
exports.ks_product_title = ProductTitle;
exports.ks_product_trait = ProductTrait;
