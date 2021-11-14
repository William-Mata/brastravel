function exebirCategoria(categoria){
    let elementos = document.getElementsByClassName("boxProdutos");

    for (let i = 0; i < elementos.length; i++) {
        if(elementos[i].id == categoria){
            elementos[i].style = "display:block";
        }else{
            elementos[i].style = "display:none";
        }
        
    }
}

function exebirTodos(categoria){
    let elementos = document.getElementsByClassName("boxProdutos");

    for (let i = 0; i < elementos.length; i++) {
            elementos[i].style = "display:block";        
    }
}

window.onload = function alteraQtdCategoria(){

    let c = 0, n = 0, s = 0, p = 0;
    let elementos = document.getElementsByClassName("boxProdutos");

    for (let i = 0; i < elementos.length; i++) {
        if(elementos[i].id == "celular"){
            ++c;
            document.getElementById("qtd_celular").innerHTML = "Celular ("+ c +")";
        }
        else if(elementos[i].id == "notebook"){
            ++n;
            document.getElementById("qtd_notebook").innerHTML = "Notebook ("+ n +")";
        }
        else if(elementos[i].id == "som"){
            ++s;
            document.getElementById("qtd_som").innerHTML =  "Som ("+ s +")";

        }else if(elementos[i].id == "pc"){
            ++p;
            document.getElementById("qtd_pc").innerHTML = "PC ("+ p +")";

        }

        document.getElementById("qtd_todos").innerHTML = "Todos (" + elementos.length + " )";
    }
}

let focoProduto = (imagem) => {
    imagem.width = 200;
}

let desfocoProduto = (imagem) =>{
    imagem.width = 150;
   
}