class Server {

   async loadProducts() {
       try {
      const resp = await fetch('https://raw.githubusercontent.com/ArezzoCo/ecommerce-prova-tecnica/master/front-end/categoria-owme-es6-sass/mock-products.json')
            // .then(response => response.json())
            // .then(data => console.log(JSON.stringify(data)))
            return resp.json();
       } catch(err) {
           console.log(err)
       }

    }
}

export { Server };