import { Component, h, Element, Prop, State, Listen } from '@stencil/core';
import { store } from "./navbar-store";
export class NavbarSearch {
  constructor() {
    this.active = false;
    this.select = -1;
    this.maxCount = 6;
    this.blurenabled = true;
  }
  async getData() {
    const session = sessionStorage.getItem("navbar-autocomplete");
    const sessiondate = sessionStorage.getItem("navbar-autocomplete-date");
    const now = new Date().getTime();
    if (session && sessiondate) {
      const time = (now - parseInt(sessiondate)) / 1000 / 60;
      if (time < 5) {
        this.data = JSON.parse(sessionStorage.getItem("navbar-autocomplete"));
        return;
      }
    }
    const headers = new Headers();
    headers.append('pragma', 'no-cache');
    headers.append('cache-control', 'no-cache');
    this.data = await fetch(store.get("autocompleteApi"), {
      method: 'GET',
      headers: headers,
      credentials: "same-origin"
    })
      .then(response => response.json());
    sessionStorage.setItem("navbar-autocomplete", JSON.stringify(this.data));
    sessionStorage.setItem("navbar-autocomplete-date", now.toString());
  }
  submit(e) {
    if (this.select >= 0) {
      e.preventDefault();
      window.location.href = this.items[this.select].url;
      return;
    }
    const form = this.root.querySelector("form");
    form.submit();
  }
  async focus() {
    if (this.mobile)
      this.root.scrollIntoView({
        "behavior": "smooth"
      });
    if (this.data) {
      this.active = true;
      return;
    }
    await this.getData();
    this.active = true;
  }
  blur() {
    if (this.blurenabled)
      this.active = false;
  }
  clickListener() {
    this.blurenabled = false;
    setTimeout(() => this.blurenabled = true, 0);
  }
  input() {
    const value = this.inputElement.value.toLowerCase();
    if (value !== undefined && value.length < 3) {
      this.items = undefined;
      return;
    }
    let items = new Array();
    const condition = (k, v) => {
      return k.split(" ").reduce((prev, cur) => {
        return prev || (cur.toLowerCase().indexOf(v) == 0);
      }, false);
    };
    for (const key in this.data.manufacturers) {
      if (condition(key, value)) {
        items.push({
          "name": key,
          "url": this.data.manufacturers[key],
          "type": "manufacturer"
        });
      }
      if (items.length >= this.maxCount)
        break;
    }
    if (items.length < this.maxCount) {
      for (const key in this.data.categories) {
        if (condition(key, value)) {
          items.push({
            "name": key,
            "url": this.data.categories[key],
            "type": "category"
          });
        }
        if (items.length >= this.maxCount)
          break;
      }
    }
    this.items = items;
  }
  key(e) {
    if (e.key == "ArrowDown") {
      e.preventDefault();
      if (this.select < this.items.length - 1)
        this.select++;
    }
    else if (e.key == "ArrowUp") {
      e.preventDefault();
      if (this.select >= 0)
        this.select--;
    }
  }
  componentDidLoad() {
    this.inputElement = this.root.querySelector('input[name=szukaj]');
  }
  render() {
    var _a;
    return (h("form", { method: "post", action: "szukaj.html", onSubmit: e => this.submit(e) },
      h("a", { onClick: e => this.submit(e) },
        h("ks-icon", { name: "search", size: 1.1 })),
      h("input", { "aria-label": "Szukaj produkt\u00F3w", name: "szukaj", type: "search", autocomplete: "off", onFocus: () => this.focus(), onBlur: () => this.blur(), onInput: () => this.input(), onKeyDown: e => this.key(e) }),
      h("input", { type: "hidden", name: "postget", value: "tak" }),
      h("input", { type: "hidden", name: "opis", value: "nie" }),
      h("input", { type: "hidden", name: "nrkat", value: "tak" }),
      h("input", { type: "hidden", name: "kodprod", value: "tak" }),
      this.active && this.items && this.items.length > 0 ?
        h("div", { class: "list" }, (_a = this.items) === null || _a === void 0 ? void 0 : _a.map((item, index) => h("a", { href: item.url, class: index == this.select ? "active" : "" },
          item.name,
          h("ks-icon", { name: item.type == "category" ? "layers" : "bookmark", size: 0.9 }))))
        : null));
  }
  static get is() { return "ks-navbar-search"; }
  static get originalStyleUrls() { return {
    "$": ["navbar-search.css"]
  }; }
  static get styleUrls() { return {
    "$": ["navbar-search.css"]
  }; }
  static get properties() { return {
    "mobile": {
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
      "attribute": "mobile",
      "reflect": true
    }
  }; }
  static get states() { return {
    "active": {},
    "select": {},
    "items": {}
  }; }
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "mousedown",
      "method": "clickListener",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
