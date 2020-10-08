import { r as registerInstance, h } from './index-22b73bd9.js';

const productAdminDistributorCss = "ks-product-admin-distributor{color:#ffffff;display:table-row}ks-product-admin-distributor[overwrite]{color:var(--color-secondary)}";

const ProductAdminDistributor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = "";
    this.time = "";
    this.quantity = "";
    this.unavailableMode = "";
    this.warning = "";
    this.overwrite = false;
  }
  render() {
    return [
      h("td", null, this.name),
      h("td", null, this.time),
      h("td", null, this.quantity),
      h("td", null, this.unavailableMode),
      h("td", null, this.warning)
    ];
  }
};
ProductAdminDistributor.style = productAdminDistributorCss;

export { ProductAdminDistributor as ks_product_admin_distributor };
