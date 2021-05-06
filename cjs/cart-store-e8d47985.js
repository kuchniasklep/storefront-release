'use strict';

const index = require('./index-856f0267.js');

async function formfetch(url, formProperties) {
  let body = null;
  if (formProperties) {
    body = new FormData();
    Object.entries(formProperties).forEach(([key, value]) => {
      body.append(key, value);
    });
  }
  return internalfetch(url, body);
}
async function jsonfetch(url, data) {
  return internalfetch(url, JSON.stringify(data));
}
async function internalfetch(url, body) {
  const headers = new Headers();
  headers.append('pragma', 'no-cache');
  headers.append('cache-control', 'no-cache');
  return fetch(url, {
    method: 'POST',
    body: body,
    headers: headers,
    credentials: "same-origin"
  }).then(response => {
    if (!response.ok)
      throw { name: response.status, message: response.statusText };
    return response;
  });
}

const store = index.createStore({
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
async function easyprotectChange(insured) {
  const api = store.get("api").easyprotectChange;
  loading();
  await jsonfetch(api, insured)
    .then(response => response.json())
    .then(json => update(json));
  loaded();
}
async function easyprotectRemove(id) {
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

exports.easyprotectChange = easyprotectChange;
exports.easyprotectRemove = easyprotectRemove;
exports.formfetch = formfetch;
exports.store = store;
