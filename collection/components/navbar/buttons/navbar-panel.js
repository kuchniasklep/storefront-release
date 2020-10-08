import { Component, h, State, Listen, Prop } from '@stencil/core';
export class NavbarPanel {
  constructor() {
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
      h("div", { class: "button", onClick: () => this.Toggle() },
        h("slot", { name: "button" })),
      h("div", { class: "overlay" },
        h("div", { style: menuStyle, hidden: !this.hideMenu || !this.active },
          h("ks-navbar-button", { name: "Kontakt close", icon: "close", onClick: () => this.Toggle() })),
        h("div", { class: `panel ${this.animate}` },
          h("slot", { name: "panel" })))
    ];
  }
  static get is() { return "ks-navbar-panel"; }
  static get originalStyleUrls() { return {
    "$": ["navbar-panel.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar-panel.css"]
  }; }
  static get properties() { return {
    "hideMenu": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "hide-menu",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "mobile": {},
    "menuWidth": {},
    "active": {},
    "initialized": {},
    "animate": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "click",
      "method": "OutsideClickHandler",
      "target": "document",
      "capture": false,
      "passive": false
    }]; }
}
