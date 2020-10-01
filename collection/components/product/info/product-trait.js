import { Component, h, Element } from '@stencil/core';
import Tunnel from '../product-data';
export class ProductTrait {
    selectedTraits(data) {
        const selects = this.root.querySelectorAll("select");
        for (let i = 0; i < selects.length; i++) {
            const select = selects[i];
            const selectedIndex = select.selectedIndex;
            data.traits[i].selected = data.traits[i].items[selectedIndex].id;
        }
        let traitIDs = "";
        for (let i = 0; i < data.traits.length; i++) {
            const element = data.traits[i];
            traitIDs += "x" + element.id + "-" + element.selected;
        }
        return traitIDs;
    }
    async selectTrait(data) {
        const productId = data.buttons.id;
        const traitIDs = this.selectedTraits(data);
        const traitData = await this.fetchTraits("inne/produkt.php", ksTraitsToken, productId, traitIDs);
        const traitImage = await this.fetchTraits("inne/produkt_cecha_zdjecie.php", ksTraitImageToken, productId, traitIDs);
        if (traitData.cena != null && traitData.cenapoprzednia != null)
            data.update({
                currentPrice: traitData.cena,
                previousPrice: traitData.cenapoprzednia,
                ean: traitData.ean,
                catalog: traitData.nrkat,
                traitIDs: traitIDs
            });
        else
            data.update({
                ean: traitData.ean,
                catalog: traitData.nrkat,
                traitIDs: traitIDs
            });
        data.updateImage({
            full: traitImage.duze,
            preview: traitImage.duze,
            thumb: traitImage.male
        });
    }
    async fetchTraits(api, token, id, traits) {
        return new Promise(function (resolve) {
            $.post(api + "?tok=" + token, {
                id: "555_" + id,
                cechy: traits
            }, function (data) {
                resolve(data);
            }, "json");
        });
    }
    render() {
        return (h(Tunnel.Consumer, null, (data) => {
            data.update({ traitIDs: this.selectedTraits(data) });
            return (data.traits.map(trait => h("div", { class: "uk-margin-bottom" },
                h("ks-flex", null,
                    h("div", { class: "uk-width-auto uk-flex uk-flex-center uk-flex-middle uk-padding-remove uk-margin-right" }, trait.name),
                    h("div", { class: "uk-width-expand" },
                        h("select", { "aria-label": trait.name, class: "uk-select", onChange: () => this.selectTrait(data) }, trait.items.map(item => h("option", null, item.name))))))));
        }));
    }
    static get is() { return "ks-product-trait"; }
    static get elementRef() { return "root"; }
}
