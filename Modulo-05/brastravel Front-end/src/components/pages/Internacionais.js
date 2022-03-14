/* eslint-disable jsx-a11y/anchor-is-valid */
import CardViagens from "../destinos-anuncios/CardViagens"
import React, { useEffect, useState } from 'react';
import ModalCompra from "../destinos-anuncios/ModalComprar";
import { isLoger } from "../../net/services/user-service";


function Internacionais() {
    const [title, setTitle] = useState('')
    const [valor, setValor] = useState('')
    const [show, setShow] = useState(false);
    const [stop, setStop] = useState(0);

    useEffect(() => {
        if (stop === 0) {
            async function fetchData() {
                const recebe = await isLoger();
                if (recebe !== undefined && recebe.roles.includes("ROLE_CLIENTE")) {
                    setShow(true);
                } else {
                    setShow(false);
                    setStop(1);
                }
            }
            fetchData();
        }
    }, [stop]);

    function SendDados(titulo, valor) {
        if (show) {
            setTitle(titulo);
            setValor(valor);
        } else {
            alert("Você precisa está logado como cliente.")
        }
    }
    return (
        <>
            {show && (
                <ModalCompra title={title} preco={valor} />
            )}
            <div className="row justify-content-center my-4">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Nova York, EUA" preco="7.600" InsImg="/img/new.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Nova York, EUA", "7.600")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Roma, Italia" preco="6.400" InsImg="/img/roma.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Roma, Italia", "6.400")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Londres, Inglaterra" preco="7.200" InsImg="/img/londres.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Londres, Inglaterra", "7.200")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Cusco, Peru" preco="1.400" InsImg="/img/peru.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Cusco, Peru", "3.900")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Tóquio, Japão" preco="8.000" InsImg="/img/toquio.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Tóquio, Japão", "8.000")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Paris, França" preco="5.500" InsImg="/img/PARIS.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Paris, França", "5.500")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Bora Bora, Polinésia Francesa" preco="5.200" InsImg="/img/bora-bora.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Bora Bora, Polinésia Francesa", "5.200")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Florença, Itália" preco="5.000" InsImg="/img/italia.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Florença, Itália", "5.000")}>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Internacionais