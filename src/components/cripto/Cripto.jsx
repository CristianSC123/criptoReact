import { Link } from "react-router-dom"
import "./Cripto.css"
const Cripto = ({ id, name, priceUsd, symbol, changePercent24Hr }) => {
    return (
        <Link to={`/criptomonedas/${id}`} className="main-link">
            <div className="cripto">
                <h2>{name}</h2>
                <div className="info">
                    <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(3)} $</p>
                    <p><span className="label">Codigo: </span>{symbol}</p>
                    <p>
                        <span className="label">Varacion 24Hrs: </span>
                        <span className={parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"}>
                            {parseFloat(changePercent24Hr).toFixed(3)}%
                        </span>
                    </p>

                </div>
            </div>
        </Link>
    )
}

export default Cripto