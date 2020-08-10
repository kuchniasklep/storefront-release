import { r as registerInstance, h } from './index-20a680bb.js';
var productAdminDistributorCss = "ks-product-admin-distributor{color:#ffffff;display:table-row}ks-product-admin-distributor[overwrite]{color:var(--ks-color-secondary)}";
var ProductAdminDistributor = /** @class */ (function () {
    function ProductAdminDistributor(hostRef) {
        registerInstance(this, hostRef);
        this.name = "";
        this.time = "";
        this.quantity = "";
        this.unavailableMode = "";
        this.warning = "";
        this.overwrite = false;
    }
    ProductAdminDistributor.prototype.render = function () {
        return [
            h("td", null, this.name),
            h("td", null, this.time),
            h("td", null, this.quantity),
            h("td", null, this.unavailableMode),
            h("td", null, this.warning)
        ];
    };
    return ProductAdminDistributor;
}());
ProductAdminDistributor.style = productAdminDistributorCss;
export { ProductAdminDistributor as ks_product_admin_distributor };
