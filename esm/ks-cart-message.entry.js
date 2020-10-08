import { r as registerInstance, h, H as Host } from './index-22b73bd9.js';

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

export { CartMessage as ks_cart_message };
