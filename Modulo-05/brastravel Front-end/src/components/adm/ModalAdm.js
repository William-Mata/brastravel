import FormContatoAdm from "./FormContatoAdm"
import FormViagemAdm from "./FormViagemAdm"

function ModalAdm({idV, idC, id, title }) {
    return (
        <div className="modal fade bg-transparent" id="ModalA">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content colorBlue">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editarModalLabel">{title}</h5>
                        <button type="button" className="btn-close btn-outline-warning bg-warning" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-0 justify-content-center align-content-center">
                        {id && (title === "Apagar Contato" || title === "Alterar Contato") && (
                            <FormContatoAdm id={id} title={title} />
                        )}
                        {idV && idC && (title === "Apagar Viagem" || title === "Alterar Viagem") && (
                            <FormViagemAdm idV={idV} idC={idC} title={title} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAdm