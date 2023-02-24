import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Ejercicio1} from './Ejercicio1';
import {Ejercicio2} from './Ejercicio2';
import { Ejercicio3 } from './Ejercicio3';
import { useState } from 'react';


export const Ejercicios= () =>{

    //Esta función cambia el estado gracias al UseState
    const [exercise, setExercise]=useState (null); 
    return (
        
        <>

        {/* Importo los componentes de cada ejercicio */}
        <section>
        <h1 className="text-center">Ejercicios</h1>
        <div className='container'>
        <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item onClick={()=> setExercise (<Ejercicio1/>)}>
            Ejercicio 1
        </ListGroup.Item>
        <ListGroup.Item onClick={()=> setExercise (<Ejercicio2/>)}>
            Ejercicio 2
        </ListGroup.Item>
        <ListGroup.Item onClick={()=> setExercise (<Ejercicio3/>)}>
            Ejercicio 3
        </ListGroup.Item>
      
        </ListGroup>
            
        <div className="text-center">{exercise}</div>
        </div>
        
        </section>
        
        </>
        
       
    
        
        

    )

}