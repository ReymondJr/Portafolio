import React from 'react';
import './habi.css';

export const TituloHabilidades =() => {

    return <>
         <div className="habilidades_titulo">
                <h1 className="titulohab">Habilidades</h1>
            </div>
    </>
}
const Habilidades = (props) => {

    const {Titulo, Foto} = props.datos

    return (
        <section className="habilidades">
            <div className="habilidades_tipos">

                    <figure className='item'>
                        <img className="imagen" src={Foto} alt="Logo de C#"/>
                        <figcaption>
                        {Titulo}
                        </figcaption>
                    </figure>
            </div>
        </section>
    );
}

export default Habilidades;