'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e55d229.js');
const coreClass = require('./core-class-05f4a49b.js');
const pagination = require('./pagination-6d58af1e.js');
const thumbs = require('./thumbs-005bf787.js');

const sidepanelCss = "ks-sidepanel{display:block}ks-sidepanel .content{position:absolute;z-index:100000;width:100%;height:100%;top:0px;left:0px;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);transition:transform 0.2s ease, -ms-transform 0.2 ease}ks-sidepanel .content.visible{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%)}ks-sidepanel .content.hidden{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}";

coreClass.Swiper.use([pagination.Pagination, thumbs.Thumbs]);
const SidePanel = class {
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
    this.visible = "visible";
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  render() {
    return index.h("ks-overlay", null, index.h("div", { class: `content ${this.visible}` }, index.h("slot", null)));
  }
  get root() { return index.getElement(this); }
};
SidePanel.style = sidepanelCss;

exports.ks_sidepanel = SidePanel;
