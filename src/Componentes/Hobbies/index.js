import "./hobbies.css"

import React from 'react'

export const TituloHobbis = () =>{
    return <>
        <div className="hobbies_titulo"><h1>Hobbies</h1></div>
    </>

}
export const Pasatiempos = (props) => {
    const {Titulo, Foto} = props.datos
  return (
   <>
    <section className="hobbies">
			<div className="hobbies_tipos">

				<div className="tipohobbies"><figure>
					<img className="hobbies_imagen" src={Foto} alt=""/>
					<figcaption>
					  {Titulo}
					</figcaption>
				  </figure></div>

			 
			</div>
            

		</section>
   </>
  )
}
