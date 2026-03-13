// Componente que se encarga de mostrar un gif individual.
import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

function Gif({title, url, id}){ // Recibe las propiedades title, url e id del gif que se va a mostrar.
    return(
        <div className='Gif'>
            
            <Link to={`/gif/${id}`} className='Gif-link'> 
                <h4>{title}</h4>
                <img loading='lazy' alt={title} src={url}/>
            </Link>
        </div>
    )
}

export default React.memo(Gif, (prevProps, nextProps) => {
  console.log(prevProps, nextProps);
  return false;
}); // React.memo se utiliza para evitar que el componente se vuelva a renderizar si las propiedades no han cambiado.