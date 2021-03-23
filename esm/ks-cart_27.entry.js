import { r as registerInstance, h, g as getElement, c as createEvent, H as Host } from './index-2d9093e5.js';
import './index-324bcb5b.js';
import { s as store, f as formfetch } from './cart-store-2721ab73.js';

const cartCss = "ks-cart{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:100%;background:var(--card-background);color:var(--card-text-color);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}";

const Cart = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    this.lastProductCountCall = new Array();
    this.ProductCountCall = async (index, current, last) => {
      const id = store.get("products")[index].id;
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
            store.set("products", this.GetCorrectedProductAmounts(index, cleanedData.error.amount, cleanedData.error.maxAmount));
          }
          else
            await this.update(cleanedData);
          if ('discount' in cleanedData == false)
            this.RemoveDiscount();
        });
      }
      else {
        store.set("products", this.GetCorrectedProductAmounts(index, last));
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
    const index = event.detail;
    const id = store.get("products")[index].id;
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
    const index = event.detail[0];
    const count = event.detail[1];
    const last = event.detail[2];
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
  }
  GetCorrectedProductAmounts(index, amount, maxAmount) {
    const products = store.get("products");
    products[index].amount = amount;
    if (maxAmount)
      products[index].maxAmount = maxAmount;
    return products;
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
  async AddDeal(event) {
    const id = event.detail;
    const data = await this.ProductLoadingWrapper(async () => {
      return this.fetch(this.addDeal, { "id": id });
    });
    if (data) {
      if ('error' in data)
        this.messagePopup.show("Błąd dodawania gratisu", data.error.message);
      else
        this.update(data);
    }
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
};
Cart.style = cartCss;

const cartButtonsCss = "ks-cart-buttons{display:block}ks-cart-buttons>.confirm{-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;font-size:28px;font-weight:700;padding:20px}";

const CartButtons = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.href = "";
    this.loadingDelayed = false;
  }
  LoadingWatcher(loading) {
    if (loading) {
      this.loadingTimeout = setTimeout(() => {
        this.loadingDelayed = true;
      }, 500);
    }
    else {
      clearTimeout(this.loadingTimeout);
      this.loadingDelayed = false;
    }
  }
  componentDidLoad() {
    this.LoadingWatcher(store.get("loading"));
    store.onChange("loading", (loading) => this.LoadingWatcher(loading));
  }
  async clickHandler() {
    if (!store.get("loading")) {
      const shippingSelect = document.querySelector("ks-cart-select-shipping");
      const paymentSelect = document.querySelector("ks-cart-select-payment");
      const shippingValid = await shippingSelect.Validate();
      const paymentValid = await paymentSelect.Validate();
      if (shippingValid && paymentValid)
        window.location.href = this.href;
      else {
        const inputTop = shippingSelect.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        if ('scrollBehavior' in document.documentElement.style)
          window.scroll({ top: inputTop - 100, behavior: "smooth" });
        else
          window.scroll(0, inputTop - 100);
      }
    }
  }
  render() {
    return (h("button", { class: "confirm uk-button uk-button-danger ks-text-decorated", onClick: () => this.clickHandler() }, this.loadingDelayed && store.get("loading") ?
      h("div", { class: "uk-animation-fade", "uk-spinner": true }) :
      h("span", null, "DO KASY")));
  }
  get root() { return getElement(this); }
};
CartButtons.style = cartButtonsCss;

const cartCountrySelectCss = "ks-cart-country-select{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-cart-country-select .select{position:relative;height:35px;margin-bottom:20px}ks-cart-country-select .select .icons{position:absolute;width:25px;height:25px;top:5px;right:4px;pointer-events:none;opacity:1.0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease}ks-cart-country-select .select .icons span{position:absolute}ks-cart-country-select .select span:last-of-type{opacity:0.0}ks-cart-country-select .select select{height:100%;padding:3px 35px 3px 5px;outline:none;border:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;-moz-text-align-last:right;text-align-last:right;font-size:18px;font-family:'Nunito', sans-serif;color:#151515;-webkit-transition:color 0.3s ease;transition:color 0.3s ease}ks-cart-country-select .select option{font-size:16px}ks-cart-country-select .select:hover select{color:#606060}ks-cart-country-select .select:hover span:first-of-type{opacity:0.0}ks-cart-country-select .select:hover span:last-of-type{opacity:1.0}@media only screen and (max-width: 520px){ks-cart-country-select{display:block}ks-cart-country-select .select{margin-bottom:35px}ks-cart-country-select .select select{height:50px;width:100%;padding:0 20px;background-color:#f8f8f8;border:1px solid #d2d2d2;-moz-text-align-last:left;text-align-last:left;font-size:16px}ks-cart-country-select .select .icons{height:50px;width:50px;top:0;right:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:13px;background-color:#252525;color:white}ks-cart-country-select .select span:first-of-type{opacity:0.0 !important}ks-cart-country-select .select span:last-of-type{opacity:1.0 !important}}";

const CartCountrySelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.countryChange = createEvent(this, "countryChange", 7);
  }
  ChangeHandler(event) {
    const target = event.target;
    this.countryChange.emit(target.value);
  }
  render() {
    return [
      h("ks-cart-heading", null, "WYSY\u0141KA I P\u0141ATNO\u015A\u0106"),
      h("div", { class: "select" }, h("div", { class: "icons" }, h("span", { "uk-icon": "icon: world; ratio: 1.2;" }), h("span", { "uk-icon": "icon: triangle-down; ratio: 1.2;" })), h("select", { onChange: (ev) => this.ChangeHandler(ev) }, h("slot", null)))
    ];
  }
  get root() { return getElement(this); }
};
CartCountrySelect.style = cartCountrySelectCss;

const dealCss = "ks-cart-deal{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#252525;padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 0 30px 0}ks-cart-deal .image{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:180px;height:180px;-webkit-transform:translateX(-20px);-ms-transform:translateX(-20px);transform:translateX(-20px)}ks-cart-deal .circle{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:145px;height:145px;padding:10px;border-radius:100%;background-color:white}ks-cart-deal .fx{position:absolute;width:250px;height:250px;max-width:initial;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}ks-cart-deal .fx1{-webkit-animation-duration:50s;animation-duration:50s}ks-cart-deal .fx2{-webkit-animation-duration:40s;animation-duration:40s;animation-direction:reverse}ks-cart-deal .fx3{-webkit-animation-duration:40s;animation-duration:40s}ks-cart-deal .fx4{-webkit-animation-duration:50s;animation-duration:50s;animation-direction:reverse}@-webkit-keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}ks-cart-deal .center{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}ks-cart-deal .text{color:white;font-size:18px;text-align:center}ks-cart-deal .top>a{color:white;text-decoration:none}ks-cart-deal .text>.bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:34px;font-weight:700}ks-cart-deal button{margin-left:20px;padding:8px 30px 10px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;width:260px;background-color:#ff3838;color:white;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}ks-cart-deal button:hover{background-color:#e62c2c}ks-cart-deal button:active{background-color:#d41e1e;-webkit-transition:background-color 0.1s;transition:background-color 0.1s}@media only screen and (max-width: 760px){ks-cart-deal{display:block;padding:20px}ks-cart-deal .image{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);margin:10px auto 30px auto}}@media only screen and (max-width: 460px){ks-cart-deal .text>.bottom{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:34px}ks-cart-deal button{margin:5px 0 0 0}}ks-cart-deal .large{display:none}@media only screen and (min-width: 1100px){ks-cart-deal{-ms-flex-pack:distribute;justify-content:space-around}ks-cart-deal .large{display:block}ks-cart-deal .small{display:none}ks-cart-deal .text{text-align:left;min-width:400px}ks-cart-deal .text>.bottom{display:block;font-size:34px;line-height:34px}ks-cart-deal button{margin-left:0;padding:15px 30px 17px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;background-color:#ff3838;color:white}}";

