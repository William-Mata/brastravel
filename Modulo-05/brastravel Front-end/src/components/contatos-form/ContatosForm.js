import React, { useState } from 'react';
import { adicionarContato } from "../../net/services/contato-service"

function ContatosForm() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        const contato = { nome, email, mensagem }

        if (nome !== '' && email !== '' && mensagem !== '') {
            adicionarContato(contato);
            alert("Entraremos em contato em breve.")
        } else {
            document.getElementById("retorno").innerHTML = "Preencha todos os campos";
        }

    }


    return (
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 shadow rounded py-3 m-2">
            <form>
                <div className="form-group d-inline-flex mb-3">
                    <span className="text-center" id="retorno">

                    </span>
                </div>
                <div className="form-group d-inline-flex mb-3">
                    <span className="input-group-text text-white bg-transparent btn-outline-warning">Nome</span>
                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning" placeholder="Fulano beutrano" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="form-group d-inline-flex mb-3">
                    <span className="input-group-text text-white bg-transparent btn-outline-warning">E-mail</span>
                    <input type="email" className="form-control text-white bg-transparent btn-outline-warning" placeholder="email@brastravel.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-3 ">
                    <span className="input-group-text text-white bg-transparent btn-outline-warning">Mensagem</span>
                    <textarea className="form-control text-white bg-transparent btn-outline-warning mt-1" rows="5" placeholder="Digite o motivo do contato..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} ></textarea>
                </div>
                <div className="form-group d-flex justify-content-center">
                    <button type="submit" onClick={handleClick} className="btn w-50 btn-outline-warning text-white">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ContatosForm