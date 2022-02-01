import FormComprar from "./FormComprar"


function ModalCompra({ title, preco }) {

    return (
        <div className="modal fade bg-transparent" id="exampleModal" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content colorBlue">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Comprar Passagens</h5>
                        <button type="button" className="btn-close btn-outline-warning bg-warning" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-0">
                        <FormComprar title={title} preco={preco} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCompra