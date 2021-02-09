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
function AddToCart(id, count, traits, place, name, finished) {
  const errorpopup = document.querySelector('ks-error-popup');
  const messagepopup = document.querySelector('ks-message-popup');
  let countBody = new FormData();
  countBody.append("id", id);
  countBody.append("ilosc", count);
  countBody.append("cechy", traits);
  countBody.append("akcja", 'dodaj');
  cartfetch("inne/do_koszyka_ilosc.php?tok=" + ksCartCountToken, countBody)
    .then(async (data) => data.json())
    .then(async (data) => {
    if (data[0].ilosc != '') {
      messagepopup.show("Błąd dodawania produktu", data[0].komunikat);
      if (finished)
        finished(false);
      return;
    }
    let cartBody = new FormData();
    cartBody.append("id", id);
    cartBody.append("ilosc", count);
    cartBody.append("cechy", traits);
    cartBody.append("komentarz", "");
    cartBody.append("komentarz", "");
    cartBody.append("txt", "");
    cartBody.append("wroc", "");
    cartBody.append("miejsce", place);
    await cartfetch("inne/do_koszyka.php?tok=", cartBody)
      .then(data => data.text())
      .then(data => {
      let saCechy = data.indexOf('KonieczneCechy');
      let jestGratis = data.indexOf('TylkoGratis');
      if (saCechy > 0 || jestGratis > 0) {
        let dom = document.createElement('div');
        dom.innerHTML = data;
        dom.querySelector('h3').remove();
        let przyciski = dom.querySelector('#PopUpPrzyciski');
        const linktag = przyciski.querySelector('a');
        const link = linktag ? linktag.href : "";
        const linkname = linktag ? linktag.innerText : "";
        przyciski.remove();
        const message = saCechy > 0 ? "Konieczne cechy" : "Produkt jako gratis";
        messagepopup.show(message, dom.innerHTML, linkname, link);
        if (finished)
          finished(false);
        return;
      }
      this.navbar.IncrementCart(count);
      OpenSuggestions(id, name);
    })
      .catch(error => {
      errorpopup.show(error);
      if (finished)
        finished(false);
    });
  })
    .catch(error => {
    errorpopup.show(error);
    if (finished)
      finished(false);
  });
}
function AddToFavourites(id, finished) {
  const errorpopup = document.querySelector('ks-error-popup');
  let cartBody = new FormData();
  cartBody.append("id", id);
  cartfetch("inne/do_schowka.php?tok=" + ksFavouritesToken, cartBody)
    .then(() => {
    if (finished)
      finished();
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

exports.AddToCart = AddToCart;
exports.AddToFavourites = AddToFavourites;
exports.OpenSuggestions = OpenSuggestions;
exports.RemoveAllFavourites = RemoveAllFavourites;
exports.RemoveFromFavourites = RemoveFromFavourites;
