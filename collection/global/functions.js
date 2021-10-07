import { eachTracker } from "../components/tracking/store";
export async function addToCart(id, count, name, price, traits, token) {
  this.loading = true;
  const errorpopup = document.querySelector('ks-error-popup');
  const messagepopup = document.querySelector('ks-message-popup');
  const navbar = document.querySelector('ks-navbar');
  let body = new FormData();
  body.append("id", id);
  body.append("ilosc", count);
  body.append("nazwa", name);
  body.append("value", price.toString());
  body.append("cechy", traits);
  body.append("akcja", 'dodaj');
  body.append("miejsce", '1');
  // Replace link string with state during prerendering rework
  await this.fetch("api/cart/product_add.php?tok=" + token, body)
    .then(async (data) => data.json())
    .then(async (data) => {
    if (!data.status) {
      if (data.productLink)
        messagepopup.show("Wymagany wybór cechy", data.message, "Przejdź do produktu", this.url);
      else
        messagepopup.show("Błąd dodawania produktu", data.message);
      return;
    }
    navbar.IncrementCart(count);
    OpenSuggestions(this.productId, this.name);
    if (data.event)
      eachTracker(item => item === null || item === void 0 ? void 0 : item.addToCart(data.event, this.productId, this.name, this.price, 1, "PLN"));
  })
    .catch(error => {
    errorpopup.show(error);
  });
  this.loading = false;
}
;
function OpenSuggestions(id, name) {
  const suggestions = document.querySelector("ks-product-suggestions");
  suggestions.show(id, name);
}
