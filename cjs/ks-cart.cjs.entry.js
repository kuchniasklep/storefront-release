'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
require('./state-tunnel-786a62ce.js');
const cartData = require('./cartData-a515eff7.js');

const Cart = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.api = "";
    this.data = {};
    this.productRemove = "";
    this.productCount = "";
    this.addDeal = "";
    this.countryChange = "";
    this.shippingChange = "";
    this.paymentChange = "";
    this.discountCode = "";
    this.discountPoints = "";
    this.discountRemove = "";
    this.RemoveProduct = async (index) => {
      const id = this.data.products[index].id;
      const data = await this.ProductLoadingWrapper(async () => {
        return this.FetchData(this.productRemove, [{ key: "id", value: id }]);
      });
      if (data) {
        if (data.products.length == 0)
          document.location.reload();
        else {
          this.ShowMessageFromData(data, async (cleanedData) => {
            this.Update(cleanedData);
            if ('discount' in cleanedData == false)
              this.RemoveDiscount();
          });
        }
      }
      const product = document.querySelector(`ks-cart-product[ikey="${id}"]`);
      if (product)
        product.ResetLoading();
    };
    this.lastProductCountCall = new Array();
    this.ProductCount = async (index, count, last) => {
      if (this.lastProductCountCall[index]) {
        this.lastProductCountCall[index] = () => this.ProductCountCall(index, count, last);
      }
      else {
        this.lastProductCountCall[index] = () => { };
        this.ProductCountCall(index, count, last).then(() => {
          if (this.lastProductCountCall[index]) {
            this.lastProductCountCall[index]();
            this.lastProductCountCall[index] = undefined;
          }
        });
      }
    };
    this.ProductCountCall = async (index, current, last) => {
      const id = this.data.products[index].id;
      const data = await this.ProductLoadingWrapper(async () => {
        return this.FetchData(this.productCount, [
          { key: "id", value: id },
          { key: "ilosc", value: current.toString() }
        ]);
      });
      if (data) {
        this.ShowMessageFromData(data, async (cleanedData) => {
          if ('error' in cleanedData) {
            this.Message(cleanedData.error.message);
            await this.Update(this.GetDataWithCorrectedProductAmounts(index, cleanedData.error.amount, cleanedData.error.maxAmount));
          }
          else
            await this.Update(cleanedData);
          if ('discount' in cleanedData == false)
            this.RemoveDiscount();
        });
      }
      else {
        this.data = this.GetDataWithCorrectedProductAmounts(index, last);
        this.SetAmount(last, `ks-cart-product[ikey="${id}"] ks-cart-spinner`);
      }
    };
    this.AddDeal = async (id) => {
      const data = await this.ProductLoadingWrapper(async () => {
        return this.FetchData(this.addDeal, [{ key: "id", value: id }]);
      });
      if (data) {
        if ('error' in data)
          this.Message(data.error.message);
        else
          this.Update(data);
      }
    };
    this.CountryChange = async (code) => {
      this.StartLoading(`ks-cart-select-shipping`);
      this.StartLoading(`ks-cart-select-payment`);
      this.Update(await this.FetchData(this.countryChange, [{ key: "data", value: code }]));
      this.ResetLoading(`ks-cart-select-shipping`);
      this.ResetLoading(`ks-cart-select-payment`);
    };
    this.ShippingChange = async (id) => {
      this.StartLoading(`ks-cart-select-payment`);
      this.Update(await this.FetchData(this.shippingChange, [{ key: "data", value: id.toString() }]));
      this.ResetLoading(`ks-cart-select-payment`);
    };
    this.PaymentChange = async (id) => {
      this.Update(await this.FetchData(this.paymentChange, [{ key: "data", value: id.toString() }]));
    };
    this.DiscountRemove = async () => {
      await this.Update(await this.FetchData(this.discountRemove));
      this.RemoveDiscount();
    };
    this.DiscountCodeAdd = async (code) => {
      const data = await this.FetchData(this.discountCode, [{ key: "data", value: code }]);
      this.ShowMessageFromData(data, (pData) => {
        this.Update(pData);
      });
      this.ResetLoading(`ks-cart-discount-code`);
    };
    this.DiscountPointsAdd = async (points) => {
      const data = await this.FetchData(this.discountPoints, [{ key: "data", value: points.toString() }]);
      this.ScrollToElement('ks-cart-discount-container ks-cart-heading');
      this.Update(data);
      this.ResetLoading(`ks-cart-discount-points`);
    };
  }
  async componentWillLoad() {
    const data = await this.FetchData(this.api);
    this.Update(data);
    this.data.RemoveProduct = this.RemoveProduct;
    this.data.ProductCount = this.ProductCount;
    this.data.AddDeal = this.AddDeal;
    this.data.CountryChange = this.CountryChange;
    this.data.ShippingChange = this.ShippingChange;
    this.data.PaymentChange = this.PaymentChange;
    this.data.DiscountRemove = this.DiscountRemove;
    this.data.DiscountCodeAdd = this.DiscountCodeAdd;
    this.data.DiscountPointsAdd = this.DiscountPointsAdd;
    this.data.loading = 0;
    this.data.loadingProducts = 0;
  }
  GetDataWithCorrectedProductAmounts(productIndex, amount, maxAmount) {
    const correctedData = this.data;
    correctedData.products[productIndex].amount = amount;
    if (maxAmount)
      correctedData.products[productIndex].maxAmount = maxAmount;
    return correctedData;
  }
  GetDataWithoutProducts(data) {
    const dataWithoutProducts = data;
    delete dataWithoutProducts.products;
    return dataWithoutProducts;
  }
  SetAmount(amount, querySelector) {
    const component = document.querySelector(querySelector);
    if (component && 'SetAmount' in component)
      component.SetAmount(amount);
  }
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
    const data = this.data;
    delete data.discount;
    this.data = data;
  }
  ShowMessageFromData(data, callback) {
    if ('message' in data) {
      this.Message(data.message);
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
    this.Update({ loadingProducts: this.data.loadingProducts + 1 });
    const output = await func();
    this.Update({ loadingProducts: this.data.loadingProducts - 1 });
    return output;
  }
  async FetchData(url, formProperties) {
    const headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    let body = null;
    if (formProperties && formProperties.length > 0) {
      body = new FormData();
      formProperties.forEach((item) => {
        body.append(item.key, item.value);
      });
    }
    this.Update({ loading: this.data.loading + 1 });
    return fetch(url, {
      method: 'POST',
      body: body,
      headers: headers,
      credentials: "same-origin"
    })
      .then(response => {
      if (response.ok) {
        this.Update({ loading: this.data.loading - 1 });
        return response.json();
      }
    })
      .catch((error) => {
      if (error) {
        this.Update({ loading: this.data.loading - 1 });
        this.Message("Błąd sieciowy. Sprawdź połączenie z internetem.");
      }
    });
  }
  async Update(data) {
    this.data = Object.assign(Object.assign({}, this.data), data);
  }
  async Message(text) {
    if (!document.querySelector(`ks-alert[message="${text}"]`)) {
      const element = document.createElement("ks-alert");
      element.setAttribute("message", text);
      document.body.appendChild(element);
    }
  }
  render() {
    return (index.h(cartData.Tunnel.Provider, { state: this.data }, index.h("slot", null)));
  }
};

exports.ks_cart = Cart;
