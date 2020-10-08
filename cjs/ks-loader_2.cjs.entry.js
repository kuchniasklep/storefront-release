'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
const productStore = require('./product-store-e1a028d5.js');

const loaderCss = "ks-loader{display:block;position:absolute;width:50px;height:50px;border-radius:50px;top:50%;left:50%;-webkit-transform:translate(-50%, -50%) scale(0);-ms-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);background-color:rgba(255, 255, 255, 0.5);-webkit-animation:none;animation:none}ks-loader[running]{-webkit-animation:ks-loader-animation 1.0s infinite cubic-bezier(0, 0, 0.38, 0.99);animation:ks-loader-animation 1.0s infinite cubic-bezier(0, 0, 0.38, 0.99)}ks-loader[oversized]{width:200px;height:200px;border-radius:200px}@-webkit-keyframes ks-loader-animation{0%{-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);background-color:rgba(255, 255, 255, 0.5)}100%{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);background-color:rgba(255, 255, 255, 0)}}@keyframes ks-loader-animation{0%{-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);background-color:rgba(255, 255, 255, 0.5)}100%{-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);background-color:rgba(255, 255, 255, 0)}}";

const Loader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.running = true;
  }
  render() {
    return index.h(index.Host, null);
  }
};
Loader.style = loaderCss;

const productCountCss = "ks-product-count{display:-webkit-box;display:-ms-flexbox;display:flex;max-width:80px;margin-right:8px;overflow:hidden;border-style:solid;border-radius:50px;border-width:1px;border-color:#cacaca;background-color:var(--product-price-count-color)}ks-product-count input{outline-style:none;border-style:none;background-color:transparent;width:52px;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px 8px 10px 13px;font-family:var(--product-price-count-font);font-size:var(--product-price-size-small);line-height:var(--product-price-size-small);text-align:center;vertical-align:middle}ks-product-count input::-webkit-inner-spin-button,ks-product-count input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ks-product-count input[type=number]{-moz-appearance:textfield}ks-product-count .spinner{width:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column nowrap;flex-flow:column nowrap}ks-product-count .spinner button{outline-style:none;border-style:none;line-height:0;height:100%;margin:0;width:28px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#e4e4e4;-webkit-transition:var(--transition-background-color);transition:var(--transition-background-color);border-left:solid 1px #cacaca}ks-product-count .spinner button:first-child{padding:8px 8px 3px 3px;border-bottom:solid 1px #cacaca}ks-product-count .spinner button:last-child{padding:3px 8px 8px 3px}ks-product-count .spinner button:hover{background-color:#cecece}ks-product-count .spinner button:active{background-color:#a7a7a7}@media (hover: none){ks-product-count{max-width:70px}ks-product-count input{padding:10px}ks-product-count .spinner{display:none}}";

const ProductCount = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.countChange = index.createEvent(this, "countChange", 7);
  }
  componentDidLoad() {
    this.input = this.root.querySelector("input");
  }
  CountChangeHandler() {
    this.countChange.emit(parseInt(this.input.value));
  }
  ClampLength() {
    if (this.input.value.length > 3)
      this.input.value = this.input.value.substr(0, 3);
  }
  ClampValue() {
    if (parseInt(this.input.value) > productStore.store.get("availability")) {
      this.input.value = productStore.store.get("availability").toString();
    }
    if (parseInt(this.input.value) < 1) {
      this.input.value = "1";
    }
  }
  Increment() {
    const value = parseInt(this.input.value) + 1;
    if (value <= productStore.store.get("availability")) {
      this.input.value = value.toString();
      this.CountChangeHandler();
    }
  }
  Decrement() {
    const value = parseInt(this.input.value) - 1;
    if (value >= 1) {
      this.input.value = value.toString();
      this.CountChangeHandler();
    }
  }
  Target(e, func) {
    func(e.target);
  }
  render() {
    return [
      index.h("input", { type: "number", min: 1, max: productStore.store.get("availability"), value: 1, "aria-label": "Ilo\u015B\u0107", onInput: () => this.ClampLength(), onChange: () => { this.ClampValue(); this.CountChangeHandler(); } }),
      index.h("div", { class: "spinner" }, index.h("button", { onClick: () => this.Increment() }, "+"), index.h("button", { onClick: () => this.Decrement() }, "-"))
    ];
  }
  get root() { return index.getElement(this); }
};
ProductCount.style = productCountCss;

exports.ks_loader = Loader;
exports.ks_product_count = ProductCount;
