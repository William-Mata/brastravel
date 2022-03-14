import React, { useEffect, useState } from 'react';
import { obterContatos } from "../../net/services/contato-service";
import ModalAdm from './ModalAdm';


function TabelaContatoAdm() {

    const [contatos, setContatos] = useState([]);
    const [title, setTitle] = useState('');
    const [idContato, setIdContato] = useState(Number);
    const [stop, setStop] = useState(0);



    useEffect(() => {
        if (stop === 0) {
            async function fetchData() {
                const recebe = await obterContatos();
                setContatos(recebe);
                setStop(1);
            }
            fetchData();
        }
    })

    function callModal(id, title) {
        setIdContato(id);
        setTitle(title);
    }

    return (
        <>
            <ModalAdm id={idContato} title={title} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Mensagem</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {contatos.map(contato  => (
                            <tr key={contato.id}>
                                <td>{contato.nome}</td>
                                <td> {contato.email} </td>
                                <td>{contato.mensagem}  </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-outline-warning m-1" data-bs-toggle="modal" data-bs-target="#ModalA" onClick={(e) => callModal(contato.id, "Alterar Contato")}>
                                        <img src="img/edit.png" alt="editar" />
                                    </button>

                                    <button type="button" className="btn btn-sm btn-outline-warning m-1" data-bs-toggle="modal" data-bs-target="#ModalA" onClick={(e) => callModal(contato.id, "Apagar Contato")}>
                                        <img src="img/delete.png" alt="delete" />
                                    </button>
                                </td>
                            </tr>
                    ))}
                    </tbody>
                </table>
        </>
    )
}

export default TabelaContatoAdm