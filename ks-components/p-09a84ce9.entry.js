import{r as t,h as e}from"./p-cb802b7f.js";const i=class{constructor(e){t(this,e)}componentWillLoad(){this.price=this.price.replace("zł",""),this.price=this.price.replace(",","."),this.price=this.price.trim()}render(){return e("script",null,'let CreditAgricoleButton = document.querySelector("',"#"+this.button,'"); CreditAgricoleButton.addEventListener("click", function(event)',"{","var iWidth = 820; var iHeight = 680; var iX = (screen.availWidth - iWidth) / 2; var iY = (screen.availHeight - iHeight) / 2; var wartosc = ",this.price,"; var parametryLukas = \"PSP2000493;500.00;10000.00\"; var lukas = parametryLukas.split(';'); var adres = 'https://ewniosek.credit-agricole.pl/eWniosek/simulator.jsp?PARAM_TYPE=RAT&PARAM_PROFILE=' + lukas[0] + '&PARAM_CREDIT_AMOUNT=' + wartosc; window.open(adres, 'Policz_rate_LUKAS', 'height=' + iHeight + ', width=' + iWidth + ',top=' + iY + ',left=' + iX + ',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no');","}",");")}},s=class{constructor(e){t(this,e)}componentWillLoad(){this.price=this.price.replace("zł",""),this.price=this.price.replace(",","."),this.price=this.price.trim()}render(){return e("script",null,"var openpayu = openpayu || ","{}","; openpayu.options = ","{","creditAmount: ",this.price,", posId: '226525', key: 'wE', showLongDescription: true","}",'; OpenPayU.Installments.miniInstallment("',"#"+this.button,'"); let payuButton = document.querySelector("',"#"+this.button,'"); let payuSpan = payuButton.querySelector("span"); let payuLink = payuSpan.querySelector("a"); payuSpan.style.display = "none"; payuButton.addEventListener("click", function(event)',"{","event.stopPropagation(); payuLink.click();","}",");")}};export{i as ks_product_creditagricole,s as ks_product_payu}