const CartDeal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.addDeal = createEvent(this, "addDeal", 7);
    this.loading = false;
  }
  Add() {
    this.loading = true;
    this.addDeal.emit(this.ikey);
  }
  render() {
    return [
      h("a", { href: this.link }, h("div", { class: "image" }, h("div", { class: "circle center" }, h("ks-img", { src: this.img, alt: this.name, vertical: true, center: true })), h("svg", { class: "fx fx1 center", width: "250", height: "250" }, h("circle", { cx: "125", cy: "125", r: "80", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50, 32" })), h("svg", { class: "fx fx2 center", width: "250", height: "250" }, h("circle", { cx: "125", cy: "125", r: "88", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50,59" })), h("svg", { class: "fx fx3 center", width: "250", height: "250" }, h("circle", { cx: "125", cy: "125", r: "96", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "30,30" })), h("svg", { class: "fx fx4 center", width: "250", height: "250" }, h("circle", { cx: "125", cy: "125", r: "106", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "70,60" })))),
      h("div", { class: "text ks-text-decorated" }, h("div", { class: "top" }, h("a", { href: this.link }, this.name)), h("div", { class: "bottom" }, this.price, h("button", { class: "ks-text-decorated small", onClick: () => this.Add() }, this.loading ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA")))),
      h("button", { class: "ks-text-decorated large", onClick: () => this.Add() }, this.loading ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA"))
    ];
  }
};
CartDeal.style = dealCss;

const CartDealContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [
      store.get("dealGroups").map((group) => h("ks-cart-deal-group", { key: group.name, name: group.name, deals: group.deals })),
      store.get("deals").map((product) => h("ks-cart-deal", { key: product.id, ikey: product.id, name: product.name, link: product.link, img: product.img, price: product.price }))
    ];
  }
  get root() { return getElement(this); }
};

const dealGroupCss = "ks-cart-deal-group{display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#252525;padding:0 30px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 0 30px 0}ks-cart-deal-group .image{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:180px;height:180px;-webkit-transform:translateX(-20px);-ms-transform:translateX(-20px);transform:translateX(-20px)}ks-cart-deal-group .circle{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;width:145px;height:145px;padding:10px;border-radius:100%;background-color:white}ks-cart-deal-group .fx{position:absolute;width:250px;height:250px;max-width:initial;-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear}ks-cart-deal-group .fx1{-webkit-animation-duration:50s;animation-duration:50s}ks-cart-deal-group .fx2{-webkit-animation-duration:40s;animation-duration:40s;animation-direction:reverse}ks-cart-deal-group .fx3{-webkit-animation-duration:40s;animation-duration:40s}ks-cart-deal-group .fx4{-webkit-animation-duration:50s;animation-duration:50s;animation-direction:reverse}@-webkit-keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}@keyframes rotate{from{-webkit-transform:translate(-50%, -50%) rotate(0deg);transform:translate(-50%, -50%) rotate(0deg)}to{-webkit-transform:translate(-50%, -50%) rotate(360deg);transform:translate(-50%, -50%) rotate(360deg)}}ks-cart-deal-group .center{top:50%;left:50%;-webkit-transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}ks-cart-deal-group .text{color:white;font-size:18px;text-align:center}ks-cart-deal-group .top>a{color:white;text-decoration:none}ks-cart-deal-group .text>.bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:34px;font-weight:700}ks-cart-deal-group button{margin-left:20px;padding:8px 30px 10px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;width:260px;background-color:#ff3838;color:white;-webkit-transition:background-color 0.3s;transition:background-color 0.3s}ks-cart-deal-group button:hover{background-color:#e62c2c}ks-cart-deal-group button:active{background-color:#d41e1e;-webkit-transition:background-color 0.1s;transition:background-color 0.1s}ks-cart-deal-group .variants{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-cart-deal-group .variants label{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 20px 8px 15px;font-size:15px;background-color:#4d4d4d;-ms-flex-negative:0;flex-shrink:0;height:36px}ks-cart-deal-group select{display:block;margin:15px 0;padding:8px 40px 10px 10px;width:100%;height:36px;font-size:15px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#353535;color:#f2f2f2 !important;border:none;background-image:url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');background-repeat:no-repeat, repeat;background-position:right 15px top 50%, 0 0;background-size:10px auto, 100%;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-deal-group select::-ms-expand{display:none}ks-cart-deal-group select:hover{background-color:#404040}ks-cart-deal-group select:focus{outline:none}ks-cart-deal-group select option{font-weight:normal}@media only screen and (max-width: 760px){ks-cart-deal-group{display:block;padding:20px}ks-cart-deal-group .image{-webkit-transform:translateX(0px);-ms-transform:translateX(0px);transform:translateX(0px);margin:10px auto 30px auto}ks-cart-deal-group .variants{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}ks-cart-deal-group select{max-width:220px;text-align:center;-moz-text-align-last:center;text-align-last:center}}@media only screen and (max-width: 460px){ks-cart-deal-group .text>.bottom{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-size:34px !important}ks-cart-deal-group button{margin:5px 0 0 0}}ks-cart-deal-group .large{display:none}@media only screen and (min-width: 1100px){ks-cart-deal-group{-ms-flex-pack:distribute;justify-content:space-around}ks-cart-deal-group .large{display:block}ks-cart-deal-group .small{display:none}ks-cart-deal-group .text{text-align:left;min-width:400px}ks-cart-deal-group .text>.bottom{display:block;font-size:34px;line-height:34px}ks-cart-deal-group button{margin-left:0;padding:15px 30px 17px 30px;border-radius:50px;border-style:none;outline-style:none;font-weight:700;font-size:18px;background-color:#ff3838;color:white}ks-cart-deal-group select{margin:8px 0px 8px 0px;width:auto}}";

const CartDealGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.addDeal = createEvent(this, "addDeal", 7);
    this.loading = false;
  }
  componentWillLoad() {
    this.currentDeal = this.deals[0];
  }
  change(target) {
    const select = target;
    this.currentDeal = this.deals[select.selectedIndex];
  }
  Add() {
    this.loading = true;
    this.addDeal.emit(this.currentDeal.id);
  }
  render() {
    return [
      h("a", { href: this.currentDeal.link }, h("div", { class: "image" }, h("div", { class: "circle center" }, h("ks-img", { src: this.currentDeal.img, alt: this.name, vertical: true, center: true })), h("svg", { class: "fx fx1 center", width: "250", height: "250" }, h("circle", { cx: "125", cy: "125", r: "80", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50, 32" })), h("svg", { class: "fx fx2 center", width: "250", height: "250" }, h("circle", { cx: "125", cy: "125", r: "88", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "50,59" })), h("svg", { class: "fx fx3 center", width: "250", height: "250" }, h("circle", { cx: "125", cy: "125", r: "96", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "30,30" })), h("svg", { class: "fx fx4 center", width: "250", height: "250" }, h("circle", { cx: "125", cy: "125", r: "106", fill: "transparent", stroke: "white", "stroke-width": "3", "stroke-dasharray": "70,60" })))),
      h("div", { class: "text ks-text-decorated" }, h("div", { class: "top" }, h("a", { href: this.currentDeal.link }, this.name), h("div", { class: "variants" }, h("label", null, "Wybierz kolor:"), h("select", { class: "ks-text-decorated", onChange: event => this.change(event.target) }, this.deals.map(deal => h("option", null, deal.name))))), h("div", { class: "bottom" }, this.currentDeal.price, h("button", { class: "ks-text-decorated small", onClick: () => this.Add() }, this.loading ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA")))),
      h("button", { class: "ks-text-decorated large", onClick: () => this.Add() }, this.loading ? h("div", { "uk-spinner": "ratio: 0.8" }) : h("span", null, "DODAJ DO KOSZYKA"))
    ];
  }
};
CartDealGroup.style = dealGroupCss;

const cartDiscountCodeCss = "ks-cart-discount-code{display:block}ks-cart-discount-code>form:first-child{display:-webkit-box;display:-ms-flexbox;display:flex}ks-cart-discount-code ks-input-text{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-discount-code ks-input-text input{height:50px !important}ks-cart-discount-code ks-input-text>div{margin-bottom:3px !important}ks-cart-discount-code button{padding:0 30px !important;height:50px}@media only screen and (max-width: 560px){ks-cart-discount-code>form:first-child{display:block}ks-cart-discount-code button{width:100%}}ks-cart-discount-code .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;margin-top:7px;background-color:#222222;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-discount-code .messsage:hover{background-color:#303030}@media only screen and (max-width: 470px){ks-cart-discount-code .messsage{height:25vw}}";

const CartDiscountCode = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.discountCodeAdd = createEvent(this, "discountCodeAdd", 7);
    this.placeholder = "";
    this.image = "";
    this.loading = false;
  }
  discountCodeAddHandler(event) {
    event.preventDefault();
    if (!this.loading) {
      const form = event.target;
      const input = form.querySelector('input[name="discountCode"]');
      const value = input.value;
      if (value) {
        const valueString = value.toString();
        if (valueString != "") {
          this.loading = true;
          this.discountCodeAdd.emit(valueString);
        }
      }
    }
  }
  async ResetLoading() {
    this.loading = false;
  }
  render() {
    return [
      h("form", { onSubmit: (e) => this.discountCodeAddHandler(e) }, h("ks-input-text", { emphasis: true, center: true, placeholder: this.placeholder, name: "discountCode" }), h("button", { type: "submit", class: "uk-button uk-button-secondary" }, this.loading ? h("div", { "uk-spinner": true }) : h("span", null, "Aktywuj"))),
      h("a", { class: "messsage", onClick: () => {
          const popup = document.querySelector('ks-newsletter-popup');
          if (popup)
            popup.Show();
        } }, h("ks-img", { vertical: true, center: true, src: this.image }))
    ];
  }
};
CartDiscountCode.style = cartDiscountCodeCss;

const cartDiscountContainerCss = "ks-cart-discount-container{display:block;min-height:123px}ks-cart-discount-container>.flex{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}ks-cart-discount-container>.flex>*{width:calc(50% - 4px)}@media only screen and (max-width: 1100px){ks-cart-discount-container>.flex{display:block}ks-cart-discount-container>.flex>*{width:100%;margin-bottom:30px}}";

const CartDiscountContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.codeBanner = "";
    this.codePlaceholder = "";
    this.pointsPlaceholder = "";
    this.pointsMessage = "";
    this.loginMessage = "";
    this.infoMessage = "";
    this.noPointsHeading = "";
    this.noPointsMessage = "";
    this.thresholdHeading = "";
    this.thresholdMessage = "";
    this.loginUrl = "";
    this.loggedIn = false;
    this.disablePoints = false;
  }
  render() {
    const discount = store.get("discount");
    const points = store.get("points");
    const pointsForOrder = store.get("pointsForOrder");
    const productValue = store.get("productValue");
    if (Object.keys(discount).length !== 0) {
      return (h("nav", { class: "uk-animation-fade" }, h("ks-cart-heading", null, discount.heading), h("ks-cart-discount-ticket", { name: discount.name, value: discount.value })));
    }
    const pointsMessage = this.pointsMessage
      .replace("{available}", points.available.toString())
      .replace("{value}", points.value.toFixed(2))
      .replace("{points}", pointsForOrder.toFixed(0));
    const loginMessage = this.loginMessage
      .replace("{points}", pointsForOrder.toFixed(0));
    const noPointsMessage = this.noPointsMessage
      .replace("{points}", pointsForOrder.toFixed(0));
    const thresholdMessage = this.thresholdMessage
      .replace("{threshold}", points.threshold.toFixed(2))
      .replace("{points}", pointsForOrder.toFixed(0));
    return [
      h("div", { class: `uk-animation-fade ${!this.disablePoints ? "flex" : ""}` }, h("div", null, h("ks-cart-heading", null, "KOD RABATOWY"), h("ks-cart-discount-code", { placeholder: this.codePlaceholder, image: this.codeBanner })), !this.disablePoints ?
        h("div", null, h("ks-cart-heading", null, "PUNKTY"), this.loggedIn ? (points.available > 0 ?
          productValue >= points.threshold || points.threshold == 0 ?
            h("ks-cart-discount-points", { placeholder: this.pointsPlaceholder, message: pointsMessage, points: points.available, orderPoints: pointsForOrder })
            :
              h("ks-cart-discount-points-message", { heading: this.thresholdHeading, message: thresholdMessage, points: pointsForOrder })
          :
            h("ks-cart-discount-points-message", { heading: this.noPointsHeading, message: noPointsMessage, points: pointsForOrder })) :
          h("ks-cart-discount-points-login", { message: loginMessage, points: pointsForOrder, "login-url": this.loginUrl }))
        : null),
      this.infoMessage != "" ?
        h("ks-cart-discount-message", null, h("span", null, this.infoMessage))
        : null
    ];
  }
  get root() { return getElement(this); }
};
CartDiscountContainer.style = cartDiscountContainerCss;

const cartDiscountTicketCss = "ks-cart-discount-ticket{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;min-height:70px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ff3838;color:white;font-size:20px}ks-cart-discount-ticket .content{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px}ks-cart-discount-ticket .name{-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:700}ks-cart-discount-ticket .remove{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:70px;background-color:transparent;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease}ks-cart-discount-ticket .remove:hover{background-color:rgba(0, 0, 0, 0.068)}ks-cart-discount-ticket .remove:active{background-color:rgba(0, 0, 0, 0.137)}@media only screen and (max-width: 560px){ks-cart-discount-ticket .content{display:block}ks-cart-discount-ticket .value{font-size:16px}}";

const CartDiscountTicket = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = "";
  }
  render() {
    return [
      h("div", { style: { margin: "20px 0", color: "#777777", textAlign: "center" } }, h("span", { "uk-icon": "info" }), " ", h("slot", null))
    ];
  }
};
CartDiscountTicket.style = cartDiscountTicketCss;

const cartDiscountPointsCss = "ks-cart-discount-points{display:block}ks-cart-discount-points>form{display:-webkit-box;display:-ms-flexbox;display:flex}ks-cart-discount-points ks-input-number{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-discount-points ks-input-number input{height:50px !important}ks-cart-discount-points ks-input-number>div{margin-bottom:3px !important}ks-cart-discount-points button{padding:0 30px !important;height:50px}@media only screen and (max-width: 600px){ks-cart-discount-points>form{display:block}ks-cart-discount-points button{width:100%}}ks-cart-discount-points .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;margin-top:7px;background-color:#222222;color:white}ks-cart-discount-points .messsage:hover{color:white;text-decoration:none}ks-cart-discount-points .messsage:visited{color:white;text-decoration:none}ks-cart-discount-points .messsage>.bottom{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:15px}ks-cart-discount-points .messsage .points{height:100%}ks-cart-discount-points .points>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 30px;height:50%;font-size:26px;font-weight:700}ks-cart-discount-points .points>div>span{-webkit-transform:translateX(-5px);-ms-transform:translateX(-5px);transform:translateX(-5px)}ks-cart-discount-points .points>.top{background-color:#303030}ks-cart-discount-points .points>.bottom{background-color:#ff3c3c}@media only screen and (max-width: 600px){ks-cart-discount-points .messsage{display:block;height:auto;text-align:center}ks-cart-discount-points .messsage .points{display:none}}";

const CartDiscountPoints = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.discountPointsAdd = createEvent(this, "discountPointsAdd", 7);
    this.placeholder = "";
    this.message = "";
    this.points = 1;
    this.orderPoints = 1;
    this.loading = false;
  }
  discountPointsAddHandler(event) {
    event.preventDefault();
    if (!this.loading) {
      const form = event.target;
      const input = form.querySelector('input[name="pointCount"]');
      const value = input.value;
      if (value) {
        const valueNumber = parseInt(value.toString());
        if (valueNumber != NaN) {
          this.loading = true;
          this.discountPointsAdd.emit(valueNumber);
        }
      }
    }
  }
  async ResetLoading() {
    this.loading = false;
  }
  render() {
    return [
      h("form", { onSubmit: (e) => this.discountPointsAddHandler(e), novalidate: true }, h("ks-input-number", { emphasis: true, center: true, placeholder: this.placeholder, min: 1, max: this.points, step: 10, name: "pointCount" }), h("button", { type: "submit", class: "uk-button uk-button-secondary" }, this.loading ? h("div", { "uk-spinner": true }) : h("span", null, "Aktywuj"))),
      h("div", { class: "messsage" }, h("div", { class: "points ks-text-decorated" }, h("div", { class: "top" }, this.points), h("div", { class: "bottom" }, h("span", null, "+", this.orderPoints))), h("div", { class: "bottom" }, this.message))
    ];
  }
};
CartDiscountPoints.style = cartDiscountPointsCss;

