function Producto({ producto, agregarAlCarrito }) {

  return (

    <div className="card shadow product-card h-100">

      <img
        src={producto.imagen}
        className="card-img-top"
        alt={producto.nombre}
      />

      <div className="card-body d-flex flex-column">

        <h4 className="fw-bold">
          {producto.nombre}
        </h4>

        <p className="product-price">
          ${producto.precio}
        </p>

        <button
          className="btn btn-primary mt-auto"
          onClick={() =>
            agregarAlCarrito(producto)
          }
        >
          Agregar al carrito
        </button>

      </div>

    </div>

  );

}

export default Producto;