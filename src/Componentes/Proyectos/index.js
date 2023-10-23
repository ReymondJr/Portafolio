import React from 'react'
import "./proyectos.css"

export const Proyectos = (props) => {

    const {Nombre, Descripcion, Imagen, URL}= props.datos
  return (
    <>
    <section className='proyectos' >
<div className="proyectostip">
    <div className="tipoproyectos">
        <figcaption>{Nombre}</figcaption>
        <p>{Descripcion}</p>
        <a href={URL}><img className="proyecto_recursos" src={Imagen} alt="Imagen del proyecto de inventario y facturación"/></a>
        </div>
    
</div>
</section>
    </>
  )
}
