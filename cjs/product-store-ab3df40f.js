'use strict';

const index = require('./index-f00963f7.js');

const store = index.createStore({
  id: "",
  name: "",
  breadcrumbs: [],
  brand: "",
  brandLink: "",
  description: "",
  attributes: [],
  previousPrice: "",
  currentPrice: "",
  shippingPrice: "",
  shippingTime: "",
  shippingMessage: "",
  availability: 0,
  count: 1,
  cartLoading: false,
  favouritesLoading: false,
  favouritesCompleted: false,
  images: [],
  traitIDs: "",
  traits: [],
  catalog: "",
  model: "",
  ean: "",
  negotiate: false,
  externalPoints: false,
  reviews: {}
});

exports.store = store;
