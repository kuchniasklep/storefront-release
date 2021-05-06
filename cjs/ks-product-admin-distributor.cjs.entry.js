'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aaabf9e8.js');

const productAdminDistributorCss = "ks-product-admin-distributor{color:#ffffff;display:table-row}ks-product-admin-distributor[overwrite]{color:var(--color-secondary)}";

const ProductAdminDistributor = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = "";
    this.time = "";
    this.quantity = "";
    this.unavailableMode = "";
    this.warning = "";
    this.overwrite = false;
  }
  render() {
    return [
      index.h("td", null, this.name),
      index.h("td", null, this.time),
      index.h("td", null, this.quantity),
      index.h("td", null, this.unavailableMode),
      index.h("td", null, this.warning)
    ];
  }
};
ProductAdminDistributor.style = productAdminDistributorCss;

exports.ks_product_admin_distributor = ProductAdminDistributor;
