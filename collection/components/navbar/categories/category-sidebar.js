import { Component, h, Element, Host, Prop, Method } from '@stencil/core';
export class NavbarCategorySidebar {
  constructor() {
    this.open = false;
    this.keepSiblingsOpen = false;
    this.hideWithChildren = false;
  }
  click() {
    if ('children' in this.category) {
      this.open = !this.open;
      if (!this.keepSiblingsOpen) {
        Array.from(this.root.parentElement.children).forEach((element) => {
          if (element != this.root && "hide" in element)
            element.hide();
        });
      }
      if (this.open && this.hideWithChildren) {
        Array.from(this.root.parentElement.children).forEach((element) => {
          if (element != this.root && "hide" in element)
            element.hide();
        });
      }
    }
  }
  async hide() {
    this.open = false;
  }
  render() {
    return h(Host, null,
      h("div", { class: "name", onClick: () => this.click() },
        h("span", null, this.category.name),
        'children' in this.category ? h("ks-icon", { name: this.open ? "minus" : "plus" }) : null),
      'children' in this.category ?
        h("div", { class: "children" },
          this.category.children.map(category => 'children' in category ?
            h("ks-category-sidebar", { category: category }) :
            h("a", { href: category.url }, category.name)),
          h("a", { href: this.category.url, class: "seeall" }, "Zobacz wszystko"))
        : null);
  }
  static get is() { return "ks-category-sidebar"; }
  static get originalStyleUrls() { return {
    "$": ["category-sidebar.css"]
  }; }
  static get styleUrls() { return {
    "$": ["category-sidebar.css"]
  }; }
  static get properties() { return {
    "category": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Category",
        "resolved": "Category",
        "references": {
          "Category": {
            "location": "import",
            "path": "../../../global/data/common"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "open": {
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
      "attribute": "open",
      "reflect": true,
      "defaultValue": "false"
    },
    "keepSiblingsOpen": {
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
      "attribute": "keep-siblings-open",
      "reflect": true,
      "defaultValue": "false"
    },
    "hideWithChildren": {
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
      "attribute": "hide-with-children",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get methods() { return {
    "hide": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "root"; }
}
