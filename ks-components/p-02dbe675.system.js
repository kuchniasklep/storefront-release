System.register([],(function(o){"use strict";return{execute:function(){o({A:i,R:e,a:t,b:n});function i(o,i,t,e,n,a){$.post("inne/do_koszyka_ilosc.php?tok="+ksCartToken,{id:o,ilosc:i,cechy:t,akcja:"dodaj"},(function(c){if(c[0].ilosc!=""){$.colorbox({html:'<div id="PopUpInfo">'+c[0].komunikat+"</div>",maxWidth:"90%",maxHeight:"90%",open:true,initialWidth:50,initialHeight:50});if(a)a(false)}else{$.post("inne/do_koszyka.php?tok="+ksCartCountToken,{id:o,ilosc:i,cechy:t,komentarz:"",txt:"",wroc:"",miejsce:e},(function(i){var t=i.indexOf("KonieczneCechy");var e=i.indexOf("TylkoGratis");if(t>0||e>0){$.colorbox({html:i,maxWidth:"90%",maxHeight:"90%",open:true,initialWidth:50,initialHeight:50,overlayClose:false,escKey:false,onLoad:function(){$("#cboxClose").hide()}});if(a)a(false)}if(t<0){s(o,n);if(a)a(true)}}))}}),"json")}function t(o,i){$.post("inne/do_schowka.php?tok="+ksFavouritesToken,{id:o},(function(){if(i)i()}))}function e(o,i){$.post("inne/do_schowka.php?tok="+ksFavouritesRemoveToken,{id:o,akcja:"usun"},(function(){window.location.reload();if(i)i()}))}function n(o){$.post("inne/schowek_usun.php?tok="+ksFavouritesRemoveAllToken,{},(function(){window.location.reload();if(o)o()}))}function s(o,i){var t=document.createElement("ks-product-suggestions");t.setAttribute("product-id",o);t.setAttribute("name",i);t.setAttribute("api","api/suggested_products.php");document.body.appendChild(t)}}}}));