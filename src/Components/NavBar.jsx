function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom shadow">

      <div className="container">

        <a className="navbar-brand fw-bold" href="#">
          TechStore
        </a>

        <div>

          <ul className="navbar-nav ms-auto flex-row gap-3">

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>

          </ul>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;