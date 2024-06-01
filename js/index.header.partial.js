import ROOT from '../constants/root.js';
import localStorageUtil from '../utils/localStorageUtil.js';


class header{

    render(count){
        const html = `
            <div class="header-container">
                <div class="header-counter">
                    🛒 ${count}
                </div>
            </div>
        `;
        ROOT.ROOT_HEADER.innerHTML = html;
    }

  
}



const headerPage = new header();

const productsStore = localStorageUtil.getProducts();

headerPage.render(productsStore.length);

export default headerPage;