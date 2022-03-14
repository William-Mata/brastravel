import React, { useState } from 'react';
import CardCliente from '../cliente/CardCliente';
import DadosConta from '../conta/DadosConta';
import Email from '../conta/Email';
import Senha from '../conta/Senha';

function GerenciarConta() {

    const [btnEmail, setBtnEmail] = useState(true);
    const [btnSenha, setBtnSenha] = useState(false);
    const [btnDados, setBtnDados] = useState(false);
    const [btnGerenciar, setBtnGerenciar] = useState(false);
    function show(what) {

        if (what === "email") {
            setBtnEmail(true);
            setBtnDados(false);
            setBtnSenha(false);
            setBtnGerenciar(false);
        } else if (what === "senha") {
            setBtnEmail(false);
            setBtnDados(false);
            setBtnSenha(true);
            setBtnGerenciar(false);
        } else if (what === "dadosPessoais") {
            setBtnEmail(false);
            setBtnDados(true);
            setBtnSenha(false);
            setBtnGerenciar(false);
        } else if (what === "gererenciarConta") {
            setBtnEmail(false);
            setBtnDados(false);
            setBtnSenha(false);
            setBtnGerenciar(true);
        } else {

        }

    }

    return (
        <div className="row w-75 h-50 py-3 text-center my-5 rounded shadow-lg">
            <h1 className="mt-3 p-0">Gerencie sua conta</h1>
            <div className="col-md-3">
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item btn-outline-warning colorBlue rounded text-center"><button className="nav-link w-100   btn-lg text-white" onClick={(e) => show("email")}>E-mail</button></li>
                    <li className="nav-item btn-outline-warning colorBlue rounded  text-center mt-2"><button className="nav-link btn-lg w-100 text-white" onClick={(e) => show("senha")}>Senha</button></li>
                    <li className="nav-item btn-outline-warning colorBlue rounded  text-center mt-2"><button className="nav-link  btn-lg  w-100 text-white" onClick={(e) => show("dadosPessoais")} >Dados da Conta</button></li>
                    <li className="nav-item btn-outline-warning colorBlue rounded  text-center mt-2"><button className="nav-link  btn-lg  w-100 text-white" onClick={(e) => show("gererenciarConta")} >Gerenciar Conta</button></li>
                </ul>
            </div>

            <div className="col-md-8">
                {btnEmail && (
                    <Email />
                )}
                {btnSenha && (
                    <Senha />
                )}
                {btnDados && (
                    <CardCliente />
                )}
                {btnGerenciar && (
                    <DadosConta />
                )}
            </div>
        </div>



    )
}

export default GerenciarConta