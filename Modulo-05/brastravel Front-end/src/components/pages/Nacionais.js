/* eslint-disable jsx-a11y/anchor-is-valid */
import CardViagens from "../destinos-anuncios/CardViagens"
import React, { useEffect, useState } from 'react';
import ModalCompra from "../destinos-anuncios/ModalComprar";
import { isLoger } from "../../net/services/user-service";


function Nacionais() {
    const [title, setTitle] = useState('');
    const [valor, setValor] = useState('');
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
        }else{
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
                        <CardViagens titulo="Arquipélago de Abrolhos Bahia" preco="1.800" InsImg="/img/bahia.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Arquipélago de Abrolhos Bahia", "1.800")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Rio de Janeiro" preco="1.500" InsImg="/img/Rio.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Rio de Janeiro", "1.500")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Porto de Galinhas Pernambuco" preco="2.000" InsImg="/img/pernambuco.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Porto de Galinhas Pernambuco", "2.000")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="São Paulo Cavernas do Petar" preco="1.400" InsImg="/img/SP.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("São Paulo Cavernas do Petar", "1.400")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Fernando de Noronha" preco="2.800" InsImg="/img/noranha.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Fernando de Noronha", "2.800")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Catedral de Brasília" preco="2.200" InsImg="/img/brasilia.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Catedral de Brasília", "2.200")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Floresta Amazônica" preco="2.600" InsImg="/img/amazonia.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Floresta Amazônica", "2.600")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card bg-warning">
                        <CardViagens titulo="Jardim Botânico Curitiba" preco="2.500" InsImg="/img/curitiba.jpg" />
                        <button className="colorBlue btn-outline-warning rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Jardim Botânico Curitiba", "2.500")}>Comprar</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Nacionais