const cartDiscountPointsLoginCss = "ks-cart-discount-points-login{display:block}ks-cart-discount-points-login a{padding:4px 5px !important;height:50px;width:100%;font-size:18px !important;font-weight:700 !important;text-transform:uppercase !important}ks-cart-discount-points-login a:first-child{border-right:1px solid #303030}ks-cart-discount-points-login .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:7px;background-color:#222222;color:white}@media only screen and (max-width: 600px){ks-cart-discount-points-login .messsage{display:block;height:auto;text-align:center;font-size:14px}ks-cart-discount-points-login a{font-size:14px !important;font-weight:400 !important;text-transform:none !important}}ks-cart-discount-points-login .messsage>.info{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:15px}ks-cart-discount-points-login .messsage .points{height:100%}ks-cart-discount-points-login .points{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 30px;font-size:32px;font-weight:700;background-color:#ff3c3c}ks-cart-discount-points-login .points>span{-webkit-transform:translateX(-5px);-ms-transform:translateX(-5px);transform:translateX(-5px)}@media only screen and (max-width: 600px){ks-cart-discount-points-login .messsage .points{display:none}}";

const CartDiscountPointsLogin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.message = "";
    this.loginUrl = "";
    this.points = 1;
  }
  render() {
    return [
      h("div", null, h("a", { href: this.loginUrl, class: "uk-button uk-button-secondary ks-text-decorated" }, "Zaloguj si\u0119")),
      h("div", { class: "messsage" }, h("div", { class: "points ks-text-decorated" }, h("span", null, "+", this.points)), h("div", { class: "info" }, this.message))
    ];
  }
};
CartDiscountPointsLogin.style = cartDiscountPointsLoginCss;

