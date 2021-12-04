function InformacoesCarro(imgCarro, infoCarro) {


    document.getElementById("img01").src = "/img/" + imgCarro + "(1).png";
    document.getElementById("img02").src = "/img/" + imgCarro + "(2).png";

    document.querySelector('#infoModal').innerHTML = document.getElementById(infoCarro).innerHTML;
}

function exebirCategoria(categoria) {
    let elementos = document.getElementsByClassName("boxProdutos");

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].id == categoria) {
            elementos[i].style = "display:block";
        } else {
            elementos[i].style = "display:none";
        }

    }

}

function exebirTodos(categoria) {
    let elementos = document.getElementsByClassName("boxProdutos");

    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style = "display:block";
    }
}

function redCars() {
    let redCar = document.getElementsByName("carroVermelho");

    console.log(redCar.length);

    if (document.getElementById("vermelho").checked) {
        todosCarros("0");

        for (let i = 0; i < redCar.length; i++) {
            redCar[i].style = "display:inline-flex";
        }
        
    } else {
        todosCarros("1");
    }
}

function todosCarros(valor) {
    var carros = document.getElementsByClassName("carros");
    if(valor == "1" || valor == null){
        for (var i = 0; i < carros.length; i += 1) {
            carros[i].style = "display:inline=flex";
        }
    }else if(valor == "0"){
        for (var i = 0; i < carros.length; i += 1) {
            carros[i].style = "display:none";
        }
    }
}
