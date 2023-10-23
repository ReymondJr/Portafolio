import "./formacion.css"
export const Formacion = (props) => {

    const {Foto, Descripcion} = props.datos
  return (
    <>
    <section className="formacion">
    <div className="formacion_institucion">
        <div className="tipoformacion">
            <figure>
                <img className="formacion_imagen" src={Foto} alt="UAPA"/>
                <figcaption>{Descripcion}</figcaption>
            </figure>
        </div>
       
    </div>
</section>
    </>
  )
}
