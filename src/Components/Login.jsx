import { useState } from "react";

import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase/config";

function Login() {

  const [correo, setCorreo] = useState("");

  const [password, setPassword] = useState("");

  const registrarUsuario = async (e) => {

    e.preventDefault();

    try {

      await createUserWithEmailAndPassword(
        auth,
        correo,
        password
      );

      alert("Usuario registrado");

    } catch (error) {

      console.log(error);

      alert("Error al registrar");

    }

  };

  return (

    <div className="mt-5">

      <h3>Registro Usuario</h3>

      <form onSubmit={registrarUsuario}>

        <div className="mb-3">

          <input
            type="email"
            className="form-control"
            placeholder="Correo"
            value={correo}
            onChange={(e) =>
              setCorreo(e.target.value)
            }
          />

        </div>

        <div className="mb-3">

          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

        </div>

        <button className="btn btn-dark">
          Registrar
        </button>

      </form>

    </div>

  );

}

export default Login;