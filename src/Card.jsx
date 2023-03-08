import React from "react"

function Card({lector, libro}){
    return (
        <div>Bienvenido/a {lector}! Ahora que sabemos que tu libro favorito es {libro}, enviaremos sugerencias al email registrado</div>
    )
}

export default Card