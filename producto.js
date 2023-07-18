/*definir clase de producto*/
class producto {
    /*propiedades*/
    _sku = null;
    _name = "Default";
    _price = 0;
    _offter = 0;
    _imagen = "IMG.png";
    /*el productor de la clase*/
    constructor(sku, name, price, offer, image) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.offer = offter;
        /*Validar si se ingreso una imagen*/
        if (image != undefined) {
            this._image = image;
        }
    }
    /*metodo para armar el articulo*/
    crearArticulo() {
        let html = `
              <img class="imgProduct" src="IMG${this._image}" alt="${this._name}">

              <h3>${this._name}</h3>
              <p>
              <span class="precioOriginal">${this._original}</span> 
              <span class="precioDescuento">${this._offer}</span>
              <br><span class="precioFinal">${this._price}</span>
              </p>
              <button type="button" class="btn btn-secondary">Agregar al carrito</button>

      
        `;
        return html;
    }
   /*obtener atributos*/ 
   get sku (){
    return this._sku.trim().toUpperCase();
   }
   get name (){
    return this._sku.trim();
   }
   get priceOriginal (){
    return this._price.toFixed(2);
   }
   get priceDescuento (){
    return ((this._offer*100)+"%");
   }
   get priceFinal (){
    return (this._price- (this._price * this._offer)).toFixed(2);
   }
   get image (){
    return ("IMG"+this._image)
   }
}