const cartDiscountPointsMessageCss = "ks-cart-discount-points-message{display:block}ks-cart-discount-points-message>div:first-child{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:50px;padding:4px 5px !important;background-color:#222222;color:white;font-size:18px !important;font-weight:700 !important;text-transform:uppercase !important}ks-cart-discount-points-message .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;font-size:15px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:7px;background-color:#222222;color:white}@media only screen and (max-width: 600px){ks-cart-discount-points-message .messsage{display:block;height:auto;text-align:center;font-size:14px}ks-cart-discount-points-message div:first-child{font-size:14px !important;font-weight:400 !important;text-transform:none !important}}ks-cart-discount-points-message .messsage>.info{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:15px}ks-cart-discount-points-message .messsage .points{height:100%}ks-cart-discount-points-message .points{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 30px;font-size:32px;font-weight:700;background-color:#ff3c3c}ks-cart-discount-points-message .points>span{-webkit-transform:translateX(-5px);-ms-transform:translateX(-5px);transform:translateX(-5px)}@media only screen and (max-width: 600px){ks-cart-discount-points-message .messsage .points{display:none}}";

const CartDiscountPointsMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.heading = "";
    this.message = "";
    this.points = 1;
  }
  render() {
    return [
      h("div", { class: "ks-text-decorated" }, this.heading),
      h("div", { class: "messsage" }, h("div", { class: "points ks-text-decorated" }, h("span", null, "+", this.points)), h("div", { class: "info" }, this.message))
    ];
  }
};
CartDiscountPointsMessage.style = cartDiscountPointsMessageCss;

