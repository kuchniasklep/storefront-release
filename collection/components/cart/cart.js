import { Component, h, Prop, Listen } from '@stencil/core';
import { store } from './cart-store';
import { formfetch } from '../fetch';
export class Cart {
  constructor() {
    this.dataId = "";
    this.api = "";
    this.productRemove = "";
    this.productCount = "";
    this.addDeal = "";
    this.countryChange = "";
    this.shippingChange = "";
    this.paymentChange = "";
    this.discountCode = "";
    this.discountPoints = "";
    this.discountRemove = "";
    this.easyprotectChange = "";
    this.easyprotectRemove = "";
    this.lastProductCountCall = {};
    this.ProductCountCall = async (id, current, last) => {
      const data = await this.ProductLoadingWrapper(async () => {
        return this.fetch(this.productCount, {
          "id": id,
          "ilosc": current.toString()
        });
      });
      if (data) {
        this.ShowMessageFromData("Błąd ilości produktu", data, async (cleanedData) => {
          if ('error' in cleanedData) {
            this.messagePopup.show("Błąd ilości produktu", cleanedData.error.message);
            store.set("products", this.GetCorrectedProductAmounts(id, cleanedData.error.amount, cleanedData.error.maxAmount));
          }
          else
            await this.update(cleanedData);
          if ('discount' in cleanedData == false)
            this.RemoveDiscount();
        });
      }
      else {
        store.set("products", this.GetCorrectedProductAmounts(id, last));
        this.SetAmount(last, `ks-cart-product[ikey="${id}"] ks-cart-spinner`);
      }
    };
  }
  async componentWillLoad() {
    this.errorPopup = document.querySelector("ks-error-popup");
    this.messagePopup = document.querySelector('ks-message-popup');
    let data;
    if (this.dataId) {
      const dataElement = document.getElementById(this.dataId);
      data = JSON.parse(dataElement.innerHTML);
    }
    else
      data = await this.fetch(this.api);
    this.update(data);
    store.set("api", {
      productRemove: this.productRemove,
      productCount: this.productCount,
      addDeal: this.addDeal,
      countryChange: this.countryChange,
      shippingChange: this.shippingChange,
      paymentChange: this.paymentChange,
      discountCode: this.discountCode,
      discountPoints: this.discountPoints,
      discountRemove: this.discountRemove,
      easyprotectChange: this.easyprotectChange,
      easyprotectRemove: this.easyprotectRemove,
    });
  }
  async RemoveProduct(event) {
    const id = event.detail;
    const data = await this.ProductLoadingWrapper(async () => {
      return this.fetch(this.productRemove, { "id": id });
    });
    if (data) {
      if (data.products.length == 0)
        document.location.reload();
      else
        this.ShowMessageFromData("Błąd usuwania produktu", data, async (cleanedData) => {
          this.update(cleanedData);
          if ('discount' in cleanedData == false)
            this.RemoveDiscount();
        });
    }
    const product = document.querySelector(`ks-cart-product[ikey="${id}"]`);
    if (product)
      product.ResetLoading();
  }
  async ProductCount(event) {
    const id = event.detail[0];
    const count = event.detail[1];
    const last = event.detail[2];
    if (this.lastProductCountCall[id]) {
      this.lastProductCountCall[id] = () => this.ProductCountCall(id, count, last);
    }
    else {
      this.lastProductCountCall[id] = () => { };
      this.ProductCountCall(id, count, last).then(() => {
        if (this.lastProductCountCall[id]) {
          this.lastProductCountCall[id]();
          this.lastProductCountCall[id] = undefined;
        }
      });
    }
  }
  GetCorrectedProductAmounts(id, amount, maxAmount) {
    const products = store.get("products");
    products[id].amount = amount;
    if (maxAmount)
      products[id].maxAmount = maxAmount;
    return products;
  }
  GetDataWithoutProducts(data) {
    const dataWithoutProducts = data;
    delete dataWithoutProducts.products;
    return dataWithoutProducts;
  }
  SetAmount(amount, querySelector) {
    console.log("test");
    const component = document.querySelector(querySelector);
    if (component && 'SetAmount' in component)
      component.SetAmount(amount);
  }
  async AddDeal(event) {
    const id = event.detail;
    store.set("loadingDeals", true);
    const data = await this.fetch(this.addDeal, { "id": id });
    store.set("loadingDeals", false);
    if (data) {
      if ('error' in data)
        this.messagePopup.show("Błąd dodawania gratisu", data.error.message);
      else
        this.update(data);
    }
    this.render();
    document.querySelectorAll(`ks-cart-product ks-cart-spinner`).forEach(spinner => spinner.ResetAmount());
  }
  async CountryChange(event) {
    const code = event.detail;
    this.StartLoading(`ks-cart-select-shipping`);
    this.StartLoading(`ks-cart-select-payment`);
    this.update(await this.fetch(this.countryChange, { "data": code }));
    this.ResetLoading(`ks-cart-select-shipping`);
    this.ResetLoading(`ks-cart-select-payment`);
  }
  async ShippingChange(event) {
    const id = event.detail;
    this.StartLoading(`ks-cart-select-payment`);
    this.update(await this.fetch(this.shippingChange, { "data": id.toString() }));
    this.ResetLoading(`ks-cart-select-payment`);
  }
  async PaymentChange(event) {
    const id = event.detail;
    this.update(await this.fetch(this.paymentChange, { "data": id.toString() }));
  }
  async DiscountRemove() {
    await this.update(await this.fetch(this.discountRemove));
    this.RemoveDiscount();
  }
  async DiscountCodeAdd(event) {
    const code = event.detail;
    const data = await this.fetch(this.discountCode, { "data": code });
    this.ShowMessageFromData("Błąd dodawania kodu", data, (pData) => {
      this.update(pData);
    });
    this.ResetLoading(`ks-cart-discount-code`);
  }
  async DiscountPointsAdd(event) {
    const points = event.detail;
    const data = await this.fetch(this.discountPoints, { "data": points.toString() });
    this.ScrollToElement('ks-cart-discount-container ks-cart-heading');
    this.update(data);
    this.ResetLoading(`ks-cart-discount-points`);
  }
  ;
  StartLoading(querySelector) {
    const component = document.querySelector(querySelector);
    if (component && 'StartLoading' in component)
      component.StartLoading();
  }
  ResetLoading(querySelector) {
    const component = document.querySelector(querySelector);
    if (component && 'ResetLoading' in component)
      component.ResetLoading();
  }
  ScrollToElement(querySelector) {
    const heading = document.querySelectorAll(querySelector);
    let scrollAmount = 0;
    if (heading.length == 2)
      scrollAmount = heading[1].getBoundingClientRect().top - heading[0].getBoundingClientRect().top;
    if (scrollAmount)
      window.scrollBy(0, -scrollAmount);
  }
  RemoveDiscount() {
    store.set("discount", {});
  }
  ShowMessageFromData(name, data, callback) {
    if ('message' in data) {
      this.messagePopup.show(name, data.message);
      delete data.message;
      // Update state after modal animation finishes.
      setTimeout(() => {
        callback(data);
      }, 200);
    }
    else
      callback(data);
  }
  async ProductLoadingWrapper(func) {
    store.set("loadingProducts", store.get("loadingProducts") + 1);
    const output = await func();
    store.set("loadingProducts", store.get("loadingProducts") - 1);
    return output;
  }
  async fetch(url, formProperties) {
    store.set("loading", store.get("loading") + 1);
    return formfetch(url, formProperties)
      .then(response => response.json())
      .then(json => {
      store.set("loading", store.get("loading") - 1);
      return json;
    })
      .catch(error => {
      store.set("loading", store.get("loading") - 1);
      this.errorPopup.show(error);
      return {};
    });
  }
  async update(data) {
    Object.keys(data).map(key => {
      store.set(key, data[key]);
    });
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "ks-cart"; }
  static get originalStyleUrls() { return {
    "$": ["cart.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cart.css"]
  }; }
  static get properties() { return {
    "dataId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "data-id",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "api": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "api",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "productRemove": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "product-remove",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "productCount": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "product-count",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "addDeal": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "add-deal",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "countryChange": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "country-change",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "shippingChange": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "shipping-change",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "paymentChange": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "payment-change",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "discountCode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "discount-code",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "discountPoints": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "discount-points",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "discountRemove": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "discount-remove",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "easyprotectChange": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "easyprotect-change",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "easyprotectRemove": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "easyprotect-remove",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get listeners() { return [{
      "name": "removeProduct",
      "method": "RemoveProduct",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "productCount",
      "method": "ProductCount",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "addDeal",
      "method": "AddDeal",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "countryChange",
      "method": "CountryChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "shippingChange",
      "method": "ShippingChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "paymentChange",
      "method": "PaymentChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "discountRemove",
      "method": "DiscountRemove",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "discountCodeAdd",
      "method": "DiscountCodeAdd",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "discountPointsAdd",
      "method": "DiscountPointsAdd",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
