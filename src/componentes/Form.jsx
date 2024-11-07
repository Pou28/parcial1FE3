import React, { useState } from 'react'

const Form = () => {
    const[nombre, setNombre]= useState("");
    const[direccion,setDireccion]=useState("");
    const[show,setShow]=useState(false);

    const handleSubmit= (event)=>{
        event.preventDefault();




    };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >Nombre</label>
        <input type="text" 
            onChange={(event)=> setNombre(event.target.value) }/>
        <label>Direccion</label> 
        <input type="text"
            onChange={(event)=> setDireccion(event.target.value) }/>
        <button>Enviarn</button>
      </form>

    {show ? (

    <>
        <h4>Nombre:{nombre}</h4>
        <h4>Direccion:{direccion}</h4>
    </>
    ): null	
    }
    

    </div>
  )
}

export default Form
