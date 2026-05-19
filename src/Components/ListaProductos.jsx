import Producto from "./Producto";

function ListaProductos({ productos, agregarAlCarrito }) {
  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-md-4 mb-4" key={producto.id}>
          <Producto
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        </div>
      ))}
    </div>
  );
}

export default ListaProductos;