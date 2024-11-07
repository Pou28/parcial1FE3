import React from "react";
const Message = ({ nombre, direccion }) => {
  return (
    <>
      <h4>Nombre {nombre}!</h4>
      <h4>Direccion {direccion}</h4>
    </>
  );
};
export default Message;