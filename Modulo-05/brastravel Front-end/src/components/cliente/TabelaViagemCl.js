/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { buscarClienteByUser } from "../../net/services/cliente-service";
import { isLoger } from "../../net/services/user-service";
import ModalCliente from "./ModalCliente";

function TabelaPacotesCl() {

    const [cliente, setCliente] = useState();
    const [viagens, setViagens] = useState();
    const [id, setId] = useState();
    const [titulo, setTitulo] = useState();

    useEffect(() => {
        if (cliente === undefined || viagens === undefined) {
            async function fetchData() {
                const user = isLoger();
                if (user.id !== null && user.roles.includes("ROLE_CLIENTE")) {
                    setCliente(await buscarClienteByUser(user.id));
                    if(cliente !== undefined){
                        setViagens(cliente.viagens);
                    }
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
        <>
            <ModalCliente id={id} titulo={titulo} />

            <table className="table mt-2">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Valor</th>
                        <th>Data de Ida</th>
                        <th>Data de Volta</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {viagens && (
                        <>
                            {viagens.map(viagem =>
                                <tr key={viagem.id}>
                                    <td>{cliente.nome}</td>
                                    <td>{viagem.origem}</td>
                                    <td>{viagem.destino}</td>
                                    <td> {viagem.valor}</td>
                                    <td>{viagem.data_ida}</td>
                                    <td>{viagem.data_volta}</td>
                                    <td>
                                        <button type="button" className="btn btn-sm colorPadrao btn-outline-warning" onClick={async (e)  => { callModal(viagem.id, "Cancelar Viagem") }} data-bs-toggle="modal" data-bs-target="#ModalCl" >
                                            <img src="/img/delete.png" alt="delete" />
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </>
                    )}
                </tbody>
            </table>
        </>
    );
}

export default TabelaPacotesCl