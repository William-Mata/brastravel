import FormCliente from "./FormCliente"
import FormViagem from "./FormViagem"


function ModalCliente({ id, titulo }) {


    return (

        <div className="modal fade bg -transparent" id="ModalCl">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content colorBlue">
                    <div className="modal-header">
                        <h4 className="modal-title" id="editarModalLabel">{titulo}</h4>
                        <button type="button" className="btn colorPadrao btn-outline-warning text-white" data-bs-dismiss="modal"
                            aria-label="Close">X</button>
                    </div>
                    <div className="modal-body justify-content-center align-content-center mx-2">
                        {id && (titulo === "Alterar Dados" || titulo === "Apagar Dados") && (
                            <FormCliente id={id} titulo={titulo}/>
                        )}

                        {id && titulo === "Cancelar Viagem" &&(
                            <FormViagem idV={id} title={titulo}/>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCliente