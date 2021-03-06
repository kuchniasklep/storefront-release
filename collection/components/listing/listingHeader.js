import { Component, h, Element } from '@stencil/core';
export class ListingHeader {
  render() {
    return (h("div", { class: "uk-position-relative", style: { minHeight: "45px" } },
      h("div", { class: "uk-flex uk-flex-center uk-flex-middle", style: { minHeight: "45px" } },
        h("div", null,
          h("div", { class: "ks-title-slot" },
            h("slot", { name: "title" })),
          h("slot", { name: "breadcrumbs" }))),
      h("div", { class: "uk-margin-small-top uk-width-1-1", "uk-toggle": "mode: media; media: 641; cls: uk-position-absolute uk-position-top uk-margin-remove" },
        h("ks-flex", { between: true, middle: true, gutter: true, reverse: true },
          h("slot", null)))));
  }
  componentDidLoad() {
    const parent = this.root.querySelector("div > div > ks-flex > div");
    const elements = parent.querySelectorAll("ks-sorting, ks-filter-sidebar");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const div = document.createElement("div");
      div.setAttribute("uk-toggle", "mode: media; media: (max-width: 640px); cls: uk-flex-1");
      parent.replaceChild(div, element);
      div.appendChild(element);
    }
    const title = this.root.querySelector(".ks-title-slot > *");
    title.classList.add("uk-h2", "uk-text-center", "ks-text-decorated", "uk-text-bold");
    title.style.marginBottom = "3px";
  }
  static get is() { return "ks-listing-header"; }
  static get elementRef() { return "root"; }
}
