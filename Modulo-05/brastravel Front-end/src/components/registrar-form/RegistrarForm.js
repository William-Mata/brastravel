/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { registrar, logar } from "../../net/services/user-service";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator";


function RegistrarForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('')
    const [validacao, setValidacao] = useState([]);
    const navigate = useNavigate();



    const validarCadastro = (e) => {
        e.preventDefault()
        setValidacao("");

        if (password === '' || confirmPassword === '' || email === '' || role === "") {
            document.getElementById("campos").innerHTML = "Preencha todos os campos, corretamente."
            document.getElementById("confirm").innerHTML = ""
            document.getElementById("email").innerHTML = ""

        } else if (password !== confirmPassword) {
            document.getElementById("confirm").innerHTML = "Você precisa digitar a mesma senha."
            document.getElementById("campos").innerHTML = ""
            document.getElementById("email").innerHTML = ""

        }  else if (!isEmail(email)) {
            console.log(isEmail(email))
            document.getElementById("email").innerHTML = "O email digitado é inválido"
            document.getElementById("confirm").innerHTML = ""
            document.getElementById("campos").innerHTML = ""

        } else {
            registrar(email, password, role).then(() => {
                logar(email, password).then(() => {
                if (role === "ROLE_CLIENTE") {
                    navigate("/CadastroDadosCliente");
                    window.location.reload();
                } else {
                    navigate("/");
                    window.location.reload();
                }
            }); 
            }, (error) => {
                const msgErro = (error.response &&
                    error.response.data && error.response.data.message) || error.message || error.toString();
                setValidacao(msgErro);
            });
        }

    }



    return (
        <div className="col-8 col-sm-6 col-md-4 col-lg-4 shadow-lg rounded py-3 m-2 text-center">
            <h2>Registrar</h2>
            <form>
                <span id="campos" className="mb-3">
                {validacao && (
                        validacao.map(element => {
                            return element;
                        })
                    )}
                </span>
                <div className="form-group mb-3">
                    <div className='row'>
                        <div className='col-4 pe-0'>
                            <label className="input-group-text text-white bg-transparent btn-outline-warning">E-mail:</label>
                        </div>
                        <div className='col-8'>
                            <input type="email" className="form-control text-white bg-transparent btn-outline-warning" placeholder="email@brastravel.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <span id="email" className="mt-3"></span>
                </div>
                <div className="form-group mb-3">
                    <div className='row'>
                        <div className='col-4 pe-0'>
                            <label className="input-group-text text-white bg-transparent btn-outline-warning">Senha:</label>
                        </div>
                        <div className='col-8'>
                            <input type="password" className="form-control text-white bg-transparent btn-outline-warning" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-3">
                    <div className='row'>
                        <div className='col-6 pe-0'>
                            <label className="input-group-text text-white bg-transparent btn-outline-warning">Confirma Senha:</label>
                        </div>
                        <div className='col-6'>
                            <input type="password" className="form-control text-white bg-transparent btn-outline-warning" placeholder="**********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>
                    <span id="confirm" className="mt-3"></span>
                </div>
                <div className="form-group mb-3">
                    <div className='row'>
                        <div className='col-6 pe-0'>
                            <label className="input-group-text text-white bg-transparent btn-outline-warning">Tipo de usuario: </label>
                        </div>
                        <div className='col-4'>
                            <select className="text-center text-white bg-transparent btn-outline-warning pt-2 pb-2 rounded" onChange={(e) => setRole(e.target.value)}>
                                <option value="" >Escolha o tipo</option>
                                <option value="ROLE_CLIENTE">Cliente</option>
                                <option value="ROLE_ADMIN">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-center mb-3">
                    <a onClick={validarCadastro} className="btn w-50 btn-success btn-outline-warning text-white">Registrar</a>
                </div>
            </form>
        </div>
    )
}

export default RegistrarForm;