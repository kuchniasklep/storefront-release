'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const navbarPanelCss = "ks-navbar-panel{display:block}ks-navbar-panel .overlay{z-index:2147483647}ks-navbar-panel .overlay ks-navbar-button{float:right;margin-right:15px}ks-navbar-panel .panel{z-index:2147483648;position:absolute;right:0;width:100%;opacity:1;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}ks-navbar-panel .hiding{opacity:0.0}ks-navbar-panel .hidden{opacity:0.0;visibility:hidden}";

const NavbarPanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hideMenu = false;
    this.mobile = 0;
    this.menuWidth = 0;
    this.active = false;
    this.initialized = false;
    this.animate = "hidden";
  }
  resizeHandler() {
    this.mobile = (window.innerWidth <= 1200) ?
      (window.innerWidth <= 960) ?
        (window.innerWidth <= 640) ? 3
          : 2
        : 1
      : 0;
    this.MenuWidth();
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  MenuWidth() {
    const buttons = document.getElementById("ks-navbar-menu-buttons");
    this.menuWidth = buttons.clientWidth;
  }
  Toggle() {
    this.active = !this.active;
    this.initialized = true;
    this.FreezeScrolling();
    this.MenuWidth();
    this.Animate();
  }
  FreezeScrolling() {
    if (this.active && this.mobile) {
      window.scrollTo(0, 0);
      document.querySelector('html').style.overflowY = "hidden";
    }
    else {
      document.querySelector('html').style.overflowY = "";
    }
  }
  OutsideClickHandler(event) {
    const target = event.target;
    if (this.active &&
      !target.closest("ks-navbar-panel .panel > *") &&
      !target.closest("ks-navbar-panel .button")) {
      this.Toggle();
    }
  }
  Animate() {
    clearTimeout(this.timeout);
    if (this.active)
      this.animate = "visible";
    else {
      this.animate = "hiding";
      this.timeout = setTimeout(() => this.animate = "hidden", 200);
    }
  }
  render() {
    const menuStyle = {
      position: "absolute",
      width: this.menuWidth + "px",
      top: "0", right: "0", zIndex: "2147483647",
      backgroundColor: "#015b97"
    };
    return [
      index.h("div", { class: "button", onClick: () => this.Toggle() }, index.h("slot", { name: "button" })),
      index.h("div", { class: "overlay" }, index.h("div", { style: menuStyle, hidden: !this.hideMenu || !this.active }, index.h("ks-navbar-button", { name: "Kontakt close", icon: "close", onClick: () => this.Toggle() })), index.h("div", { class: `panel ${this.animate}` }, index.h("slot", { name: "panel" })))
    ];
  }
};
NavbarPanel.style = navbarPanelCss;

exports.ks_navbar_panel = NavbarPanel;
