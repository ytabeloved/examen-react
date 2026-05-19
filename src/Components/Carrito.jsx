function Carrito({ carrito }) {
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0
  );

  return (
    <div className="mt-5">
      <h3>Carrito</h3>

      {carrito.length === 0 ? (
        <p>No hay productos</p>
      ) : (
        <ul className="list-group">
          {carrito.map((producto, index) => (
            <li key={index} className="list-group-item">
              {producto.nombre} - ${producto.precio}
            </li>
          ))}
        </ul>
      )}

      <h4 className="mt-3">
        Total: ${total}
      </h4>
    </div>
  );
}

export default Carrito;