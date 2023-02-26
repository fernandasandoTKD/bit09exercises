import React, { useEffect, useState } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { GoDiffAdded} from 'react-icons/go';
import { RiRestartLine} from 'react-icons/ri';
import { IoMdRemoveCircleOutline} from 'react-icons/io';




export const Ejercicio1 = () =>{

    const [contador,setContador]=useState(0);
    const [color, setColor]=useState(null);

useEffect(()=>{
    if(contador >0) setColor('success');
    else if (contador< 0) setColor('warning');
    else setColor('secondary');
}, [contador]);

    return (
        <section>
            <h2>Contador: 
            <Badge bg={color}> {contador}
            </Badge>
            </h2>
            <Button variant="outline-dark" onClick={()=>setContador(contador - 1)}><GoDiffAdded/> </Button>
            
            <Button variant="outline-dark" onClick={()=>setContador(0)}><RiRestartLine/></Button>
            
            <Button variant='outline-dark' onClick={() => setContador(contador + 1)}>
            <IoMdRemoveCircleOutline/>
            </Button>
        </section>
    )
}