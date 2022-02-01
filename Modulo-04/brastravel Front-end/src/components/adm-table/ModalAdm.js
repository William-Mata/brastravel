import React, { useEffect, useState } from 'react';

function ModalAdm({id, title}){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [oldContato, setOldContato] = useState([]);
    const url = "http://localhost:8080/contato/" + id;

    useEffect(() => {
        if ((id !== 0) && (id !== null)) {
            fetch(url)
                .then(res2 => res2.json())
                .then((result) => {
                    setOldContato(result);
                }
                )
        }
        setNome(oldContato.nome);
        setEmail(oldContato.email);
        setMensagem(oldContato.mensagem);
    }, [id, oldContato.nome, oldContato.email, oldContato.mensagem, url])



    const handleClick = (e) => {
        e.preventDefault()
        const newContato = { nome, email, mensagem }

        if(title === "Alterar"){
            fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newContato)
            }).then(() => {
                window.location.reload();
                console.log("Contato Alterado!")
            })
        }else if(title === "Apagar"){
            fetch(url, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify()
            }).then(() => {
                window.location.reload();
                console.log("Contato Apagado!")
            })
        }
    }
    
    return(

        <div className="modal fade bg-transparent" id="ModalC">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content colorBlue">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editarModalLabel">{title} Mensagem</h5>
                            <button type="button" className="btn-close btn-outline-warning bg-warning" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body m-0 p-0 justify-content-center align-content-center">
                            <form className="m-0 p-0 py-3">
                                <div className="row justify-content-center">
                                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 mx-auto">
                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                                    <label className="control-label text-white mt-1">
                                                        Nome:
                                                    </label>
                                                </div>
                                                <div className="col-9 col-sm-9 col-md-9 col-lg-9 ">
                                                    <input className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setNome(e.target.value)} defaultValue={oldContato.nome} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <div className="col-2 col-sm-2 col-md-2 col-lg-2 border border-1 border-warning rounded ">
                                                    <label className="control-label text-white mt-1">Email: </label>
                                                </div>
                                                <div className="col-10 col-sm-10 col-md-10 col-lg-10 ">
                                                    <input className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setEmail(e.target.value)} defaultValue={oldContato.email} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-5 col-sm-5 col-md-5 col-lg-5 mx-auto">
                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <div className="col border border-1 border-warning rounded ">
                                                    <label className="control-label text-white mt-1">Mensagem: </label>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="form-group mb-3">
                                            <div className="row">
                                                <div className="col p-0 m-0">
                                                    <textarea className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setMensagem(e.target.value)} defaultValue={oldContato.mensagem} rows="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-warning text-white"
                                            data-bs-dismiss="modal">
                                            Sair
                                        </button>
                                        <button type="submit" data-bs-save="modal" onClick={handleClick} className="btn btn-outline-warning text-white">{title}</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ModalAdm