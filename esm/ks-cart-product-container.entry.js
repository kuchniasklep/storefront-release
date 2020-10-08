import { r as registerInstance, h, g as getElement } from './index-22b73bd9.js';
import './state-tunnel-04c0b67a.js';
import { T as Tunnel } from './cartData-c83db97f.js';

const CartProductContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      h("ks-cart-product-heading", { removable: true }),
      this.products.map((product, index) => h("ks-cart-product", { removable: true, key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price, amount: product.amount, "max-amount": product.maxAmount, "shipping-time": product.shippingTime, onRemove: () => this.RemoveProduct(index), onCount: (e) => this.ProductCount(index, e.detail.current, e.detail.last) })),
      h("ks-cart-product-price", { amount: this.productAmount, price: this.productValue, loading: this.loadingProducts, "shipping-time": this.totalShippingTime })
    ];
  }
  get root() { return getElement(this); }
};
Tunnel.injectProps(CartProductContainer, ['productValue', 'productAmount', 'products', 'loadingProducts', 'totalShippingTime', 'RemoveProduct', 'ProductCount']);

export { CartProductContainer as ks_cart_product_container };
