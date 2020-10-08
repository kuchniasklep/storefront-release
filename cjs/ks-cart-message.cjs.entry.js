'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const cartMessageCss = "ks-cart-message{display:block;text-align:center;color:white;background-color:var(--color-secondary);overflow:hidden;opacity:0.0;max-height:0px;height:auto;-webkit-transition:opacity 0.5s ease, max-height 0.5s ease;transition:opacity 0.5s ease, max-height 0.5s ease}ks-cart-message.show{opacity:1.0;max-height:100px}ks-cart-message.hide{opacity:0.0;max-height:0px}ks-cart-message>p{margin:10px}";

const CartMessage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: this.visibility }, index.h("p", null, this.messageDelay)));
  }
  static get watchers() { return {
    "message": ["watchHandler"]
  }; }
};
CartMessage.style = cartMessageCss;

exports.ks_cart_message = CartMessage;
