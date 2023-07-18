/* array de objetos bruto y procesado*/
let arrayObjetoBruto = new Array();
let arrayObjetoProcesado = new Array();
/* peticion al servicio */
fetch("producto.json").then(respuesta => respuesta.json()).then(objetos => 
    { arrayObjetoBruto = objetos;

    /*AL FINALIZAR LA peticion... */
    cargarArrayProductosProcesados();
});
/* funcion procesar productos */
function cargarArrayProductosProcesados() {
    /* iterar los objetos brutos */
    arrayObjetoBruto.forEach(objeto => {
        /* Creando nuevo objetos de clase producto */
        arrayObjetoProcesado.push(new producto(objeto));
        
    });
    /* terminadno de iterar el catalogo */
    cargarcatalogo();
}
/* funcion de catalogo */
function cargarcatalogo() {
    /* itinerar los objetos procesados */
    arrayObjetoProcesado.forEach(objeto => {

        /* crear nuevo elemento articulo */
        let nuevoArticulo = document.createElement("article");
        nuevoArticulo.setAttribute("class", "col-6 col-sm-4 col-lg-3");

        /* especificar contenido html */
        nuevoArticulo.innerHTML =
            `
              <img class="imgProduct" img-fluit src="${objeto.image}" alt="${objeto._name}">

              <h3>${objeto._name}</h3>
              <p>
              <span class="precioOriginal">${objeto.precioOriginal}</span> 
              <span class="precioDescuento">${objeto.priceDescuento}</span>
              <br><span class="precioFinal">${objeto.priceFinal}</span>
              </p>
              <button type="button" class="btn btn-secondary" data-producto-aku="${objeto.sku}>Agregar al carrito</button>
        `;
        /* agregar el nuevo articulo al catalogo */
        document.querySelector("#catalogo").append(nuevoArticulo);
    })
}