const cartDiscountTicketCss$1 = "ks-cart-discount-ticket{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;min-height:70px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ff3838;color:white;font-size:20px}ks-cart-discount-ticket .content{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px}ks-cart-discount-ticket .name{-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:700}ks-cart-discount-ticket .remove{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:70px;background-color:transparent;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease}ks-cart-discount-ticket .remove:hover{background-color:rgba(0, 0, 0, 0.068)}ks-cart-discount-ticket .remove:active{background-color:rgba(0, 0, 0, 0.137)}@media only screen and (max-width: 560px){ks-cart-discount-ticket .content{display:block}ks-cart-discount-ticket .value{font-size:16px}}";

const CartDiscountTicket$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.discountRemove = createEvent(this, "discountRemove", 7);
    this.name = "";
    this.value = "";
    this.loading = false;
  }
  discountRemoveHandler() {
    this.loading = true;
    this.discountRemove.emit();
  }
  render() {
    return [
      h("div", { class: "content ks-text-decorated" }, h("div", { class: "name" }, this.name), h("div", { class: "value" }, this.value)),
      h("div", { class: "remove", onClick: () => this.discountRemoveHandler() }, this.loading ?
        h("div", { "uk-spinner": true })
        :
          h("span", { "uk-icon": "icon: close; ratio: 1.3;" }))
    ];
  }
};
CartDiscountTicket$1.style = cartDiscountTicketCss$1;

const CartHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.center = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.root.style.marginBottom = "20px";
    if (this.center)
      this.root.style.textAlign = "center";
  }
  render() {
    return [
      h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, h("slot", null))
    ];
  }
  get root() { return getElement(this); }
};

const cartMessageCss = "ks-cart-message{display:block;text-align:center;color:white;background-color:var(--color-secondary);overflow:hidden;opacity:0.0;max-height:0px;height:auto;-webkit-transition:opacity 0.5s ease, max-height 0.5s ease;transition:opacity 0.5s ease, max-height 0.5s ease}ks-cart-message.show{opacity:1.0;max-height:100px}ks-cart-message.hide{opacity:0.0;max-height:0px}ks-cart-message>p{margin:10px}";

const CartMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.message = "";
    this.visibility = "hide";
    this.messageDelay = "";
  }
  componentWillLoad() {
    this.watchHandler(this.message);
  }
  watchHandler(newValue) {
    if (newValue == "") {
      this.visibility = "hide";
      setTimeout(() => {
        this.messageDelay = "";
      }, 500);
    }
    else {
      this.visibility = "show";
      this.messageDelay = this.message;
    }
  }
  render() {
    return (h(Host, { class: this.visibility }, h("p", null, this.messageDelay)));
  }
  static get watchers() { return {
    "message": ["watchHandler"]
  }; }
};
CartMessage.style = cartMessageCss;

const cartProductCss = "ks-cart-product{display:block}ks-cart-product>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:18px}ks-cart-product .description{-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-product .description a{color:inherit !important;text-decoration:none !important}ks-cart-product .numbers{font-weight:700}ks-cart-product .price{text-align:center;width:100px}ks-cart-product .amount{text-align:center;width:120px}@media only screen and (max-width: 959px){ks-cart-product .price{text-align:initial;width:initial;color:#e21334}ks-cart-product .shipping{margin-left:10px}ks-cart-product .amount{text-align:initial;width:initial;margin-left:15px}ks-cart-product ks-cart-spinner{margin-top:10px}}@media only screen and (max-width: 640px){ks-cart-product>div{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative}ks-cart-product .description{text-align:center}ks-cart-product .shipping{display:block;font-size:16px;margin-bottom:5px}ks-cart-product .numbers{margin-top:7px}}";

const CartProduct = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.removeProduct = createEvent(this, "removeProduct", 7);
    this.productCount = createEvent(this, "productCount", 7);
    this.shippingTime = "";
    this.amount = 1;
    this.removable = false;
    this.loading = false;
    this.mobile = 0;
  }
  onRemoveHandler() {
    this.loading = true;
    this.removeProduct.emit(this.index);
  }
  onCountHandler(detail) {
    this.productCount.emit([this.index, detail.current, detail.last]);
  }
  async ResetLoading() {
    this.loading = false;
  }
  resizeHandler() {
    this.mobile =
      window.innerWidth < 959 ?
        window.innerWidth < 640 ?
          2 : 1
        : 0;
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  render() {
    const price = this.price.toFixed(2).replace(".", ",") + " zł";
    const inlineBlockOnMobile = { display: this.removable ? "block" : "inline-block" };
    return [
      h("div", { class: "ks-text-decorated", "uk-grid": true }, h("a", { href: this.link }, h("ks-image", { src: this.img, width: "150", height: "150", contain: true, alt: "zdj\u0119cie produktu" })), h("div", { class: "description" }, h("a", { href: this.link, innerHTML: this.name }), this.mobile >= 1 ?
        h("div", { class: "numbers" }, h("div", { style: inlineBlockOnMobile }, h("span", { class: "price" }, price), h("span", { class: "shipping" }, this.shippingTime)), h("div", { style: inlineBlockOnMobile }, this.removable ?
          h("ks-cart-spinner", { onChanged: (e) => this.onCountHandler(e.detail), "initial-value": this.amount, max: this.maxAmount }) :
          h("span", { class: "amount" }, this.amount, " szt.")))
        : this.shippingTime != "" ?
          h("div", { class: "numbers" }, this.shippingTime)
          : null), this.mobile == 0 ? [
        h("div", { class: "price" }, price),
        h("div", { class: "amount" }, this.removable ?
          h("ks-cart-spinner", { onChanged: (e) => this.onCountHandler(e.detail), "initial-value": this.amount, max: this.maxAmount }) :
          h("span", null, this.amount, " szt."))
      ] : null, this.removable ?
        this.mobile == 2 ?
          this.loading ?
            h("div", { "uk-spinner": true, class: "uk-position-top-right uk-position-small" }) :
            h("button", { type: "button", "uk-close": true, class: "uk-close-large uk-position-top-right uk-position-small", onClick: () => this.onRemoveHandler() })
          :
            h("nav", { style: { width: "50px" }, class: "uk-text-center" }, this.loading ?
              h("div", { "uk-spinner": true }) :
              h("button", { type: "button", "uk-close": true, class: "uk-close-large", onClick: () => this.onRemoveHandler() }))
        : null),
      h("hr", null)
    ];
  }
};
CartProduct.style = cartProductCss;

const CartProductContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const products = Object.entries(store.get("products"));
    return [
      h("ks-cart-product-heading", { removable: true }),
      products.map(([id, product], index) => h("ks-cart-product", { removable: true, key: id, ikey: id, index: index, name: product.name, link: product.link, img: product.img, price: product.price, amount: product.amount, "max-amount": product.maxAmount, "shipping-time": product.shippingTime })),
      h("ks-cart-product-price", { amount: store.get("productAmount"), price: store.get("productValue"), loading: store.get("loadingProducts"), "shipping-time": store.get("totalShippingTime") })
    ];
  }
  get root() { return getElement(this); }
};

const CartProductHeading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      h("div", { class: "uk-flex uk-flex-middle ks-text-decorated", "uk-grid": true, style: { fontSize: "18px" } }, h("div", { class: "uk-width-expand uk-text-bold", style: { fontSize: "22px" } }, "PRODUKTY"), h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "CENA"), h("div", { style: { width: "100px" }, class: "uk-text-center uk-visible@m" }, "ILO\u015A\u0106"), this.removable ?
        h("div", { style: { width: "50px" }, class: "uk-text-center" }, "USU\u0143")
        : null),
      h("hr", null)
    ];
  }
  get root() { return getElement(this); }
};

const cartProductPriceCss = "ks-cart-product-price{display:block}ks-cart-product-price>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-cart-product-price .sentence{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:18px;font-weight:700;text-align:center}ks-cart-product-price .price{color:#e21334}ks-cart-product-price .shipping{display:inline-block;margin-left:15px}ks-cart-product-price .edit{-webkit-box-sizing:border-box;box-sizing:border-box;width:auto;max-width:100%}ks-cart-product-price .edit a{padding:3px 20px}@media only screen and (min-width: 960px){ks-cart-product-price .sentence{text-align:right}}@media only screen and (max-width: 959px){ks-cart-product-price .edit{margin-top:10px;width:100%}}@media only screen and (max-width: 640px){ks-cart-product-price .shipping{display:block;margin-left:0;font-size:16px}}";

const CartProductPrice = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.shippingTime = "";
    this.editLink = "";
    this.loading = 0;
    this.loadingDelayed = false;
  }
  LoadingWatcher() {
    if (this.loading) {
      this.loadingTimeout = setTimeout(() => {
        this.loadingDelayed = true;
      }, 300);
    }
    else {
      clearTimeout(this.loadingTimeout);
      this.loadingDelayed = false;
    }
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.LoadingWatcher();
  }
  render() {
    const price = this.price.toFixed(2).replace(".", ",") + " zł";
    let produkty = "produkt";
    const lastDigit = parseInt(this.amount.toString().split('').pop());
    if (this.amount == 1)
      produkty = "produkt";
    else if (this.amount > 1 && this.amount < 5)
      produkty = "produkty";
    else if (this.amount >= 5 && this.amount <= 21)
      produkty = "produktów";
    else if (lastDigit <= 1 || lastDigit >= 5)
      produkty = "produktów";
    else
      produkty = "produkty";
    return [
      h("div", null, h("div", { class: "sentence ks-text-decorated" }, this.loadingDelayed && this.loading ?
        h("div", { class: "uk-animation-fade", "uk-spinner": "ratio: 0.7" }) : [
        h("span", null, "Razem ", this.amount, " ", produkty, " za ", h("span", { class: "price" }, price)),
        this.shippingTime != "" ? h("span", { class: "shipping" }, this.shippingTime) : null
      ]), this.editLink ?
        h("div", { class: "edit" }, h("a", { href: this.editLink, class: "uk-button uk-button-default uk-width-1-1" }, "Wr\u00F3\u0107 do koszyka"))
        : null),
      h("hr", null)
    ];
  }
  get root() { return getElement(this); }
  static get watchers() { return {
    "loading": ["LoadingWatcher"]
  }; }
};
CartProductPrice.style = cartProductPriceCss;

const cartProgressBarCss = "ks-cart-progress-bar{display:block;padding:25px 30px 30px 30px;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-progress-bar .heading{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px;font-size:20px;text-shadow:0 0 10px rgba(0, 0, 0, 0.25);color:white}ks-cart-progress-bar .progress{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:35px;border-radius:3px;background-color:rgba(255, 255, 255, 0.219)}ks-cart-progress-bar .progress-fill{height:100%;border-radius:inherit;-webkit-transition:width 0.3s ease;transition:width 0.3s ease;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;padding:0 15px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:white}ks-cart-progress-bar .progress-number{color:#252525;font-size:17px;font-weight:700}ks-cart-progress-bar .outside{color:white;font-size:18px;font-weight:400;margin-left:10px}@media only screen and (max-width: 959px){ks-cart-progress-bar{padding:15px 20px 20px 20px}}@media only screen and (max-width: 520px){ks-cart-progress-bar .heading{display:block;text-align:center}ks-cart-progress-bar .heading>div:first-child{display:block;font-weight:700}}";

const CartProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.numberPlacement = false;
  }
  componentWillLoad() {
    this.shippingProgress = store.get("shippingProgress");
    this.resizeHandler();
    if (!this.shippingProgress) {
      this.root.hidden = true;
    }
    else {
      this.root.hidden = false;
      this.root.style.backgroundColor = this.shippingProgress.color;
    }
  }
  resizeHandler() {
    if (this.shippingProgress) {
      const barWidth = Math.min(store.get("productValue") / this.shippingProgress.threshold * 100, 100);
      this.numberPlacement = (barWidth / 100 * window.innerWidth) > 200;
    }
  }
  componentWillUpdate() {
    this.componentWillLoad();
  }
  render() {
    const productValue = store.get("productValue");
    const data = this.shippingProgress;
    if (!data)
      return null;
    const threshold = (Number.isInteger(data.threshold) ?
      data.threshold.toString() :
      data.threshold.toFixed(2)).replace(".", ",");
    const current = productValue.toFixed(2).replace(".", ",");
    const barWidth = Math.min(productValue / data.threshold * 100, 100);
    const thresholdAchieved = productValue >= data.threshold;
    return [
      h("div", { class: "heading ks-text-decorated" }, h("div", null, data.heading), h("div", null, "od ", threshold, " z\u0142")),
      h("div", { class: "progress", style: { backgroundColor: thresholdAchieved ? "transparent" : "" } }, h("div", { class: "progress-fill", style: { width: `${barWidth}%` } }, this.numberPlacement ?
        h("div", { class: "progress-number" }, thresholdAchieved ? h("span", { "uk-icon": "icon: check; ratio: 1.5" }) : `${current} zł`)
        : null), !this.numberPlacement ?
        h("div", { class: "progress-number outside" }, thresholdAchieved ? h("span", { "uk-icon": "icon: check; ratio: 1.5" }) : `${current} zł`)
        : null)
    ];
  }
  get root() { return getElement(this); }
};
CartProgressBar.style = cartProgressBarCss;

