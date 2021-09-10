'use strict';

async function cartfetch(url, body) {
  const headers = new Headers();
  headers.append('pragma', 'no-cache');
  headers.append('cache-control', 'no-cache');
  return fetch(url, {
    method: 'POST',
    body: body,
    headers: headers,
    credentials: "same-origin"
  })
    .then(response => {
    if (!response.ok)
      throw { name: response.status, message: response.statusText };
    return response;
  });
}
function AddToFavourites(id, finished) {
  const navbar = document.querySelector('ks-navbar');
  const errorpopup = document.querySelector('ks-error-popup');
  let cartBody = new FormData();
  cartBody.append("id", id);
  cartfetch("inne/do_schowka.php?tok=" + ksFavouritesToken, cartBody)
    .then(() => {
    if (finished)
      finished();
    navbar.IncrementHeart();
  })
    .catch(error => {
    errorpopup.show(error);
    if (finished)
      finished();
  });
}
function RemoveFromFavourites(id, finished) {
  $.post("inne/do_schowka.php?tok=" + ksFavouritesRemoveToken, {
    id: id,
    akcja: 'usun'
  }, function () {
    window.location.reload();
    if (finished)
      finished();
  });
}
function RemoveAllFavourites(finished) {
  $.post("inne/schowek_usun.php?tok=" + ksFavouritesRemoveAllToken, {}, function () {
    window.location.reload();
    if (finished)
      finished();
  });
}
function OpenSuggestions(id, name) {
  const suggestions = document.querySelector("ks-product-suggestions");
  suggestions.show(id, name);
}

exports.AddToFavourites = AddToFavourites;
exports.OpenSuggestions = OpenSuggestions;
exports.RemoveAllFavourites = RemoveAllFavourites;
exports.RemoveFromFavourites = RemoveFromFavourites;
