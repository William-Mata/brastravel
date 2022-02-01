import React, {useState } from 'react';

function ContatosForm() {
    
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')


    const handleClick = (e) => {
        e.preventDefault()
        alert("Entraremos em contato em breve.")
        const contato = { nome, email, mensagem}
        console.log(contato)
        fetch("http://localhost:8080/contato/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contato)

        }).then(() => {
            console.log("Contato enviado!")
        })
    }


    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 shadow rounded p-3">
            <form noValidate autoComplete="off">
                <div className="form-group d-inline-flex mb-3">
                    <span className="input-group-text text-white bg-transparent btn-outline-warning">Nome</span>
                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning"  placeholder="Fulano beutrano" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                    <span className="text-warning"></span>
                </div>
                <div className="form-group d-inline-flex mb-3">
                    <span className="input-group-text text-white bg-transparent btn-outline-warning">E-mail</span>
                    <input type="text" className="form-control text-white bg-transparent btn-outline-warning"  placeholder="email@brastravel.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <span className="text-danger"></span>
                </div>
                <div className="form-group">
                    <span className="input-group-text text-white bg-transparent btn-outline-warning">Mensagem</span>
                    <textarea className="form-control text-white bg-transparent btn-outline-warning mt-1" rows="5" placeholder="Digite o motivo do contato..." value={mensagem} onChange={(e)=>setMensagem(e.target.value)}></textarea>
                    <span className="text-warning"></span>
                </div>
                <div className="form-group d-flex justify-content-center mt-2">
                    <button type="submit" onClick={handleClick} className="btn w-50 btn-success btn-outline-warning">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ContatosForm