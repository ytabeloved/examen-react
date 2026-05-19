import { useState } from "react";

import ListaProductos from "../Components/ListaProductos";
import Carrito from "../Components/Carrito";
import Formulario from "../Components/Formulario";
import Login from "../Components/Login";

function Home() {

  const productos = [

    {
      id: 1,
      nombre: "Notebook Gamer",
      precio: 850000,
      imagen:
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6"
    },

    {
      id: 2,
      nombre: "Mouse RGB",
      precio: 25000,
      imagen:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46"
    },

    {
      id: 3,
      nombre: "Teclado Mecánico",
      precio: 55000,
      imagen:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    }

  ];

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {

    setCarrito([...carrito, producto]);

  };

  return (

    <div>

      {/* HERO */}

      <section className="hero">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1>
                Bienvenido a TechStore
              </h1>

              <p>
                Encuentra los mejores productos tecnológicos
              </p>

            </div>

            <div className="col-md-6">

              <img
                src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef"
                alt="Hero"
              />

            </div>

          </div>

        </div>

      </section>

      {/* PRODUCTOS */}

      <div className="container mt-5">

        <h2 className="section-title">
          Productos Destacados
        </h2>

        <ListaProductos
          productos={productos}
          agregarAlCarrito={agregarAlCarrito}
        />

        {/* SECCION INFERIOR */}

        <div className="row mt-5 g-4">

          <div className="col-md-4">

            <div className="card shadow custom-card p-4 h-100">

              <Carrito carrito={carrito} />

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow custom-card p-4 h-100">

              <Formulario />

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow custom-card p-4 h-100">

              <Login />

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Home;