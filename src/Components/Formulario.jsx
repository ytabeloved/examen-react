import { useState, useRef } from "react";

import SimpleReactValidator from "simple-react-validator";

import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebase/config";

function Formulario() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    comentario: ""
  });

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate }
    })
  );

  const handleChange = (e) => {

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });

  };

  const guardarFormulario = async (e) => {

    e.preventDefault();

    if (validator.current.allValid()) {

      try {

        await addDoc(
          collection(db, "formularios"),
          formulario
        );

        alert("Formulario guardado correctamente");

        setFormulario({
          nombre: "",
          correo: "",
          comentario: ""
        });

      } catch (error) {

        console.log(error);

      }

    } else {

      validator.current.showMessages();

      forceUpdate(1);

    }

  };

  return (

    <div className="mt-5">

      <h3>Formulario de Contacto</h3>

      <form onSubmit={guardarFormulario}>

        <div className="mb-3">

          <label className="form-label">
            Nombre
          </label>

          <input
            type="text"
            name="nombre"
            className="form-control"
            value={formulario.nombre}
            onChange={handleChange}
          />

          <div className="text-danger">

            {
              validator.current.message(
                "nombre",
                formulario.nombre,
                "required|min:3"
              )
            }

          </div>

        </div>

        <div className="mb-3">

          <label className="form-label">
            Correo
          </label>

          <input
            type="email"
            name="correo"
            className="form-control"
            value={formulario.correo}
            onChange={handleChange}
          />

          <div className="text-danger">

            {
              validator.current.message(
                "correo",
                formulario.correo,
                "required|email"
              )
            }

          </div>

        </div>

        <div className="mb-3">

          <label className="form-label">
            Comentario
          </label>

          <textarea
            name="comentario"
            className="form-control"
            value={formulario.comentario}
            onChange={handleChange}
          />

          <div className="text-danger">

            {
              validator.current.message(
                "comentario",
                formulario.comentario,
                "required|min:5"
              )
            }

          </div>

        </div>

        <button className="btn btn-success">
          Guardar
        </button>

      </form>

    </div>

  );

}

export default Formulario;