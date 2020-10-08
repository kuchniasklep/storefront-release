import { Component, h, State, Listen } from '@stencil/core';
export class HomepageInfo {
  constructor() {
    this.mobile = 0;
  }
  resizeHandler() {
    this.mobile = (window.innerWidth <= 960) ?
      (window.innerWidth < 639) ?
        (window.innerWidth <= 400) ? 3
          : 2
        : 1
      : 0;
  }
  componentWillLoad() {
    this.resizeHandler();
  }
  render() {
    let containerPadding = "80px 10px 40px 10px";
    if (this.mobile == 2)
      containerPadding = "60px 10px 40px 10px";
    if (this.mobile == 3)
      containerPadding = "40px 10px 40px 10px";
    const itemPadding = this.mobile != 3 ? { padding: "0 50px" } : {};
    return (h("div", { class: "uk-section uk-padding-remove-vertical" },
      h("div", { class: "uk-container uk-container-medium" },
        h("div", { style: { padding: containerPadding } },
          h("div", null,
            h("slot", { name: "mainHeading" }),
            h("p", { style: { margin: "0 auto 40px auto", maxWidth: "800px" } },
              h("slot", { name: "mainContent" }))),
          this.mobile > 0 ?
            h("section", { "uk-slider": "center: true; finite: true", class: "uk-position-relative uk-visible-toggle" },
              h("div", { class: "uk-overflow-hidden" },
                h("ul", { class: "uk-slider-items uk-child-width-1-1 uk-text-justify" },
                  h("li", { style: itemPadding },
                    h("slot", { name: "firstHeading" }),
                    h("slot", { name: "firstContent" })),
                  h("li", { style: itemPadding },
                    h("slot", { name: "secondHeading" }),
                    h("slot", { name: "secondContent" })),
                  h("li", { style: itemPadding },
                    h("slot", { name: "thirdHeading" }),
                    h("slot", { name: "thirdContent" })))),
              this.mobile != 3 ?
                h("div", null,
                  h("a", { class: "uk-position-center-left", href: "#", "uk-slidenav-previous": true, "uk-slider-item": "previous" }),
                  h("a", { class: "uk-position-center-right", href: "#", "uk-slidenav-next": true, "uk-slider-item": "next" }))
                :
                  h("ul", { class: "uk-slider-nav uk-dotnav uk-flex-center" }))
            :
              h("div", { class: "uk-child-width-1-3 uk-text-justify", "uk-grid": true },
                h("div", null,
                  h("slot", { name: "firstHeading" }),
                  h("slot", { name: "firstContent" })),
                h("div", null,
                  h("slot", { name: "secondHeading" }),
                  h("slot", { name: "secondContent" })),
                h("div", null,
                  h("slot", { name: "thirdHeading" }),
                  h("slot", { name: "thirdContent" })))))));
  }
  static get is() { return "ks-homepage-info"; }
  static get originalStyleUrls() { return {
    "$": ["homepage-info.css"]
  }; }
  static get styleUrls() { return {
    "$": ["homepage-info.css"]
  }; }
  static get states() { return {
    "mobile": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
