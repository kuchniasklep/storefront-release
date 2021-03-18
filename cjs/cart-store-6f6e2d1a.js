'use strict';

const index = require('./index-79353176.js');

const store = index.createStore({
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

exports.store = store;
