import { Component, h, Prop, Element } from '@stencil/core';
export class RecipeIngredient {
  constructor() {
    this.id = 0;
    this.checked = false;
  }
  componentWillRender() {
    this.id = Array.from(this.root.parentNode.children).indexOf(this.root);
    this.regex = new RegExp(`(?:(?:^|.*;\\s*)ingredient${this.id}\\s*\\=\\s*([^;]*).*$)|^.*$`);
    this.checked = this.getCookie();
  }
  getCookie() {
    const cookie = document.cookie.replace(this.regex, "$1");
    return cookie == "true";
  }
  setCookie() {
    document.cookie = `ingredient${this.id}=true; max-age=${60 * 60 * 24 * 30}; path=${window.location.pathname}; samesite=strict`;
  }
  removeCookie() {
    document.cookie = `ingredient${this.id}=; path=${window.location.pathname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
  click(event) {
    const checkbox = event.target;
    if (checkbox.checked)
      this.setCookie();
    else
      this.removeCookie();
  }
  render() {
    return [
      h("label", null,
        h("input", { type: "checkbox", checked: this.checked, onClick: event => this.click(event) }),
        h("span", { class: "checkmark" })),
      h("div", { class: "name" }, this.name),
      h("div", { class: "underline" }),
      h("div", { class: "amount" }, this.amount)
    ];
  }
  static get is() { return "ks-recipe-ingredient"; }
  static get originalStyleUrls() { return {
    "$": ["recipe-ingredient.css"]
  }; }
  static get styleUrls() { return {
    "$": ["recipe-ingredient.css"]
  }; }
  static get properties() { return {
    "name": {
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
      "attribute": "name",
      "reflect": false
    },
    "amount": {
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
      "attribute": "amount",
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
}
