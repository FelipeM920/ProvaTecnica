import { Server } from '../app/components/server.js';

const server = new Server();

server.loadProducts()
    .then(data => mapToHtml(data.products))

function mapToHtml(products) {
    console.log(products[0])
    let productsDiv = document.getElementById('products');
    let template = '<ul class="container-products">';
    products.forEach(product => {
        template +=
            `<li>
                <picture>
                    <img srcset="${product.image}">
                </picture>
                <p>
                    ${product.name}
                </p>
                <p>
                    ${product.price}
                </p>
            </li>`
    });
    template += '</ul>';
    productsDiv.insertAdjacentHTML('beforeend', template);
}