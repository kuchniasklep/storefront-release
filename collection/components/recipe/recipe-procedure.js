import { Component, h, } from '@stencil/core';
export class RecipeProcedure {
    render() {
        return [
            h("div", { class: "ingredients" },
                h("slot", { name: "ingredients" })),
            h("div", { class: "preparation" },
                h("slot", { name: "preparation" }))
        ];
    }
    static get is() { return "ks-recipe-procedure"; }
    static get originalStyleUrls() { return {
        "$": ["recipe-procedure.css"]
    }; }
    static get styleUrls() { return {
        "$": ["recipe-procedure.css"]
    }; }
}
