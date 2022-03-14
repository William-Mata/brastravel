import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alterarUser, isLoger } from "../../net/services/user-service";

function Email() {
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [validacao, setValidacao] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        if (user === undefined) {
            async function fetchData() {
                const recebe = await isLoger();
                setUser(recebe);
            }
            fetchData();
        }
    }, [user]);

    const alterarEmail = (e) => {
        e.preventDefault()
        setValidacao("");

        if (user !== null) {
            if (email === '') {
                document.getElementById("campos").innerHTML = "Preencha todos os campos."
            } else {
                document.getElementById("campos").innerHTML = ""
                alterarUser(user.id, email, '', []).then(() => {
                  alert("Email alterado com sucesso, é necessario relogar para atualizar que suas informações sejam atualizadas.")
                }, (error) => {
                    const msgErro = (error.response &&
                        error.response.data && error.response.data.message) || error.message || error.toString();
                    setValidacao(msgErro);
                });
            }
        } else {
            navigate("/");
            window.location.reload();
        }
    }

    return (
        <div className="row mx-5">

            <h3>Alterar E-mail</h3>
            <form>
                <span id="campos" className="mb-3"> </span>
                {validacao && (
                    <span>
                        {validacao}
                    </span>
                )}
                <div className="form-floating input-group mb-3">
                    {user && (
                        <input className="form-control bg-transparent btn-outline-warning text-white" readOnly={true} value={user.email} type="email" />
                    )}
                    <div className="input-group-append">
                        <span className="h-100 input-group-text text-success font-weight-bold">✓</span>
                    </div>
                    <label className="form-label">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control  bg-transparent btn-outline-warning text-white" onChange={(e) => {setEmail(e.target.value)}} type="email" />
                    <label className="form-label">Novo Email</label>
                </div>
                <button type="submit" className="btn w-100 text-white colorBlue btn-outline-warning" onClick={alterarEmail}>Alterar e-mail</button>
            </form>

        </div>
    )
}

export default Email