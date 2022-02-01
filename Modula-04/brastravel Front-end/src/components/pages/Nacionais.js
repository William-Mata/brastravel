/* eslint-disable jsx-a11y/anchor-is-valid */
import CardViagens from "../destinos-anuncios/CardViagens"
import React, { useState } from 'react';
import ModalCompra from "../destinos-anuncios/ModalComprar";


function Nacionais() {
    const [title, setTitle] = useState('')
    const [valor, setValor] = useState('')

    function SendDados(titulo, valor) {
        setTitle(titulo);
        setValor(valor);
    }

    return (
        <>
            <ModalCompra title={title} preco={valor} />
            <div className="row p-5 mt-3 shadow">

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 ">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Arquipélago de Abrolhos Bahia", "1.800")}>
                        <CardViagens titulo="Arquipélago de Abrolhos Bahia" preco="1.800" InsImg="/img/bahia.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Rio de Janeiro", "1.500")}>
                        <CardViagens titulo="Rio de Janeiro" preco="1.500" InsImg="/img/Rio.jpg" />
                    </a>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Porto de Galinhas Pernambuco", "2.000")}>
                        <CardViagens titulo="Porto de Galinhas Pernambuco" preco="2.000" InsImg="/img/pernambuco.jpg" />
                    </a>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("São Paulo Cavernas do Petar", "1.400")}>
                        <CardViagens titulo="São Paulo Cavernas do Petar" preco="1.400" InsImg="/img/SP.jpg" />
                    </a>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Fernando de Noronha", "2.800")}>
                        <CardViagens titulo="Fernando de Noronha" preco="2.800" InsImg="/img/noranha.jpg" />
                    </a>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Catedral de Brasília", "2.200")}>
                        <CardViagens titulo="Catedral de Brasília" preco="2.200" InsImg="/img/brasilia.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Floresta Amazônica", "2.600")}>
                        <CardViagens titulo="Floresta Amazônica" preco="2.600" InsImg="/img/amazonia.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Jardim Botânico Curitiba", "2.500")}>
                        <CardViagens titulo="Jardim Botânico Curitiba" preco="2.500" InsImg="/img/curitiba.jpg" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Nacionais