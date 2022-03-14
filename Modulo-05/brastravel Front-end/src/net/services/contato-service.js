//import authHeader from "./auth-header";
import api from "../conector/conector";
import Token from "./user-service";


// Contato
export const obterContatos = async () => {
    return (await api.get("/contato/buscarContatos", {
        headers: Token()})).data;
}

export const obterContato = async (id) => {
    return (await api.get("/contato/buscarContato/" + id, {
        headers: Token()})).data;
}

export const adicionarContato = async (contato) => {
    var dados = { nome: contato.nome, email: contato.email, mensagem: contato.mensagem };
    return (await api.post("/contato/addContato", dados, {
        headers: Token()})).data;
}
export const alterarContato = async (id, contato) => {
    var dados = { nome: contato.nome, email: contato.email, mensagem: contato.mensagem };
    return (await api.put("/contato/alterarContato/" + id, dados, {headers: Token()})).data;
}

export const excluirContato = async (id) => {
    await api.delete("/contato/deletarContato/" + id, {headers: Token()});
}
