'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const cartDiscountCodeCss = "ks-cart-discount-code{display:block}ks-cart-discount-code>form:first-child{display:-webkit-box;display:-ms-flexbox;display:flex}ks-cart-discount-code ks-input-text{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-discount-code ks-input-text input{height:50px !important}ks-cart-discount-code ks-input-text>div{margin-bottom:3px !important}ks-cart-discount-code button{padding:0 30px !important;height:50px}@media only screen and (max-width: 560px){ks-cart-discount-code>form:first-child{display:block}ks-cart-discount-code button{width:100%}}ks-cart-discount-code .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;margin-top:7px;background-color:#222222;-webkit-transition:background-color 0.3s ease;transition:background-color 0.3s ease}ks-cart-discount-code .messsage:hover{background-color:#303030}@media only screen and (max-width: 470px){ks-cart-discount-code .messsage{height:25vw}}";

const CartDiscountCode = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.discountSubmit = index.createEvent(this, "discountSubmit", 7);
    this.placeholder = "";
    this.image = "";
    this.loading = false;
  }
  onDiscountSubmitHandler(event) {
    event.preventDefault();
    if (!this.loading) {
      const form = event.target;
      const input = form.querySelector('input[name="discountCode"]');
      const value = input.value;
      if (value) {
        const valueString = value.toString();
        if (valueString != "") {
          this.loading = true;
          this.discountSubmit.emit(valueString);
        }
      }
    }
  }
  async ResetLoading() {
    this.loading = false;
  }
  render() {
    return [
      index.h("form", { onSubmit: (e) => this.onDiscountSubmitHandler(e) }, index.h("ks-input-text", { emphasis: true, center: true, placeholder: this.placeholder, name: "discountCode" }), index.h("button", { type: "submit", class: "uk-button uk-button-secondary" }, this.loading ? index.h("div", { "uk-spinner": true }) : index.h("span", null, "Aktywuj"))),
      index.h("a", { class: "messsage", onClick: () => {
          const popup = document.querySelector('ks-newsletter-popup');
          if (popup)
            popup.Show();
        } }, index.h("ks-img", { vertical: true, center: true, src: this.image }))
    ];
  }
};
CartDiscountCode.style = cartDiscountCodeCss;

const cartDiscountTicketCss = "ks-cart-discount-ticket{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;min-height:70px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ff3838;color:white;font-size:20px}ks-cart-discount-ticket .content{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px}ks-cart-discount-ticket .name{-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:700}ks-cart-discount-ticket .remove{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:70px;background-color:transparent;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease}ks-cart-discount-ticket .remove:hover{background-color:rgba(0, 0, 0, 0.068)}ks-cart-discount-ticket .remove:active{background-color:rgba(0, 0, 0, 0.137)}@media only screen and (max-width: 560px){ks-cart-discount-ticket .content{display:block}ks-cart-discount-ticket .value{font-size:16px}}";

const CartDiscountTicket = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = "";
  }
  render() {
    return [
      index.h("div", { style: { margin: "20px 0", color: "#777777", textAlign: "center" } }, index.h("span", { "uk-icon": "info" }), " ", index.h("slot", null))
    ];
  }
};
CartDiscountTicket.style = cartDiscountTicketCss;

const cartDiscountPointsCss = "ks-cart-discount-points{display:block}ks-cart-discount-points>form{display:-webkit-box;display:-ms-flexbox;display:flex}ks-cart-discount-points ks-input-number{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1}ks-cart-discount-points ks-input-number input{height:50px !important}ks-cart-discount-points ks-input-number>div{margin-bottom:3px !important}ks-cart-discount-points button{padding:0 30px !important;height:50px}@media only screen and (max-width: 600px){ks-cart-discount-points>form{display:block}ks-cart-discount-points button{width:100%}}ks-cart-discount-points .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;margin-top:7px;background-color:#222222;color:white}ks-cart-discount-points .messsage:hover{color:white;text-decoration:none}ks-cart-discount-points .messsage:visited{color:white;text-decoration:none}ks-cart-discount-points .messsage>.bottom{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:15px}ks-cart-discount-points .messsage .points{height:100%}ks-cart-discount-points .points>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 30px;height:50%;font-size:26px;font-weight:700}ks-cart-discount-points .points>div>span{-webkit-transform:translateX(-5px);-ms-transform:translateX(-5px);transform:translateX(-5px)}ks-cart-discount-points .points>.top{background-color:#303030}ks-cart-discount-points .points>.bottom{background-color:#ff3c3c}@media only screen and (max-width: 600px){ks-cart-discount-points .messsage{display:block;height:auto;text-align:center}ks-cart-discount-points .messsage .points{display:none}}";

const CartDiscountPoints = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.discountSubmit = index.createEvent(this, "discountSubmit", 7);
    this.placeholder = "";
    this.message = "";
    this.points = 1;
    this.orderPoints = 1;
    this.loading = false;
  }
  onDiscountSubmitHandler(event) {
    event.preventDefault();
    if (!this.loading) {
      const form = event.target;
      const input = form.querySelector('input[name="pointCount"]');
      const value = input.value;
      if (value) {
        const valueNumber = parseInt(value.toString());
        if (valueNumber != NaN) {
          this.loading = true;
          this.discountSubmit.emit(valueNumber);
        }
      }
    }
  }
  async ResetLoading() {
    this.loading = false;
  }
  render() {
    return [
      index.h("form", { onSubmit: (e) => this.onDiscountSubmitHandler(e), novalidate: true }, index.h("ks-input-number", { emphasis: true, center: true, placeholder: this.placeholder, min: 1, max: this.points, step: 10, name: "pointCount" }), index.h("button", { type: "submit", class: "uk-button uk-button-secondary" }, this.loading ? index.h("div", { "uk-spinner": true }) : index.h("span", null, "Aktywuj"))),
      index.h("div", { class: "messsage" }, index.h("div", { class: "points ks-text-decorated" }, index.h("div", { class: "top" }, this.points), index.h("div", { class: "bottom" }, index.h("span", null, "+", this.orderPoints))), index.h("div", { class: "bottom" }, this.message))
    ];
  }
};
CartDiscountPoints.style = cartDiscountPointsCss;

