
document.addEventListener("DOMContentLoaded", function () {
    const formaPagoSelect = document.getElementById("formaPago");
    const pagoEfectivoDiv = document.getElementById("pagoEfectivo");
    const pagoTarjetaDiv = document.getElementById("pagoTarjeta");
  
    formaPagoSelect.addEventListener("change", function () {
      if (formaPagoSelect.value === "Efectivo") {
        pagoEfectivoDiv.style.display = "block";
        pagoTarjetaDiv.style.display = "none";
      } else if (formaPagoSelect.value === "Tarjeta de Débito/Crédito") {
        pagoEfectivoDiv.style.display = "none";
        pagoTarjetaDiv.style.display = "block";
      } else {
        pagoEfectivoDiv.style.display = "none";
        pagoTarjetaDiv.style.display = "none";
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    const entregaSelect = document.getElementById("entrega");
    const fechaHoraEntregaDiv = document.getElementById("fechaHoraEntrega");

    entregaSelect.addEventListener("change", function () {
        if (entregaSelect.value === "Fecha y hora específica") {
            fechaHoraEntregaDiv.style.display = "block";
        } else {
            fechaHoraEntregaDiv.style.display = "none";
        }
    });
});

// Función para agregar productos al carrito
function agregarAlCarrito(producto, precio) {
    var carrito = document.getElementById("carrito");
    var total = parseFloat(document.getElementById("total").textContent);
    var productosSeleccionados = document.getElementById("productosSeleccionados");
  
    // Crea un elemento de lista para el producto seleccionado
    var listItem = document.createElement("li");
    listItem.textContent = producto + " - $" + precio.toFixed(2);
  
    // Agrega el producto al carrito
    carrito.appendChild(listItem);
  
    // Actualiza el total
    total += precio;
    document.getElementById("total").textContent = total.toFixed(2);
  
    // Actualiza la lista de productos seleccionados (puedes usar un formato JSON)
    var listaProductos = JSON.parse(productosSeleccionados.value || "[]");
    listaProductos.push({ producto: producto, precio: precio });
    productosSeleccionados.value = JSON.stringify(listaProductos);
}
function mostrarProductos() {
    var seleccionComercio = document.getElementById("seleccionComercio").value;
    
    // Oculta todas las secciones de productos
    var seccionesProductos = document.querySelectorAll('[id^="productos-"]');
    seccionesProductos.forEach(function(seccion) {
      seccion.style.display = "none";
    });
  
    // Muestra la sección de productos correspondiente al comercio seleccionado
    var seccionProductosSeleccionada = document.getElementById("productos-" + seleccionComercio);
    seccionProductosSeleccionada.style.display = "block";
}


