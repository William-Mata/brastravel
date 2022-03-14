import React, { useEffect, useState } from 'react';
import { buscarCliente } from '../../net/services/cliente-service';
import { alterarViagem, excluirViagem, obterViagem } from "../../net/services/viagem-service"

function FormViagemAdm({ idV, idC, title }) {

    const [origem, setOrigem] = useState('')
    const [destino, setDestino] = useState('')
    const [valor, setValor] = useState('')
    const [data_ida, setDataIda] = useState('')
    const [data_volta, setDataVolta] = useState('')
    const [idViagem, setIdViagem] = useState()
    const [cliente, setCliente] = useState();
    const [viagem, setViagem] = useState();
    const [ready, setReady] = useState(false);
    const [stop, setStop] = useState(0);



    useEffect(() => {
        setReady(title === "Apagar Viagem" ? true : false);
        if (stop === 0) {
            async function fetchData() {
                const cli = await buscarCliente(idC);
                const via = await obterViagem(idV);
                setCliente(cli);
                setViagem(via);
            }
            fetchData();
            if (viagem !== undefined) {
                setStop(1);
                setIdViagem(viagem.id);
                setOrigem(viagem.origem);
                setDestino(viagem.destino);
                setValor(viagem.valor);
                setDataIda(viagem.data_ida);
                setDataVolta(viagem.data_volta);
            }
        }
    }, [viagem, idC, idV, idViagem, stop, title])



    const handleClick = (e) => {
        e.preventDefault()
        if (title === "Alterar Viagem") {
            if (idViagem !== '' &&  origem  !== '' && destino !== '' && valor !== '' && data_ida !== ''){
                alterarViagem(idViagem, origem, destino, valor, data_ida, data_volta).then(window.location.reload());
            }
        } else if (title === "Apagar Viagem") {
            excluirViagem(idViagem).then(window.location.reload());
        }
    }

    return (

        <form>
            {cliente && (
                <>
                    <div className="row m-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Nome: </label>
                                </div>
                                <div className="col-9 col-sm-9 col-md-9 col-lg-9 ">
                                    <input className="form-control text-white bg-transparent btn-outline-warning" defaultValue={cliente.nome} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-4 col-lg-6 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Data de Nascimento:</label>
                                </div>
                                <div className="col-4 col-sm-4 col-md-4 col-lg-6">
                                    <input className="form-control text-white bg-transparent btn-outline-warning" value={cliente.data_nascimento.substr(0, 10)} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">CPF:</label>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                    <input className="form-control text-white bg-transparent btn-outline-warning" value={cliente.cpf} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Valor:</label>
                                </div>
                                <div className="col-5 col-sm-5 col-md-5 col-lg-5 ">
                                    <input className="form-control text-white bg-transparent btn-outline-warning" value={valor} onChange={(e) => setValor(e.target.value)} readOnly={ready} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Destino:</label>
                                </div>
                                <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                                    <input className="form-control text-white bg-transparent btn-outline-warning" value={destino} onChange={(e) => setDestino(e.target.value)} readOnly={ready} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Origem:</label>
                                </div>
                                <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                                    <input className="form-control text-white bg-transparent btn-outline-warning" value={origem} onChange={(e) => setOrigem(e.target.value)} readOnly={ready} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4 col-sm-4 col-md-4 col-lg-4 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Data Ida:</label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                                    <input type="date" className="form-control text-white bg-transparent btn-outline-warning" defaultValue={data_ida.substring(0, 10)} onChange={(e) => setDataIda(e.target.value)} readOnly={ready} />
                                </div>
                            </div>
                            {data_volta && (
                                <div className="row mb-3">
                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 border border-1 border-warning rounded ">
                                        <label className="control-label text-white mt-1">Data Volta:</label>
                                    </div>
                                    <div className="col-8 col-sm-8 col-md-8 col-lg-8">
                                        <input type="date" className="form-control text-white bg-transparent btn-outline-warning" defaultValue={data_volta.substring(0, 10)} onChange={(e) => setDataVolta(e.target.value)} readOnly={ready} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-warning text-white"
                            data-bs-dismiss="modal">
                            Sair
                        </button>
                        <button type="submit" data-bs-save="modal" className="btn btn-outline-warning text-white" onClick={handleClick}>{title && (
                            title.substr(0, title.indexOf(" "))
                        )}</button>
                    </div>
                </>
            )}
        </form>
    )
}

export default FormViagemAdm