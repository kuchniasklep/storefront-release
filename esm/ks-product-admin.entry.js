import { r as registerInstance, h } from './index-46fe532f.js';

const productAdminCss = "ks-product-admin{display:block;margin-bottom:10px}ks-product-admin .bar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#181818;color:white}ks-product-admin .bar>div:not(.links){padding:17px}ks-product-admin .bar>.links{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-product-admin .bar>.links .button{display:block;padding:17px;color:white;background-color:#252525;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;border-style:none;outline-style:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ks-product-admin .bar>.links .button:hover{color:white;background-color:#353535}ks-product-admin .bar>.links .button:active{color:white;background-color:#454545}ks-product-admin .bar>.links .button:nth-child(2n){background-color:#303030}ks-product-admin .bar>.links .button:nth-child(2n):hover{background-color:#404040}ks-product-admin .bar>.links .button:nth-child(2n):active{background-color:#505050}ks-product-admin .distributors{display:table;background-color:#000000;color:#ffffff;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}ks-product-admin .distributors[hidden]{display:none !important;visibility:hidden !important}ks-product-admin .distributors th{font-weight:700;font-size:15.5px !important;font-family:var(--font-emphasis);border-bottom:2px solid #181818;border-right:2px solid #181818}ks-product-admin .distributors td{font-weight:500;font-size:14px;border-right:2px solid #181818}ks-product-admin .distributors th,ks-product-admin .distributors td{text-align:center;padding:8px 20px}ks-product-admin .distributors th:first-child,ks-product-admin .distributors td:first-child{text-align:left}ks-product-admin .distributors *:last-child td{padding:8px 20px 14px 20px}@media only screen and (max-width: 640px) and (min-width: 340px){ks-product-admin .bar{font-size:14px}ks-product-admin .bar>div:not(.links){padding:17px 10px}}@media only screen and (max-width: 420px){ks-product-admin .bar{font-size:12px}ks-product-admin .bar>div:not(.links){padding:17px 8px}ks-product-admin .bar .hide-mobile{display:none !important}}@media only screen and (max-width: 960px){ks-product-admin .bar>.links button{display:none !important}ks-product-admin .distributors{display:none !important;visibility:hidden !important}}";

const ProductAdmin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.editLink = "";
    this.homeQuantity = "";
    this.externalQuantity = "";
    this.availability = "";
    this.overwrite = false;
    this.distributors = false;
    this.expanded = false;
  }
  expand() {
    this.expanded = !this.expanded;
    console.log("EXPAND");
  }
  render() {
    return [
      h("div", { class: "bar" }, h("div", null, h("ks-icon", { name: "home" }), " ", this.homeQuantity), this.externalQuantity != "" ?
        h("div", null, h("ks-icon", { name: "truck" }), " ", this.externalQuantity)
        : null, this.availability != "" ?
        h("div", null, h("ks-icon", { class: "hide-mobile", name: "x-octagon" }), " ", this.availability)
        : null, this.overwrite ?
        h("div", null, h("ks-icon", { class: "hide-mobile", name: "alert-octagon" }), " Nadpisany")
        : null, h("div", { class: "links" }, h("a", { class: "button", href: this.editLink }, h("ks-icon", { name: "edit" })), this.distributors ?
        h("button", { class: "button", onClick: () => this.expand() }, h("ks-icon", { name: this.expanded ? "chevron-up" : "chevron-down" }))
        : null)),
      this.distributors ?
        h("div", { class: "distributors", hidden: !this.expanded }, h("tr", null, h("th", null, "Dystrybutor"), h("th", null, "Czas wysy\u0142ki"), h("th", null, "Stan zewn\u0119trzny"), h("th", null, "Tryb niedost\u0119pno\u015Bci"), h("th", null, "Komunikaty")), h("slot", null))
        : null
    ];
  }
};
ProductAdmin.style = productAdminCss;

export { ProductAdmin as ks_product_admin };
