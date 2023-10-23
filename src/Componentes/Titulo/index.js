import "./titulo.css"
import React from 'react'

export const Titulo = (props) => {

  const {titulo} = props
  return (
    <>
        <section className="container">
    <div className="titulo-titulo">
        <h1>{titulo}</h1>
    </div>
    </section>
    </>
  )
}
