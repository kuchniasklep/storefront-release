import { r as registerInstance, h, H as Host, g as getElement } from './index-7a533c43.js';
import { S as Swiper } from './core-class-5b6160e1.js';
import { P as Pagination } from './pagination-c9190fdf.js';
import { T as Thumbs } from './thumbs-e8e6436d.js';
import { c as common } from './common-d9c1845a.js';
import './index-07d7bd8b.js';

const categorySidebarCss = "ks-category-sidebar>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar>.children>a{padding:4px 0px}ks-category-sidebar:not([open])>.children{max-height:0px !important;opacity:0}ks-category-sidebar[open]>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";

let NavbarCategorySidebar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = false;
    this.keepSiblingsOpen = false;
    this.hideWithChildren = false;
  }
  click() {
    if ('children' in this.category) {
      this.open = !this.open;
      if (!this.keepSiblingsOpen) {
        Array.from(this.root.parentElement.children).forEach((element) => {
          if (element != this.root && "hide" in element)
            element.hide();
        });
      }
      if (this.open && this.hideWithChildren) {
        Array.from(this.root.parentElement.children).forEach((element) => {
          if (element != this.root && "hide" in element)
            element.hide();
        });
      }
    }
  }
  async hide() {
    this.open = false;
  }
  render() {
    return h(Host, null, h("div", { class: "name", onClick: () => this.click() }, h("span", null, this.category.name), 'children' in this.category ? h("ks-icon", { name: this.open ? "minus" : "plus" }) : null), 'children' in this.category ?
      h("div", { class: "children" }, this.category.children.map(category => 'children' in category ?
        h("ks-category-sidebar", { category: category }) :
        h("a", { href: category.url }, category.name)), h("a", { href: this.category.url, class: "seeall" }, "Zobacz wszystko"))
      : null);
  }
  get root() { return getElement(this); }
};
NavbarCategorySidebar.style = categorySidebarCss;

const errorPopupCss = "ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}";

Swiper.use([Pagination, Thumbs]);
let ErrorPopup = class {
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

const messagePopupCss = "ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";

Swiper.use([Pagination, Thumbs]);
let MessagePopup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = "";
    this.message = "";
    this.link = "";
    this.linkname = "";
    this.visible = "";
  }
  componentDidRender() {
    this.overlay = this.root.querySelector("ks-overlay");
  }
  async show(name, message, linkname = "", link = "") {
    this.name = name;
    this.message = message;
    this.linkname = linkname;
    this.link = link;
    this.overlay.show();
    this.visible = "visible";
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  render() {
    return h("ks-dialog", null, h("div", { class: "title" }, this.name), h("div", { class: "message", innerHTML: this.message }), this.linkname && this.link ?
      h("ks-button", { secondary: true, round: true, link: this.link, name: this.linkname })
      : null);
  }
  get root() { return getElement(this); }
};
MessagePopup.style = messagePopupCss;

let PageFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("ks-footer", { "software-link": common.get('softwareLink'), phone: common.get('phone'), email: common.get('email'), time: common.get('workingHours'), company: common.get('company'), address: common.get('address') }, common.get('social').map(social => h("ks-footer-button", { slot: "social", width: 64, height: 64, href: social.link, image: social.image })), common.get('reviewers').map(reviewer => h("ks-footer-button", { slot: "social", width: 64, height: 64, href: reviewer.link, image: reviewer.image })), common.get('footerLinks').map(section => h("ks-footer-links", null, h("span", { slot: "heading" }, section.name), section.items.map(item => h("li", null, h("a", { href: item.link }, item.name))))));
  }
};

let PageHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("ks-navbar", null), h("ks-newsletter-popup", { api: common.get('newsletterApi'), "login-link": common.get('loginLink'), "register-link": common.get('registerLink') }), h("ks-product-suggestions", { api: common.get('suggestionApi') }), h("ks-error-popup", null), h("ks-message-popup", null), h("ks-cookie-popup", { message: common.get('cookieMessage'), button: common.get('cookieButton'), delay: common.get('cookieDelay') }));
  }
};

const sidepanelCss = "ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);transform:translateX(-100%)}";

Swiper.use([Pagination, Thumbs]);
let SidePanel = class {
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
  async show() {
    this.overlay.show();
    setTimeout(() => {
      this.visible = "visible";
    }, 10);
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  onClosed() {
    this.visible = "hidden";
  }
  render() {
    return h("ks-overlay", { dark: true }, h("nav", { class: `content ${this.visible}` }, h("button", { class: "close", onClick: () => this.hide() }, h("ks-icon", { name: "x" })), h("slot", null)));
  }
  get root() { return getElement(this); }
};
SidePanel.style = sidepanelCss;

export { NavbarCategorySidebar as ks_category_sidebar, ErrorPopup as ks_error_popup, MessagePopup as ks_message_popup, PageFooter as ks_page_footer, PageHeader as ks_page_header, SidePanel as ks_sidepanel };
