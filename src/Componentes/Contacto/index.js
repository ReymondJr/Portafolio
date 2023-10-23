import React from 'react'
import "./contacto.css"
import { Button, TextField, TextareaAutosize } from '@mui/material'

export const Contacto = () => {
  return (
    <section className="contacto">
	<form className="grupocontacto">
        <TextField id='outlined-basic' label="Nombre" variant='outlined' />
        <TextField id='outlined-basic' type='email' className='email' label="Email" variant='outlined' required />
        <TextareaAutosize id="message" name="message" placeholder="Tu mensaje" required />
		<Button className="boton">Enviar</Button>
	</form>
</section>
  )
}