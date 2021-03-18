'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e55d229.js');
const coreClass = require('./core-class-05f4a49b.js');
const pagination = require('./pagination-6d58af1e.js');
const thumbs = require('./thumbs-005bf787.js');

const messagePopupCss = "ks-message-popup{display:block}ks-message-popup .title{margin-top:10px;text-align:center;font-size:20px;font-weight:700;font-family:var(--font-emphasis)}ks-message-popup .message{padding:15px 30px;color:var(--card-text-color);text-align:center;font-size:18px}ks-message-popup ks-button{margin-bottom:10px}";

coreClass.Swiper.use([pagination.Pagination, thumbs.Thumbs]);
const MessagePopup = class {
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

exports.ks_message_popup = MessagePopup;