const cartDiscountPointsLoginCss = "ks-cart-discount-points-login{display:block}ks-cart-discount-points-login a{padding:4px 5px !important;height:50px;width:100%;font-size:18px !important;font-weight:700 !important;text-transform:uppercase !important}ks-cart-discount-points-login a:first-child{border-right:1px solid #303030}ks-cart-discount-points-login .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:7px;background-color:#222222;color:white}@media only screen and (max-width: 600px){ks-cart-discount-points-login .messsage{display:block;height:auto;text-align:center;font-size:14px}ks-cart-discount-points-login a{font-size:14px !important;font-weight:400 !important;text-transform:none !important}}ks-cart-discount-points-login .messsage>.info{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:15px}ks-cart-discount-points-login .messsage .points{height:100%}ks-cart-discount-points-login .points{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 30px;font-size:32px;font-weight:700;background-color:#ff3c3c}ks-cart-discount-points-login .points>span{-webkit-transform:translateX(-5px);-ms-transform:translateX(-5px);transform:translateX(-5px)}@media only screen and (max-width: 600px){ks-cart-discount-points-login .messsage .points{display:none}}";

const CartDiscountPointsLogin = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.message = "";
    this.loginUrl = "";
    this.points = 1;
  }
  render() {
    return [
      index.h("div", null, index.h("a", { href: this.loginUrl, class: "uk-button uk-button-secondary ks-text-decorated" }, "Zaloguj si\u0119")),
      index.h("div", { class: "messsage" }, index.h("div", { class: "points ks-text-decorated" }, index.h("span", null, "+", this.points)), index.h("div", { class: "info" }, this.message))
    ];
  }
};
CartDiscountPointsLogin.style = cartDiscountPointsLoginCss;

const cartDiscountPointsMessageCss = "ks-cart-discount-points-message{display:block}ks-cart-discount-points-message>div:first-child{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;height:50px;padding:4px 5px !important;background-color:#222222;color:white;font-size:18px !important;font-weight:700 !important;text-transform:uppercase !important}ks-cart-discount-points-message .messsage{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100px;font-size:15px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-top:7px;background-color:#222222;color:white}@media only screen and (max-width: 600px){ks-cart-discount-points-message .messsage{display:block;height:auto;text-align:center;font-size:14px}ks-cart-discount-points-message div:first-child{font-size:14px !important;font-weight:400 !important;text-transform:none !important}}ks-cart-discount-points-message .messsage>.info{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:15px}ks-cart-discount-points-message .messsage .points{height:100%}ks-cart-discount-points-message .points{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;padding:6px 30px;font-size:32px;font-weight:700;background-color:#ff3c3c}ks-cart-discount-points-message .points>span{-webkit-transform:translateX(-5px);-ms-transform:translateX(-5px);transform:translateX(-5px)}@media only screen and (max-width: 600px){ks-cart-discount-points-message .messsage .points{display:none}}";

const CartDiscountPointsMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.heading = "";
    this.message = "";
    this.points = 1;
  }
  render() {
    return [
      index.h("div", { class: "ks-text-decorated" }, this.heading),
      index.h("div", { class: "messsage" }, index.h("div", { class: "points ks-text-decorated" }, index.h("span", null, "+", this.points)), index.h("div", { class: "info" }, this.message))
    ];
  }
};
CartDiscountPointsMessage.style = cartDiscountPointsMessageCss;

const cartDiscountTicketCss$1 = "ks-cart-discount-ticket{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;min-height:70px;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ff3838;color:white;font-size:20px}ks-cart-discount-ticket .content{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 20px}ks-cart-discount-ticket .name{-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:700}ks-cart-discount-ticket .remove{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:70px;background-color:transparent;-webkit-transition:background-color 0.2s ease;transition:background-color 0.2s ease}ks-cart-discount-ticket .remove:hover{background-color:rgba(0, 0, 0, 0.068)}ks-cart-discount-ticket .remove:active{background-color:rgba(0, 0, 0, 0.137)}@media only screen and (max-width: 560px){ks-cart-discount-ticket .content{display:block}ks-cart-discount-ticket .value{font-size:16px}}";

const CartDiscountTicket$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.remove = index.createEvent(this, "remove", 7);
    this.name = "";
    this.value = "";
    this.loading = false;
  }
  onRemoveHandler() {
    this.loading = true;
    this.remove.emit();
  }
  render() {
    return [
      index.h("div", { class: "content ks-text-decorated" }, index.h("div", { class: "name" }, this.name), index.h("div", { class: "value" }, this.value)),
      index.h("div", { class: "remove", onClick: () => this.onRemoveHandler() }, this.loading ?
        index.h("div", { "uk-spinner": true })
        :
          index.h("span", { "uk-icon": "icon: close; ratio: 1.3;" }))
    ];
  }
};
CartDiscountTicket$1.style = cartDiscountTicketCss$1;

exports.ks_cart_discount_code = CartDiscountCode;
exports.ks_cart_discount_message = CartDiscountTicket;
exports.ks_cart_discount_points = CartDiscountPoints;
exports.ks_cart_discount_points_login = CartDiscountPointsLogin;
exports.ks_cart_discount_points_message = CartDiscountPointsMessage;
exports.ks_cart_discount_ticket = CartDiscountTicket$1;
