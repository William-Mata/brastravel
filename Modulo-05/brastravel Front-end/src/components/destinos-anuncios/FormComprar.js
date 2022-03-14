import React, { useState, useEffect } from 'react';
import { Check, Desconto } from "./CompraFuncao"
import { comprarViagem, buscarClienteByUser } from "../../net/services/cliente-service"
import { isLoger } from '../../net/services/user-service';
import { useNavigate } from 'react-router-dom';



function FormComprar({ idViagem, titulo, title, preco }) {

    const [user, setUser] = useState();
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [data_nascimento, setDataNascimento] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [origem, setOrigem] = useState('')
    const [destino, setDestino] = useState()
    const [valor, setValor] = useState('')
    const [data_ida, setDataIda] = useState('')
    const [data_volta, setDataVolta] = useState('')
    const [validacao, setValidacao] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if ((title !== "") && (preco !== "")) {
            setDestino(title);
            setValor(preco);
            if (user === undefined) {
                async function fetchData() {
                    const recebe = await isLoger();
                    setUser(recebe);
                    const cliente = await buscarClienteByUser(recebe.id);
                    setId(cliente.id);
                    setNome(cliente.nome);
                    setDataNascimento(cliente.data_nascimento.substr(0, 10));
                    setCpf(cliente.cpf);
                    setTelefone(cliente.telefone);
                }
                fetchData();
            }
        } 
    }, [preco, title, user])


    const handleClick = (e) => {
        e.preventDefault();
        if (user.roles.includes("ROLE_CLIENTE")) {
            if (origem !== '' && destino !== '' && valor !== '' && data_ida !== '') {
                document.getElementById("campos").innerHTML = "";
                comprarViagem(id, origem, destino, valor, data_ida, data_volta).then(() => {
                    navigate("/ComprasCliente");
                    window.location.reload();
                }, (error) => {
                    const msgErro = (error.response &&
                        error.response.data && error.response.data.message) || error.message || error.toString();
                    setValidacao(msgErro);
                });
            } else {
                document.getElementById("campos").innerHTML = "Preencha todos os campos.";
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
            {nome && (
                <>
                    <div className="row m-3">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Nome: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" value={nome} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4 col-sm-4 col-md-4 col-lg-6 border border-1 border-warning rounded ">
                                    <label className="control-label mt-1">Data de Nascimento:</label>
                                </div>
                                <div className="col-5 col-sm-5 col-md-4 col-lg-6">
                                    <input type="date" className="form-control bg-transparent btn-outline-warning text-white" id="data" defaultValue={data_nascimento} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">CPF: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" value={cpf} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Celular: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" value={telefone} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Valor: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" id="Valor" value={valor} onChange={(e) => setValor(e.target.value)} readOnly={true} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Destino: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" value={title} onChange={(e) => setDestino(e.target.value)} readOnly={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Origem: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setOrigem(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-4 col-sm-4 col-md-4 col-lg-4 py-1 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Ida e Volta</label>
                                </div>
                                <div className="col-7 col-sm-7 col-md-7 col-lg-3 py-1 m-0">
                                    <input type="checkbox" id="voltaCheck" onChange={Check} className="checkbox text-white bg-transparent btn-outline-warning" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Data Ida: </label>
                                </div>
                                <div className="col-7 col-sm-7 col-md-7 col-lg-7 m-0">
                                    <input type="date" className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setDataIda(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3" id="volta" style={{ display: 'none' }}>
                                <div className="col-4 col-sm-4 col-md-4 col-lg-4 border border-1 border-warning rounded">
                                    <label className="control-label text-white mt-1">Data Volta: </label>
                                </div>
                                <div className="col-7 col-sm-7 col-md-7 col-lg-7 m-0">
                                    <input type="date" className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setDataVolta(e.target.value)} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                                    <label className="control-label text-white mt-1">Cupom: </label>
                                </div>
                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" id="Cupom" />
                                </div>
                                <span className="text-warning m-0" id="AspCp"></span>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer  px-0 py-2">
                        <div className="form-group">
                            <button type="button" className="btn btn-outline-warning text-white me-2"
                                data-bs-dismiss="modal">
                                Sair
                            </button>
                            <button type="button" className="btn btn-outline-warning text-white me-2" onClick={Desconto}> Aplicar Desconto </button>
                            <button type="submit" onClick={handleClick} className="btn btn-outline-warning text-white">Comprar</button>
                        </div>
                    </div>
                </>
            )
            }
        </form >
    )
}


export default FormComprar


