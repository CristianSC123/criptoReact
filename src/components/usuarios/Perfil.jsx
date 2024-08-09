import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import "./Perfil.css"

const Perfil = () => {

    const usuario = useContext(UserContext)


    return (
        <div className="user-main-container">
            <h1 className="user-title">Perfil de {usuario.first_name}</h1>
            <div className="info-container">
                <div className="user-img">
                    <img src={usuario.avatar} alt="Usuario Avatar" />
                </div>
                <div className="user-info">
                    <span className="info"><p>Email: {usuario.email}</p></span>
                    <span className="info"><p>Nombre: {usuario.first_name}</p></span>
                    <span className="info"><p>Apellido: {usuario.last_name}</p></span>
                </div>
                <div className="user-registered">
                    Usuario desde: 22/06/2022
                </div>
            </div>

        </div>
    )
}

export default Perfil