'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const overlayCss = "ks-overlay{display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;z-index:100000;position:fixed;height:100%;width:100%;top:0;left:0;-webkit-backdrop-filter:var(--overlay-filter);backdrop-filter:var(--overlay-filter);background-color:var(--overlay-background);color:var(--overlay-text)}ks-overlay.active{opacity:1.0;-webkit-animation:showanimation 0.3s ease;animation:showanimation 0.3s ease}ks-overlay:not(.active){opacity:0.0;-webkit-animation:hideanimation 0.3s ease;animation:hideanimation 0.3s ease}ks-overlay[dark]{-webkit-backdrop-filter:var(--overlay-dark-filter);backdrop-filter:var(--overlay-dark-filter);background-color:var(--overlay-dark-background);color:var(--overlay-dark-text)}@-webkit-keyframes showanimation{from{opacity:0}to{opacity:1}}@keyframes showanimation{from{opacity:0}to{opacity:1}}@-webkit-keyframes hideanimation{from{opacity:1}to{opacity:0}}@keyframes hideanimation{from{opacity:1}to{opacity:0}}";

const Overlay = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.closed = index.createEvent(this, "closed", 7);
    this.dark = false;
    this.close = true;
    this.timeoutLength = 300;
    this.body = document.body;
  }
  componentDidLoad() {
    this.root.addEventListener('click', (e) => {
      if (e.currentTarget == e.target && this.close)
        this.hide();
    }, false);
  }
  async show() {
    clearTimeout(this.timeout);
    this.scrollToggle();
    this.root.classList.add("active");
    this.root.style.display = "flex";
  }
  async hide() {
    clearTimeout(this.timeout);
    this.scrollToggle();
    this.root.classList.remove("active");
    this.timeout = setTimeout(() => {
      this.root.style.display = "none";
    }, this.timeoutLength);
    this.closed.emit();
  }
  scrollToggle() {
    if (this.body.style.position == "fixed") {
      this.body.style.position = "static";
      this.body.style.overflowY = "auto";
      this.body.style.width = "unset";
      window.scrollTo(0, this.scroll);
      return;
    }
    this.scroll = window.scrollY;
    this.body.style.position = "fixed";
    this.body.style.top = `${-this.scroll}px`;
    this.body.style.overflowY = "scroll";
    this.body.style.width = "100%";
  }
  render() {
    return index.h("slot", null);
  }
  get root() { return index.getElement(this); }
};
Overlay.style = overlayCss;

exports.ks_overlay = Overlay;
