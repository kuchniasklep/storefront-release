import { r as registerInstance, h, g as getElement } from './index-f323e182.js';
import { S as Swiper } from './core-class-3f174cf3.js';
import { P as Pagination } from './pagination-e5b04709.js';
import { T as Thumbs } from './thumbs-ca1d86c7.js';

const messagePopupCss = "ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";

Swiper.use([Pagination, Thumbs]);
const MessagePopup = class {
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

export { MessagePopup as ks_message_popup };
