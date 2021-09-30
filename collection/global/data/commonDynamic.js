import { createStore } from "@stencil/store";
export const commonDynamic = createStore({
  loggedIn: false,
  cartCount: 0,
  heartCount: 0,
});
