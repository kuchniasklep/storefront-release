import { Component, h } from '@stencil/core';
import { product } from "../../../global/data/product";
export class ProductBrand {
  render() {
    const brand = product.get("brand");
    return h("a", { href: brand.link },
      h("ks-img2", { src: brand.logo, alt: brand.name, width: brand.width, height: brand.height }));
  }
  static get is() { return "ks-product-brand"; }
  static get originalStyleUrls() { return {
    "$": ["product-brand.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-brand.css"]
  }; }
}
