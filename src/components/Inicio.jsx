import React from "react";
import Figure from 'react-bootstrap/Figure';
import me from './img/me.png'

export const Inicio = () =>{
    return (
        <>
        <section className="d-flex flex-colum justify-center  ">
        
            <Figure className="text-center bg-dark rounded mx-auto d-block mt-2">
            <Figure.Image
                    roundedCircle
                    width={300}
                    height={291}
                    alt="171x180"
                    src={me}
                />
                <Figure.Caption>
                LUISA DÍAZ SANDOVAL
                </Figure.Caption>
            </Figure>
        </section>
        
        </>
        
        
    )

}