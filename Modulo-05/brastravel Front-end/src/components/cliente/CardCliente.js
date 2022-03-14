import React, { useState, useEffect } from "react";
import { isLoger } from "../../net/services/user-service";
import { buscarClienteByUser } from "../../net/services/cliente-service";
import ModalCliente from "./ModalCliente";

function CardCliente() {

    const [cliente, setCliente] = useState();
    const [id, setId] = useState();
    const [titulo, setTitulo] = useState();

    useEffect(() => {
        if (cliente === undefined) {
            async function fetchData() {
                const user = isLoger();
                if (user.id !== null && user.roles.includes("ROLE_CLIENTE")) {
                    setCliente(await buscarClienteByUser(user.id));
                }
            }
            fetchData();
        }
    }, [cliente]);


    function callModal(id, title) {
        setId(id);
        setTitulo(title)
    }
    return (

        <div className="row justify-content-center text-break text-center rounded py-3" >

            <ModalCliente id={id} titulo={titulo} />


            <h1>Dados do Pessoais</h1>
            <div className="col-7">
                <div className="card p-0 bg-success rounded">
                    {cliente && (
                        <>
                            <img className="card-img-top img-img-fluid my-2" src="/img/adicionar-usuario.png" alt="Imagem de capa do card" />
                            <div className="card-body bg-warning text-start">
                                <h5 className="card-title text-center">{cliente.nome.toUpperCase()}</h5>
                                <p className="card-text m-0">Data de Nascimento: {new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }).format(Date.parse(cliente.data_nascimento.substr(0, 10)))}</p>
                                <p className="card-text m-0">CPF: {cliente.cpf}</p>
                                <p className="card-text">Celular: {cliente.telefone}</p>
                            </div>
                            <div className="card-body colorBlue">
                                <button type="button" className="btn btn-sm colorPadrao btn-outline-warning mx-3 w-25" onClick={(e) => { callModal(cliente.id, "Alterar Dados") }} data-bs-toggle="modal" data-bs-target="#ModalCl">
                                    <img src="/img/edit.png" alt="edit" className="w-75 h-75 my-auto" />
                                </button>

                                <button type="button" className="btn btn-sm colorPadrao btn-outline-warning mx-3 w-25" onClick={(e) => { callModal(cliente.id, "Apagar Dados") }} data-bs-toggle="modal" data-bs-target="#ModalCl" >
                                    <img src="/img/delete.png" alt="delete" className="w-75 h-75 my-auto" />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );

}

export default CardCliente