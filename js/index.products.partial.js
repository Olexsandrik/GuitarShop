import CATALOG from '../constants/catalog.js';
import ROOT from '../constants/root.js';
import localStorageUtil from '../utils/localStorageUtil.js';
import headerPage from './index.header.partial.js';


class Products {
    constructor() {
        this.activeNameClass = ".products-element__btn_active"; 
        this.labelAdd = "Добавити в корзину";
        this.labelRemove = "Видалити з корзини";
    }

    handleSetLocationStorage(element, id) {
        const res = localStorageUtil.putProducts(id);

        if(res.pushProduct){
            element.classList.add(this.activeNameClass);
            element.innerHTML= this.labelRemove;
        }
        else{
            element.classList.remove(this.activeNameClass);
            element.innerHTML= this.labelAdd;
        }

    headerPage.render(res.products.length);

     
    }

    render() {
        let htmlCatalog = '';
        const productsStorage = localStorageUtil.getProducts();

        CATALOG.forEach(element => {
            let activeClass = "";
            let activeText = "";

            if (productsStorage.indexOf(element.id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = " " + this.activeNameClass;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${element.name}</span>
                    <img class="products-element__img" src="${element.img}" alt="#">
                    <span class="products-element__price">🦾 
                        ${element.price.toLocaleString()} USD
                    </span>
                    <button class="products-element__btn${activeClass}">${activeText}</button>
                </li>
            `;

            
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        
        ROOT.ROOT_PRODUCTS.innerHTML = html;
        const buttons = document.querySelectorAll(".products-element__btn");
        buttons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                this.handleSetLocationStorage(btn, CATALOG[index].id);
            });
        });
        
        
        
    }
    
}



let productsPage= new Products();

productsPage.render();




