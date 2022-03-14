import api from "../conector/conector";
import Token from "./user-service";

export const obterViagens = async() => {
    return (await api.get("/viagem/buscarViagens", {
        headers: Token()})).data;
}

export const obterViagem = async(id) => {
    return (await api.get("/viagem/buscarViagem/"+id, {
        headers: Token()})).data;
}

export const alterarViagem = async(id, origem, destino, valor, data_ida, data_volta) => {
    var viagem = {origem, destino, valor, data_ida, data_volta};
    return (await api.put("/viagem/alterarViagem/"+id, viagem, {
        headers: Token()})).data;
}

export const excluirViagem = async(id) => {
    await api.delete("/viagem/excluirViagem/"+id , {
        headers: Token()});
}
