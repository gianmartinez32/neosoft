import React, { useEffect } from "react";
import Alerts from "../Alerts/Alerts";
import "./index.css";
import { getBooks } from "../../services/servicesBooks";

const BoxLogin = () => {
  const alerta = (msj) => {
    <Alerts msj={msj}></Alerts>;
  };
  let data = null;
  useEffect(() => {
    /* data = getAllBooks()
     console.log(data); */
  }, []);

  const getAllBooks = async () => {
    data = await getBooks();
    console.log(data);
    if (data != null) {
      console.log(data);
    } else {
      console.log("error: " + data);
    }
  };
  return (
    <div
      id="Login"
      className="container  border border-2 rounded-3"
      style={{ padding: "35px", border: "#0294A2" }}
    >
      <h3>Iniciar Sesion</h3>
      <form className="form-group">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Usuario
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></input>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
            style={{ background: "#0294A2" }}
            onClick={getAllBooks}
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoxLogin;
