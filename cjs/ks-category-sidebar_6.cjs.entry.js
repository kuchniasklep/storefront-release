'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-601dda3f.js');
const coreClass = require('./core-class-be7c7c21.js');
const pagination = require('./pagination-36e87606.js');
const thumbs = require('./thumbs-62d86163.js');
const common = require('./common-986d3afc.js');
require('./index-6a08c494.js');

const categorySidebarCss = "ks-category-sidebar>.name{position:relative;cursor:pointer;padding:7px 0px 5px 0px}ks-category-sidebar>.name>ks-icon{position:absolute;top:6px;right:0px}ks-category-sidebar>.children{overflow:hidden;padding:0px 0px 0px 10px;font-size:16px;-webkit-transition:opacity 0.5s ease;transition:opacity 0.5s ease}ks-category-sidebar>.children>a{padding:4px 0px}ks-category-sidebar:not([open])>.children{max-height:0px !important;opacity:0}ks-category-sidebar[open]>.children{padding:5px 0px 8px 10px;opacity:1}ks-category-sidebar .seeall{color:#bbbbbb  !important}";

let NavbarCategorySidebar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    if (!this.category)
      return;
    return index.h(index.Host, null, index.h("div", { class: "name", onClick: () => this.click() }, index.h("span", null, this.category.name), 'children' in this.category ? index.h("ks-icon", { name: this.open ? "minus" : "plus" }) : null), 'children' in this.category ?
      index.h("div", { class: "children" }, this.category.children.map(category => 'children' in category ?
        index.h("ks-category-sidebar", { category: category }) :
        index.h("a", { href: category.url }, category.name)), index.h("a", { href: this.category.url, class: "seeall" }, "Zobacz wszystko"))
      : null);
  }
  get root() { return index.getElement(this); }
};
NavbarCategorySidebar.style = categorySidebarCss;

const errorPopupCss = "ks-error-popup{display:block}ks-error-popup .content{max-width:800px;width:100%;background-color:var(--card-background);-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow)}ks-error-popup .bar{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:var(--color-secondary)}ks-error-popup .title{-ms-flex:1;flex:1;padding:10px 20px;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-error-popup .close{padding:10px;background-color:var(--color-secondary);opacity:1;-webkit-transition:var(--transition-opacity);transition:var(--transition-opacity)}ks-error-popup .close:hover{opacity:0.6}ks-error-popup .message{padding:30px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-error-popup .data{text-align:center;border-top:1px solid #e2e2e2;padding:20px;color:var(--card-text-color);background-color:#f2f2f2;font-size:14px}ks-error-popup .data .stack{display:block;margin-top:10px}ks-error-popup .content.visible{-webkit-animation:0.4s vertical-swipe-in 1;animation:0.4s vertical-swipe-in 1}ks-error-popup .content.hidden{-webkit-animation:0.4s vertical-swipe-out 1;animation:0.4s vertical-swipe-out 1}";

coreClass.Swiper.use([pagination.Pagination, thumbs.Thumbs]);
let ErrorPopup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("ks-overlay", { dark: true }, index.h("div", { class: `content ${this.visible}` }, index.h("div", { class: "bar" }, index.h("div", { class: "title" }, name), index.h("div", { class: "close", onClick: () => this.hide() }, index.h("ks-icon", { name: "x", size: 1.2 }))), index.h("div", { class: "message" }, message), index.h("div", { class: "data" }, userAgent, index.h("span", { class: "stack" }, stack))));
  }
  get root() { return index.getElement(this); }
};
ErrorPopup.style = errorPopupCss;

const messagePopupCss = "ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";

coreClass.Swiper.use([pagination.Pagination, thumbs.Thumbs]);
let MessagePopup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("ks-dialog", null, index.h("div", { class: "title" }, this.name), index.h("div", { class: "message", innerHTML: this.message }), this.linkname && this.link ?
      index.h("ks-button", { secondary: true, round: true, link: this.link, name: this.linkname })
      : null);
  }
  get root() { return index.getElement(this); }
};
MessagePopup.style = messagePopupCss;

let PageFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("ks-footer", { "software-link": common.common.get('softwareLink'), phone: common.common.get('phone'), email: common.common.get('email'), time: common.common.get('workingHours'), company: common.common.get('company'), address: common.common.get('address') }, common.common.get('social').map(social => index.h("ks-footer-button", { slot: "social", width: 64, height: 64, href: social.link, image: social.image })), common.common.get('reviewers').map(reviewer => index.h("ks-footer-button", { slot: "social", width: 64, height: 64, href: reviewer.link, image: reviewer.image })), common.common.get('footerLinks').map(section => index.h("ks-footer-links", null, index.h("span", { slot: "heading" }, section.name), section.items.map(item => index.h("li", null, index.h("a", { href: item.link }, item.name))))));
  }
};

let PageHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h(index.Host, null, index.h("ks-navbar", null), index.h("ks-newsletter-popup", { api: common.common.get('newsletterApi'), "login-link": common.common.get('loginLink'), "register-link": common.common.get('registerLink') }), index.h("ks-product-suggestions", { api: common.common.get('suggestionApi') }), index.h("ks-error-popup", null), index.h("ks-message-popup", null), index.h("ks-cookie-popup", { message: common.common.get('cookieMessage'), button: common.common.get('cookieButton'), delay: common.common.get('cookieDelay') }));
  }
};

const sidepanelCss = "ks-sidepanel{display:block;position:absolute}ks-sidepanel .content{position:absolute;z-index:100000;top:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:320px;height:100%;padding:15px 30px;overflow-y:auto;color:black;background:#ffffff}ks-sidepanel[left] .content{left:0}ks-sidepanel .content .close{position:absolute;top:15px;right:25px;padding:5px;color:#252525;-webkit-transition:color .1s ease-in-out;transition:color .1s ease-in-out;cursor:pointer;border:none;outline:none;background-color:transparent}@media only screen and (max-width: 640px){ks-sidepanel .content{width:300px;padding:20px}ks-sidepanel .content .close{right:15px}}ks-sidepanel .content{-webkit-transform:translateX(100%);transform:translateX(100%);transition:-webkit-transform 0.3s ease;-webkit-transition:-webkit-transform 0.3s ease;transition:transform 0.3s ease;transition:transform 0.3s ease, -webkit-transform 0.3s ease}ks-sidepanel[left] .content{-webkit-transform:translateX(-100%);transform:translateX(-100%)}ks-sidepanel .visible{-webkit-transform:translateX(0%) !important;transform:translateX(0%) !important}ks-sidepanel .hidden{-webkit-transform:translateX(100%);transform:translateX(100%)}ks-sidepanel[left] .hidden{-webkit-transform:translateX(-100%);transform:translateX(-100%)}";

coreClass.Swiper.use([pagination.Pagination, thumbs.Thumbs]);
let SidePanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return index.h("ks-overlay", { dark: true }, index.h("nav", { class: `content ${this.visible}` }, index.h("button", { class: "close", onClick: () => this.hide() }, index.h("ks-icon", { name: "x" })), index.h("slot", null)));
  }
  get root() { return index.getElement(this); }
};
SidePanel.style = sidepanelCss;

exports.ks_category_sidebar = NavbarCategorySidebar;
exports.ks_error_popup = ErrorPopup;
exports.ks_message_popup = MessagePopup;
exports.ks_page_footer = PageFooter;
exports.ks_page_header = PageHeader;
exports.ks_sidepanel = SidePanel;
