import React from "react";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Figure from 'react-bootstrap/Figure';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';


export const Ejercicio2 = () =>{
    const [picture, setPicture]=useState(null);
    const [loading, setLonading]=useState(false);
    const [error, setError]=useState(false);

    const llamadoApi = async () =>{
        /* Await es esperar un momento */
        try{
            setLonading(true)
            const response= await fetch("https://random-d.uk/api/v2/random");
            setPicture(await response.json()); /* Cambio el método a picture */
        }catch (error){
            setError(true)
        }finally{
            /* Función para demorar más */
            setTimeout(()=>{
                setLonading(false)
            },3000)
            
        }
    }

    return (
        <>
        <h1 >Ejercicio Patos</h1>
        {/* Escucho el bóton con onclick */}
        {error ?  <Alert variant="success"><p>Ocurrió un error</p> </Alert>
        : loading
        ?<Spinner animation="border" variant="warning" /> 
        : picture &&  <Figure > <Figure.Image width={171}
        height={180}
        alt="171x180"
        src={picture.url}
      />
      <Figure.Caption>
        Patos randon
      </Figure.Caption>
    </Figure> }
        
    <Button variant="primary" onClick={llamadoApi} className="mb-12 mx-auto d-block">
            Mostrar imagen
    </Button>
        </>
        
    )
}