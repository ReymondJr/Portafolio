import { useState } from "react";
import { Banner } from "./Componentes/Banner";
import { Barra } from './Componentes/Barra';
import Habilidades from "./Componentes/Habilidades";
import RedesSociales from "./Componentes/Redes";
import { Pasatiempos } from "./Componentes/Hobbies";
import { Formacion } from "./Componentes/Formacion";
import { Titulo } from "./Componentes/Titulo";
import { Proyectos } from "./Componentes/Proyectos";
import { Contacto } from "./Componentes/Contacto";



function App() {

  const [habilidades] = useState ([

    {
      Foto: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
      Titulo: "Java"
    },
    {
      Foto:"https://1000marcas.net/wp-content/uploads/2020/11/JavaScript-logo.png",
      Titulo: "JavaScript"
    },
    {
      Foto : "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
      Titulo: "Csharp"
    },
    {
      Foto: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
      Titulo: "Css3"
    },
    {
      Foto: "https://w1.pngwing.com/pngs/696/924/png-transparent-html-logo-html5-badge-line-symbol-signage-thumbnail.png" ,
      Titulo: "Html5"
    },
    {
      Foto: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-1125-SQL_Server_2022_web_blade_image_RWWaqg:VP1-539x440?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1920&hei=600&qlt=100&fmt=png-alpha&fit=constrain",
      Titulo: "Sql Server (Basico)"
    },
    {
      Foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      Titulo: "React"
    },
    {
      Foto: "https://economia3.com/wp-content/uploads/2022/09/metodologias-agiles.jpg",
      Titulo: "Metodologia Agile"
    }

  ])
 
  const [hobbies] = useState([

    {
      Foto: "https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg",
      Titulo: "Programar"
    },
    {
      Foto: "https://a.espncdn.com/photo/2023/0602/r1181443_1296x729_16-9.jpg",
      Titulo: "Baloncesto"
    },
    {
      Foto: "https://c8.alamy.com/compes/2pycdyb/controlador-de-videojuegos-neon-juegos-fondo-2pycdyb.jpg",
      Titulo: "VideoJuegos"
    },
    {
      Foto: "https://img.freepik.com/foto-gratis/guitarra-acuarela-abstracta-explotando-movimiento-colorido-generado-ia_188544-19725.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=sph",
      Titulo: "Musica"
    },
    {
      Foto: "https://d500.epimg.net/cincodias/imagenes/2019/03/04/lifestyle/1551720416_363709_1551720696_noticia_normal.jpg",
      Titulo: "Filmacion de videos"
    },
    {
      Foto: "https://img.asmedia.epimg.net/resizer/yvEcVCvO4GRDnITwkoMpHiQBy18=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/PRNSA4H2SRPLNH6GV6TVWKAT7Q.jpg",
      Titulo: "Anime"
    },
  ])

  const [formacion] = useState ([
    {
      Foto: "https://www.uapa.edu.do/wp-content/uploads/2022/06/Logo-azul-UAPA.png",
      Descripcion: "Universidad Abierta para Adultos"
    },
    {
      Foto: "https://www.oracle.com/a/ocom/img/vd03-next-education.jpg",
      Descripcion: "Programa ONE-Alura Latam"
    },
    {
      Foto: "https://images4.alphacoders.com/933/933158.jpg",
      Descripcion: "Curso Avanzado Escanor"
    },
    {
      Foto: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
      Descripcion: "Youtube"
    },
  ])

  const [proyectos] = useState([
    {
      Nombre: "Sistema de Inventario y facturación",
      Descripcion: "Este es un sistema de inventario y facturación desarrollado con Java y SQL Server. Permite gestionar productos, proveedores, ventas y facturas.",
      Imagen: process.env.PUBLIC_URL + '/facturacion.jpg' ,
      URL: ""
    },
    {
      Nombre: "Creación de Página Web de una Barbería",
      Descripcion: "Esta es una página web para una barbería, desarrollada con HTML, CSS y JavaScript. Incluye información sobre los servicios, precios y un formulario de contacto.",
      Imagen: process.env.PUBLIC_URL +"/barberia_rube.png",
      URL: ""
    },
    {
      Nombre: "Formulario Org",
      Descripcion: "En este formulario se puede agregar tanto miembros nuevos asi como tambien equipos con una estructura amigable",
      Imagen: process.env.PUBLIC_URL + "/Org.png",
      URL: "https://org-mu-two.vercel.app/"
    },
    {
      Nombre: "Cartera Online",
      Descripcion: "Es una Cartera online la cual te ayuda a organizar tus gastos, ademas de que cambia de fondo claro a oscuro",
      Imagen: process.env.PUBLIC_URL + "/cartera.png",
      URL: "https://cartera-online.vercel.app/"
    },
    {
      Nombre:"Resgistro Basico",
      Descripcion: "Este Resgistro es mas sencillo pero cumple requisitos importantes",
      Imagen: process.env.PUBLIC_URL + "/resgistro.png",
      URL: "https://react-formulario-xi.vercel.app/"
    },
    {
      Nombre: "Calculadora Web",
      Descripcion: "Una calculadora hecha con React",
      Imagen: process.env.PUBLIC_URL + "calculadora.png",
      URL: "https://calculadora-henna-five.vercel.app/"
    },
    {
      Nombre: "Blog de Notas",
      Descripcion: "Es un Blog de notas basico, mejorado",
      Imagen: process.env.PUBLIC_URL + "Blog.png",
      URL: "https://blog-notas.vercel.app/"
    }
  ])


  const tituloformacion = "Formacion";
  const titulohobbies = "Hobbies";
  const tituloHabilidades = "Habilidades";
  const tituloProyectos = "Proyectos";
  const tituloContacto = "Contactos"

  return (
    <>
    <Barra />
    <Banner />
   <RedesSociales />
   <Titulo titulo={tituloHabilidades} />
   {
    habilidades.map((habi) => <Habilidades datos={habi}
    key={habi.Titulo}
    />
    )
   }

   <Titulo titulo={titulohobbies} />
   {
    hobbies.map((hobb) => <Pasatiempos datos={hobb}
    key={hobb.Titulo}
    />
    )
   }
      <Titulo titulo={tituloformacion}/>
   {
      formacion.map((form) => <Formacion datos={form}
      key={form.Descripcion}
      />
      )
   }

      <Titulo titulo={tituloProyectos}/>
   {
    proyectos.map((pro)=> <Proyectos datos={pro}
    key={pro.Nombre}
    />
    )
   }

    <Titulo titulo={tituloContacto} />
    <Contacto />
    </>
  )
}

export default App;
