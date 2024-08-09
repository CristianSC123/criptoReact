import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
    return (
        <>
            <div className="home-container">
                <h1 className="title">Hola, bienvenido a EdMarket</h1>
                <p className="text">Conoce las 100 criptos mas utilizadas</p>
                <Link to="/criptomonedas" className="btn">Ver criptomonedas</Link>
            </div>
        </>
    )
}

export default Home