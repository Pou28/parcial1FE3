import React, { useState } from "react";
import Message from "./Message";
const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    direccion: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    const regexNum = /[0-9]/;
    console.log(regexNum.test(user.direccion));
    if (
      user.nombre.length >= 3 &&
      user.direccion.includes(" ") &&
      regexNum.test(user.direccion)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div>

      {show ? (
        <Message nombre={user.nombre} direccion={user.direccion} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Nombre: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Dirección: </label>
          <input
            type="text"
            onChange={(event) =>
              setUser({ ...user, direccion: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta.
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};
export default Form;
