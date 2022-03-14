import TabelaViagemCl from '../cliente/TabelaViagemCl';

function ComprasCliente() {

    return (
        <div className="row justify-content-center my-4 text-center text-break">
            <div className="col-10 colorBlue rounded py-3 text-center text-break">
                <h1 className="mb-3">Minhas Viagens</h1>
                <div className="row mx-auto">
                    <TabelaViagemCl/>
                </div>
            </div>
        </div >
    )

}

export default ComprasCliente