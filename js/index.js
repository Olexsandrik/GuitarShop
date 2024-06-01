
function init() {
   import('./constants/catalog.js');
   import('./constants/root.js');
   import('./index.header.partial.js');
   import('./index.products.partial.js');
   import('./utils/localStorageUtil.js');
   import('./index.shopping.partial.js');
  
  }

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
