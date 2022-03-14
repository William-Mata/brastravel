import React, { useState, useEffect } from 'react';
import { buscarClienteByUser } from "../../net/services/cliente-service"
import { isLoger } from '../../net/services/user-service';
import { useNavigate } from 'react-router-dom';
import { excluirViagem, obterViagem } from '../../net/services/viagem-service';



function FormViagem({title, idV}) {

    const [user, setUser] = useState();
    const [cliente, setCliente] = useState();
    const [viagem, setViagem] = useState();

    // const [id, setId] = useState();
    // const [origem, setOrigem] = useState('')
    // const [destino, setDestino] = useState()
    // const [valor, setValor] = useState('')
    // const [data_ida, setDataIda] = useState('')
    // const [data_volta, setDataVolta] = useState('')
    const [validacao, setValidacao] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if ((title !== "") && (idV !== "")) {
            if (viagem === undefined) {
                async function fetchData() {
                    const recebe = await isLoger();
                    setUser(recebe);
                    const cliente = await buscarClienteByUser(recebe.id);
                    setCliente(cliente);
                    const viage = await obterViagem(idV); 
                    setViagem(viage);
                }
                fetchData();
            }
        }
    }, [viagem, idV, title, user])


    const handleClick = (e) => {
        e.preventDefault();
        if (user.roles.includes("ROLE_CLIENTE")) {
            console.log(title)
            if (title === "Cancelar Viagem" && viagem.id !== null) {
                excluirViagem(viagem.id).then(() => {
                    navigate("/ComprasCliente");
                    window.location.reload();
                }, (error) => {
                    const msgErro = (error.response &&
                        error.response.data && error.response.data.message) || error.message || error.toString();
                    setValidacao(msgErro);
                });
            } else if (title === "Alterar Viagem") {
                // if (origem !== '' && destino !== '' && valor !== '' && data_ida !== '' && data_volta !== '') {
                //     document.getElementById("campos").innerHTML = "";
                //     comprarViagem(id, origem, destino, valor, data_ida, data_volta).then(() => {
                //         navigate("/ComprasCliente");
                //         window.location.reload();
                //     }, (error) => {
                //         const msgErro = (error.response &&
                //             error.response.data && error.response.data.message) || error.message || error.toString();
                //         setValidacao(msgErro);
                //     });
                // } else {
                //     document.getElementById("campos").innerHTML = "Preencha todos os campos.";
                // }
            }
        }

    }
    return (

        <form>
            <span id="campos" className="mb-3"> </span>
            {validacao && (
                <span>
                    {validacao}
                </span>
            )}
            {viagem && (
                <>
                    <div className="row m-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Nome: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" value={cliente.nome} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4 col-sm-4 col-md-4 col-lg-6 border border-1 border-warning rounded ">
                                    <label className="control-label mt-1">Data de Nascimento:</label>
                                </div>
                                <div className="col-5 col-sm-5 col-md-4 col-lg-6">
                                    <input type="date" className="form-control bg-transparent btn-outline-warning text-white" id="data" value={cliente.data_nascimento.substr(0, 10)} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">CPF: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" value={cliente.cpf} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Celular: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" value={cliente.telefone} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Valor: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" id="Valor" value={viagem.valor} readOnly={true} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Destino: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" value={viagem.destino} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Origem: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" value={viagem.origem} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Data Ida: </label>
                                </div>
                                <div className="col-7 col-sm-7 col-md-7 col-lg-7 m-0">
                                    <input type="date" className="form-control text-white bg-transparent btn-outline-warning" value={viagem.data_ida.substr(0, 10)} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3" id="volta">
                                <div className="col-4 col-sm-4 col-md-4 col-lg-4 border border-1 border-warning rounded">
                                    <label className="control-label text-white mt-1">Data Volta: </label>
                                </div>
                                <div className="col-7 col-sm-7 col-md-7 col-lg-7 m-0">
                                    <input type="date" className="form-control text-white bg-transparent btn-outline-warning" value={viagem.data_volta.substr(0, 10)} readOnly={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer px-0 py-2">
                        <div className="form-group">
                            <button type="button" className="btn btn-outline-warning text-white me-2"
                                data-bs-dismiss="modal">
                                Sair
                            </button>
                            <input type="submit" value="Cancelar Viagem" onClick={handleClick} className="btn btn-outline-warning text-white" data-bs-dismiss="modal" />
                        </div>
                    </div>
                </>
            )
            }
        </form >
    )
}
export default FormViagem


