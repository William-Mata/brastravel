import api from "../conector/conector";

// Login
export const logar =  (email, password) => {
    var dados = {email, password };
    return (api.post("/login", dados)).then((response) => {
        if (response.data.jwtToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
    });
}

// 
export default function Token() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.jwtToken) {
        return {Authorization:"Bearer " + user.jwtToken}
    } else {
        return {};
    }
}

// Registrar
export const registrar = async (email, password, tipoUser) => {
    var dados = { email, password, role: tipoUser };
    return (await api.post("/registrar", dados)).data;
}

// Logout
export const logout = () => {
    localStorage.removeItem("user");
}

// Buscar o Usuario Logado
export const isLoger = () => {
    return JSON.parse(localStorage.getItem("user"))
}

export const alterarUser = async(id, email, password, roles) => {
    var dados = {email, password, roles};
    return (await api.put("/user/alterarUser/"+id, dados , {
        headers: Token()})).data;
}

export const excluirUser = async(id) => {
    await api.delete("/user/deleteUser/"+id, {
        headers: Token()});
}