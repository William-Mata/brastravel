import React, { useEffect, useState } from 'react';
import ModalViagem from './ModalViagem';

function TabelaViagem() {

    const [clientes, setClientes] = useState([]);
    const [title, setTitle] = useState('');
    const [idContato, setIdContato] = useState(Number);


    useEffect(() => {
        fetch("http://localhost:8080/cliente/getAll")
            .then(res => res.json())
            .then((result) => {
                setClientes(result);
            }
            )
    }, [])

    function callModal(id, title) {
        setIdContato(id);
        setTitle(title);
    }

    return (
        <>
            <ModalViagem idCliente={idContato} title={title} />
            <div className="container colorBlue my-3 p-5 rounded">
                <h4 className="text-center mb-3">Viagens - BrasTravel</h4>
                <table className="table text-white text-center text-break">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>CPF</th>
                            <th>Origem</th>
                            <th>Destino</th>
                            <th>Valor</th>
                            <th>Data Ida</th>
                            <th>DataVolta</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.nome}</td>
                                <td>{cliente.idade}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.viagem.origem}</td>
                                <td>{cliente.viagem.destino}</td>
                                <td> R$: {cliente.viagem.valor} </td>
                                <td>{cliente.viagem.data_ida} </td>
                                <td>{cliente.viagem.data_volta} </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-outline-warning m-1" data-bs-toggle="modal" data-bs-target="#ModalV" onClick={(e) => callModal(cliente.id, "Alterar")}>
                                        <img src="img/edit.png" alt="editar" />
                                    </button>

                                    <button type="button" className="btn btn-sm btn-outline-warning m-1" data-bs-toggle="modal" data-bs-target="#ModalV" onClick={(e) => callModal(cliente.id, "Detalhe")}>
                                        <img src="img/ver-detalhes.png" alt="detalhes" />
                                    </button>

                                    <button type="button" className="btn btn-sm btn-outline-warning m-1" data-bs-toggle="modal" data-bs-target="#ModalV" onClick={(e) => callModal(cliente.id, "Apagar")}>
                                        <img src="img/delete.png" alt="delete" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody >
                </table >
            </div>
        </>
    )
}


export default TabelaViagem