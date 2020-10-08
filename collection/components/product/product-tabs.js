import { Component, h, State, Element, Listen } from '@stencil/core';
export class ProductTabs {
  constructor() {
    this.mobile = false;
    this.active = 0;
    this.nameList = new Array();
  }
  ResizeHandler() {
    if (this.mobile == false && window.innerWidth < 960)
      this.mobile = true;
    if (this.mobile == true && window.innerWidth >= 960)
      this.mobile = false;
  }
  componentWillLoad() {
    this.ResizeHandler();
  }
  render() {
    return [
      h("style", { innerHTML: "\n                ks-product-tabs button {\n                    position: relative;\n                    padding: 20px 40px;\n\n                    font-family: inherit;\n                    font-size: 18px;\n\n                    color: #252525;\n                    background-color: #f6f6f6;\n                    transition: background-color 0.3s ease, color 0.3s ease;\n                    \n                    border: none;\n                    outline: none;\n\n                    border-right: 1px solid #e8e8e8;\n                }\n\n                ks-product-tabs button:hover {\n                    color: #808080;\n                }\n\n                ks-product-tabs button.uk-active {\n                    color: #252525 !important;\n                    background-color: #FFFFFF;\n                }\n            " }),
      h("ks-card", null,
        this.mobile ? null : [
          h("nav", { style: { backgroundColor: "#f6f6f6" }, "uk-switcher": "toggle: > *" }, this.nameList.map((value, index) => {
            return h("button", { class: "uk-margin-remove" + (index == this.active ? " uk-active" : ""), onClick: () => { this.active = index; } }, value);
          })),
          h("hr", { class: "uk-margin-remove" })
        ],
        h("div", { class: this.mobile ? "uk-padding" : "uk-padding uk-switcher", "uk-accordion": this.mobile ? "animation: false; multiple: true; targets: > ks-product-tab > div" : null, "uk-margin": true },
          h("slot", null)))
    ];
  }
  componentDidLoad() {
    const interval = setInterval(() => {
      const components = this.root.querySelectorAll("ks-product-tab");
      if (components.length > 0) {
        let nameList = new Array();
        for (let i = 0; i < components.length; i++) {
          const name = components[i].getAttribute("name");
          nameList.push(name);
        }
        this.nameList = nameList;
        clearInterval(interval);
      }
    }, 200);
  }
  static get is() { return "ks-product-tabs"; }
  static get originalStyleUrls() { return {
    "$": ["product-tabs.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-tabs.css"]
  }; }
  static get states() { return {
    "mobile": {},
    "nameList": {}
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "ResizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
