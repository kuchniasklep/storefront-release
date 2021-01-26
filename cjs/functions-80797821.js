'use strict';

function AddToCart(id, count, traits, place, name, finished) {
  $.post("inne/do_koszyka_ilosc.php?tok=" + ksCartToken, {
    id: id,
    ilosc: count,
    cechy: traits,
    akcja: 'dodaj'
  }, function (data) {
    if (data[0].ilosc != '') {
      $.colorbox({
        html: '<div id="PopUpInfo">' + data[0].komunikat + '</div>',
        maxWidth: '90%',
        maxHeight: '90%',
        open: true,
        initialWidth: 50,
        initialHeight: 50
      });
      if (finished)
        finished(false);
    }
    else {
      $.post("inne/do_koszyka.php?tok=" + ksCartCountToken, {
        id: id,
        ilosc: count,
        cechy: traits,
        komentarz: "",
        txt: "",
        wroc: "",
        miejsce: place
      }, function (data) {
        var saCechy = data.indexOf('KonieczneCechy');
        var jestGratis = data.indexOf('TylkoGratis');
        if ( saCechy > 0 || jestGratis > 0) {
          $.colorbox({
            html: data,
            maxWidth: '90%',
            maxHeight: '90%',
            open: true,
            initialWidth: 50,
            initialHeight: 50,
            overlayClose: false,
            escKey: false,
            onLoad: function () {
              $('#cboxClose').hide();
            }
          });
          if (finished)
            finished(false);
        }
        if ( saCechy < 0) {
          OpenSuggestions(id, name);
          //window.location.reload();
          if (finished)
            finished(true);
        }
      });
    }
  }, "json");
}
function AddToFavourites(id, finished) {
  $.post("inne/do_schowka.php?tok=" + ksFavouritesToken, {
    id: id
  }, function () {
    //window.location.reload();
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
