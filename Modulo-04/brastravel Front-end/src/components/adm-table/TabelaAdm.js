import React, { useEffect, useState } from 'react';


function TabelaAdm() {

    const [contatos, setContatos] = useState([]);
    const [title, setTitle] = useState('');
    const [idContato, setIdContato] = useState(Number);


    useEffect(() => {
        fetch("http://localhost:8080/contato/getAll", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then((result) => {
                setContatos(result);
            }
            )
    }, [])

    function callModal(id, title) {
        setIdContato(id);
        setTitle(title);
    }

    return (
        <div className="container colorBlue my-3 p-5 rounded">
            <h4 className="text-center mb-3">Administracao do site - BrasTravel</h4>
            <table className="table text-white text-center">
                <thead className="text-break">
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Mensagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody className="text-break">
                    {contatos.map(contato => (
                        <tr key={contato.id}>
                            <td>{contato.nome}</td>
                            <td> {contato.email} </td>
                            <td>{contato.mensagem}  </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-outline-warning m-1" data-bs-toggle="modal" data-bs-target="#ModalC" onClick={(e) => callModal(contato.id, "Alterar")}>
                                    <img src="img/edit.png" alt="editar" />
                                </button>

                                <button type="button" className="btn btn-sm btn-outline-warning m-1" data-bs-toggle="modal" data-bs-target="#ModalC" onClick={(e) => callModal(contato.id, "Detalhe")}>
                                    <img src="img/ver-detalhes.png" alt="detalhes" />
                                </button>

                                <button type="button" className="btn btn-sm btn-outline-warning m-1" data-bs-toggle="modal" data-bs-target="#ModalC" onClick={(e) => callModal(contato.id, "Apagar")}>
                                    <img src="img/delete.png" alt="delete" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaAdm