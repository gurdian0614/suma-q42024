import UseSuma from "../hooks/UseSuma"

const Suma = () => {
    const {
        numero1,
        setNumero1,
        numero2,
        setNumero2,
        resultado,
        Sumar,
        Limpiar
    } = UseSuma()
    
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="fomr-label">Ingrese primer número:</label>
                    <input type="number" className="form-control" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="fomr-label">Ingrese segundo número:</label>
                    <input type="number" className="form-control" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 mb-3">
                    <label className="fomr-label">Resultado:</label>
                    <input type="number" className="form-control" value={resultado} readOnly />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-3 mb-3">
                    <button className="btn btn-success" onClick={Sumar}>Sumar</button>
                </div>
                <div className="col-3 mb-3">
                    <button className="btn btn-danger" onClick={Limpiar}>Limpiar</button>
                </div>
            </div>
        </div>
    )
}

export default Suma