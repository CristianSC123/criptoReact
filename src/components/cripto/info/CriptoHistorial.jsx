const CriptoHistorial = ({history}) => {
    return (
        <div className="history">
            <table>
                <thead>
                    <th>Fecha</th>
                    <th>Precio</th>
                </thead>
                <tbody>
                    {history.map(({ date, priceUsd, time }) => (
                        <tr key={time}>
                            <td className="label">{new Date(date).toDateString()}</td>
                            <td className="price">{parseFloat(priceUsd).toFixed(3)} $</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CriptoHistorial