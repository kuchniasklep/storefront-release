import { createStore } from "@stencil/store";
export const store = createStore({
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