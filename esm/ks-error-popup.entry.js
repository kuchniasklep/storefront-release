import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';
import { S as Swiper, T as Thumbs } from './thumbs-00422a82.js';
import { P as Pagination } from './pagination-759b5673.js';

const errorPopupCss = "ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-webkit-box-flex:1;-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}";

Swiper.use([Pagination, Thumbs]);
const ErrorPopup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = "";
    this.message = "";
    this.stack = "";
    this.visible = "";
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show(error) {
    this.name = error.name;
    this.message = error.message;
    this.stack = error.stack === undefined ? "" : error.stack;
    this.overlay.show();
    this.visible = "visible";
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  render() {
    let name = `${this.name}: ${this.message}`;
    let message = "";
    let stack = this.stack;
    const status = parseInt(this.name);
    if (!isNaN(status)) {
      if (status >= 400 && status < 500)
        message = `Wystąpił błąd aplikacji. `;
      if (status >= 500)
        message = `Wystąpił błąd serwera. `;
      stack += name;
    }
    else
      message = "Wystąpił błąd aplikacji. ";
    message += "Jeżeli problem się powtarza prosimy o kontakt mailowy lub telefoniczny oraz podanie informacji w poniższej ramce.";
    const userAgent = `User-agent: ${navigator.userAgent}`;
    return h("ks-overlay", { dark: true }, h("div", { class: `content ${this.visible}` }, h("div", { class: "bar" }, h("div", { class: "title" }, name), h("div", { class: "close", onClick: () => this.hide() }, h("ks-icon", { name: "x", size: 1.2 }))), h("div", { class: "message" }, message), h("div", { class: "data" }, userAgent, h("span", { class: "stack" }, stack))));
  }
  get root() { return getElement(this); }
};
ErrorPopup.style = errorPopupCss;

export { ErrorPopup as ks_error_popup };
