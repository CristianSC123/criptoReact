import { useParams } from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistorial from "./info/CriptoHistorial"

const CriptoPage = () => {

    const params = useParams()

    const [info, cargandoInfo] = usePetition(`assets/${params.id}`)
    const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    
    if(cargandoInfo || cargandoHistory) return <span>Cargando...</span>

    return (
        <div className="cripto-page-container">
            {info && <CriptoInfo info={info} />}
            {history && <CriptoHistorial history={history} />}
        </div>
    )
}

export default CriptoPage