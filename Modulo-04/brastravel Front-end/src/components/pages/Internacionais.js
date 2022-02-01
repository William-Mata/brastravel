/* eslint-disable jsx-a11y/anchor-is-valid */
import CardViagens from "../destinos-anuncios/CardViagens"
import React, { useState } from 'react';
import ModalCompra from "../destinos-anuncios/ModalComprar";


function Internacionais() {
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
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Nova York, EUA", "7.600")}>
                        <CardViagens titulo="Nova York, EUA" preco="7.600" InsImg="/img/new.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Roma, Italia", "6.400")}>
                        <CardViagens titulo="Roma, Italia" preco="6.400" InsImg="/img/roma.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Londres, Inglaterra", "7.200")}>
                        <CardViagens titulo="Londres, Inglaterra" preco="7.200" InsImg="/img/londres.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Cusco, Peru", "3.900")}>
                        <CardViagens titulo="Cusco, Peru" preco="1.400" InsImg="/img/peru.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Tóquio, Japão", "8.000")}>
                        <CardViagens titulo="Tóquio, Japão" preco="8.000" InsImg="/img/toquio.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Paris, França", "5.500")}>
                        <CardViagens titulo="Paris, França" preco="5.500" InsImg="/img/PARIS.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Bora Bora, Polinésia Francesa", "5.200")}>
                        <CardViagens titulo="Bora Bora, Polinésia Francesa" preco="5.200" InsImg="/img/bora-bora.jpg" />
                    </a>
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                    <a className="text-decoration-none text-white fs-6" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Florença, Itália", "5.000")}>
                        <CardViagens titulo="Florença, Itália" preco="5.000" InsImg="/img/italia.jpg"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default  Internacionais