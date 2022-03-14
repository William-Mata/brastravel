import React, { useEffect, useState } from 'react';
import { obterContato, alterarContato, excluirContato } from "../../net/services/contato-service"

function FormContatoAdm({ id, title }) {

    const [nome, setNome] = useState()
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [oldContato, setOldContato] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (id !== null && title !== "") {
            obterContato(id).then((result) => {
                setOldContato(result);
                setNome(oldContato.nome);
                setEmail(oldContato.email);
                setMensagem(oldContato.mensagem);
                setReady(title === "Apagar Contato" ? true : false);
            })
        }
    }, [id, oldContato.nome, oldContato.email, oldContato.mensagem, title])



    const handleClick = (e) => {
        e.preventDefault()
        if (title === "Alterar Contato") {
            if (nome !== '' && email !== '' && mensagem !== '' && id !== undefined) {
                const newContato = { nome, email, mensagem }
                alterarContato(id, newContato).then(window.location.reload());
            }
        } else if (title === "Apagar Contato") {
            if (id !== undefined) {
                excluirContato(id).then(window.location.reload());
            }
        }
    }

    return (
        <form>
            <div className="row m-3">
                <div className="col-12 col-sm-12 col-md-5 col-lg-5 mx-auto">
                    <div className="form-group mb-3">
                        <div className="row">
                            <div className="col-3 col-sm-3 col-md-4 col-lg-3 border border-1 border-warning rounded ">
                                <label className="control-label text-white mt-1">
                                    Nome:
                                </label>
                            </div>
                            <div className="col-9 col-sm-9 col-md-8 col-lg-9 ">
                                <input className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setNome(e.target.value)} defaultValue={oldContato.nome} readOnly={ready} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="row">
                            <div className="col-2 col-sm-2 col-md-4 col-lg-3 border border-1 border-warning rounded ">
                                <label className="control-label text-white mt-1">Email: </label>
                            </div>
                            <div className="col-10 col-sm-10 col-md-8 col-lg-9 ">
                                <input className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setEmail(e.target.value)} defaultValue={oldContato.email} readOnly={ready} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-5 col-lg-5 mx-auto">
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
                                <textarea className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setMensagem(e.target.value)} defaultValue={oldContato.mensagem} rows="5" readOnly={ready}></textarea>
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
                    <button type="submit" data-bs-save="modal" onClick={handleClick} className="btn btn-outline-warning text-white">{title && (
                        title.substr(0, title.indexOf(" "))
                    )}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormContatoAdm