import { Component, h, Element, Host, Prop, Method } from '@stencil/core';
export class NavbarCategorySidebar {
  constructor() {
    this.open = false;
    this.keepSiblingsOpen = false;
    this.hideWithChildren = false;
    this.haschildren = false;
  }
  componentWillLoad() {
    this.haschildren = !!this.root.querySelector('*');
  }
  componentDidLoad() {
    this.children = this.root.querySelector(".children").children;
  }
  click() {
    if (this.haschildren) {
      this.open = !this.open;
      if (!this.keepSiblingsOpen) {
        Array.from(this.root.parentElement.children).forEach((element) => {
          if (element != this.root && "hide" in element)
            element.hide();
        });
      }
      if (this.open && this.hideWithChildren) {
        Array.from(this.children).forEach((element) => {
          if (element != this.root && "hide" in element)
            element.hide();
        });
      }
    }
  }
  async hide() {
    if (this.haschildren) {
      this.open = false;
    }
  }
  render() {
    return h(Host, null,
      h("div", { class: "name", onClick: () => this.click() },
        h("span", null, this.name),
        this.haschildren ? h("ks-icon", { name: this.open ? "minus" : "plus" }) : null),
      this.haschildren ?
        h("div", { class: "children" },
          h("slot", null))
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
