import React, { useState, useEffect } from 'react';
import { Check, Desconto } from "./CompraFuncao"


function FormComprar({ title, preco }) {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [cpf, setCpf] = useState('')
    const [origem, setOrigem] = useState('')
    const [destino, setDestino] = useState()
    const [valor, setValor] = useState('')
    const [data_ida, setDataIda] = useState('')
    const [data_volta, setDataVolta] = useState('')

    useEffect(() => {
        if ((title !== "") && (preco !== "")) {
            setDestino(title);
            setValor(preco);
        }
    }, [destino, preco, title, valor])


    const handleClick = (e) => {
        e.preventDefault();
        const newCliente = { nome, idade, cpf, viagem: {origem, destino, valor, data_ida, data_volta}}

        console.log(newCliente);
        if (newCliente !== null && newCliente !== "") {
            fetch("http://localhost:8080/cliente/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCliente)
            }).then(() => {
                console.log("Aproveite a Viagem!")
            })
        }

    }

    return (
        <form>
            <div className="row p-4">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                            <label className="control-label text-white mt-1">Nome: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setNome(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                            <label className="control-label text-white mt-1">Idade: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="number" className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setIdade(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                            <label className="control-label text-white mt-1">CPF: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-warning" onChange={(e) => setCpf(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                            <label className="control-label text-white mt-1">Valor: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-warning" id="Valor" defaultValue={valor} onChange={(e) => setValor(e.target.value)} />
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

                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1 border-warning rounded ">
                            <label className="control-label text-white mt-1">Destino: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-warning" defaultValue={destino} onChange={(e) => setDestino(e.target.value)} readOnly={true} />
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
                </div>
            </div>
            <div className="modal-footer m-0 py-2">
                <div className="form-group">
                    <button type="button" className="btn btn-outline-warning text-white me-2"
                        data-bs-dismiss="modal">
                        Sair
                    </button>
                    <button type="button" className="btn btn-outline-warning text-white me-2" onClick={Desconto}> Aplicar Desconto </button>
                    <input type="submit" value="Comprar" onClick={handleClick} className="btn btn-outline-warning text-white" data-bs-dismiss="modal" />
                </div>
            </div>
        </form >
    )
}


export default FormComprar


