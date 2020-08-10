import { h } from '@stencil/core';
import { createProviderConsumer } from '@stencil/state-tunnel';
export default createProviderConsumer({}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));
export async function LoadCategories() {
    let cachedCategories = sessionStorage.getItem("category-data");
    if (!cachedCategories) {
        const json = await fetch("res/categories.json")
            .then(response => response.json());
        if (!json)
            return "";
        const jsonString = JSON.stringify(json);
        sessionStorage.setItem("category-data", jsonString);
        return jsonString;
    }
    return cachedCategories;
}
