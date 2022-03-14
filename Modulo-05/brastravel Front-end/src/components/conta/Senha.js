import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alterarUser, isLoger } from "../../net/services/user-service";

function Senha() {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
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

    const alterarPassword = (e) => {
        e.preventDefault()
        setValidacao("");

        if (user !== null) {
            if (password === '') {
                document.getElementById("campos").innerHTML = "Preencha todos os campos."
            } else if (password !== confirmPassword) {
                document.getElementById("campos").innerHTML = "As senha precisam ser iguais."
            } else {
                document.getElementById("campos").innerHTML = ""
                alterarUser(user.id, '', password, []).then(() => {
                    alert("Password alterado com sucesso, é necessario relogar para atualizar que suas informações sejam atualizadas.")
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
            <h3>Alterar Senha</h3>
            <form>
                <span id="campos" className="mb-3"> </span>
                {validacao && (
                    <span>
                        {validacao}
                    </span>
                )}
                <div className="form-floating mb-3">
                    <input className="form-control bg-transparent btn-outline-warning text-white" type="password" onChange={(e) => { setPassword(e.target.value) }} />
                    <label className="form-label">Nova senha</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control bg-transparent btn-outline-warning text-white" type="password" onChange={(e) => { setConfirmPassword(e.target.value) }} />
                    <label className="form-label">Confirmar </label>
                </div>
                <button type="submit" className="w-100 btn colorBlue btn-outline-warning text-white" onClick={alterarPassword}>Alterar senha</button>
            </form>
        </div>
    )
}

export default Senha