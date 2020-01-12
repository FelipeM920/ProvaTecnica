import { Server } from '../app/components/server.js';

const server = new Server();

server.loadProducts()
.then(data => console.log(data.products))