const CriptoInfo = ({info}) => {
    return (
        <div className="info">
            <div className="main-info">
                <span>Ranking : {info.rank}</span>
                <h1>{info.name}</h1>
                <span className="symbol">{info.symbol}</span>
            </div>
            <div className="details">
                <ul>
                    <li className="detail">
                        <span className="label">Precio: </span>
                        <span>{parseFloat(info.priceUsd).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">MaxSupply: </span>
                        <span>{parseFloat(info.maxSupply).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Market Cap (USD): </span>
                        <span>{parseFloat(info.marketCapUsd).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Volumen (USD - 24Hrs.): </span>
                        <span>{parseFloat(info.volumeUsd24Hr).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Variación (24Hrs): </span>
                        <span>{parseFloat(info.changePercent24Hr).toFixed(3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Vwap 24 Hrs.: </span>
                        <span>{parseFloat(info.vwap24Hr).toFixed(3)}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CriptoInfo