import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
import './index-2db7bf78.js';
import { T as Tunnel } from './product-data-ada29c2b.js';

const ProductButtons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.value = "1";
    }
    render() {
        return [
            h("div", { class: "uk-grid-small uk-margin-small-top", "uk-grid": true }, this.buttons.available ?
                this.CartButtons(this.buttons.id, this.traitIDs, this.name, this.availability.toString()) :
                this.UnavailableButtons(this.buttons.contact)),
            h("div", { class: "uk-margin-small-top uk-margin-bottom" }, h("ks-flex", { gutter: true }, this.InstallmentButtons(this.currentPrice)))
        ];
    }
    CartButtons(id, traitIDs, name, count) {
        return [
            h("div", { class: "uk-width-expand" }, h("ks-button-cart", { product: true, productId: id, name: name, traits: traitIDs, count: this.value })),
            h("div", { class: "uk-width-1-4 uk-width-1-5@s" }, h("ks-button-fav", { expand: true, "product-id": id })),
            count ?
                h("form", { class: "uk-width-1-1 uk-width-1-5@s", onSubmit: (e) => this.Submit(e) }, h("input", { class: "uk-input uk-text-center", type: "number", min: "1", max: count, value: this.value, "aria-label": "Ilo\u015B\u0107", onChange: () => this.CountChange(count) }))
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
        return (h("div", { class: "uk-width-expand" }, contact ?
            h("a", { href: contact, rel: "nofollow", class: "uk-button-danger uk-button uk-width-expand" }, "NIEDOST\u0118PNY, WY\u015ALIJ ZAPYTANIE") :
            h("button", { class: "uk-button-danger uk-button uk-width-1-1", disabled: true }, "NIEDOST\u0118PNY")));
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
                h("div", { class: "uk-flex-1" }, h("button", { id: "ks-product-creditagricole", class: "uk-button uk-button-secondary uk-width-expand" }, "RATY CA"), h("ks-product-creditagricole", { price: price, button: "ks-product-creditagricole" }))
                : null,
            payu ?
                h("div", { class: "uk-flex-1" }, h("button", { id: "ks-product-payu", class: "uk-button uk-button-secondary uk-width-expand" }, "RATY PAYU"), h("ks-product-payu", { price: price, button: "ks-product-payu" }))
                : null
        ];
    }
    get root() { return getElement(this); }
};
Tunnel.injectProps(ProductButtons, ['buttons', 'traitIDs', 'name', 'availability', 'currentPrice', 'updateShippingTime']);

const ProductButtons$1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Tunnel.Consumer, null, (data) => (h("div", { class: "uk-margin-bottom uk-flex uk-flex-center uk-flex-wrap" }, data.catalog ?
            h("span", { class: "uk-label" }, " ", h("b", null, "ID:"), " ", data.catalog, " ")
            : null, data.model ?
            h("span", { class: "uk-label" }, " ", h("b", null, "Model:"), " ", data.model, " ")
            : null, data.ean ?
            h("span", { class: "uk-label" }, " ", h("b", null, "EAN:"), " ", data.ean, " ")
            : null, data.brand && data.brandLink ?
            h("a", { href: data.brandLink }, h("span", { class: "uk-label" }, " ", h("b", null, "Producent:"), " ", data.brand, " "))
            : null, data.warranty ?
            data.warrantyLink ?
                h("a", { href: data.warrantyLink }, h("span", { class: "uk-label uk-label-danger" }, " ", data.warranty, " "))
                : h("span", { class: "uk-label uk-label-danger" }, " ", data.warranty, " ")
            : null))));
    }
};

const ProductImages = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        let thumbnailIndex = 0;
        return (h(Tunnel.Consumer, null, ({ images }) => {
            return (h("div", { "uk-slideshow": "max-height: 500; ratio: 1:1; animation: slide" }, h("div", { class: "uk-position-relative" }, h("ul", { class: "uk-slideshow-items", "uk-lightbox": true }, images.map(image => h("li", null, h("a", { href: image.full, "aria-label": "Podgl\u0105d zdj\u0119cia" }, h("ks-img", { vertical: true, center: true, src: image.preview, alt: "Zdj\u0119cie produktu" })))))), h("div", { class: "uk-position-small" }, h("ul", { class: "uk-thumbnav uk-flex-center" }, images.map(image => h("li", { "uk-slideshow-item": thumbnailIndex++ }, h("a", { href: "#", "aria-label": "miniaturka zdj\u0119cia" }, h("ks-image", { src: image.thumb, alt: "Miniaturka zdj\u0119cia", width: "50", height: "50" }))))))));
        }));
    }
};

const ProductPrice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Tunnel.Consumer, null, (data) => {
            let previousPrice = data.previousPrice.replace(".", ",") + " zł";
            let currentPrice = data.currentPrice.replace(".", ",") + " zł";
            let shippingPrice = data.shippingPrice.replace(".", ",") + " zł";
            return (h("div", { class: "uk-margin-small-bottom" }, h("hr", null), h("div", { class: "uk-flex uk-flex-wrap uk-flex-center uk-flex-between@s uk-flex-middle uk-text-center", "uk-grid": true }, h("div", { class: "uk-text-left@s" }, data.previousPrice ? h("h4", { style: { margin: "0" } }, h("s", null, h("b", null, previousPrice))) : null, h("h3", { style: { color: "rgb(255, 27, 57)", margin: "0" } }, h("b", null, currentPrice))), h("div", { class: "uk-visible@s" }, "Koszt wysy\u0142ki:", h("h4", { style: { margin: "0" } }, h("b", null, shippingPrice))), h("div", { class: "uk-visible@s" }, "Czas wysy\u0142ki:", h("h4", { style: { margin: "0" } }, h("b", null, data.shippingTime)))), h("div", { class: "uk-hidden@s uk-text-center uk-margin-top" }, h("div", null, "Koszt wysy\u0142ki: ", h("b", null, shippingPrice)), h("div", null, "Czas wysy\u0142ki: ", h("b", null, data.shippingTime))), h("hr", null)));
        }));
    }
};

const ProductSchema = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Tunnel.Consumer, null, (data) => (h("script", { type: "application/ld+json" }, this.generateData(data)))));
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
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Tunnel.Consumer, null, ({ name, breadcrumbs }) => (h("div", { class: "uk-text-center uk-text-left@m uk-margin-bottom" }, h("h1", { style: { marginBottom: "5px" } }, h("b", null, name)), h("ks-breadcrumbs", { center: true, mobile: true }, breadcrumbs.map(item => h("li", null, h("a", { href: item.link }, item.name))))))));
    }
};

const ProductTrait = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Tunnel.Consumer, null, (data) => {
            data.update({ traitIDs: this.selectedTraits(data) });
            return (data.traits.map(trait => h("div", { class: "uk-margin-bottom" }, h("ks-flex", null, h("div", { class: "uk-width-auto uk-flex uk-flex-center uk-flex-middle uk-padding-remove uk-margin-right" }, trait.name), h("div", { class: "uk-width-expand" }, h("select", { "aria-label": trait.name, class: "uk-select", onChange: () => this.selectTrait(data) }, trait.items.map(item => h("option", null, item.name))))))));
        }));
    }
    get root() { return getElement(this); }
};

export { ProductButtons as ks_product_buttons, ProductButtons$1 as ks_product_codes, ProductImages as ks_product_images, ProductPrice as ks_product_price, ProductSchema as ks_product_schema, ProductTitle as ks_product_title, ProductTrait as ks_product_trait };
