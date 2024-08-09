import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"
import "./img/btc.png"

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [cargando, setCargando] = useState(false)

    const [error, setError] = useState()

    const submit = (e) => {
        e.preventDefault()
        setCargando(true)
        setError(null)
        axios.post('https://reqres.in/api/login', user)
            .then(data => {
                setCargando(true)
                localStorage.setItem("tokenEDmarket", data.data.token)
                navigation('/')
            })
            .catch(e => {
                setCargando(false)
                setError(e.response.data.error)
                console.error(e)
            })
    }

    if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />

    return (
        <div className="login-container">
            <h1>Iniciar Sesion</h1>
            <div className="cripto-logo">
                <img src="/src/img/btc.png" alt="cripto" />
            </div>
            <div className="field-container">
                <form onSubmit={submit} >
                    <div className="field">
                        <label htmlFor="email">Correo electrónico</label>
                        <input onChange={(e) => {
                            setUser({ ...user, email: e.target.value })
                        }} type="email" name="imail" required />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Contraseña</label>
                        <input onChange={(e) => {
                            setUser({ ...user, password: e.target.value })
                        }} type="password" name="password" required />
                    </div>
                    <div className="submit">
                        <input type="submit" value={cargando ? "cargando...": "Ingresar"} className="link" />
                    </div>
                </form>
                {
                
                error &&  <span className="error">Error: {error}</span>
                }
            </div>
        </div>
    )
}

export default Login