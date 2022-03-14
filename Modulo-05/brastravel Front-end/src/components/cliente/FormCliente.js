/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';
import { alterarCliente, buscarCliente, cadastrarCliente, excluirCliente} from "../../net/services/cliente-service";
import { isLoger } from "../../net/services/user-service";
import { useNavigate } from "react-router-dom";



function FormCliente({ id, titulo }) {

    const [nome, setNome] = useState('')
    const [data_nascimento, setDataNascimento] = useState()
    const [cpf, setCPF] = useState(Number)
    const [telefone, setTelefone] = useState('')
    const [validacao, setValidacao] = useState();
    const [read, setRead] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        if (id !== undefined && titulo !== undefined) {
            async function fetchData() {
                const res = await buscarCliente(id);
                setRead(titulo === "Apagar Dados" ? true : false);
                setNome(res.nome);
                setDataNascimento(res.data_nascimento.substr(0, 10));
                setCPF(res.cpf);
                setTelefone(res.telefone);
            }
            fetchData();

        }
    }, [id, titulo]);




    const validarCadastro = async (e) => {
        e.preventDefault()
        setValidacao("");

        const userlogado = await isLoger();
        
        if (userlogado !== null && userlogado.roles.includes("ROLE_CLIENTE")) {
            if (id !== "" && titulo !== "Apagar Dados") {
                if (nome === '' || cpf === null || data_nascimento === null || telefone === '') {
                    document.getElementById("campos").innerHTML = "Preencha todos os campos."
                } else {
                    document.getElementById("campos").innerHTML = ""

                    const user =  userlogado.id
                    if (titulo === "Alterar Dados" && id !== "") {
                        alterarCliente(id, nome, telefone, data_nascimento, cpf).then(() => {
                            window.location.reload();

                        }, (error) => {
                            const msgErro = (error.response &&
                                error.response.data && error.response.data.message) || error.message || error.toString();
                            setValidacao(msgErro);
                        });

                    } else {
                        cadastrarCliente(nome, data_nascimento, telefone ,cpf, user).then(() => {
                            navigate("/");
                            window.location.reload();

                        }, (error) => {
                            const msgErro = (error.response &&
                                error.response.data && error.response.data.message) || error.message || error.toString();
                            setValidacao(msgErro);
                        });
                    }

                }
            } else if (id !== "" && titulo === "Apagar Dados") {
                excluirCliente(id).then(() => {
                    navigate("/");
                    window.location.reload();

                }, (error) => {
                    const msgErro = (error.response &&
                        error.response.data && error.response.data.message) || error.message || error.toString();
                    setValidacao(msgErro);
                });
            }
        } else {
            navigate("/");
            window.location.reload();
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
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                    <div asp-validation-summary="ModelOnly" className="text-danger"></div>
                    <div className="form-group mb-3">
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-3 border border-1 border-warning rounded">
                                <label className="control-label mt-1 text-center">
                                    Nome:
                                </label>
                            </div>
                            <div className="col-8 col-sm-8 col-md-8 col-lg-9">
                                <input type="text"
                                    className="form-control bg-transparent btn-outline-warning text-white" defaultValue={nome} onChange={(e) => setNome(e.target.value)} readOnly={read}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-6 border border-1 border-warning rounded ">
                                <label className="control-label mt-1">Data de Nascimento:</label>
                            </div>
                            <div className="col-5 col-sm-5 col-md-4 col-lg-6">
                                <input type="date" className="form-control bg-transparent btn-outline-warning text-white" id="data" defaultValue={data_nascimento} onChange={(e) => { setDataNascimento(e.target.value)}} readOnly={read}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mx-auto">
                <div className="form-group mb-3">
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-3 border border-1 border-warning rounded ">
                                <label className="control-label mt-1">CPF:</label>
                            </div>
                            <div className="col-8 col-sm-8 col-md-8 col-lg-9">
                                <input type="number" min="10000000000" max="99999999999"
                                    className="form-control bg-transparent btn-outline-warning text-white" value={cpf} onChange={(e) => setCPF(e.target.value)} readOnly={read}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="row">
                            <div className="col-4 col-sm-4 col-md-4 col-lg-3 border border-1 border-warning rounded ">
                                <label className="control-label mt-1">Telefone:</label>
                            </div>
                            <div className="col-8 col-sm-8 col-md-6 col-lg-9">
                                <input type="tel" className="form-control bg-transparent btn-outline-warning text-white" defaultValue={telefone} onChange={(e) => setTelefone(e.target.value)} readOnly={read}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group mt-3">
                <div className="row justify-content-center">
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <button className="btn w-100 btn-lg colorBlue btn-outline-warning text-white" onClick={validarCadastro}>
                            {titulo ? (
                                titulo.substr(0, titulo.indexOf(" "))
                            ):(
                               "Cadastrar"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default FormCliente