import { r as registerInstance, h, g as getElement } from './index-74ff0cef.js';
import { S as Swiper, T as Thumbs } from './thumbs-00422a82.js';
import { P as Pagination } from './pagination-759b5673.js';

const sidepanelCss = "ks-sidepanel{display:block}ks-sidepanel .content{position:absolute;z-index:100000;width:100%;height:100%;top:0px;left:0px;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);transition:transform 0.2s ease, -ms-transform 0.2 ease}ks-sidepanel .content.visible{-webkit-transform:translateX(0%);-ms-transform:translateX(0%);transform:translateX(0%)}ks-sidepanel .content.hidden{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%)}";

Swiper.use([Pagination, Thumbs]);
const SidePanel = class {
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
    this.visible = "visible";
  }
  async hide() {
    this.visible = "hidden";
    this.overlay.hide();
  }
  render() {
    return h("ks-overlay", null, h("div", { class: `content ${this.visible}` }, h("slot", null)));
  }
  get root() { return getElement(this); }
};
SidePanel.style = sidepanelCss;

export { SidePanel as ks_sidepanel };
