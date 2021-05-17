import { Component, h, Prop, State, Element, Listen, Host, Watch } from '@stencil/core';
export class NavbarCategoryView {
  constructor() {
    this.hidden = true;
    this.hiddenO = true;
    this.active = 0;
    this.count = 0;
  }
  MouseOverHandler() {
    clearTimeout(this.timeout);
    clearTimeout(this.delaytimeout);
    this.delaytimeout = setTimeout(() => {
      this.hidden = false;
      this.hiddenO = false;
      this.NavbarColor(false);
    }, 200);
  }
  MouseOutHandler() {
    clearTimeout(this.delaytimeout);
    this.delaytimeout = setTimeout(() => {
      this.hiddenO = true;
      this.timeout = setTimeout(() => {
        this.hidden = true;
      }, 200);
      this.NavbarColor(true);
    }, 200);
  }
  NavbarColor(state) {
    const bar = document.querySelector("ks-navbar-categories > nav");
    if (!bar)
      return;
    bar.style.backgroundColor = state ? "var(--navbar-category-color)" : "var(--navbar-color)";
    bar.style.borderTop = state ? "1px solid transparent" : "1px solid var(--navbar-category-color)";
    bar.style.borderBottom = bar.style.borderTop;
  }
  componentWillLoad() {
    const sub = this.root.querySelectorAll('a[slot=sub]');
    const singlesub = this.root.querySelectorAll('a[slot=single-sub]');
    this.children = this.root.querySelectorAll('div[slot=children]');
    this.count = sub.length + singlesub.length;
    this.last = sub[0];
    sub.forEach((element, index) => {
      if (this.active == index)
        element.classList.add("active");
      element.addEventListener("mouseover", () => {
        this.active = index;
        element.classList.add("active");
        if (this.last && this.last !== element)
          this.last.classList.remove("active");
        this.last = element;
      });
    });
    singlesub.forEach(element => {
      if (element.children.length > 0)
        return;
      let icon = document.createElement("ks-icon");
      icon.setAttribute("name", "link");
      icon.setAttribute("size", "0.65");
      element.appendChild(icon);
    });
    this.children.forEach((element, index) => {
      if (index == 0)
        return;
      element.setAttribute("hidden", "hidden");
    });
    this.imageData = JSON.parse(this.images);
  }
  activeChange(current, old) {
    this.children[current].removeAttribute("hidden");
    this.children[old].setAttribute("hidden", "hidden");
  }
  render() {
    const childrenstyle = {
      opacity: this.hiddenO ? "0.0" : "1.0",
      height: (this.count * 40) + "px"
    };
    return h(Host, null,
      h("slot", null),
      " ",
      h("ks-icon", { name: "chevron-down", size: 0.8 }),
      h("div", { class: "children", style: childrenstyle, hidden: this.hidden },
        h("div", { class: "buttons" },
          h("slot", { name: "sub" }),
          h("slot", { name: "single-sub" })),
        h("div", { class: "content" },
          h("slot", { name: "children" })),
        h("div", { class: "graphic" }, this.imageData.map((image, index) => "src" in image ?
          h("ks-img2", { vertical: true, src: image.src, width: image.width, height: image.height, target: "ks-category-view > .children > .graphic", style: { display: (this.active == index) ? "block" : "none" } })
          : null))));
  }
  static get is() { return "ks-category-view"; }
  static get originalStyleUrls() { return {
    "$": ["category-view.css"]
  }; }
  static get styleUrls() { return {
    "$": ["category-view.css"]
  }; }
  static get properties() { return {
    "images": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "images",
      "reflect": false
    }
  }; }
  static get states() { return {
    "hidden": {},
    "hiddenO": {},
    "active": {}
  }; }
  static get elementRef() { return "root"; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "activeChange"
    }]; }
  static get listeners() { return [{
      "name": "mouseenter",
      "method": "MouseOverHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "MouseOutHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
