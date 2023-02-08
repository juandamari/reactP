import React from "react";


export function LoadingPage(){
    return(
        <section>
            <div>
                <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
            </div>
            <div>
                <h1 className="uppercase font-bold ">¡Cargando los datos!</h1>
            </div>
        </section>
    )
}