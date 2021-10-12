import Fetch from "./fetch";
import { common } from "../data/common";
export async function addToFavourites(id) {
  const errorpopup = document.querySelector('ks-error-popup');
  const navbar = document.querySelector('ks-navbar');
  let cartBody = new FormData();
  cartBody.append("id", id);
  const api = common.get('api').addToFavourites;
  return Fetch(api, cartBody)
    .then(() => navbar.IncrementHeart())
    .catch(error => errorpopup.show(error));
}
export async function removeFromFavourites(id) {
  const errorpopup = document.querySelector('ks-error-popup');
  const navbar = document.querySelector('ks-navbar');
  let cartBody = new FormData();
  cartBody.append("id", id);
  cartBody.append("akcja", "usun");
  const api = common.get('api').removeFromFavourites;
  return Fetch(api, cartBody)
    .then(() => navbar.DecrementHeart())
    .catch(error => errorpopup.show(error));
}
