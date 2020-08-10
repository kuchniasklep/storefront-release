var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, g as getElement } from './index-20a680bb.js';
import './index-2db7bf78.js';
import { T as Tunnel } from './product-data-ada29c2b.js';
var ProductButtons = /** @class */ (function () {
    function ProductButtons(hostRef) {
        registerInstance(this, hostRef);
        this.value = "1";
    }
    ProductButtons.prototype.render = function () {
        return [
            h("div", { class: "uk-grid-small uk-margin-small-top", "uk-grid": true }, this.buttons.available ?
                this.CartButtons(this.buttons.id, this.traitIDs, this.name, this.availability.toString()) :
                this.UnavailableButtons(this.buttons.contact)),
            h("div", { class: "uk-margin-small-top uk-margin-bottom" }, h("ks-flex", { gutter: true }, this.InstallmentButtons(this.currentPrice)))
        ];
    };
    ProductButtons.prototype.CartButtons = function (id, traitIDs, name, count) {
        var _this = this;
        return [
            h("div", { class: "uk-width-expand" }, h("ks-button-cart", { product: true, productId: id, name: name, traits: traitIDs, count: this.value })),
            h("div", { class: "uk-width-1-4 uk-width-1-5@s" }, h("ks-button-fav", { expand: true, "product-id": id })),
            count ?
                h("form", { class: "uk-width-1-1 uk-width-1-5@s", onSubmit: function (e) { return _this.Submit(e); } }, h("input", { class: "uk-input uk-text-center", type: "number", min: "1", max: count, value: this.value, "aria-label": "Ilo\u015B\u0107", onChange: function () { return _this.CountChange(count); } }))
                : null
        ];
    };
    ProductButtons.prototype.Submit = function (e) {
        e.preventDefault();
        var button = this.root.querySelector("ks-button-cart");
        button.AddToCart(this.value);
    };
    ProductButtons.prototype.CountChange = function (maxCount) {
        var input = this.root.querySelector("input");
        var count = parseInt(input.value);
        if (count > parseInt(maxCount)) {
            this.value = maxCount;
        }
        else if (count < 1)
            this.value = "1";
        else {
            this.value = count.toString();
        }
        input.value = this.value;
        var button = this.root.querySelector("ks-button-cart");
        button.SetCount(this.value);
        this.updateShippingTime(this.buttons.id, parseInt(this.value));
    };
    ProductButtons.prototype.UnavailableButtons = function (contact) {
        return (h("div", { class: "uk-width-expand" }, contact ?
            h("a", { href: contact, rel: "nofollow", class: "uk-button-danger uk-button uk-width-expand" }, "NIEDOST\u0118PNY, WY\u015ALIJ ZAPYTANIE") :
            h("button", { class: "uk-button-danger uk-button uk-width-1-1", disabled: true }, "NIEDOST\u0118PNY")));
    };
    ProductButtons.prototype.InstallmentButtons = function (price) {
        var priceInt = parseInt(price);
        var payu = false;
        var creditagricole = false;
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
    };
    Object.defineProperty(ProductButtons.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return ProductButtons;
}());
Tunnel.injectProps(ProductButtons, ['buttons', 'traitIDs', 'name', 'availability', 'currentPrice', 'updateShippingTime']);
var ProductButtons$1 = /** @class */ (function () {
    function ProductButtons$1(hostRef) {
        registerInstance(this, hostRef);
    }
    ProductButtons$1.prototype.render = function () {
        return (h(Tunnel.Consumer, null, function (data) { return (h("div", { class: "uk-margin-bottom uk-flex uk-flex-center uk-flex-wrap" }, data.catalog ?
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
            : null)); }));
    };
    return ProductButtons$1;
}());
var ProductImages = /** @class */ (function () {
    function ProductImages(hostRef) {
        registerInstance(this, hostRef);
    }
    ProductImages.prototype.render = function () {
        var thumbnailIndex = 0;
        return (h(Tunnel.Consumer, null, function (_a) {
            var images = _a.images;
            return (h("div", { "uk-slideshow": "max-height: 500; ratio: 1:1; animation: slide" }, h("div", { class: "uk-position-relative" }, h("ul", { class: "uk-slideshow-items", "uk-lightbox": true }, images.map(function (image) { return h("li", null, h("a", { href: image.full, "aria-label": "Podgl\u0105d zdj\u0119cia" }, h("ks-img", { vertical: true, center: true, src: image.preview, alt: "Zdj\u0119cie produktu" }))); }))), h("div", { class: "uk-position-small" }, h("ul", { class: "uk-thumbnav uk-flex-center" }, images.map(function (image) { return h("li", { "uk-slideshow-item": thumbnailIndex++ }, h("a", { href: "#", "aria-label": "miniaturka zdj\u0119cia" }, h("ks-image", { src: image.thumb, alt: "Miniaturka zdj\u0119cia", width: "50", height: "50" }))); })))));
        }));
    };
    return ProductImages;
}());
var ProductPrice = /** @class */ (function () {
    function ProductPrice(hostRef) {
        registerInstance(this, hostRef);
    }
    ProductPrice.prototype.render = function () {
        return (h(Tunnel.Consumer, null, function (data) {
            var previousPrice = data.previousPrice.replace(".", ",") + " zł";
            var currentPrice = data.currentPrice.replace(".", ",") + " zł";
            var shippingPrice = data.shippingPrice.replace(".", ",") + " zł";
            return (h("div", { class: "uk-margin-small-bottom" }, h("hr", null), h("div", { class: "uk-flex uk-flex-wrap uk-flex-center uk-flex-between@s uk-flex-middle uk-text-center", "uk-grid": true }, h("div", { class: "uk-text-left@s" }, data.previousPrice ? h("h4", { style: { margin: "0" } }, h("s", null, h("b", null, previousPrice))) : null, h("h3", { style: { color: "rgb(255, 27, 57)", margin: "0" } }, h("b", null, currentPrice))), h("div", { class: "uk-visible@s" }, "Koszt wysy\u0142ki:", h("h4", { style: { margin: "0" } }, h("b", null, shippingPrice))), h("div", { class: "uk-visible@s" }, "Czas wysy\u0142ki:", h("h4", { style: { margin: "0" } }, h("b", null, data.shippingTime)))), h("div", { class: "uk-hidden@s uk-text-center uk-margin-top" }, h("div", null, "Koszt wysy\u0142ki: ", h("b", null, shippingPrice)), h("div", null, "Czas wysy\u0142ki: ", h("b", null, data.shippingTime))), h("hr", null)));
        }));
    };
    return ProductPrice;
}());
var ProductSchema = /** @class */ (function () {
    function ProductSchema(hostRef) {
        registerInstance(this, hostRef);
    }
    ProductSchema.prototype.render = function () {
        var _this = this;
        return (h(Tunnel.Consumer, null, function (data) { return (h("script", { type: "application/ld+json" }, _this.generateData(data))); }));
    };
    ProductSchema.prototype.generateData = function (data) {
        var images = data.images.map(function (image) { return "https://kuchniasklep.pl" + image.preview; });
        var futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 4 * 30);
        var timePosition = futureDate.toISOString().indexOf("T");
        var priceValidUntil = futureDate.toISOString().substr(0, timePosition);
        var json = {
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
    };
    return ProductSchema;
}());
var ProductTitle = /** @class */ (function () {
    function ProductTitle(hostRef) {
        registerInstance(this, hostRef);
    }
    ProductTitle.prototype.render = function () {
        return (h(Tunnel.Consumer, null, function (_a) {
            var name = _a.name, breadcrumbs = _a.breadcrumbs;
            return (h("div", { class: "uk-text-center uk-text-left@m uk-margin-bottom" }, h("h1", { style: { marginBottom: "5px" } }, h("b", null, name)), h("ks-breadcrumbs", { center: true, mobile: true }, breadcrumbs.map(function (item) { return h("li", null, h("a", { href: item.link }, item.name)); }))));
        }));
    };
    return ProductTitle;
}());
var ProductTrait = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.selectedTraits = function (data) {
        var selects = this.root.querySelectorAll("select");
        for (var i = 0; i < selects.length; i++) {
            var select = selects[i];
            var selectedIndex = select.selectedIndex;
            data.traits[i].selected = data.traits[i].items[selectedIndex].id;
        }
        var traitIDs = "";
        for (var i = 0; i < data.traits.length; i++) {
            var element = data.traits[i];
            traitIDs += "x" + element.id + "-" + element.selected;
        }
        return traitIDs;
    };
    class_1.prototype.selectTrait = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var productId, traitIDs, traitData, traitImage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productId = data.buttons.id;
                        traitIDs = this.selectedTraits(data);
                        return [4 /*yield*/, this.fetchTraits("inne/produkt.php", ksTraitsToken, productId, traitIDs)];
                    case 1:
                        traitData = _a.sent();
                        return [4 /*yield*/, this.fetchTraits("inne/produkt_cecha_zdjecie.php", ksTraitImageToken, productId, traitIDs)];
                    case 2:
                        traitImage = _a.sent();
                        data.update({
                            currentPrice: traitData.cena,
                            previousPrice: traitData.cenapoprzednia,
                            //shippingTime: traitData.czaswysylki,
                            ean: traitData.ean,
                            catalog: traitData.nrkat,
                            traitIDs: traitIDs
                        });
                        data.updateImage({
                            full: traitImage.duze,
                            preview: traitImage.duze,
                            thumb: traitImage.male
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.fetchTraits = function (api, token, id, traits) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        $.post(api + "?tok=" + token, {
                            id: "555_" + id,
                            cechy: traits
                        }, function (data) {
                            resolve(data);
                        }, "json");
                    })];
            });
        });
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (h(Tunnel.Consumer, null, function (data) {
            data.update({ traitIDs: _this.selectedTraits(data) });
            return (data.traits.map(function (trait) { return h("div", { class: "uk-margin-bottom" }, h("ks-flex", null, h("div", { class: "uk-width-auto uk-flex uk-flex-center uk-flex-middle uk-padding-remove uk-margin-right" }, trait.name), h("div", { class: "uk-width-expand" }, h("select", { "aria-label": trait.name, class: "uk-select", onChange: function () { return _this.selectTrait(data); } }, trait.items.map(function (item) { return h("option", null, item.name); }))))); }));
        }));
    };
    Object.defineProperty(class_1.prototype, "root", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { ProductButtons as ks_product_buttons, ProductButtons$1 as ks_product_codes, ProductImages as ks_product_images, ProductPrice as ks_product_price, ProductSchema as ks_product_schema, ProductTitle as ks_product_title, ProductTrait as ks_product_trait };
