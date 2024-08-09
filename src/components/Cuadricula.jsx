import usePetition from "../hooks/usePetition"
import "./Cuadricula.css"
import Cripto from './cripto/Cripto'

function Cuadricula() {
  const [criptos, cargandoCriptos] = usePetition("assets")

  if (!criptos) return <span>Cargando...</span>

  return (
    <div className='app-container'>
      <h1 className='title'>Lista de criptomonedas</h1>
      <div className='cripto-container'>
        {criptos.map(({ name, priceUsd, id, symbol, changePercent24Hr }) => (
          <Cripto key={id}
            name={name}
            priceUsd={priceUsd}
            symbol={symbol}
            changePercent24Hr={changePercent24Hr}
            id={id}
          ></Cripto>
        ))}
      </div>
    </div>
  )
}

export default Cuadricula
