import { Component, h } from '@stencil/core';
import Tunnel from './product-data';
export class ProductSchema {
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
    static get is() { return "ks-product-schema"; }
}
