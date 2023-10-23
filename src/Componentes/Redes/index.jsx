import React from 'react'
import "./redes.css"

const RedesSociales = () => {
  return (
    <div className="redes">
      <div className="tipos_redes">
        <a href="https://www.facebook.com/reymond.adames">
          <img className="redes_imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0iZ1pSqw5PXPS8zkP39z7C9-oncvxSqVXQ&usqp=CAU"alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/reymond_j.a">
          <img className="redes_imagen" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuiiyRvMNxSMfZYNb5_b-GkEAAmiJkX071g&usqp=CAU" alt="Instagram" />
        </a>
        <a href="https://github.com/Retro150">
          <img className="redes_imagen" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github" />
        </a>
      </div>
	  <p className="mensaje">Sígueme en mis redes sociales para estar al tanto de mis últimas publicaciones y proyectos</p>
    </div>
  );
}

export default RedesSociales;
