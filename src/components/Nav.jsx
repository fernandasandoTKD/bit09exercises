import React from "react";
import {BrowserRouter, Router, Routes, Route, Link} from 'react-router-dom';
import { Inicio } from './Inicio';
import { Ejercicios } from './Ejercicios';

export const Nav =() =>{
    
    return(
        <BrowserRouter>
            <nav>
                <Link to="/">
                Inicio
                </Link>
                <Link to="/ejercicios">
                Ejercicios
                </Link>
            </nav>
            <Routes>
              <Route path='/' element= {<Inicio/>}></Route>
              <Route path='/ejercicios' element= {<Ejercicios/>}></Route>
            </Routes>
      
      </BrowserRouter>
        
    )
}


