import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { excluirUser, isLoger, logout } from "../../net/services/user-service";

function DadosConta() {
    const [validacao, setValidacao] = useState();
    const navigate = useNavigate();


    const deletar = (e) => {
        e.preventDefault()
        setValidacao("");

        const userlogado = isLoger();
        console.log(userlogado.email);
        if (userlogado !== null && (userlogado.roles.includes("ROLE_CLIENTE") || userlogado.roles.includes("ROLE_ADMIN"))) {
            excluirUser(userlogado.id).then(() => {
                navigate("/");
                window.location.reload();
                logout();

            }, (error) => {
                const msgErro = (error.response &&
                    error.response.data && error.response.data.message) || error.message || error.toString();
                setValidacao(msgErro);
            });
        }
    }


    return (
        <div className="row mx-5">

            <h3>Dados da Conta</h3>
            <p>Sua conta contém dados pessoais que você nos forneceu. Esta página permite que você baixe ou exclua esses dados.</p>
            <p>
                <strong className="text-danger">A exclusão desses dados removerá permanentemente sua conta e isso não poderá ser recuperado.</strong>
            </p>
            <p>
                <span id="campos" className="mb-3"> </span>
                {validacao && (
                    <span>
                        {validacao}
                    </span>
                )}
                <button id="delete" className="btn text-white btn-danger" onClick={deletar}>Excluir Conta</button>
            </p>
        </div >

    )
}
export default DadosConta