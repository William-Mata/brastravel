import api from "../conector/conector";
import Token from "./user-service";


// Cliente 

export const buscarClientes = async() => {
    return (await api.get("/cliente/buscarClientes", {
        headers: Token()})).data;
}

export const buscarCliente = async(id) => {
    return (await api.get("/cliente/buscarCliente/"+id, {
        headers: Token()})).data;
}

export const buscarClienteByUser = async(id) => {
    return (await api.get("/cliente/buscarClienteByUser/"+id, {
        headers: Token()})).data;
}

export const cadastrarCliente = async(nome, data_nascimento, telefone ,cpf, id) => {
    console.log(id);
    var dados = {nome, data_nascimento, telefone, cpf};
    return (await api.post("/cliente/cadastrarCliente/"+id, dados,{
        headers: Token()})).data;
}

export const alterarCliente = async(id, nome, telefone, data_nascimento, cpf) => {
    var dados = {nome, telefone, data_nascimento, cpf};
    return (await api.put("/cliente/alterarCliente/"+id, dados , {
        headers: Token()})).data;
}

export const excluirCliente = async(id) => {
    await api.delete("/cliente/deleteCliente/"+id , {
        headers: Token()});
}

export const comprarViagem = async(id, origem, destino, valor, data_ida, data_volta) => {
    var viagem = {origem, destino, valor, data_ida, data_volta}
    return (await api.put("/cliente/comprarViagem/"+id, viagem, {
        headers: Token()})).data;
}