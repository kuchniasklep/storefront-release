import { createStore } from "@stencil/store";
export const store = createStore({
  cartLink: "",
  cartCount: 0,
  favouritesLink: "",
  favouritesCount: 0,
  loginLink: "",
  logoutLink: "",
  accountLink: "",
  categories: []
});
