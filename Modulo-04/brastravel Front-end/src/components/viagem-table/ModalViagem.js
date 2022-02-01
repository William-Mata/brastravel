import React, { useEffect, useState } from 'react';

function ModalViagem({ idCliente, title }) {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [cpf, setCpf] = useState('')
    const [id, setIdViagem] = useState(Number)
    const [origem, setOrigem] = useState('')
    const [destino, setDestino] = useState('')
    const [valor, setValor] = useState('')
    const [data_ida, setDataIda] = useState('')
    const [data_volta, setDataVolta] = useState('')
    const [oldCliente, setOldCliente] = useState({viagem:{}});
    const url = "http://localhost:8080/cliente/" + idCliente;


    useEffect(() => {
        if ((idCliente !== 0) && (idCliente !== null)) {
            fetch(url)
                .then(res2 => res2.json())
                .then((result) => {
                    setOldCliente(result);
                    setNome(oldCliente.nome);
                    setIdade(oldCliente.idade);
                    setCpf(oldCliente.cpf);
                    setIdViagem(oldCliente.viagem.id);
                    setOrigem(oldCliente.viagem.origem);
                    setDestino(oldCliente.viagem.destino);
                    setValor(oldCliente.viagem.valor);
                    setDataIda(oldCliente.viagem.data_ida);
                    setDataVolta(oldCliente.viagem.data_volta);
                }
                )

        }

    }, [idCliente, oldCliente.cpf, oldCliente.data_ida, oldCliente.data_volta, oldCliente.destino, oldCliente.idade, oldCliente.nome, oldCliente.origem, oldCliente.valor, oldCliente.viagem.data_ida, oldCliente.viagem.data_volta, oldCliente.viagem.destino, oldCliente.viagem.id, oldCliente.viagem.origem, oldCliente.viagem.valor, url])



    const handleClick = (e) => {
        e.preventDefault()
        const newCliente = { nome, idade, cpf, viagem:{id ,origem, destino, valor, data_ida, data_volta} }

        if (title === "Alterar") {
            fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCliente)
            }).then(() => {
                window.location.reload();
                console.log("Viagem Alterada!")
            })
        } else if (title === "Apagar") {
            fetch(url, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify()
            }).then(() => {
                window.location.reload();
                console.log("Viagem Cancelada!")
            })
        }
    }

    return (
        <div className="modal fade bg-transparent" id="ModalV">
            <div className="modal-dialog modal-dialog-centered modal-lg ">
                <div className="modal-content colorBlue">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editarModalLabel">{title} Viagem</h5>
                        <button type="button" className="btn-close btn-outline-warning bg-warning" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body m-0 p-0 justify-content-center align-content-center">
                        <form className="m-0 p-0 py-3">
                            <div className="row">
                                <div className="col-5 col-sm-5 col-md-5 col-lg-5 mx-auto">
                                    <div className="row mb-3">
                                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                            <label className="control-label text-white mt-1">Nome: </label>
                                        </div>
                                        <div className="col-9 col-sm-9 col-md-9 col-lg-9 ">
                                            <input className="form-control text-white bg-transparent btn-outline-warning" defaultValue={oldCliente.nome} onChange={(e) =>  setNome(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                            <label className="control-label text-white mt-1">Idade:</label>
                                        </div>
                                        <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                                            <input className="form-control text-white bg-transparent btn-outline-warning" defaultValue={oldCliente.idade} onChange={(e) => setIdade(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                            <label className="control-label text-white mt-1">CPF:</label>
                                        </div>
                                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                            <input className="form-control text-white bg-transparent btn-outline-warning" defaultValue={oldCliente.cpf} onChange={(e) => setCpf(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                            <label className="control-label text-white mt-1">Valor:</label>
                                        </div>
                                        <div className="col-5 col-sm-5 col-md-5 col-lg-5 ">
                                            <input className="form-control text-white bg-transparent btn-outline-warning" defaultValue={oldCliente.viagem.valor} onChange={(e) =>  setValor(e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-5 col-sm-5 col-md-5 col-lg-5 mx-auto">
                                    <div className="row mb-3">
                                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                            <label className="control-label text-white mt-1">Destino:</label>
                                        </div>
                                        <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                                            <input className="form-control text-white bg-transparent btn-outline-warning" defaultValue={oldCliente.viagem.destino} onChange={(e) => setDestino(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-3 border border-1 border-warning rounded ">
                                            <label className="control-label text-white mt-1">Origem:</label>
                                        </div>
                                        <div className="col">
                                            <input className="form-control text-white bg-transparent btn-outline-warning" defaultValue={oldCliente.viagem.origem} onChange={(e) => setOrigem(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 border border-1 border-warning rounded ">
                                            <label className="control-label text-white mt-1">Data Ida:</label>
                                        </div>
                                        <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                                            <input type="date" className="form-control text-white bg-transparent btn-outline-warning" defaultValue={oldCliente.viagem.data_ida} onChange={(e) => setDataIda(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 border border-1 border-warning rounded ">
                                            <label className="control-label text-white mt-1">Data Volta:</label>
                                        </div>
                                        <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                                            <input type="date" className="form-control text-white bg-transparent btn-outline-warning" defaultValue={oldCliente.viagem.data_volta} onChange={(e) => setDataVolta(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-warning text-white"
                                    data-bs-dismiss="modal">
                                    Sair
                                </button>
                                <button type="submit" data-bs-save="modal" className="btn btn-outline-warning text-white" onClick={handleClick}>{title}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalViagem