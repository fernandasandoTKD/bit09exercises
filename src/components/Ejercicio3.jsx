import React, { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

export const Ejercicio3 =() =>{

    const [api, setApi]=useState([]);
    const [rows, setRows] = useState(null);
    const [loading, setLonading]=useState(false);

    useEffect(()=>{
        llamadoApi()  /* Etapa de monataje, para que se haga el llamado una sola vez */
    }, [])

    useEffect(()=>{
        if(api){
        getRows()
        setTimeout(()=>{
            setLonading(false)
        },3000)
        }
    },[api])/* En su arreglo de depencias, quiero que este atento a lo que contiene.  */

    const llamadoApi = async () =>{             
        const datos = await fetch ('https://jsonplaceholder.typicode.com/users');
        const usuarios=  await datos.json();
        setApi(usuarios)
    }

    const getRows= ()=>{
        const arr = api.map((item)=>
            <tr key={item.id}>

                    <td >{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
            </tr>
        )
        setRows(arr)
    }
    return(
        <>
        <div className="container">
        <h1>Directorio telefónico</h1> <br />
        {/* <ul>
            {
                api.map(item=>(
                    <li key={item.id}>{item.name}--{item.phone}</li>
                ))
            }
        </ul> */}

            {rows && 
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
            </Table>}
            

        </div>
        
        
        </>
    )
    
}

