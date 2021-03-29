import { createStore } from "@stencil/store";
import { jsonfetch, formfetch } from "../fetch";
export const store = createStore({
  api: {},
  totalValue: 0,
  productValue: 0,
  productAmount: 0,
  pointsForOrder: 0,
  totalShippingTime: "",
  otherValues: [],
  shippingProgress: {},
  products: [],
  deals: [],
  dealGroups: [],
  shipping: [],
  payment: [],
  shippingMessage: "",
  paymentMessage: "",
  activeShipping: 0,
  activePayment: 0,
  points: {},
  discount: {},
  loading: 0,
  loadingProducts: 0,
  easyprotect: {},
  insured: {},
});
export async function easyprotectChange(insured) {
  const api = store.get("api").easyprotectChange;
  loading();
  await jsonfetch(api, insured)
    .then(response => response.json())
    .then(json => update(json));
  loaded();
}
export async function easyprotectRemove(id) {
  const api = store.get("api").easyprotectRemove;
  loading();
  await formfetch(api, { "id": id })
    .then(response => response.json())
    .then(json => update(json));
  loaded();
}
function update(data) {
  Object.keys(data).map(key => {
    store.set(key, data[key]);
  });
}
function loading() {
  store.set("loading", store.get("loading") + 1);
}
function loaded() {
  store.set("loading", store.get("loading") - 1);
}
