import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { logar, isLoger } from "../../net/services/user-service"
import { useNavigate } from "react-router-dom";
import { buscarClienteByUser } from '../../net/services/cliente-service';


function LoginForm() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const navigate = useNavigate();


    const required = (value) => {
        if (!value) {
            return (
                <span >
                    Este campo é requirido.
                </span>
            );
        }
    };


    const handleClick = async (e) => {
        e.preventDefault()
        setMessage("");

        if (email !== null && password !== "") {
            logar(email, password).then(
                async () => {
                    const user = isLoger();
                    console.log(user);
                    if (user.roles.includes("ROLE_CLIENTE")) {
                        const cli = await buscarClienteByUser(user.id);
                        console.log(cli);
                        if (cli === "") {
                            navigate("/CadastroDadosCliente");
                            window.location.reload();
                        } else {
                            navigate("/");
                            window.location.reload();
                        }
                    } else {
                        navigate("/");
                        window.location.reload();
                    }
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                }
            );
        }
    }


    return (
        <div className="col-8 col-sm-6 col-md-5 col-lg-3 shadow rounded py-3 m-2 text-center">
            <h2>Login</h2>
            <form >
                {message && (
                    <div className="form-group">
                        <span role="alert">
                            {message === "No value present" ? (
                                "Usuario inválido"
                            ) : (
                                { message }
                            )}
                        </span>
                    </div>
                )}
                <div className="form-group d-inline-flex mb-3">
                    <div className='row'>
                        <div className='col-4 pe-0'>
                            <label className="input-group-text text-white bg-transparent btn-outline-warning">E-mail</label>
                        </div>
                        <div className='col-8'>
                            <input type="email" className="form-control text-white bg-transparent btn-outline-warning" placeholder="email@brastravel.com" value={email} onChange={(e) => setEmail(e.target.value)} validations={[required]} />
                        </div>
                    </div>
                </div>
                <div className="form-group d-inline-flex mb-3">
                    <div className='row'>
                        <div className='col-4 pe-0'>
                            <label className="input-group-text text-white bg-transparent btn-outline-warning">Senha</label>
                        </div>
                        <div className='col-8'>
                            <input type="password" className="form-control text-white bg-transparent btn-outline-warning" placeholder="Fulano beutrano" value={password} onChange={(e) => setPassword(e.target.value)} validations={[required]} />
                        </div>
                    </div>
                </div>
                <div className="form-group d-flex justify-content-center mb-3">
                    <button type="submit" onClick={handleClick} className="btn w-50 btn-success btn-outline-warning text-white">Logar</button>
                </div>
                <Link className="text-white my-3" to='/Registrar'>Criar uma conta</Link>

            </form>
        </div>
    )
}

export default LoginForm;