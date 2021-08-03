import { Component, h, Prop, Host } from '@stencil/core';
export class Banner {
  componentWillLoad() {
    if (this.navbarTheme)
      this.theme = JSON.parse(this.navbarTheme);
  }
  render() {
    const theme = (this.active && this.theme) ? `:root {
			--navbar-color: ${this.theme.navbarColor} !important;
			--navbar-color-hover: ${this.theme.navbarColorHover} !important;
			--navbar-color-active: ${this.theme.navbarColorActive} !important;
			--navbar-category-color: ${this.theme.categoryColor} !important;
			--navbar-category-hover: ${this.theme.categoryColorHover} !important;
			--navbar-category-active: ${this.theme.categoryColorActive} !important;
			--navbar-category-backdrop: ${this.theme.categoryColorBackdrop} !important;
		}` : null;
    return h(Host, { class: "swiper-slide", style: { backgroundColor: this.color } },
      h("a", { href: this.link },
        h("canvas", { width: this.width, height: this.height }),
        h("ks-img", { vertical: true, sync: this.sync, src: this.image, alt: this.name, width: this.width, height: this.height })),
      theme ? h("style", { innerHTML: theme }) : null);
  }
  static get is() { return "ks-banner"; }
  static get originalStyleUrls() { return {
    "$": ["banner.css"]
  }; }
  static get styleUrls() { return {
    "$": ["banner.css"]
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
    "color": {
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
      "attribute": "color",
      "reflect": false
    },
    "image": {
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
      "attribute": "image",
      "reflect": false
    },
    "link": {
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
      "attribute": "link",
      "reflect": false
    },
    "sync": {
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
      "attribute": "sync",
      "reflect": false
    },
    "width": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "width",
      "reflect": false
    },
    "height": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "height",
      "reflect": false
    },
    "active": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "active",
      "reflect": true
    },
    "navbarTheme": {
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
      "attribute": "navbar-theme",
      "reflect": false
    }
  }; }
}