const cartSelectItemCss = "ks-cart-select-item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;cursor:pointer;z-index:10;position:relative;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-select-item .logo{background-color:#252525;height:100%;width:150px;padding:5px;border-top:1px solid rgba(0, 0, 0, 0.1);-webkit-box-sizing:border-box;box-sizing:border-box}@media only screen and (max-width: 720px){ks-cart-select-item .logo{display:none}}ks-cart-select-item .name{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:0 20px;font-size:16px}ks-cart-select-item .price{padding:0 20px;font-size:16px}@media only screen and (max-width: 420px){ks-cart-select-item .name{padding:0 5px 0 20px;font-size:14px}ks-cart-select-item .price{padding:0 10px 0 5px;font-size:14px}}";

const CartSelectItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.logo = "";
    this.name = "";
    this.price = "";
    this.color = "";
  }
  render() {
    return [
      this.logo ?
        h("div", { class: "logo", style: { backgroundColor: this.color } }, h("ks-img", { vertical: true, center: true, src: this.logo, target: "ks-cart-select-shipping, ks-cart-select-payment" })) : null,
      h("div", { class: "name" }, this.name),
      (this.price != "" && this.price != "0") ?
        h("div", { class: "price" }, this.price.replace(".", ",") + " ZŁ")
        : null
    ];
  }
  get root() { return getElement(this); }
};
CartSelectItem.style = cartSelectItemCss;

const cartSelectCss = ".ks-cart-select{display:block;position:relative;height:50px}.ks-cart-select .animation{-webkit-animation:start 1.0s ease;animation:start 1.0s ease}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}.ks-cart-select>.center{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px}.ks-cart-select .select{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#f8f8f8;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;outline:1px solid #d2d2d2;outline-offset:-1px}.ks-cart-select .select:hover{background-color:#f2f2f2}.ks-cart-select[error] .select{background-color:#ffc5c5;color:#ff0000;outline-color:#ff0000}.ks-cart-select[error] .select:hover{background-color:#ff8a8a}.ks-cart-select .selectSlot{-webkit-box-flex:1;-ms-flex:1;flex:1}.ks-cart-select .selectIcon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:10;width:50px;height:50px;background-color:#252525;color:white;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.ks-cart-select .select:hover .selectIcon{background-color:#353535}.ks-cart-select .items{position:absolute;top:50px;left:0;width:100%;z-index:20;background-color:#f8f8f8;-webkit-box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349);box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349)}.ks-cart-select .items .ks-cart-select-item:hover{background-color:#f0f0f0}@media only screen and (max-width: 420px){.ks-cart-select .select .ks-cart-select-item .price{display:none}}";

const CartSelectPayment = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.paymentChange = createEvent(this, "paymentChange", 7);
    this.name = "";
    this.valid = false;
    this.error = false;
    this.active = -1;
    this.toggled = false;
    this.loading = false;
  }
  async StartLoading() {
    this.loading = true;
  }
  async ResetLoading() {
    this.loading = false;
  }
  async Validate() {
    if (!this.valid) {
      this.error = true;
      return false;
    }
    this.error = false;
    return true;
  }
  OutsideClickHandler(event) {
    const target = event.target;
    if (this.toggled && !target.closest(`.ks-cart-select[name="${this.name}"]`))
      this.toggled = false;
  }
  componentDidLoad() {
    this.root.classList.add("ks-cart-select");
  }
  ActivateItem(id) {
    this.paymentChange.emit(id);
    this.toggled = false;
    this.active = id;
    this.valid = true;
    this.error = false;
  }
  render() {
    if (this.valid)
      this.active = store.get("activePayment");
    if (this.loading)
      return (h("div", { class: "center" }, h("nav", { "uk-spinner": true })));
    const activeItem = store.get("payment").find((value) => {
      return value.id == this.active;
    });
    return [
      h("div", { class: "select animation", onClick: () => {
          if (!this.loading)
            this.toggled = !this.toggled;
        } }, h("div", { class: "selectSlot" }, this.active == -1 ?
        h("ks-cart-select-item", { name: "Wybierz metod\u0119 p\u0142atno\u015Bci" }) :
        h("ks-cart-select-item", { logo: activeItem.logo, name: activeItem.name, price: activeItem.price })), h("div", { class: "selectIcon" }, h("span", { "uk-icon": "icon: triangle-down; ratio: 1.3" }))),
      h("div", { class: "items", hidden: !this.toggled }, store.get("payment").map((item) => h("ks-cart-select-item", { key: item.id, logo: item.logo, name: item.name, price: item.price, color: item.color, onClick: () => this.ActivateItem(item.id) })))
    ];
  }
  get root() { return getElement(this); }
};
CartSelectPayment.style = cartSelectCss;

const cartSelectCss$1 = ".ks-cart-select{display:block;position:relative;height:50px}.ks-cart-select .animation{-webkit-animation:start 1.0s ease;animation:start 1.0s ease}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}.ks-cart-select>.center{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px}.ks-cart-select .select{display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#f8f8f8;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease;outline:1px solid #d2d2d2;outline-offset:-1px}.ks-cart-select .select:hover{background-color:#f2f2f2}.ks-cart-select[error] .select{background-color:#ffc5c5;color:#ff0000;outline-color:#ff0000}.ks-cart-select[error] .select:hover{background-color:#ff8a8a}.ks-cart-select .selectSlot{-webkit-box-flex:1;-ms-flex:1;flex:1}.ks-cart-select .selectIcon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:10;width:50px;height:50px;background-color:#252525;color:white;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}.ks-cart-select .select:hover .selectIcon{background-color:#353535}.ks-cart-select .items{position:absolute;top:50px;left:0;width:100%;z-index:20;background-color:#f8f8f8;-webkit-box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349);box-shadow:0px 3px 20px -5px rgba(0, 0, 0, 0.349)}.ks-cart-select .items .ks-cart-select-item:hover{background-color:#f0f0f0}@media only screen and (max-width: 420px){.ks-cart-select .select .ks-cart-select-item .price{display:none}}";

