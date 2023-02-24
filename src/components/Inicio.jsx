import React from "react";
import Figure from 'react-bootstrap/Figure';

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
                    src="src\img/me.png"
                />
                <Figure.Caption>
                LUISA DÍAZ SANDOVAL
                </Figure.Caption>
            </Figure>
        </section>
        
        </>
        
        
    )

}