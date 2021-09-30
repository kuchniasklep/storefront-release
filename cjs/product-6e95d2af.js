'use strict';

const index = require('./index-08350893.js');

const product = index.createStore({
  id: "",
  name: "",
  breadcrumbs: [],
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
  reviews: {},
  infoBanner: {},
  notifyStrings: {},
  api: {},
  warranty: "",
  warrantyLink: "",
  points: {},
  negotiate: {},
  installments: {},
  brand: {},
  tags: []
});

exports.product = product;