const CartSelectShipping = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.shippingChange = createEvent(this, "shippingChange", 7);
    this.name = "";
    this.valid = false;
    this.error = false;
    this.active = -1;
    this.toggled = false;
    this.loading = false;
  }
  async StartLoading() {
    this.loading = true;
  }
  async ResetLoading() {
    this.loading = false;
  }
  async Validate() {
    if (!this.valid) {
      this.error = true;
      return false;
    }
    this.error = false;
    return true;
  }
  OutsideClickHandler(event) {
    const target = event.target;
    if (this.toggled && !target.closest(`.ks-cart-select[name="${this.name}"]`))
      this.toggled = false;
  }
  componentDidLoad() {
    this.root.classList.add("ks-cart-select");
  }
  ActivateItem(id) {
    if (id != store.get("activeShipping"))
      this.shippingChange.emit(id);
    this.toggled = false;
    this.active = id;
    this.valid = true;
    this.error = false;
  }
  render() {
    if (this.valid)
      this.active = store.get("activeShipping");
    if (this.loading)
      return (h("div", { class: "center" }, h("nav", { "uk-spinner": true })));
    const activeItem = store.get("shipping").find((value) => {
      return value.id == this.active;
    });
    return [
      h("div", { class: "select animation", onClick: () => {
          if (!this.loading)
            this.toggled = !this.toggled;
        } }, h("div", { class: "selectSlot" }, this.active == -1 ?
        h("ks-cart-select-item", { name: "Wybierz metod\u0119 wysy\u0142ki" }) :
        h("ks-cart-select-item", { logo: activeItem.logo, name: activeItem.name, price: activeItem.price })), h("div", { class: "selectIcon" }, h("span", { "uk-icon": "icon: triangle-down; ratio: 1.3" }))),
      h("div", { class: "items", hidden: !this.toggled }, store.get("shipping").map((item) => h("ks-cart-select-item", { key: item.id, logo: item.logo, name: item.name, price: item.price, color: item.color, onClick: () => this.ActivateItem(item.id) })))
    ];
  }
  get root() { return getElement(this); }
};
CartSelectShipping.style = cartSelectCss$1;

const CartShippingMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("ks-cart-message", { message: store.get("shippingMessage") });
  }
};

const cartSpinnerCss = "ks-cart-spinner{display:inline-block;text-align:center}ks-cart-spinner input{width:50px !important;margin:0 !important;font-size:14px !important;text-align:center !important}";

const CartSpinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changed = createEvent(this, "changed", 7);
    this.initialValue = 1;
    this.value = 1;
  }
  componentWillLoad() {
    this.value = this.initialValue;
  }
  Increment() {
    const last = this.value;
    if (typeof this.max === "undefined" || this.value < this.max) {
      this.value += 1;
      this.onChangedHandler(this.value, last);
    }
  }
  Decrement() {
    const last = this.value;
    if (this.value > 1) {
      this.value -= 1;
      this.onChangedHandler(this.value, last);
    }
  }
  Change(e) {
    const last = this.value;
    const input = e.target;
    const parsed = parseInt(input.value);
    if (!isNaN(parsed) && parsed > 0 && (typeof this.max === "undefined" || parsed <= this.max))
      this.value = parsed;
    else if (parsed > this.max) {
      this.value = this.max;
      input.value = this.max.toString();
    }
    else {
      this.value = 1;
      input.value = "1";
    }
    this.onChangedHandler(this.value, last);
  }
  onChangedHandler(current, last) {
    this.changed.emit({ current, last });
  }
  async SetAmount(amount) {
    this.value = amount;
  }
  render() {
    return (this.max == 1 ?
      h("div", null, "1 szt.") :
      h("div", null, h("button", { class: "uk-button uk-button-muted", onClick: () => this.Decrement() }, "-"), h("input", { type: "text", maxlength: "3", value: this.value, name: this.name, onChange: (e) => this.Change(e), class: "uk-input" }), h("button", { class: "uk-button uk-button-muted", onClick: () => this.Increment() }, "+")));
  }
};
CartSpinner.style = cartSpinnerCss;

const CartSummary = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.emphasis = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    const price = this.price.replace(".", ",") + " zł";
    const leaderOptions = "media: 500; fill: .";
    if (this.large) {
      const largeStyle = {
        fontSize: "24px",
        fontWeight: "700",
        color: this.emphasis ? "#e21334" : ""
      };
      return (h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true }, h("div", { class: "uk-width-expand", "uk-leader": leaderOptions }, h("span", { class: "ks-text-decorated", style: largeStyle }, this.text)), h("div", { class: "ks-text-decorated", style: largeStyle }, price)));
    }
    else {
      const normalStyle = {
        fontWeight: this.emphasis ? "700" : "",
        color: this.emphasis ? "#e21334" : ""
      };
      return (h("div", { class: "uk-grid-small uk-flex-bottom uk-margin-small-bottom", style: { fontSize: "18px" }, "uk-grid": true }, h("div", { class: "uk-width-expand", "uk-leader": leaderOptions, style: normalStyle }, this.text), h("div", { style: normalStyle }, price)));
    }
  }
  get root() { return getElement(this); }
};

const CartSummaryContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const productValue = store.get("productValue").toFixed(2);
    const totalValue = store.get("totalValue").toFixed(2);
    return [
      h("ks-cart-summary", { text: "Warto\u015B\u0107 produkt\u00F3w:", price: productValue }),
      store.get("otherValues").map(item => h("ks-cart-summary", { text: item.name, price: item.value.toFixed(2), emphasis: item.value < 0 })),
      h("ks-cart-summary", { large: true, text: "Razem:", price: totalValue })
    ];
  }
  get root() { return getElement(this); }
};

export { Cart as ks_cart, CartButtons as ks_cart_buttons, CartCountrySelect as ks_cart_country_select, CartDeal as ks_cart_deal, CartDealContainer as ks_cart_deal_container, CartDealGroup as ks_cart_deal_group, CartDiscountCode as ks_cart_discount_code, CartDiscountContainer as ks_cart_discount_container, CartDiscountTicket as ks_cart_discount_message, CartDiscountPoints as ks_cart_discount_points, CartDiscountPointsLogin as ks_cart_discount_points_login, CartDiscountPointsMessage as ks_cart_discount_points_message, CartDiscountTicket$1 as ks_cart_discount_ticket, CartHeading as ks_cart_heading, CartMessage as ks_cart_message, CartProduct as ks_cart_product, CartProductContainer as ks_cart_product_container, CartProductHeading as ks_cart_product_heading, CartProductPrice as ks_cart_product_price, CartProgressBar as ks_cart_progress_bar, CartSelectItem as ks_cart_select_item, CartSelectPayment as ks_cart_select_payment, CartSelectShipping as ks_cart_select_shipping, CartShippingMessage as ks_cart_shipping_message, CartSpinner as ks_cart_spinner, CartSummary as ks_cart_summary, CartSummaryContainer as ks_cart_summary_container };
