import { Component, h, Prop, Element } from '@stencil/core';
export class FilterSidebar {
  componentDidLoad() {
    const overlay = this.root.querySelector("#filter-overlay");
    overlay.addEventListener("pointerdown", function (event) {
      const bar = overlay.querySelector("div");
      if (overlay.classList.contains("uk-open") && event.clientX > bar.offsetWidth) {
        UIkit.offcanvas(overlay).hide();
      }
    });
  }
  render() {
    return [
      h("button", { class: "uk-button uk-button-danger uk-width-1-1", type: "button", "uk-toggle": "target: #filter-overlay" }, "FILTRUJ"),
      h("div", { id: "filter-overlay", "uk-offcanvas": "overlay: true; bg-close: false;", style: { zIndex: "2147483648" } },
        h("div", { class: "uk-offcanvas-bar uk-padding-small" },
          h("div", { class: "uk-flex uk-flex-between uk-flex-top" },
            h("span", { style: { marginTop: "5px" }, class: "uk-text-uppercase" }, "Filtrowanie"),
            h("button", { class: "uk-offcanvas-close", type: "button", "uk-close": true }),
            h("hr", null)),
          h("br", null),
          h("form", { method: "POST", action: this.baseUrl },
            h("slot", null),
            h("a", { href: this.baseUrl, class: "uk-button uk-button-secondary uk-width-1-1 uk-margin-top" }, "WYCZY\u015A\u0106 FILTRY"),
            h("input", { type: "submit", class: "uk-button uk-button-danger uk-width-1-1 uk-margin-small-top", value: "ZOBACZ FILTRY" }))))
    ];
  }
  static get is() { return "ks-filter-sidebar"; }
  static get properties() { return {
    "baseUrl": {
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
      "attribute": "base-url",
      "reflect": false
    }
  }; }
  static get elementRef() { return "root"; }
}
